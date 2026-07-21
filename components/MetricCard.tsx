import type { PortalMetric } from '@/lib/types';

export function MetricCard({ metric }: Readonly<{ metric: PortalMetric }>) {
  return (
    <article className="metric-card">
      <span>{metric.label}</span>
      <strong>{metric.value}</strong>
      <small>{metric.trend}</small>
    </article>
  );
}
