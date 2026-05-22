import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "@/styles/globals.css";
import { NotFoundContent } from "@/components/feedback/not-found-content";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description: "The page you are looking for does not exist.",
};

export default function GlobalNotFound() {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[var(--background)] text-[var(--foreground)]">
        <main className="min-h-screen p-2 md:p-3">
          <div className="relative flex min-h-[calc(100vh-16px)] overflow-hidden rounded-[20px] border border-[var(--line)] bg-[linear-gradient(180deg,var(--shell-top)_0%,var(--shell-bottom)_100%)] shadow-[0_24px_70px_var(--shadow-medium)] sm:rounded-[24px] md:min-h-[calc(100vh-24px)] md:rounded-[28px]">
            <div className="pointer-events-none absolute inset-0 z-0">
              <div className="absolute inset-0 bg-[linear-gradient(180deg,#fdfbff_0%,#f8f4ff_16%,#f4f2ff_34%,#f1f4ff_52%,#edf4ff_72%,#ebf3ff_100%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_14%,rgba(217,196,255,0.18)_0%,rgba(217,196,255,0)_24%),radial-gradient(circle_at_78%_10%,rgba(179,201,255,0.16)_0%,rgba(179,201,255,0)_26%),radial-gradient(circle_at_86%_56%,rgba(188,214,255,0.14)_0%,rgba(188,214,255,0)_22%),radial-gradient(circle_at_24%_78%,rgba(226,198,255,0.13)_0%,rgba(226,198,255,0)_20%),radial-gradient(circle_at_66%_92%,rgba(176,205,255,0.12)_0%,rgba(176,205,255,0)_18%)]" />
            </div>
            <NotFoundContent navigationMode="document" />
          </div>
        </main>
      </body>
    </html>
  );
}
