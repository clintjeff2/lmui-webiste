import type { Metadata } from "next";
import { ProgramLevelPage } from "@/components/ProgramLevelPage";

export const metadata: Metadata = {
  title: "Graduate Programs — Landmark Metropolitan University Institute",
  description: "Explore graduate study options, grouped by field.",
};

export default function GraduatePage() {
  return <ProgramLevelPage level="graduate" />;
}
