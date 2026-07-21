import { existsSync } from 'node:fs';
import { join } from 'node:path';

const requiredPaths = [
  'next.config.mjs',
  'app/layout.tsx',
  'app/page.tsx',
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

const forbiddenNextConfigs = ['next.config.ts', 'next.config.js', 'next.config.cjs'].filter((path) =>
  existsSync(join(process.cwd(), path)),
);

if (forbiddenNextConfigs.length > 0) {
  throw new Error(`Only next.config.mjs is allowed. Remove:\n${forbiddenNextConfigs.join('\n')}`);
}

if (missing.length > 0) {
  throw new Error(`Missing required portal files:\n${missing.join('\n')}`);
}

console.log('Prime Fleet Portal build validation passed.');
