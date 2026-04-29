function SkeletonBlock({
  className,
}: {
  className: string;
}) {
  return <div className={`animate-pulse rounded-[18px] bg-white/55 ${className}`} />;
}

export default function ProjectLoading() {
  return (
    <section className="relative min-h-full overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[4%] top-[14%] h-[220px] w-[220px] rounded-full bg-[radial-gradient(circle,rgba(194,183,255,0.16)_0%,rgba(194,183,255,0)_72%)] blur-3xl" />
        <div className="absolute right-[8%] top-[10%] h-[260px] w-[260px] rounded-full bg-[radial-gradient(circle,rgba(177,202,255,0.16)_0%,rgba(177,202,255,0)_72%)] blur-3xl" />
        <div className="absolute bottom-[12%] left-[36%] h-[200px] w-[200px] rounded-full bg-[radial-gradient(circle,rgba(222,194,255,0.14)_0%,rgba(222,194,255,0)_72%)] blur-3xl" />
      </div>

      <div className="relative px-6 py-8 md:px-10 md:py-9 xl:px-[56px] xl:py-10">
        <SkeletonBlock className="h-5 w-36 rounded-full" />

        <div className="mt-10 grid gap-12 xl:grid-cols-[minmax(0,500px)_minmax(0,1fr)] xl:items-center xl:gap-6">
          <div className="max-w-[520px]">
            <SkeletonBlock className="h-10 w-28 rounded-full" />
            <SkeletonBlock className="mt-7 h-20 w-[88%]" />
            <SkeletonBlock className="mt-4 h-12 w-[78%]" />
            <SkeletonBlock className="mt-8 h-5 w-full" />
            <SkeletonBlock className="mt-3 h-5 w-[92%]" />
            <SkeletonBlock className="mt-3 h-5 w-[74%]" />

            <div className="mt-10 flex flex-wrap gap-4">
              <SkeletonBlock className="h-5 w-20 rounded-full" />
              <SkeletonBlock className="h-5 w-28 rounded-full" />
              <SkeletonBlock className="h-5 w-24 rounded-full" />
            </div>

            <div className="mt-9 flex flex-wrap gap-4">
              <SkeletonBlock className="h-[58px] w-40 rounded-[18px]" />
              <SkeletonBlock className="h-[58px] w-48 rounded-[18px]" />
            </div>
          </div>

          <div className="relative hidden min-h-[620px] xl:block">
            <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(201,195,255,0.28)_0%,rgba(201,195,255,0.08)_40%,rgba(201,195,255,0)_72%)] blur-3xl" />
            <div className="absolute left-[0%] top-[2%] w-[240px] rounded-[24px] border border-white/70 bg-white/58 px-5 py-4 shadow-[0_20px_40px_rgba(113,126,185,0.12)] backdrop-blur-xl">
              <SkeletonBlock className="h-5 w-32" />
              <SkeletonBlock className="mt-2 h-4 w-28" />
            </div>
            <div className="absolute right-[0%] top-[4%] w-[230px] rounded-[24px] border border-white/70 bg-white/58 px-5 py-4 shadow-[0_20px_40px_rgba(113,126,185,0.12)] backdrop-blur-xl">
              <SkeletonBlock className="h-5 w-32" />
              <SkeletonBlock className="mt-2 h-4 w-24" />
            </div>
            <div className="absolute left-[0%] bottom-[18%] w-[236px] rounded-[24px] border border-white/70 bg-white/58 px-5 py-4 shadow-[0_20px_40px_rgba(113,126,185,0.12)] backdrop-blur-xl">
              <SkeletonBlock className="h-5 w-28" />
              <SkeletonBlock className="mt-2 h-4 w-32" />
            </div>
            <div className="absolute right-[0%] bottom-[16%] w-[220px] rounded-[24px] border border-white/70 bg-white/58 px-5 py-4 shadow-[0_20px_40px_rgba(113,126,185,0.12)] backdrop-blur-xl">
              <SkeletonBlock className="h-5 w-28" />
              <SkeletonBlock className="mt-2 h-4 w-24" />
            </div>

            <div className="absolute left-1/2 top-1/2 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2">
              <div className="absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#e4dcff] opacity-80" />
              <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#efe9ff] opacity-80" />
              <div className="absolute left-1/2 top-[49%] h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2">
                <div className="absolute left-1/2 top-[82%] h-[74px] w-[260px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(113,102,255,0.42)_0%,rgba(113,102,255,0.16)_52%,rgba(113,102,255,0)_78%)] blur-2xl" />
                <div className="absolute left-1/2 top-[79%] h-[112px] w-[320px] -translate-x-1/2 rounded-full border border-[#ddd5ff] bg-[linear-gradient(180deg,rgba(255,255,255,0.42)_0%,rgba(237,232,255,0.64)_100%)]" />
                <div className="absolute left-1/2 top-[82%] h-[72px] w-[248px] -translate-x-1/2 rounded-full border border-[#d5ccff] bg-[linear-gradient(180deg,rgba(255,255,255,0.66)_0%,rgba(225,217,255,0.72)_100%)]" />
                <div className="absolute left-1/2 top-[38%] h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[34px] border border-white/60 bg-white/46 p-4 shadow-[0_36px_78px_rgba(103,94,255,0.16)] backdrop-blur-xl">
                  <div className="h-full w-full animate-pulse rounded-[24px] bg-[linear-gradient(135deg,rgba(255,255,255,0.56)_0%,rgba(230,225,255,0.7)_100%)]" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 rounded-[34px] border border-[#e5e8f4] bg-white/68 p-8 shadow-[0_22px_56px_rgba(101,116,171,0.08)] backdrop-blur-xl">
          <div className="grid gap-8 xl:grid-cols-3">
            <div className="space-y-5 xl:border-r xl:border-[#e6e9f4] xl:pr-10">
              <SkeletonBlock className="h-12 w-36" />
              <SkeletonBlock className="h-5 w-full" />
              <SkeletonBlock className="h-5 w-[90%]" />
              <SkeletonBlock className="h-5 w-[78%]" />
            </div>
            <div className="space-y-5 xl:border-r xl:border-[#e6e9f4] xl:px-10">
              <SkeletonBlock className="h-12 w-36" />
              <SkeletonBlock className="h-5 w-full" />
              <SkeletonBlock className="h-5 w-[92%]" />
              <SkeletonBlock className="h-5 w-[80%]" />
            </div>
            <div className="space-y-5 xl:pl-10">
              <SkeletonBlock className="h-12 w-32" />
              <SkeletonBlock className="h-5 w-[70%]" />
              <SkeletonBlock className="h-5 w-[66%]" />
              <SkeletonBlock className="h-5 w-[74%]" />
              <SkeletonBlock className="h-5 w-[62%]" />
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-6 xl:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
          <div className="rounded-[34px] border border-[#e5e8f4] bg-white/68 p-8 shadow-[0_22px_56px_rgba(101,116,171,0.08)] backdrop-blur-xl">
            <SkeletonBlock className="h-12 w-52" />
            <div className="mt-7 space-y-4">
              <SkeletonBlock className="h-6 w-full" />
              <SkeletonBlock className="h-6 w-[92%]" />
              <SkeletonBlock className="h-6 w-[88%]" />
              <SkeletonBlock className="h-6 w-[85%]" />
              <SkeletonBlock className="h-6 w-[80%]" />
            </div>
          </div>
          <div className="rounded-[34px] border border-[#e5e8f4] bg-white/68 p-8 shadow-[0_22px_56px_rgba(101,116,171,0.08)] backdrop-blur-xl">
            <SkeletonBlock className="h-12 w-40" />
            <div className="mt-7 space-y-3">
              {Array.from({ length: 6 }).map((_, index) => (
                <div
                  key={index}
                  className="rounded-[18px] border border-[#edf0f8] bg-white/46 px-6 py-5 backdrop-blur-md"
                >
                  <SkeletonBlock className="h-5 w-28" />
                  <SkeletonBlock className="mt-3 h-5 w-[82%]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
