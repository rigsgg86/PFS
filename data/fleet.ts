import type { FleetAsset, PortalMetric, ServiceTicket } from '@/lib/types';

export const portalMetrics: PortalMetric[] = [
  { label: 'Active vehicles', value: '128', trend: '+6 this week' },
  { label: 'On-time dispatch', value: '97.4%', trend: '+1.8% MoM' },
  { label: 'Open maintenance', value: '14', trend: '5 critical' },
  { label: 'Utilization', value: '82%', trend: '+4% vs target' },
];

export const fleetAssets: FleetAsset[] = [
  { id: 'PFP-1042', name: 'Atlas', route: 'North Harbor', status: 'In Transit', driver: 'Avery Stone', eta: '14:20 UTC' },
  { id: 'PFP-1187', name: 'Beacon', route: 'West Loop', status: 'Loading', driver: 'Mina Patel', eta: '15:05 UTC' },
  { id: 'PFP-1260', name: 'Cobalt', route: 'Airport Express', status: 'Maintenance', driver: 'Unassigned', eta: 'Awaiting clearance' },
];

export const serviceTickets: ServiceTicket[] = [
  { id: 'MX-9211', asset: 'Cobalt', priority: 'High', summary: 'Brake sensor calibration required' },
  { id: 'MX-9224', asset: 'Atlas', priority: 'Medium', summary: 'Preventive inspection due in 120 miles' },
  { id: 'MX-9230', asset: 'Beacon', priority: 'Low', summary: 'Cabin tablet mount replacement' },
];
