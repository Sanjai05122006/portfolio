"use client";

import { usePathname } from "next/navigation";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";

function isProjectDetailRoute(pathname: string) {
  const segments = pathname.split("/").filter(Boolean);

  return segments.length === 2 && segments[0] === "projects";
}

export function SiteHeader() {
  const pathname = usePathname();

  if (isProjectDetailRoute(pathname)) {
    return null;
  }

  return <Navbar />;
}

export function SiteFooter() {
  const pathname = usePathname();

  if (isProjectDetailRoute(pathname)) {
    return null;
  }

  return <Footer />;
}
