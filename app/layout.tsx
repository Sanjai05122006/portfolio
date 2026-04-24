import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "@/styles/globals.css";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Sanjai M",
    template: "%s | Sanjai M",
  },
  description:
    "Portfolio of Sanjai M, a full-stack developer focused on scalable systems and AI-powered applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[var(--background)] text-[var(--foreground)]">
        <div className="min-h-screen p-2 md:p-3">
          <div className="relative flex min-h-[calc(100vh-16px)] flex-col overflow-hidden rounded-[24px] border border-[var(--line)] bg-[linear-gradient(180deg,var(--shell-top)_0%,var(--shell-bottom)_100%)] shadow-[0_24px_70px_var(--shadow-medium)] md:min-h-[calc(100vh-24px)] md:rounded-[28px]">
            <div className="pointer-events-none absolute inset-0 z-0">
              <div className="absolute inset-0 bg-[linear-gradient(180deg,#fcfbff_0%,#f8f7ff_18%,#f4f6ff_42%,#f1f6ff_68%,#eef4ff_100%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(214,193,255,0.18)_0%,rgba(214,193,255,0)_28%),radial-gradient(circle_at_78%_14%,rgba(171,197,255,0.16)_0%,rgba(171,197,255,0)_30%),radial-gradient(circle_at_82%_78%,rgba(195,215,255,0.16)_0%,rgba(195,215,255,0)_24%),radial-gradient(circle_at_28%_88%,rgba(224,196,255,0.14)_0%,rgba(224,196,255,0)_24%)]" />
            </div>
            <Navbar />
            <main className="relative z-10 min-h-0 flex-1">{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
