import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { ProjectsGrid } from "@/components/project/projects-grid";

export const metadata: Metadata = {
  title: "Projects",
  description: "Premium showcase of full-stack and AI-powered projects by Sanjai M.",
};

function BadgeIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 3 2.2 4.7 5.1.8-3.7 3.7.9 5.2L12 15.9 7.5 18.4l.9-5.2L4.7 8.5l5.1-.8L12 3Z" />
    </svg>
  );
}

export default function ProjectsPage() {
  return (
    <section className="relative min-h-full overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[6%] top-[24%] h-[180px] w-[180px] rounded-full bg-[radial-gradient(circle,rgba(195,182,255,0.16)_0%,rgba(195,182,255,0)_72%)] blur-3xl" />
        <div className="absolute right-[8%] top-[10%] h-[240px] w-[240px] rounded-full bg-[radial-gradient(circle,rgba(189,208,255,0.14)_0%,rgba(189,208,255,0)_72%)] blur-3xl" />
        <div className="absolute bottom-[8%] left-[34%] h-[200px] w-[200px] rounded-full bg-[radial-gradient(circle,rgba(214,196,255,0.12)_0%,rgba(214,196,255,0)_72%)] blur-3xl" />
      </div>

      <div className="relative px-6 py-8 md:px-10 md:py-9 xl:px-[56px] xl:py-10">
        <div className="grid gap-10 xl:grid-cols-[minmax(560px,600px)_minmax(520px,1fr)] xl:items-center xl:gap-10">
          <div className="max-w-[620px]">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#dde3f3] bg-white/74 px-4 py-2 text-[14px] font-medium tracking-[-0.03em] text-[#3f4960] shadow-[0_10px_28px_rgba(104,119,164,0.08)] backdrop-blur-md">
              <span className="text-[#5b63ff]">
                <BadgeIcon />
              </span>
              <span>My Projects</span>
            </div>

            <h1 className="mt-7 text-[54px] font-semibold leading-[1.03] tracking-[-0.08em] text-[var(--foreground)] md:text-[62px] xl:text-[70px]">
              Systems. Intelligence.
              <br />
              <span className="bg-[linear-gradient(135deg,#4364ff_0%,#6678ff_45%,#8d63ff_100%)] bg-clip-text text-transparent">
                Real-world impact.
              </span>
            </h1>

            <p className="mt-7 max-w-[500px] text-[20px] leading-[1.65] tracking-[-0.03em] text-[#394665]">
              Full-stack and AI-powered systems built to solve real problems.
            </p>

            <Link
              href="https://github.com/Sanjai05122006"
              target="_blank"
              rel="noreferrer"
              className="group mt-10 inline-flex h-[58px] items-center gap-3 rounded-[18px] border border-[#bfcaff] bg-white/72 px-8 text-[18px] font-medium tracking-[-0.04em] text-[#3b4cff] shadow-[0_16px_34px_rgba(111,126,195,0.08)] transition duration-300 hover:-translate-y-1 hover:border-[#6a79ff] hover:shadow-[0_22px_40px_rgba(111,126,195,0.14)]"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-5 w-5 shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5"
                fill="currentColor"
              >
                <path d="M12 .5C5.65.5.5 5.66.5 12.02c0 5.09 3.29 9.4 7.86 10.92.58.11.79-.25.79-.56 0-.28-.01-1.19-.02-2.16-3.2.7-3.88-1.36-3.88-1.36-.52-1.34-1.28-1.7-1.28-1.7-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.25 3.33.95.1-.74.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.07 0 0 .96-.31 3.14 1.19a10.8 10.8 0 0 1 5.72 0c2.17-1.5 3.13-1.19 3.13-1.19.62 1.6.24 2.78.12 3.07.73.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.39-5.26 5.67.41.36.78 1.08.78 2.19 0 1.58-.01 2.85-.01 3.24 0 .31.21.68.8.56A11.53 11.53 0 0 0 23.5 12C23.5 5.66 18.35.5 12 .5Z" />
              </svg>
              <span>View My Projects</span>
            </Link>
          </div>

          <div className="relative hidden h-[520px] xl:flex xl:items-center xl:justify-center">
            <div className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(201,195,255,0.24)_0%,rgba(201,195,255,0.08)_36%,rgba(201,195,255,0)_72%)] blur-3xl" />
            <div className="absolute left-[10%] top-[15%] h-7 w-7 rounded-full bg-[radial-gradient(circle,rgba(145,116,255,0.82)_0%,rgba(145,116,255,0.18)_66%,rgba(145,116,255,0)_100%)] shadow-[0_16px_28px_rgba(121,109,255,0.22)] animate-float" />
            <div className="absolute right-[9%] top-[13%] h-8 w-8 rounded-full bg-[radial-gradient(circle,rgba(172,200,255,0.82)_0%,rgba(172,200,255,0.18)_66%,rgba(172,200,255,0)_100%)] shadow-[0_16px_28px_rgba(125,165,255,0.2)] animate-float-delay" />
            <div className="absolute bottom-[13%] right-[16%] h-6 w-6 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.96)_0%,rgba(226,233,255,0.8)_58%,rgba(226,233,255,0)_100%)] shadow-[0_16px_28px_rgba(173,182,228,0.24)] animate-soft-pulse" />
            <div className="relative h-[490px] w-full max-w-[820px] animate-float">
              <Image
                src="/assets/images/project-right-side.png"
                alt="Projects page hero illustration"
                fill
                priority
                sizes="(max-width: 1279px) 0px, 820px"
                className="object-contain object-center drop-shadow-[0_28px_50px_rgba(120,134,205,0.18)]"
              />
            </div>
          </div>
        </div>

        <div id="projects-grid" className="mt-12">
          <ProjectsGrid />
        </div>
      </div>
    </section>
  );
}
