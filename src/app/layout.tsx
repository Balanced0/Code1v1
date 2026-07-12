import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = { title: "Code1v1 — Competitive programming arena", description: "Find a match. Solve first. Climb the board." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
