import Image from "next/image";
import Link from "next/link";

function CompassIcon() {
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
      <path d="m14.8 9.2-2.6 5.6-5.6 2.6 2.6-5.6 5.6-2.6Z" />
    </svg>
  );
}

export default function NotFound() {
  return (
    <section className="relative flex min-h-full items-center overflow-hidden px-4 py-6 sm:px-6 sm:py-8 md:px-10 md:py-10 xl:px-[56px]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[6%] top-[12%] h-[150px] w-[150px] rounded-full bg-[radial-gradient(circle,rgba(196,180,255,0.16)_0%,rgba(196,180,255,0)_72%)] blur-3xl sm:left-[10%] sm:top-[18%] sm:h-[220px] sm:w-[220px]" />
        <div className="absolute right-[4%] top-[8%] h-[180px] w-[180px] rounded-full bg-[radial-gradient(circle,rgba(177,202,255,0.16)_0%,rgba(177,202,255,0)_72%)] blur-3xl sm:right-[8%] sm:top-[12%] sm:h-[260px] sm:w-[260px]" />
        <div className="absolute bottom-[6%] left-[28%] h-[120px] w-[120px] rounded-full bg-[radial-gradient(circle,rgba(222,194,255,0.14)_0%,rgba(222,194,255,0)_72%)] blur-3xl sm:bottom-[10%] sm:left-[34%] sm:h-[180px] sm:w-[180px]" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-[1180px] gap-6 overflow-hidden rounded-[28px] border border-[#dfe5f4] bg-[linear-gradient(180deg,rgba(255,255,255,0.84)_0%,rgba(246,249,255,0.76)_100%)] p-5 shadow-[0_28px_80px_rgba(95,109,166,0.14)] backdrop-blur-xl sm:gap-8 sm:rounded-[34px] sm:p-8 lg:grid-cols-[minmax(0,1fr)_minmax(360px,1fr)] lg:p-10">
        <div className="max-w-[620px]">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#d8dff1] bg-white/78 px-3 py-2 text-[13px] font-medium tracking-[-0.03em] text-[#52617f] shadow-[0_10px_28px_rgba(104,119,164,0.08)] sm:px-4 sm:text-[14px]">
            <span className="text-[#6176ff]">
              <CompassIcon />
            </span>
            <span>404 • Page Not Found</span>
          </div>

          <p className="mt-6 text-[56px] font-semibold leading-none tracking-[-0.09em] text-[#bcc7e6] sm:mt-8 sm:text-[74px] md:text-[92px]">
            404
          </p>

          <h1 className="mt-3 text-[34px] font-semibold leading-[1.02] tracking-[-0.08em] text-[var(--foreground)] sm:mt-4 sm:text-[44px] md:text-[58px]">
            This page drifted
            <br />
            off the map.
          </h1>

          <div className="mt-7 flex w-full flex-col gap-3 rounded-[22px] border border-white/70 bg-white/42 p-3 shadow-[0_18px_40px_rgba(101,117,168,0.10)] backdrop-blur-xl sm:mt-9 sm:inline-flex sm:w-auto sm:flex-row sm:rounded-[24px]">
            <Link
              href="/"
              className="group inline-flex h-[54px] w-full items-center justify-center gap-3 rounded-[18px] bg-[linear-gradient(135deg,var(--cta-start)_0%,var(--cta-mid)_55%,var(--cta-end)_100%)] px-6 text-[15px] font-medium tracking-[-0.03em] text-white shadow-[0_18px_40px_var(--shadow-soft)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_46px_var(--shadow-medium)] sm:h-[56px] sm:w-auto sm:px-7 sm:text-[16px]"
            >
              <span className="text-white">Go Home</span>
            </Link>

            <Link
              href="/projects"
              className="inline-flex h-[54px] w-full items-center justify-center rounded-[18px] border border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.74)_0%,rgba(243,247,255,0.58)_100%)] px-6 text-[15px] font-medium tracking-[-0.03em] text-[var(--foreground)] shadow-[0_14px_30px_rgba(101,117,168,0.10)] transition duration-300 hover:-translate-y-1 hover:border-[#d8e0f1] hover:shadow-[0_20px_38px_rgba(101,117,168,0.14)] sm:h-[56px] sm:w-auto sm:px-7 sm:text-[16px]"
            >
              View Projects
            </Link>
          </div>
        </div>

        <div className="relative order-first flex min-h-[220px] items-stretch justify-center sm:min-h-[280px] lg:order-none lg:min-h-[440px]">
          <div className="absolute h-[180px] w-[180px] rounded-full bg-[radial-gradient(circle,rgba(189,180,255,0.24)_0%,rgba(189,180,255,0.08)_42%,rgba(189,180,255,0)_72%)] blur-3xl sm:h-[280px] sm:w-[280px]" />
          <div className="absolute h-[220px] w-[220px] rounded-full border border-[#ebe7ff] opacity-90 sm:h-[340px] sm:w-[340px]" />
          <div className="absolute h-[184px] w-[184px] rounded-full border border-[#dfe5ff] opacity-90 sm:h-[276px] sm:w-[276px]" />
          <div className="relative flex w-full max-w-none items-center px-1 sm:px-2 md:px-3">
            <Image
              src="/assets/images/404-page-art.jpg"
              alt="404 illustration"
              width={960}
              height={720}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="h-full max-h-[240px] w-full object-contain brightness-[0.92] contrast-[1.18] saturate-[0.94] drop-shadow-[0_28px_60px_rgba(78,86,128,0.18)] sm:max-h-[320px] lg:max-h-none"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
