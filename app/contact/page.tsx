import type { Metadata } from "next";

import { ContactSection } from "@/components/sections/contact";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Sanjai M for collaborations, opportunities, and projects.",
};

export default function ContactPage() {
  return <ContactSection />;
}
