import { existsSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const requiredPaths = [
  'next.config.mjs', 'tailwind.config.ts', 'postcss.config.mjs', 'app/layout.tsx', 'app/page.tsx', 'app/(portal)/layout.tsx', 'app/(portal)/page.tsx', 'app/api/auth/[...nextauth]/route.ts', 'auth.ts', 'components/AuthStatus.tsx', 'components/DataTable.tsx', 'components/MetricCard.tsx', 'components/PortalShell.tsx', 'lib/auth.ts', 'lib/format.ts', 'lib/supabase.ts', 'lib/types.ts', 'middleware.ts', 'data/fleet.ts', 'supabase/schema.sql'
];

const missing = requiredPaths.filter((path) => !existsSync(join(process.cwd(), path)));
const nextConfigs = readdirSync(process.cwd()).filter((entry) => /^next\.config\./.test(entry));

if (nextConfigs.length !== 1 || nextConfigs[0] !== 'next.config.mjs') throw new Error(`Only next.config.mjs is allowed. Found: ${nextConfigs.join(', ') || 'none'}`);
if (missing.length > 0) throw new Error(`Missing required portal files:\n${missing.join('\n')}`);

console.log('Prime Fleet Portal production build validation passed.');
