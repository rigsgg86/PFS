import { vehicles } from "../data/fleet";
const url=process.env.SUPABASE_URL, key=process.env.SUPABASE_SERVICE_ROLE_KEY;
if(!url||!key){console.log("Set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY to seed.");process.exit(0)}
const rows=vehicles.map(v=>({id:v.id,year:v.year,make:v.make,model:v.model,trim:v.trim,vin:v.vin,plate:v.plate,status:v.status,mileage:v.mileage,next_service_miles:v.nextServiceMiles,next_service_date:v.nextServiceDate,assigned_to:v.assignedTo,location:v.location,image:v.image,documents:v.documents,photos:v.photos}));
await fetch(`${url}/rest/v1/vehicles`,{method:"POST",headers:{apikey:key,Authorization:`Bearer ${key}`,"Content-Type":"application/json",Prefer:"resolution=merge-duplicates"},body:JSON.stringify(rows)}).then(r=>{if(!r.ok)throw new Error(String(r.status));console.log("Seeded Prime Fleet vehicles")});
