create table if not exists fleet_assets (
  id text primary key,
  name text not null,
  route text not null,
  status text not null,
  driver text not null,
  eta text not null,
  updated_at timestamptz not null default now()
);

create table if not exists service_tickets (
  id text primary key,
  asset_id text references fleet_assets(id),
  priority text not null,
  summary text not null,
  created_at timestamptz not null default now()
);
