import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { getSchools } from "@/data/schools";

// Self-hosted (not next/font/google): a live campus presentation cannot
// depend on fonts.gstatic.com being reachable over venue wifi. These are
// the same Google Fonts files (Inter, Fraunces — both OFL licensed),
// fetched once and bundled into the app, so the whole site is a single
// deployable artifact with zero external font requests, ever.
const fraunces = localFont({
  src: [
    { path: "../fonts/fraunces-variable.woff2", weight: "500 600", style: "normal" },
    { path: "../fonts/fraunces-italic-variable.woff2", weight: "500 600", style: "italic" },
  ],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = localFont({
  src: [{ path: "../fonts/inter-variable.woff2", weight: "400 700", style: "normal" }],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Landmark Metropolitan University Institute",
  description:
    "Six schools, one hundred and fifty programs, and a curriculum built around real practice — not simulations of it. Landmark Metropolitan University Institute.",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const schools = await getSchools();

  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body>
        <Header schools={schools} />
        {children}
        <Footer schools={schools} />
      </body>
    </html>
  );
}
