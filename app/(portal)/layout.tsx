import type { ReactNode } from 'react';
import '../globals.css';

export default function PortalLayout({ children }: Readonly<{ children: ReactNode }>) {
  return <div className="portal-shell">{children}</div>;
}
