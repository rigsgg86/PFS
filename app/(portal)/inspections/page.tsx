"use client";
import { useState } from "react";
import { vehicles } from "@/data/fleet";

const checks = [
  "Tires and wheels",
  "Brakes and parking brake",
  "Lights and reflectors",
  "Windshield and mirrors",
  "Seat belts",
  "Fluid levels and leaks",
  "Horn and safety equipment",
  "Body, doors, and cargo area",
];

export default function InspectionsPage() {
  const [vehicle, setVehicle] = useState(vehicles[0].id);
  const [mileage, setMileage] = useState(vehicles[0].mileage);
  const [results, setResults] = useState<Record<string, boolean>>({});
  const [submitted, setSubmitted] = useState(false);
  const selected = vehicles.find((v) => v.id === vehicle) ?? vehicles[0];
  const failed = checks.filter((c) => results[c] === false).length;
  const completed = checks.filter((c) => results[c] !== undefined).length;

  function changeVehicle(id: string) {
    const next = vehicles.find((v) => v.id === id) ?? vehicles[0];
    setVehicle(id);
    setMileage(next.mileage);
    setResults({});
    setSubmitted(false);
  }

  return (
    <div className="mx-auto max-w-4xl">
      <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <div><p className="text-sm font-semibold uppercase tracking-[.2em] text-gold">FleetBoss</p><h1 className="text-4xl font-bold">Daily inspection</h1><p className="mt-2 text-white/60">Complete the pre-trip check before dispatch.</p></div>
        <div className="rounded-2xl border border-gold/20 bg-white/5 px-4 py-3 text-sm"><span className="text-white/50">Progress</span><b className="ml-2">{completed}/{checks.length}</b></div>
      </div>

      {submitted ? <section className="card mt-8 rounded-3xl p-8"><div className="text-4xl">✓</div><h2 className="mt-4 text-2xl font-semibold">Inspection submitted</h2><p className="mt-2 text-white/60">{selected.year} {selected.make} {selected.model} is {failed ? "flagged for review." : "cleared based on this inspection."}</p><button onClick={() => {setSubmitted(false);setResults({});}} className="mt-6 rounded-xl bg-gold px-5 py-3 font-semibold text-ink">Start another inspection</button></section> : <>
        <section className="card mt-8 rounded-3xl p-6"><h2 className="text-xl font-semibold">Vehicle</h2><div className="mt-4 grid gap-4 md:grid-cols-2"><label className="text-sm text-white/60">Assigned vehicle<select value={vehicle} onChange={(e)=>changeVehicle(e.target.value)} className="mt-2 w-full rounded-xl border border-white/10 bg-black/50 p-3 text-white">{vehicles.map(v=><option key={v.id} value={v.id}>{v.year} {v.make} {v.model} — {v.plate}</option>)}</select></label><label className="text-sm text-white/60">Current odometer<input type="number" value={mileage} onChange={(e)=>setMileage(Number(e.target.value))} className="mt-2 w-full rounded-xl border border-white/10 bg-black/50 p-3 text-white" /></label></div></section>
        <section className="card mt-6 rounded-3xl p-6"><div className="flex items-center justify-between"><div><h2 className="text-xl font-semibold">Safety checklist</h2><p className="mt-1 text-sm text-white/50">Mark every item before submitting.</p></div><span className={failed ? "text-red-300" : "text-white/50"}>{failed ? `${failed} issue${failed > 1 ? "s" : ""}` : "No issues reported"}</span></div><div className="mt-6 space-y-3">{checks.map((check)=><div key={check} className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/25 p-4"><span>{check}</span><div className="flex gap-2"><button onClick={()=>setResults(r=>({...r,[check]:true}))} className={`rounded-lg px-4 py-2 text-sm ${results[check]===true?"bg-green-500/20 text-green-200":"bg-white/5 text-white/60"}`}>Pass</button><button onClick={()=>setResults(r=>({...r,[check]:false}))} className={`rounded-lg px-4 py-2 text-sm ${results[check]===false?"bg-red-500/20 text-red-200":"bg-white/5 text-white/60"}`}>Issue</button></div></div>)}</div></section>
        <section className="card mt-6 rounded-3xl p-6"><h2 className="text-xl font-semibold">Required photos</h2><p className="mt-1 text-sm text-white/50">Photo capture will be connected to storage next. For now, record the required six inspection angles.</p><div className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-3">{["Front","Rear","Driver side","Passenger side","Cab / dashboard","Cargo area"].map((label)=><button key={label} className="rounded-2xl border border-dashed border-gold/30 bg-black/20 p-6 text-left hover:border-gold"><span className="text-2xl">＋</span><p className="mt-3 font-medium">{label}</p><p className="text-xs text-white/40">Add photo</p></button>)}</div></section>
        <button disabled={completed !== checks.length} onClick={()=>setSubmitted(true)} className="mt-6 w-full rounded-2xl bg-gold px-5 py-4 font-bold text-ink disabled:cursor-not-allowed disabled:opacity-30">Submit inspection</button>
      </>}
    </div>
  );
}
