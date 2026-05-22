import Link from "next/link";

export default function ProjectNotFound() {
  return (
    <section className="relative flex min-h-full items-center overflow-hidden px-6 py-10 md:px-10 xl:px-[56px]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-[14%] h-[220px] w-[220px] rounded-full bg-[radial-gradient(circle,rgba(194,183,255,0.16)_0%,rgba(194,183,255,0)_72%)] blur-3xl" />
        <div className="absolute right-[8%] top-[10%] h-[260px] w-[260px] rounded-full bg-[radial-gradient(circle,rgba(177,202,255,0.16)_0%,rgba(177,202,255,0)_72%)] blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[980px] rounded-[34px] border border-[#dfe5f4] bg-[linear-gradient(180deg,rgba(255,255,255,0.86)_0%,rgba(246,249,255,0.76)_100%)] p-8 shadow-[0_28px_80px_rgba(95,109,166,0.14)] backdrop-blur-xl md:p-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#dde3f3] bg-white/74 px-4 py-2 text-[14px] font-medium tracking-[-0.03em] text-[#3f4960] shadow-[0_10px_28px_rgba(104,119,164,0.08)]">
          <span className="h-2.5 w-2.5 rounded-full bg-[#6a79ff]" />
          <span>Project Not Found</span>
        </div>

        <h1 className="mt-8 text-[48px] font-semibold leading-[1.02] tracking-[-0.08em] text-[var(--foreground)] md:text-[62px]">
          That project page
          <br />
          isn&apos;t available.
        </h1>

        <p className="mt-6 max-w-[560px] text-[18px] leading-[1.75] tracking-[-0.03em] text-[var(--muted)]">
          The project slug may be incorrect, the case study may have moved, or the link
          no longer exists. You can head back to the full project index from here.
        </p>

        <div className="mt-9 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/projects"
            className="inline-flex h-[56px] items-center justify-center rounded-[16px] bg-[linear-gradient(135deg,var(--cta-start)_0%,var(--cta-mid)_55%,var(--cta-end)_100%)] px-7 text-[16px] font-medium tracking-[-0.03em] text-white shadow-[0_18px_40px_var(--shadow-soft)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_46px_var(--shadow-medium)]"
          >
            Back to Projects
          </Link>

          <Link
            href="/"
            className="inline-flex h-[56px] items-center justify-center rounded-[16px] border border-[#d8e0f1] bg-white/74 px-7 text-[16px] font-medium tracking-[-0.03em] text-[var(--foreground)] shadow-[0_14px_30px_rgba(101,117,168,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_38px_rgba(101,117,168,0.12)]"
          >
            Go Home
          </Link>
        </div>
      </div>
    </section>
  );
}
