import type { ReactNode } from 'react';

const navItems = ['Dashboard', 'Vehicles', 'Maintenance', 'Mileage', 'Fuel', 'Documents'];

export function PortalShell({ children }: Readonly<{ children: ReactNode }>) {
  return <div className="min-h-screen text-fleet-cream"><header className="mx-auto flex w-full max-w-7xl flex-col gap-5 px-4 py-6 md:flex-row md:items-center md:justify-between"><div><p className="text-xs font-bold uppercase tracking-[0.5em] text-fleet-gold">Prime Fleet</p><h1 className="text-2xl font-black text-white">Portal Command</h1></div><nav className="flex flex-wrap gap-2">{navItems.map((item) => <a className="rounded-full border border-fleet-gold/20 px-4 py-2 text-sm text-fleet-cream/80 transition hover:border-fleet-gold hover:text-fleet-gold" href={`#${item.toLowerCase()}`} key={item}>{item}</a>)}</nav></header><div className="mx-auto w-full max-w-7xl px-4 pb-12">{children}</div></div>;
}
