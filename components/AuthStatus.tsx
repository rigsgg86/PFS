import { isSupabaseConfigured } from '@/lib/supabase';

export function AuthStatus() {
  return <div className="rounded-3xl border border-fleet-gold/20 bg-black/40 p-5"><p className="text-xs uppercase tracking-[0.3em] text-fleet-gold">Security</p><h2 className="mt-2 text-xl font-black text-white">Auth.js v5 + Supabase ready</h2><p className="mt-2 text-sm text-fleet-cream/70">NextAuth beta configured for Next.js 15 · Supabase {isSupabaseConfigured() ? 'connected' : 'environment pending'}</p></div>;
}
