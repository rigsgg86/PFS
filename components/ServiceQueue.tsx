import type { ServiceTicket } from '@/lib/types';

export function ServiceQueue({ tickets }: Readonly<{ tickets: ServiceTicket[] }>) {
  return (
    <aside className="panel service-panel">
      <div className="panel-heading">
        <h2>Maintenance Queue</h2>
        <p>Priority work for fleet readiness.</p>
      </div>
      <ul>
        {tickets.map((ticket) => (
          <li key={ticket.id}>
            <strong>{ticket.priority}</strong>
            <span>{ticket.summary}</span>
            <small>{ticket.asset} · {ticket.id}</small>
          </li>
        ))}
      </ul>
    </aside>
  );
}
