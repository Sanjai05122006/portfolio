"use client";

import Image from "next/image";
import Link from "next/link";

export type Project = {
  slug: string;
  name: string;
  description: string;
  category: string;
  type: string;
  image: string;
  stack: string[];
  highlights: string[];
  metric: string;
  href?: string;
  githubHref?: string;
  imageFrameClassName?: string;
  imageClassName?: string;
};

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="M12 .5C5.65.5.5 5.66.5 12.02c0 5.09 3.29 9.4 7.86 10.92.58.11.79-.25.79-.56 0-.28-.01-1.19-.02-2.16-3.2.7-3.88-1.36-3.88-1.36-.52-1.34-1.28-1.7-1.28-1.7-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.25 3.33.95.1-.74.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.07 0 0 .96-.31 3.14 1.19a10.8 10.8 0 0 1 5.72 0c2.17-1.5 3.13-1.19 3.13-1.19.62 1.6.24 2.78.12 3.07.73.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.39-5.26 5.67.41.36.78 1.08.78 2.19 0 1.58-.01 2.85-.01 3.24 0 .31.21.68.8.56A11.53 11.53 0 0 0 23.5 12C23.5 5.66 18.35.5 12 .5Z" />
    </svg>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group relative flex min-h-[360px] flex-col justify-between rounded-2xl border border-[#e6e9f2] bg-gradient-to-br from-white to-[#f7f8ff] p-6 shadow-[0_12px_30px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(99,102,241,0.15)]">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-[#eef2ff] px-3 py-1 text-xs font-medium text-[#4f46e5]">
            {project.category}
          </span>
          {project.type ? (
            <span className="text-[12px] font-medium text-indigo-500">
              {project.type}
            </span>
          ) : null}
        </div>

        <span className="inline-flex items-center gap-1 text-[12px] text-green-600">
          <span className="h-2 w-2 rounded-full bg-green-500" />
          Active
        </span>
      </div>

      <div className="mt-6 flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-6">
        <div className="relative mx-auto w-full max-w-[220px] shrink-0 sm:mx-0 sm:w-auto">
          <div className="absolute inset-[8%] rounded-[28px] bg-[radial-gradient(circle,rgba(129,140,248,0.2)_0%,rgba(129,140,248,0)_72%)] blur-2xl" />
          <div
            className={`relative h-[168px] w-full overflow-hidden rounded-[24px] border border-[#dfe4f4] bg-[linear-gradient(180deg,rgba(255,255,255,0.96)_0%,rgba(241,245,255,0.88)_100%)] p-2 shadow-[0_18px_30px_rgba(115,127,182,0.08)] transition duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_24px_38px_rgba(115,127,182,0.14)] sm:h-[150px] sm:w-[184px] ${
              project.imageFrameClassName ?? ""
            }`}
          >
            <Image
              src={project.image}
              alt={project.name}
              fill
              sizes="(max-width: 639px) 220px, 184px"
              className={`object-contain p-2 ${project.imageClassName ?? ""}`}
            />
          </div>
        </div>

        <div className="flex-1 text-center sm:text-left">
          <h2 className="text-[22px] font-semibold text-[#111827]">
            {project.name}
          </h2>

          <p className="mt-2 text-[15px] leading-relaxed text-[#6b7280]">
            {project.description}
          </p>

          <ul className="mt-3 space-y-1 text-[13px] text-[#6b7280]">
            {project.highlights.slice(0, 3).map((h) => (
              <li key={h}>• {h}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-[#eef2ff] px-3 py-1 text-[13px] font-medium text-[#4f46e5]"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-[#eef0f5] pt-5">
        <Link
          href={project.href ?? "#"}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-[#dfe3f0] px-5 py-2.5 text-sm font-medium text-[#111827] transition hover:bg-[#eef2ff]"
        >
          View Project →
        </Link>

        <Link
          href={project.githubHref ?? "#"}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 text-sm text-[#6b7280] transition hover:text-[#111827]"
        >
          GitHub
          <GithubIcon />
        </Link>
      </div>
    </div>
  );
}
