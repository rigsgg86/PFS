export type FleetAssetStatus = 'In Transit' | 'Loading' | 'Maintenance';

export interface PortalMetric {
  label: string;
  value: string;
  trend: string;
}

export interface FleetAsset {
  id: string;
  name: string;
  route: string;
  status: FleetAssetStatus;
  driver: string;
  eta: string;
}

export interface ServiceTicket {
  id: string;
  asset: string;
  priority: 'High' | 'Medium' | 'Low';
  summary: string;
}
