import { FleetTable } from '@/components/FleetTable';
import { MetricCard } from '@/components/MetricCard';
import { ServiceQueue } from '@/components/ServiceQueue';
import { fleetAssets, portalMetrics, serviceTickets } from '@/data/fleet';
import { formatPortalDate } from '@/lib/format';
import { isSupabaseConfigured } from '@/lib/supabase';

export default function PortalHome() {
  return (
    <main>
      <section className="hero">
        <div>
          <p className="eyebrow">Prime Fleet Portal</p>
          <h1>Command center for dispatch, maintenance, and fleet performance.</h1>
          <p>Updated {formatPortalDate()} · Supabase {isSupabaseConfigured() ? 'connected' : 'pending configuration'}</p>
        </div>
        <a href="#fleet">Review fleet</a>
      </section>

      <section className="metrics" aria-label="Portal metrics">
        {portalMetrics.map((metric) => (
          <MetricCard key={metric.label} metric={metric} />
        ))}
      </section>

      <div className="portal-grid" id="fleet">
        <FleetTable assets={fleetAssets} />
        <ServiceQueue tickets={serviceTickets} />
      </div>
    </main>
  );
}
