import type { Metadata } from "next";
import { ProgramLevelPage } from "@/components/ProgramLevelPage";

export const metadata: Metadata = {
  title: "HND Programs — Landmark Metropolitan University Institute",
  description: "Explore HND study options, grouped by field.",
};

export default function HndPage() {
  return <ProgramLevelPage level="hnd" />;
}
