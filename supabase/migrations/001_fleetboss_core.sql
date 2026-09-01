-- FleetBoss MVP: core multi-tenant fleet schema
create extension if not exists pgcrypto;

create table if not exists companies (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  created_at timestamptz not null default now()
);

create table if not exists profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  company_id uuid not null references companies(id) on delete cascade,
  full_name text not null,
  role text not null check (role in ('admin','driver')),
  created_at timestamptz not null default now()
);

create table if not exists vehicles (
  id uuid primary key default gen_random_uuid(),
  company_id uuid not null references companies(id) on delete cascade,
  unit_number text not null,
  year integer,
  make text,
  model text,
  vin text,
  plate text,
  mileage integer not null default 0,
  status text not null default 'Active' check (status in ('Active','Maintenance','Out of service')),
  next_service_miles integer,
  next_service_date date,
  created_at timestamptz not null default now(),
  unique(company_id, unit_number)
);

create table if not exists driver_vehicle_assignments (
  driver_id uuid not null references profiles(id) on delete cascade,
  vehicle_id uuid not null references vehicles(id) on delete cascade,
  primary key(driver_id, vehicle_id)
);

create table if not exists inspections (
  id uuid primary key default gen_random_uuid(),
  company_id uuid not null references companies(id) on delete cascade,
  vehicle_id uuid not null references vehicles(id) on delete restrict,
  driver_id uuid not null references profiles(id) on delete restrict,
  inspected_at timestamptz not null default now(),
  odometer integer not null,
  status text not null check (status in ('Passed','Flagged')),
  notes text,
  created_at timestamptz not null default now()
);

create table if not exists inspection_items (
  id uuid primary key default gen_random_uuid(),
  inspection_id uuid not null references inspections(id) on delete cascade,
  item_name text not null,
  result text not null check (result in ('Pass','Issue')),
  issue_note text
);

create table if not exists inspection_photos (
  id uuid primary key default gen_random_uuid(),
  inspection_id uuid not null references inspections(id) on delete cascade,
  photo_type text not null check (photo_type in ('Front','Rear','Driver side','Passenger side','Cab / dashboard','Cargo area')),
  storage_path text not null,
  created_at timestamptz not null default now(),
  unique(inspection_id, photo_type)
);

create table if not exists maintenance_records (
  id uuid primary key default gen_random_uuid(),
  company_id uuid not null references companies(id) on delete cascade,
  vehicle_id uuid not null references vehicles(id) on delete cascade,
  service_type text not null,
  service_date date not null,
  mileage integer,
  cost numeric(12,2),
  notes text,
  created_at timestamptz not null default now()
);

create table if not exists vehicle_documents (
  id uuid primary key default gen_random_uuid(),
  company_id uuid not null references companies(id) on delete cascade,
  vehicle_id uuid not null references vehicles(id) on delete cascade,
  document_type text not null,
  storage_path text not null,
  expires_on date,
  created_at timestamptz not null default now()
);

create index if not exists inspections_company_date_idx on inspections(company_id, inspected_at desc);
create index if not exists maintenance_vehicle_idx on maintenance_records(vehicle_id, service_date desc);

-- RLS: users can only access records belonging to their company.
alter table profiles enable row level security;
alter table vehicles enable row level security;
alter table driver_vehicle_assignments enable row level security;
alter table inspections enable row level security;
alter table inspection_items enable row level security;
alter table inspection_photos enable row level security;
alter table maintenance_records enable row level security;
alter table vehicle_documents enable row level security;

create or replace function public.current_company_id()
returns uuid language sql stable security definer set search_path = public
as $$ select company_id from public.profiles where id = auth.uid() $$;

create policy "company profiles" on profiles for select using (id = auth.uid() or company_id = current_company_id());
create policy "company vehicles" on vehicles for all using (company_id = current_company_id()) with check (company_id = current_company_id());
create policy "company assignments" on driver_vehicle_assignments for all using (exists (select 1 from profiles p join vehicles v on v.company_id=p.company_id where p.id=driver_vehicle_assignments.driver_id and v.id=driver_vehicle_assignments.vehicle_id and p.company_id=current_company_id()));
create policy "company inspections" on inspections for all using (company_id = current_company_id()) with check (company_id = current_company_id());
create policy "inspection items access" on inspection_items for all using (exists (select 1 from inspections i where i.id=inspection_items.inspection_id and i.company_id=current_company_id())) with check (exists (select 1 from inspections i where i.id=inspection_items.inspection_id and i.company_id=current_company_id()));
create policy "inspection photos access" on inspection_photos for all using (exists (select 1 from inspections i where i.id=inspection_photos.inspection_id and i.company_id=current_company_id())) with check (exists (select 1 from inspections i where i.id=inspection_photos.inspection_id and i.company_id=current_company_id()));
create policy "company maintenance" on maintenance_records for all using (company_id = current_company_id()) with check (company_id = current_company_id());
create policy "company documents" on vehicle_documents for all using (company_id = current_company_id()) with check (company_id = current_company_id());
