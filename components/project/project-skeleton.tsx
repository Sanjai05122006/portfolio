export function ProjectSkeleton() {
  return (
    <div className="flex h-full flex-col rounded-[24px] border border-[#dde4f1] bg-white/72 p-6 shadow-[0_20px_46px_rgba(101,117,168,0.08),inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-md">
      <div className="flex items-start justify-between">
        <div className="h-8 w-24 animate-pulse rounded-full bg-gray-200" />
        <div className="h-5 w-5 animate-pulse rounded bg-gray-200" />
      </div>

      <div className="mt-6 flex h-[190px] items-center justify-center rounded-[22px] bg-[radial-gradient(circle_at_50%_38%,rgba(204,220,255,0.16)_0%,rgba(230,220,255,0.12)_38%,rgba(255,255,255,0)_72%)]">
        <div className="h-[150px] w-[170px] animate-pulse rounded-[28px] bg-gray-200" />
      </div>

      <div className="mt-5">
        <div className="h-7 w-36 animate-pulse rounded bg-gray-300" />
        <div className="mt-4 h-4 w-full animate-pulse rounded bg-gray-200" />
        <div className="mt-3 h-4 w-4/5 animate-pulse rounded bg-gray-200" />
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        <div className="h-8 w-16 animate-pulse rounded-full bg-gray-200" />
        <div className="h-8 w-20 animate-pulse rounded-full bg-gray-200" />
        <div className="h-8 w-14 animate-pulse rounded-full bg-gray-200" />
        <div className="h-8 w-18 animate-pulse rounded-full bg-gray-200" />
      </div>

      <div className="mt-auto flex items-center justify-between gap-4 pt-7">
        <div className="h-[46px] w-36 animate-pulse rounded-[14px] bg-gray-200" />
        <div className="h-6 w-24 animate-pulse rounded bg-gray-200" />
      </div>
    </div>
  );
}
