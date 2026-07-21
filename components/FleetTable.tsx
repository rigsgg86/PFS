import type { FleetAsset } from '@/lib/types';

export function FleetTable({ assets }: Readonly<{ assets: FleetAsset[] }>) {
  return (
    <section className="panel">
      <div className="panel-heading">
        <h2>Fleet Operations</h2>
        <p>Live vehicle assignments and route health.</p>
      </div>
      <div className="table" role="table" aria-label="Fleet assets">
        <div className="table-row table-head" role="row">
          <span>Vehicle</span>
          <span>Route</span>
          <span>Status</span>
          <span>Driver</span>
          <span>ETA</span>
        </div>
        {assets.map((asset) => (
          <div className="table-row" role="row" key={asset.id}>
            <span>{asset.name}<small>{asset.id}</small></span>
            <span>{asset.route}</span>
            <span><mark>{asset.status}</mark></span>
            <span>{asset.driver}</span>
            <span>{asset.eta}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
