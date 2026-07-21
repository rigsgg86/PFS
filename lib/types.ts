export type VehicleStatus = 'Available' | 'Dispatched' | 'Maintenance' | 'Out of Service';
export type MaintenancePriority = 'Critical' | 'High' | 'Medium' | 'Low';

export interface DashboardMetric { label: string; value: string; trend: string; }
export interface Vehicle { id: string; unit: string; make: string; model: string; year: number; vin: string; status: VehicleStatus; driver: string; location: string; mileage: number; }
export interface MaintenanceTicket { id: string; vehicleId: string; priority: MaintenancePriority; service: string; dueDate: string; status: string; }
export interface MileageLog { id: string; vehicleId: string; date: string; miles: number; route: string; }
export interface FuelLog { id: string; vehicleId: string; date: string; gallons: number; cost: number; station: string; }
export interface FleetDocument { id: string; vehicleId: string; name: string; expires: string; status: 'Current' | 'Expiring Soon' | 'Expired'; }
