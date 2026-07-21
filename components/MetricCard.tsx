import type { DashboardMetric } from '@/lib/types';

export function MetricCard({ metric }: Readonly<{ metric: DashboardMetric }>) {
  return <article className="rounded-3xl border border-fleet-gold/20 bg-white/5 p-5 shadow-gold backdrop-blur"><p className="text-sm uppercase tracking-[0.3em] text-fleet-amber/80">{metric.label}</p><strong className="mt-3 block text-3xl text-white">{metric.value}</strong><span className="mt-2 block text-sm text-fleet-cream/70">{metric.trend}</span></article>;
}
