import type { DashboardMetric, FleetDocument, FuelLog, MaintenanceTicket, MileageLog, Vehicle } from '@/lib/types';

export const dashboardMetrics: DashboardMetric[] = [
  { label: 'Fleet utilization', value: '87%', trend: '+8% vs last month' },
  { label: 'Revenue miles', value: '42,860', trend: '+3,240 this week' },
  { label: 'Fuel efficiency', value: '7.8 mpg', trend: '+0.4 mpg' },
  { label: 'Compliance score', value: '98%', trend: 'All documents monitored' },
];

export const vehicles: Vehicle[] = [
  { id: 'veh-1042', unit: 'PFP-1042', make: 'Freightliner', model: 'Cascadia', year: 2023, vin: '1FUJHHDR1PLAB1042', status: 'Dispatched', driver: 'Avery Stone', location: 'Dallas, TX', mileage: 84210 },
  { id: 'veh-1187', unit: 'PFP-1187', make: 'Peterbilt', model: '579', year: 2022, vin: '1XPBDP9X8ND1187', status: 'Available', driver: 'Mina Patel', location: 'Atlanta, GA', mileage: 103552 },
  { id: 'veh-1260', unit: 'PFP-1260', make: 'Kenworth', model: 'T680', year: 2021, vin: '1XKYDP9X7MJ1260', status: 'Maintenance', driver: 'Unassigned', location: 'Phoenix, AZ', mileage: 126884 },
  { id: 'veh-1318', unit: 'PFP-1318', make: 'Volvo', model: 'VNL 860', year: 2024, vin: '4V4NC9EH7RN1318', status: 'Dispatched', driver: 'Jordan Lee', location: 'Nashville, TN', mileage: 22140 },
];

export const maintenanceTickets: MaintenanceTicket[] = [
  { id: 'MX-9211', vehicleId: 'veh-1260', priority: 'Critical', service: 'Brake sensor calibration', dueDate: '2026-07-24', status: 'Scheduled' },
  { id: 'MX-9224', vehicleId: 'veh-1042', priority: 'Medium', service: 'Preventive inspection', dueDate: '2026-07-29', status: 'Due soon' },
  { id: 'MX-9230', vehicleId: 'veh-1187', priority: 'Low', service: 'Cabin tablet mount', dueDate: '2026-08-04', status: 'Parts ordered' },
];

export const mileageLogs: MileageLog[] = [
  { id: 'MIL-701', vehicleId: 'veh-1042', date: '2026-07-20', miles: 612, route: 'Dallas → Kansas City' },
  { id: 'MIL-702', vehicleId: 'veh-1318', date: '2026-07-20', miles: 484, route: 'Nashville → Charlotte' },
  { id: 'MIL-703', vehicleId: 'veh-1187', date: '2026-07-19', miles: 356, route: 'Atlanta regional' },
];

export const fuelLogs: FuelLog[] = [
  { id: 'FUEL-511', vehicleId: 'veh-1042', date: '2026-07-20', gallons: 78.4, cost: 291.65, station: 'Prime Fuel Dallas' },
  { id: 'FUEL-512', vehicleId: 'veh-1318', date: '2026-07-20', gallons: 63.8, cost: 241.16, station: 'Pilot Nashville' },
  { id: 'FUEL-513', vehicleId: 'veh-1187', date: '2026-07-19', gallons: 45.1, cost: 169.58, station: 'TA Atlanta' },
];

export const documents: FleetDocument[] = [
  { id: 'DOC-301', vehicleId: 'veh-1042', name: 'Registration', expires: '2027-02-14', status: 'Current' },
  { id: 'DOC-302', vehicleId: 'veh-1260', name: 'Insurance Certificate', expires: '2026-08-11', status: 'Expiring Soon' },
  { id: 'DOC-303', vehicleId: 'veh-1318', name: 'Annual DOT Inspection', expires: '2027-01-03', status: 'Current' },
];
