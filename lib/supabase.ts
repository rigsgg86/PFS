const url = process.env.SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
export async function supabaseRest<T>(table: string, init?: RequestInit): Promise<T[]> {
  if (!url || !serviceKey) return [];
  const res = await fetch(`${url}/rest/v1/${table}?select=*`, { ...init, headers: { apikey: serviceKey, Authorization: `Bearer ${serviceKey}`, ...(init?.headers || {}) }, cache: "no-store" });
  if (!res.ok) throw new Error(`Supabase ${table} request failed: ${res.status}`);
  return res.json();
}
