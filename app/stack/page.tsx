import type { Metadata } from "next";

import { StackSection } from "@/components/sections/stack";

export const metadata: Metadata = {
  title: "Stack",
  description: "Technologies and tools Sanjai M uses to build modern, scalable products.",
};

export default function StackPage() {
  return <StackSection />;
}
