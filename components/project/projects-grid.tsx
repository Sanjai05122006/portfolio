"use client";

import { useEffect, useMemo, useState } from "react";

import { ProjectCard } from "@/components/project/project-card";
import { ProjectSkeleton } from "@/components/project/project-skeleton";
import { allProjects, filterOptions, matchesFilter, type Filter } from "@/data/projects";

export function ProjectsGrid() {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");
  const [visibleCount, setVisibleCount] = useState(0);
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const filteredProjects = useMemo(
    () => allProjects.filter((project) => matchesFilter(project, activeFilter)),
    [activeFilter],
  );

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setVisibleCount(Math.min(3, filteredProjects.length));
      setIsInitialLoading(false);
    }, 850);

    return () => window.clearTimeout(timer);
  }, [filteredProjects]);

  const visibleProjects = filteredProjects.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProjects.length;
  const skeletonCount = isInitialLoading ? 6 : isLoadingMore ? Math.min(3, filteredProjects.length - visibleCount) : 0;

  const handleLoadMore = () => {
    if (isLoadingMore) {
      return;
    }

    setIsLoadingMore(true);

    window.setTimeout(() => {
      setVisibleCount((current) => Math.min(current + 3, filteredProjects.length));
      setIsLoadingMore(false);
    }, 850);
  };

  const handleFilterChange = (filter: Filter) => {
    if (filter === activeFilter) {
      return;
    }

    setActiveFilter(filter);
    setVisibleCount(0);
    setIsLoadingMore(false);
    setIsInitialLoading(true);
  };

  return (
    <div className="mt-8">
      <div className="flex flex-wrap gap-3">
        {filterOptions.map((filter) => {
          const active = filter === activeFilter;

          return (
            <button
              key={filter}
              type="button"
              onClick={() => handleFilterChange(filter)}
              className={`rounded-full px-4 py-2 text-[14px] font-medium tracking-[-0.03em] transition duration-300 ${
                active
                  ? "bg-[linear-gradient(180deg,#4f64ff_0%,#6d6fff_100%)] text-white shadow-[0_14px_28px_rgba(94,111,238,0.24)]"
                  : "border border-[#dde4f1] bg-white/74 text-[#51607b] shadow-[0_10px_24px_rgba(101,117,168,0.06)] hover:-translate-y-0.5 hover:text-[#364cff]"
              }`}
            >
              {filter}
            </button>
          );
        })}
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {isInitialLoading ? null : visibleProjects.map((project) => <ProjectCard key={project.slug} project={project} />)}

        {Array.from({ length: skeletonCount }).map((_, index) => (
          <ProjectSkeleton key={`skeleton-${index}`} />
        ))}
      </div>

      {!isInitialLoading && hasMore ? (
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={handleLoadMore}
            disabled={isLoadingMore}
            className="group inline-flex h-[58px] min-w-[320px] items-center justify-center gap-3 rounded-[18px] border border-[#bfcaff] bg-white/78 px-7 text-[18px] font-medium tracking-[-0.04em] text-[#3b4cff] shadow-[0_16px_34px_rgba(111,126,195,0.08)] transition duration-300 hover:-translate-y-1 hover:border-[#6a79ff] hover:shadow-[0_22px_40px_rgba(111,126,195,0.14)] disabled:cursor-wait disabled:opacity-80"
          >
            <span>{isLoadingMore ? "Loading Projects..." : "View More Projects"}</span>
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 17 17 7" />
              <path d="M9 7h8v8" />
            </svg>
          </button>
        </div>
      ) : null}
    </div>
  );
}
