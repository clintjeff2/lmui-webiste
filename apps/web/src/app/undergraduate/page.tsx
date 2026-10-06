import type { Metadata } from "next";
import { ProgramLevelPage } from "@/components/ProgramLevelPage";

export const metadata: Metadata = {
  title: "Undergraduate Programs — Landmark Metropolitan University Institute",
  description: "Explore undergraduate study options, grouped by field.",
};

export default function UndergraduatePage() {
  return <ProgramLevelPage level="undergraduate" />;
}
