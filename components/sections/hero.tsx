import Image from "next/image";
import Link from "next/link";

import heroArtwork from "@/landing-page-right-side.png";

const floatingCards = [
  {
    title: "Fast execution",
    detail: "Shipped systems with clean UX and scalable architecture.",
    position:
      "left-0 top-[-4%] -translate-x-[6%] lg:-translate-x-[10%] xl:-translate-x-[16%]",
  },
  {
    title: "AI-first thinking",
    detail: "Applied AI where it improves product quality, not just novelty.",
    position:
      "right-0 top-[-5%] translate-x-[4%] lg:translate-x-[10%] xl:translate-x-[16%]",
  },
  {
    title: "Strong product sense",
    detail: "Designing interfaces with hierarchy, clarity, and motion.",
    position:
      "bottom-[-12%] right-[12%] lg:right-[8%] xl:right-[12%]",
  },
];

function SparkIcon() {
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
      <path d="m12 3 1.9 4.86L19 9.75l-4.16 2.73L16.5 18 12 14.94 7.5 18l1.66-5.52L5 9.75l5.1-1.89L12 3Z" />
    </svg>
  );
}

function LayersIcon() {
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
      <path d="m12 3 8 4.5-8 4.5-8-4.5L12 3Z" />
      <path d="m4 12 8 4.5 8-4.5" />
      <path d="m4 16.5 8 4.5 8-4.5" />
    </svg>
  );
}

function OrbitIcon() {
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
      <circle cx="12" cy="12" r="2.5" />
      <path d="M4.93 4.93a10 4 45 1 0 14.14 14.14A10 4 45 1 0 4.93 4.93Z" />
      <path d="M19.07 4.93A10 4 135 1 1 4.93 19.07 10 4 135 1 1 19.07 4.93Z" />
    </svg>
  );
}

export function Hero() {
  return (
    <section className="relative h-full overflow-visible bg-transparent">
      <div className="pointer-events-none absolute inset-0">
        <div className="animate-drift absolute left-[-6%] top-[16%] h-[240px] w-[240px] rounded-full bg-[radial-gradient(circle,rgba(150,184,255,0.16)_0%,rgba(150,184,255,0)_68%)] blur-2xl" />
        <div className="animate-soft-pulse absolute right-[10%] top-[8%] h-[280px] w-[280px] rounded-full bg-[radial-gradient(circle,rgba(193,173,255,0.16)_0%,rgba(193,173,255,0)_72%)] blur-3xl" />
        <div className="absolute bottom-[6%] right-[18%] h-[180px] w-[180px] rounded-full bg-[radial-gradient(circle,rgba(171,195,255,0.12)_0%,rgba(171,195,255,0)_70%)] blur-3xl" />
        <svg
          aria-hidden="true"
          viewBox="0 0 1200 700"
          className="absolute left-[26%] top-[18%] hidden h-[58%] w-[54%] text-[#e3dcff] opacity-90 lg:block"
        >
          <path
            d="M48 202C182 127 300 124 428 182C542 233 661 302 824 292C946 284 1059 230 1154 165"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            className="animate-soft-pulse"
          />
          <path
            d="M14 324C185 248 341 248 482 305C627 363 789 444 1188 395"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeDasharray="8 10"
            className="animate-drift"
          />
          <path
            d="M188 455C318 393 453 396 584 452C706 504 830 552 1034 523"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.7"
          />
        </svg>
        <svg
          aria-hidden="true"
          viewBox="0 0 1200 240"
          className="absolute bottom-[2%] left-[12%] hidden h-[18%] w-[64%] text-[#eadfff] opacity-90 lg:block"
        >
          <path
            d="M34 157C178 121 296 111 432 134C562 156 651 196 791 197C915 198 1028 165 1160 112"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            className="animate-soft-pulse"
          />
        </svg>
      </div>

      <div className="grid h-full min-h-0 w-full items-center gap-8 overflow-visible px-6 py-6 md:px-10 md:py-8 lg:grid-cols-[minmax(480px,560px)_minmax(0,1fr)] lg:gap-6 xl:grid-cols-[minmax(500px,590px)_minmax(0,1fr)] xl:px-[56px] xl:py-8">
        <div className="relative z-10 max-w-[640px] pt-[8px]">
          <div className="animate-fade-up inline-flex items-center gap-3 rounded-full border border-[#dfe5ee] bg-white/80 px-[17px] py-[10px] text-[14px] font-medium tracking-[-0.02em] text-[#5d6778] shadow-[0_10px_30px_rgba(105,122,165,0.08)] backdrop-blur-md">
            <span className="h-2.5 w-2.5 rounded-full bg-[#79b85c]" />
            <span>Available for opportunities</span>
          </div>

          <h1 className="animate-fade-up-delay-1 mt-8 text-[56px] font-semibold leading-[1.01] tracking-[-0.08em] text-[var(--foreground)] sm:text-[62px] xl:text-[72px]">
            Turning real-world
            <br />
            problems into
            <br />
            <span className="bg-[linear-gradient(135deg,#7f99ff_0%,#99b3ff_42%,#c1b0ff_100%)] bg-clip-text text-transparent">
              scalable solutions.
            </span>
          </h1>

          <p className="animate-fade-up-delay-2 mt-6 max-w-[560px] text-[18px] leading-[1.75] tracking-[-0.03em] text-[var(--muted)]">
            I build full-stack and mobile applications with AI integration,
            focused on performance, scalability, and real user impact.
          </p>

          <div className="animate-fade-up-delay-3 mt-7 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/projects"
              className="group inline-flex h-[58px] items-center justify-center gap-3 rounded-[16px] bg-[linear-gradient(135deg,var(--cta-start)_0%,var(--cta-mid)_55%,var(--cta-end)_100%)] px-7 text-[16px] font-medium tracking-[-0.03em] text-white shadow-[0_18px_40px_var(--shadow-soft)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_26px_50px_var(--shadow-medium)]"
            >
              <span className="text-white">View My Work</span>
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-4 w-4 shrink-0 text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 17L17 7" />
                <path d="M9 7H17V15" />
              </svg>
            </Link>

            <Link
              href="mailto:sanjaimurugan08@gmail.com?subject=Resume%20Request"
              className="group inline-flex h-[58px] items-center justify-center gap-3 rounded-[16px] border border-[var(--line-strong)] bg-[var(--surface-soft)]/85 px-7 text-[16px] font-medium tracking-[-0.03em] text-[var(--foreground)] shadow-[0_16px_32px_var(--shadow-soft)] backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_42px_var(--shadow-medium)]"
            >
              <span className="text-[var(--foreground)]">Download Resume</span>
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-4 w-4 shrink-0 text-[var(--foreground)] transition-transform duration-300 group-hover:translate-y-0.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 4v11" />
                <path d="m7 11 5 5 5-5" />
                <path d="M5 20h14" />
              </svg>
            </Link>
          </div>

        </div>

        <div className="relative z-10 flex min-h-0 items-center justify-center overflow-visible pt-2 lg:justify-end lg:pr-[8px] xl:pr-[12px]">
          <div className="relative w-full max-w-[720px] overflow-visible md:max-w-[780px] lg:max-w-[860px] xl:max-w-[920px]">
            {floatingCards.map((card, index) => (
              <div
                key={card.title}
                className={`animate-float${index % 2 === 0 ? "" : "-delay"} absolute z-20 hidden w-[210px] rounded-[20px] border border-[#dde5f2] bg-white/78 p-4 shadow-[0_20px_48px_rgba(88,103,151,0.12)] backdrop-blur-xl xl:block ${card.position}`}
              >
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#edf2ff_0%,#f6f3ff_100%)] text-[#6078ea] shadow-[0_10px_24px_rgba(109,131,255,0.18)]">
                  {index === 0 ? <SparkIcon /> : index === 1 ? <OrbitIcon /> : <LayersIcon />}
                </div>
                <p className="text-[15px] font-semibold tracking-[-0.03em] text-[var(--foreground)]">
                  {card.title}
                </p>
                <p className="mt-1 text-[13px] leading-[1.6] tracking-[-0.02em] text-[var(--muted)]">
                  {card.detail}
                </p>
              </div>
            ))}

            <div className="absolute left-[10%] top-[12%] h-[68%] w-[68%] rounded-full bg-[radial-gradient(circle,rgba(170,190,255,0.08)_0%,rgba(170,190,255,0)_72%)] blur-3xl" />
            <div className="relative animate-fade-up-delay-2 mx-auto w-full max-w-[620px] rounded-[30px] border border-[#dfe6f4] bg-[linear-gradient(180deg,rgba(255,255,255,0.84)_0%,rgba(247,249,255,0.72)_100%)] p-4 shadow-[0_35px_90px_rgba(93,111,171,0.16)] backdrop-blur-xl sm:max-w-[680px] sm:rounded-[32px] sm:p-5 lg:max-w-[760px] xl:max-w-[820px]">
              <div className="absolute inset-x-[14%] top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(172,189,255,0.8),transparent)]" />
              <div className="animate-soft-pulse absolute -left-6 top-[18%] hidden h-14 w-14 rounded-full bg-[radial-gradient(circle,rgba(174,194,255,0.2)_0%,rgba(174,194,255,0)_72%)] blur-xl lg:block" />
              <div className="animate-soft-pulse absolute -right-8 bottom-[14%] hidden h-16 w-16 rounded-full bg-[radial-gradient(circle,rgba(197,182,255,0.18)_0%,rgba(197,182,255,0)_72%)] blur-xl lg:block" />
              <Image
                src={heroArtwork}
                alt="Landing page hero visual"
                priority
                className="h-auto max-h-[34vh] w-full object-contain sm:max-h-[38vh] md:max-h-[40vh] lg:max-h-[46vh] xl:max-h-[52vh]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
