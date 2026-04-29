import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

import type { Project } from "@/components/project/project-card";

function ArrowIcon() {
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
      <path d="M7 17 17 7" />
      <path d="M9 7h8v8" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="M12 .5C5.65.5.5 5.66.5 12.02c0 5.09 3.29 9.4 7.86 10.92.58.11.79-.25.79-.56 0-.28-.01-1.19-.02-2.16-3.2.7-3.88-1.36-3.88-1.36-.52-1.34-1.28-1.7-1.28-1.7-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.25 3.33.95.1-.74.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.07 0 0 .96-.31 3.14 1.19a10.8 10.8 0 0 1 5.72 0c2.17-1.5 3.13-1.19 3.13-1.19.62 1.6.24 2.78.12 3.07.73.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.39-5.26 5.67.41.36.78 1.08.78 2.19 0 1.58-.01 2.85-.01 3.24 0 .31.21.68.8.56A11.53 11.53 0 0 0 23.5 12C23.5 5.66 18.35.5 12 .5Z" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="4.5" width="18" height="16" rx="2.5" />
      <path d="M8 2.5v4" />
      <path d="M16 2.5v4" />
      <path d="M3 9.5h18" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5v5l3 1.8" />
    </svg>
  );
}

function SectionCard({
  icon,
  title,
  children,
}: {
  icon: ReactNode;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-[34px] border border-[#e5e8f4] bg-white/82 p-8 shadow-[0_22px_56px_rgba(101,116,171,0.08)] backdrop-blur-xl">
      <div className="flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[linear-gradient(135deg,#f3efff_0%,#eef4ff_100%)] text-[#5d6eff] shadow-[0_14px_28px_rgba(108,122,196,0.12)]">
          {icon}
        </div>
        <h2 className="text-[24px] font-semibold tracking-[-0.05em] text-[#14224f]">
          {title}
        </h2>
      </div>
      <div className="mt-7">{children}</div>
    </div>
  );
}

function InfoBadge({
  title,
  detail,
  className,
}: {
  title: string;
  detail: string;
  className: string;
}) {
  return (
    <div
      className={`absolute rounded-[24px] border border-white/70 bg-white/88 px-5 py-4 shadow-[0_20px_40px_rgba(113,126,185,0.14)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:shadow-[0_26px_46px_rgba(113,126,185,0.2)] ${className}`}
    >
      <p className="text-[15px] font-semibold tracking-[-0.04em] text-[#1f2d57]">
        {title}
      </p>
      <p className="mt-1 text-[14px] tracking-[-0.03em] text-[#5d6a89]">
        {detail}
      </p>
    </div>
  );
}

export function ProjectDetail({ project }: { project: Project }) {
  return (
    <section className="relative min-h-full overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[4%] top-[14%] h-[220px] w-[220px] rounded-full bg-[radial-gradient(circle,rgba(194,183,255,0.16)_0%,rgba(194,183,255,0)_72%)] blur-3xl" />
        <div className="absolute right-[8%] top-[10%] h-[260px] w-[260px] rounded-full bg-[radial-gradient(circle,rgba(177,202,255,0.16)_0%,rgba(177,202,255,0)_72%)] blur-3xl" />
        <div className="absolute bottom-[12%] left-[36%] h-[200px] w-[200px] rounded-full bg-[radial-gradient(circle,rgba(222,194,255,0.14)_0%,rgba(222,194,255,0)_72%)] blur-3xl" />
      </div>

      <div className="relative px-6 pt-5 pb-8 md:px-10 md:pt-6 md:pb-9 xl:px-[56px] xl:pt-6 xl:pb-10">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-[15px] font-medium tracking-[-0.03em] text-[#3f4c76] transition duration-300 hover:text-[#1f2d57]"
        >
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
            <path d="m15 18-6-6 6-6" />
          </svg>
          <span>Back to Projects</span>
        </Link>

        <div className="mt-5 grid gap-12 xl:grid-cols-[minmax(0,500px)_minmax(0,1fr)] xl:items-center xl:gap-6">
          <div className="max-w-[520px]">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#f0edff] px-4 py-2 text-[14px] font-medium tracking-[-0.03em] text-[#5b63ff]">
              <span>{project.category}</span>
            </div>

            <h1 className="mt-7 text-[58px] font-semibold leading-[0.98] tracking-[-0.08em] text-[#07144f] md:text-[74px] xl:text-[84px]">
              {project.name}
            </h1>

            <p className="mt-6 text-[34px] font-semibold leading-[1.15] tracking-[-0.06em] text-[#5c62f6] md:text-[42px]">
              {project.heroTitle}
            </p>

            <p className="mt-8 max-w-[500px] text-[18px] leading-[1.65] tracking-[-0.03em] text-[#3e4b74]">
              {project.heroSummary}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-5 text-[15px] tracking-[-0.03em] text-[#344269]">
              <div className="flex items-center gap-3">
                <span className="text-[#394665]">
                  <CalendarIcon />
                </span>
                <span>{project.year}</span>
              </div>
              <span className="h-1.5 w-1.5 rounded-full bg-[#97a2c4]" />
              <div className="flex items-center gap-3">
                <span className="text-[#394665]">
                  <ClockIcon />
                </span>
                <span>{project.duration}</span>
              </div>
              <span className="h-1.5 w-1.5 rounded-full bg-[#33b52f]" />
              <span>{project.status}</span>
            </div>

            <div className="mt-9 flex flex-wrap gap-4">
              {project.href ? (
                <Link
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex h-[58px] items-center gap-3 rounded-[18px] bg-[linear-gradient(135deg,#7267ff_0%,#5d63f6_100%)] px-9 text-[17px] font-medium tracking-[-0.04em] text-white shadow-[0_22px_38px_rgba(102,95,255,0.3)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_46px_rgba(102,95,255,0.36)]"
                >
                  <span className="text-white">Live Demo</span>
                  <span className="text-white transition-transform duration-300 group-hover:translate-x-0.5">
                    <ArrowIcon />
                  </span>
                </Link>
              ) : null}

              {project.githubHref ? (
                <Link
                  href={project.githubHref}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex h-[58px] items-center gap-3 rounded-[18px] border border-[#cbd3f5] bg-white/88 px-8 text-[17px] font-medium tracking-[-0.04em] text-[#13214f] shadow-[0_16px_28px_rgba(111,126,195,0.08)] transition duration-300 hover:-translate-y-1 hover:border-[#7d8cff] hover:shadow-[0_22px_40px_rgba(111,126,195,0.14)]"
                >
                  <span className="text-[#13214f]">
                    <GithubIcon />
                  </span>
                  <span>View on GitHub</span>
                </Link>
              ) : null}
            </div>
          </div>

          <div className="relative hidden min-h-[620px] xl:block">
            <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(201,195,255,0.28)_0%,rgba(201,195,255,0.08)_40%,rgba(201,195,255,0)_72%)] blur-3xl" />
            <div className="absolute inset-x-0 top-[6%] h-[84%]">
              <InfoBadge
                title={project.heroStats[0]?.title ?? ""}
                detail={project.heroStats[0]?.detail ?? ""}
                className="left-[0%] top-[2%] w-[240px]"
              />
              <InfoBadge
                title={project.heroStats[1]?.title ?? ""}
                detail={project.heroStats[1]?.detail ?? ""}
                className="right-[0%] top-[4%] w-[230px]"
              />
              <InfoBadge
                title={project.heroStats[2]?.title ?? ""}
                detail={project.heroStats[2]?.detail ?? ""}
                className="left-[0%] bottom-[18%] w-[236px]"
              />
              <InfoBadge
                title={project.heroStats[3]?.title ?? ""}
                detail={project.heroStats[3]?.detail ?? ""}
                className="right-[0%] bottom-[16%] w-[220px]"
              />

              <div className="absolute left-1/2 top-1/2 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2">
                <div className="absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#e4dcff] opacity-80" />
                <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#efe9ff] opacity-80" />
                <div className="absolute left-[14%] top-[34%] h-5 w-5 rounded-full bg-[radial-gradient(circle,rgba(120,98,255,0.94)_0%,rgba(120,98,255,0.2)_62%,rgba(120,98,255,0)_100%)] shadow-[0_12px_28px_rgba(101,92,255,0.26)]" />
                <div className="absolute right-[10%] top-[24%] h-4 w-4 rounded-full bg-[radial-gradient(circle,rgba(134,111,255,0.94)_0%,rgba(134,111,255,0.2)_62%,rgba(134,111,255,0)_100%)] shadow-[0_12px_28px_rgba(101,92,255,0.26)]" />
                <div className="absolute right-[8%] bottom-[30%] h-5 w-5 rounded-full bg-[radial-gradient(circle,rgba(134,111,255,0.94)_0%,rgba(134,111,255,0.2)_62%,rgba(134,111,255,0)_100%)] shadow-[0_12px_28px_rgba(101,92,255,0.26)]" />
                <div className="group absolute left-1/2 top-[49%] h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2">
                  <div className="absolute left-1/2 top-[82%] h-[74px] w-[260px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(113,102,255,0.42)_0%,rgba(113,102,255,0.16)_52%,rgba(113,102,255,0)_78%)] blur-2xl" />
                  <div className="absolute left-1/2 top-[79%] h-[112px] w-[320px] -translate-x-1/2 rounded-full border border-[#ddd5ff] bg-[linear-gradient(180deg,rgba(255,255,255,0.42)_0%,rgba(237,232,255,0.64)_100%)] shadow-[0_22px_46px_rgba(122,112,255,0.18)]" />
                  <div className="absolute left-1/2 top-[82%] h-[72px] w-[248px] -translate-x-1/2 rounded-full border border-[#d5ccff] bg-[linear-gradient(180deg,rgba(255,255,255,0.66)_0%,rgba(225,217,255,0.72)_100%)] shadow-[0_18px_38px_rgba(122,112,255,0.18)]" />
                  <div
                    className={`absolute left-1/2 top-[38%] h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[34px] border border-white/60 bg-[linear-gradient(180deg,rgba(255,255,255,0.34)_0%,rgba(235,230,255,0.26)_100%)] p-4 shadow-[0_36px_78px_rgba(103,94,255,0.24)] transition duration-300 group-hover:-translate-y-[52%] ${
                      project.imageFrameClassName ?? ""
                    }`}
                  >
                    <Image
                      src={project.image}
                      alt={`${project.name} project preview`}
                      fill
                      priority
                      sizes="(max-width: 1279px) 0px, 300px"
                      className={`object-contain object-center transition duration-300 group-hover:scale-[1.03] ${project.imageClassName ?? ""}`}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 rounded-[34px] border border-[#e5e8f4] bg-white/82 p-8 shadow-[0_22px_56px_rgba(101,116,171,0.08)] backdrop-blur-xl">
          <div className="grid gap-8 xl:grid-cols-3 xl:gap-0">
            <div className="xl:border-r xl:border-[#e6e9f4] xl:pr-10">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[linear-gradient(135deg,#fff0f1_0%,#ffe5e8_100%)] text-[#ff425d] shadow-[0_14px_28px_rgba(255,96,124,0.12)]">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-7 w-7"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="8.5" />
                    <path d="M12 8v4.5" />
                    <circle cx="12" cy="16.5" r="1" fill="currentColor" stroke="none" />
                  </svg>
                </div>
                <h2 className="text-[24px] font-semibold tracking-[-0.05em] text-[#14224f]">
                  Problem
                </h2>
              </div>
              <p className="mt-6 max-w-[280px] text-[18px] leading-[1.75] tracking-[-0.03em] text-[#3f4b74]">
                {project.challenge}
              </p>
            </div>

            <div className="xl:border-r xl:border-[#e6e9f4] xl:px-10">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[linear-gradient(135deg,#eef2ff_0%,#e9f2ff_100%)] text-[#4b63ff] shadow-[0_14px_28px_rgba(91,109,255,0.12)]">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-7 w-7"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 18h6" />
                    <path d="M10 21h4" />
                    <path d="M12 3a6 6 0 0 0-3.3 11l.8.8c.5.5.8 1.1.9 1.9h3.2c.1-.8.4-1.4.9-1.9l.8-.8A6 6 0 0 0 12 3Z" />
                  </svg>
                </div>
                <h2 className="text-[24px] font-semibold tracking-[-0.05em] text-[#14224f]">
                  Solution
                </h2>
              </div>
              <p className="mt-6 max-w-[290px] text-[18px] leading-[1.75] tracking-[-0.03em] text-[#3f4b74]">
                {project.solution}
              </p>
            </div>

            <div className="xl:pl-10">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[linear-gradient(135deg,#eefcec_0%,#e7f9eb_100%)] text-[#36a84a] shadow-[0_14px_28px_rgba(79,184,95,0.12)]">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-7 w-7"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 20V10" />
                    <path d="M10 20V4" />
                    <path d="M16 20v-7" />
                    <path d="M22 20v-4" />
                  </svg>
                </div>
                <h2 className="text-[24px] font-semibold tracking-[-0.05em] text-[#14224f]">
                  Impact
                </h2>
              </div>
              <ul className="mt-6 space-y-2 text-[18px] leading-[1.75] tracking-[-0.03em] text-[#3f4b74]">
                {project.impact.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-6 xl:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
          <SectionCard
            title="How it was built"
            icon={
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-7 w-7"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="8" r="3.5" />
                <path d="M5 19a7 7 0 0 1 14 0" />
              </svg>
            }
          >
            <ul className="space-y-3">
              {project.buildPoints.map((point) => (
                <li
                  key={point}
                  className="group flex items-start gap-4 rounded-[18px] border border-[#edf0f8] bg-[linear-gradient(180deg,rgba(255,255,255,0.82)_0%,rgba(248,250,255,0.8)_100%)] px-6 py-5 text-[16px] leading-[1.75] tracking-[-0.03em] text-[#46547b] transition duration-300 hover:-translate-y-0.5 hover:border-[#d9def8] hover:shadow-[0_16px_32px_rgba(103,118,177,0.08)]"
                >
                  <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,#f1edff_0%,#edf3ff_100%)] text-[#6667ff] shadow-[0_10px_20px_rgba(108,122,196,0.12)] transition duration-300 group-hover:scale-105">
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
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </SectionCard>

          <SectionCard
            title="Tech Stack"
            icon={
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-7 w-7"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m12 3 8 4.5-8 4.5-8-4.5L12 3Z" />
                <path d="m4 12 8 4.5 8-4.5" />
                <path d="m4 16.5 8 4.5 8-4.5" />
              </svg>
            }
          >
            <div className="space-y-3">
              {project.techGroups.map((group) => (
                <div
                  key={group.label}
                  className="grid items-center gap-4 rounded-[18px] border border-[#edf0f8] bg-[linear-gradient(180deg,rgba(255,255,255,0.82)_0%,rgba(248,250,255,0.8)_100%)] px-6 py-5 transition duration-300 hover:-translate-y-0.5 hover:border-[#d9def8] hover:shadow-[0_16px_32px_rgba(103,118,177,0.08)] md:grid-cols-[180px_minmax(0,1fr)]"
                >
                  <p className="text-[16px] font-semibold tracking-[-0.04em] text-[#12204d]">
                    {group.label}
                  </p>
                  <p className="text-[16px] leading-[1.7] tracking-[-0.03em] text-[#46547b]">
                    {group.value}
                  </p>
                </div>
              ))}
            </div>
          </SectionCard>
        </div>

        <div className="mt-8">
          <SectionCard
            title="Challenges"
            icon={
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-7 w-7"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 3 2.8 19h18.4L12 3Z" />
                <path d="M12 9v4.5" />
                <circle cx="12" cy="16.5" r="1" fill="currentColor" stroke="none" />
              </svg>
            }
          >
            <div className="grid gap-5 xl:grid-cols-2">
              {project.challengeCards.map((item, index) => (
                <div
                  key={item.title}
                  className="rounded-[24px] border border-[#edf0f8] bg-[linear-gradient(180deg,rgba(249,248,255,0.96)_0%,rgba(245,247,255,0.88)_100%)] p-6 shadow-[0_16px_32px_rgba(103,118,177,0.06)] transition duration-300 hover:-translate-y-1 hover:border-[#d9def8] hover:shadow-[0_22px_40px_rgba(103,118,177,0.1)]"
                >
                  <div className="flex items-start gap-5">
                    <div className="flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,#7a69ff_0%,#5f63f6_100%)] text-white shadow-[0_18px_30px_rgba(95,99,246,0.22)]">
                      {index === 0 ? (
                        <svg
                          aria-hidden="true"
                          viewBox="0 0 24 24"
                          className="h-8 w-8"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx="12" cy="12" r="3.5" />
                          <path d="M12 2.5v3" />
                          <path d="M12 18.5v3" />
                          <path d="M2.5 12h3" />
                          <path d="M18.5 12h3" />
                        </svg>
                      ) : (
                        <svg
                          aria-hidden="true"
                          viewBox="0 0 24 24"
                          className="h-8 w-8"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="m13 2-7 12h5l-1 8 8-12h-5l0-8Z" />
                        </svg>
                      )}
                    </div>
                    <div>
                      <p className="text-[16px] font-semibold leading-[1.55] tracking-[-0.04em] text-[#14224f]">
                        {item.title}
                      </p>
                      <p className="mt-3 text-[16px] leading-[1.7] tracking-[-0.03em] text-[#55627f]">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </SectionCard>
        </div>

      </div>
    </section>
  );
}
