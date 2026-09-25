import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Landmark Metropolitan — Admin",
  description: "Content and landing page management for Landmark Metropolitan University Institute",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
