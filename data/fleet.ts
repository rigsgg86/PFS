export type VehicleStatus = "Active" | "Maintenance" | "Reserved";
export type Vehicle = { id:string; year:number; make:string; model:string; trim:string; vin:string; plate:string; status:VehicleStatus; mileage:number; nextServiceMiles:number; nextServiceDate:string; assignedTo:string; location:string; image:string; documents:number; photos:number; };
export const vehicles: Vehicle[] = [
{id:"sprinter-2022",year:2022,make:"Mercedes-Benz",model:"Sprinter",trim:"2500 High Roof",vin:"W1Y4EBHY1NT092250",plate:"PFP-2201",status:"Active",mileage:42180,nextServiceMiles:45000,nextServiceDate:"2026-08-15",assignedTo:"Executive Transport",location:"Atlanta Hub",image:"https://images.unsplash.com/photo-1616455164840-2d280435e4ca?auto=format&fit=crop&w=1200&q=80",documents:6,photos:12},
{id:"sprinter-2021",year:2021,make:"Mercedes-Benz",model:"Sprinter",trim:"2500 Cargo",vin:"W1W4EBVY8MT058250",plate:"PFP-2101",status:"Maintenance",mileage:68740,nextServiceMiles:70000,nextServiceDate:"2026-07-30",assignedTo:"Operations",location:"Dallas Hub",image:"https://images.unsplash.com/photo-1549275301-c9c6d18f3a21?auto=format&fit=crop&w=1200&q=80",documents:5,photos:9}
];
export const maintenance = [{vehicle:"2022 Sprinter 2500",type:"A Service",date:"2026-06-10",cost:485,status:"Complete"},{vehicle:"2021 Sprinter 2500",type:"Brake inspection",date:"2026-07-24",cost:650,status:"Scheduled"}];
export const mileageLogs = [{vehicle:"2022 Sprinter 2500",date:"2026-07-18",miles:184,driver:"A. Carter"},{vehicle:"2021 Sprinter 2500",date:"2026-07-16",miles:92,driver:"J. Rivera"}];
export const fuelLogs = [{vehicle:"2022 Sprinter 2500",date:"2026-07-17",gallons:18.4,cost:72.31},{vehicle:"2021 Sprinter 2500",date:"2026-07-15",gallons:21.2,cost:84.12}];
export const documents = [{vehicle:"2022 Sprinter 2500",name:"Registration",expires:"2027-03-01"},{vehicle:"2021 Sprinter 2500",name:"Insurance",expires:"2026-12-31"}];
