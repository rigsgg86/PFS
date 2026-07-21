import type { ReactNode } from 'react';
import { PortalShell } from '@/components/PortalShell';

export default function PortalLayout({ children }: Readonly<{ children: ReactNode }>) {
  return <PortalShell>{children}</PortalShell>;
}
