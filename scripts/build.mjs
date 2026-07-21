import { existsSync } from 'node:fs';
import { join } from 'node:path';

const requiredPaths = [
  'next.config.mjs',
  'app/(portal)/layout.tsx',
  'app/(portal)/page.tsx',
  'components/FleetTable.tsx',
  'components/MetricCard.tsx',
  'components/ServiceQueue.tsx',
  'lib/format.ts',
  'lib/supabase.ts',
  'lib/types.ts',
  'middleware.ts',
  'data/fleet.ts',
  'supabase/schema.sql',
];

const missing = requiredPaths.filter((path) => !existsSync(join(process.cwd(), path)));

if (existsSync(join(process.cwd(), 'next.config.ts'))) {
  throw new Error('next.config.ts must not exist; use next.config.mjs instead.');
}

if (missing.length > 0) {
  throw new Error(`Missing required portal files:\n${missing.join('\n')}`);
}

console.log('Prime Fleet Portal build validation passed.');
