import type { Metadata } from "next";
import localFont from "next/font/local";
import logoImage from "@/data/images/lmu-web-logo.png";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { getUniqueFieldCount } from "@/data/fields";
import { getUniqueOptionCount } from "@/data/options";
import { getSchools, getUniqueSchoolCount } from "@/data/schools";

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

export async function generateMetadata(): Promise<Metadata> {
  const optionCount = await getUniqueOptionCount();
  const schoolCount = await getUniqueSchoolCount();
  return {
    title: "Landmark Metropolitan University Institute",
    description: `${schoolCount} schools, ${optionCount} academic options, and a curriculum built around real practice — not simulations of it. Landmark Metropolitan University Institute.`,
    icons: { icon: logoImage.src },
  };
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const [schools, optionCount, fieldCount] = await Promise.all([
    getSchools(),
    getUniqueOptionCount(),
    getUniqueFieldCount(),
  ]);

  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body>
        <Header schools={schools} optionCount={optionCount} fieldCount={fieldCount} />
        {children}
        <Footer schools={schools} />
      </body>
    </html>
  );
}
