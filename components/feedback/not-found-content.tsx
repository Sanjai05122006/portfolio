import Image from "next/image";
import Link from "next/link";

const recoveryLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

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

type NotFoundContentProps = {
  navigationMode?: "client" | "document";
};

export function NotFoundContent({
  navigationMode = "client",
}: NotFoundContentProps) {
  const LinkTag = navigationMode === "document" ? "a" : Link;

  return (
    <div className="relative z-10 mx-auto flex min-h-full w-full max-w-[1240px] items-center px-4 py-6 sm:px-6 sm:py-8 md:px-10 md:py-12 xl:px-[56px]">
      <div className="grid w-full gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(360px,1fr)] lg:gap-8">
        <div className="max-w-[620px]">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#dde3f3] bg-white/74 px-3 py-2 text-[13px] font-medium tracking-[-0.03em] text-[#3f4960] shadow-[0_10px_28px_rgba(104,119,164,0.08)] sm:px-4 sm:text-[14px]">
            <span className="text-[#695fff]">
              <OrbitIcon />
            </span>
            <span>Page Not Found</span>
          </div>

          <p className="mt-6 text-[58px] font-semibold leading-none tracking-[-0.1em] text-[#c4cee8] sm:mt-8 sm:text-[82px] md:text-[104px]">
            404
          </p>

          <h1 className="mt-3 text-[36px] font-semibold leading-[1.01] tracking-[-0.08em] text-[var(--foreground)] sm:mt-4 sm:text-[48px] md:text-[64px]">
            The page you&apos;re looking
            <br />
            for isn&apos;t here.
          </h1>

          <div className="mt-7 grid w-full max-w-[560px] grid-cols-1 gap-3 rounded-[22px] border border-white/70 bg-white/42 p-3 text-[15px] leading-[1.7] tracking-[-0.03em] text-[#4c5d85] shadow-[0_18px_40px_rgba(101,117,168,0.10)] backdrop-blur-xl sm:mt-8 sm:grid-cols-2 sm:rounded-[24px] sm:text-[16px]">
            {recoveryLinks.map((link) => (
              <LinkTag
                key={link.href}
                href={link.href}
                className="inline-flex min-h-[52px] w-full items-center justify-center rounded-[18px] border border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.84)_0%,rgba(244,247,255,0.62)_100%)] px-5 py-3 transition hover:-translate-y-0.5 hover:text-[var(--foreground)] hover:shadow-[0_16px_30px_rgba(101,117,168,0.12)]"
              >
                {link.label}
              </LinkTag>
            ))}
          </div>
        </div>

        <div className="relative order-first flex min-h-[240px] items-stretch justify-center sm:min-h-[300px] lg:order-none lg:min-h-[460px]">
          <div className="absolute h-[190px] w-[190px] rounded-full bg-[radial-gradient(circle,rgba(194,183,255,0.28)_0%,rgba(194,183,255,0.08)_42%,rgba(194,183,255,0)_72%)] blur-3xl sm:h-[300px] sm:w-[300px]" />
          <div className="absolute h-[230px] w-[230px] rounded-full border border-[#e8e4ff] opacity-90 sm:h-[360px] sm:w-[360px]" />
          <div className="absolute h-[188px] w-[188px] rounded-full border border-[#dbe3ff] opacity-90 sm:h-[292px] sm:w-[292px]" />
          <div className="relative flex w-full max-w-none items-center px-1 sm:px-2 md:px-3">
            <Image
              src="/assets/images/404-page-art.jpg"
              alt="404 illustration"
              width={960}
              height={720}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="h-full max-h-[260px] w-full object-contain brightness-[0.92] contrast-[1.18] saturate-[0.94] drop-shadow-[0_32px_72px_rgba(78,86,128,0.20)] sm:max-h-[340px] lg:max-h-none"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
