import type { Metadata } from "next";import type { ReactNode } from "react";import "./globals.css";
export const metadata: Metadata={title:"Prime Fleet Portal",description:"Enterprise fleet management for Prime Fleet Services"};
export default function RootLayout({children}:{children:ReactNode}){return <html lang="en"><body>{children}</body></html>}
