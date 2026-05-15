import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  BadgeInfo,
  Bot,
  Braces,
  Download,
  Gauge,
  GraduationCap,
  Layers3,
  Lightbulb,
  Search,
  Smartphone,
  Sparkles,
  Target,
  UserRound,
} from "lucide-react";

const driveItems = [
  {
    title: "Problem Solver",
    description: "I enjoy solving real-world problems with clear and efficient systems.",
    icon: <Lightbulb className="h-5 w-5" strokeWidth={1.8} />,
  },
  {
    title: "Impact Focused",
    description: "I build solutions that create measurable impact.",
    icon: <Target className="h-5 w-5" strokeWidth={1.8} />,
  },
  {
    title: "Always Learning",
    description: "I constantly explore new technologies and improve my skills.",
    icon: <Sparkles className="h-5 w-5" strokeWidth={1.8} />,
  },
  {
    title: "User Centric",
    description: "I design and build with users and real-world needs in mind.",
    icon: <UserRound className="h-5 w-5" strokeWidth={1.8} />,
  },
];

const workflowSteps = [
  {
    number: "01",
    title: "Understand",
    description: "Analyze real-world problems and system requirements.",
    icon: <Search className="h-5 w-5" strokeWidth={1.8} />,
  },
  {
    number: "02",
    title: "Design",
    description: "Plan scalable architecture and technology approach.",
    icon: <Layers3 className="h-5 w-5" strokeWidth={1.8} />,
  },
  {
    number: "03",
    title: "Build",
    description: "Develop full-stack systems with clean, efficient code.",
    icon: <Braces className="h-5 w-5" strokeWidth={1.8} />,
  },
  {
    number: "04",
    title: "Optimize",
    description: "Improve performance, scalability, and reliability.",
    icon: <Gauge className="h-5 w-5" strokeWidth={1.8} />,
  },
  {
    number: "05",
    title: "Deliver",
    description: "Ship production-ready solutions with real impact.",
    icon: <ArrowUpRight className="h-5 w-5" strokeWidth={1.8} />,
  },
];

const techApproach = [
  "Focus on scalable architecture",
  "Prefer real-world problem-solving over demos",
  "Build systems, not just UI",
  "Prioritize performance and reliability",
  "Keep solutions maintainable, modular, and production-ready",
];

const accomplishments = [
  "Student Wellness Ambassador — SSN Campus",
  "Core Member — Computer Society of India (CSI)",
  "Active in technical events, workshops, and student-led programs",
  "Contributed to collaborative technical communities and peer learning",
  "Participated consistently in technical sessions and practical team initiatives",
];

const education = [
  {
    title: "SSN College of Engineering",
    details: ["B.E. Computer Science", "2024 - Present", "CGPA: 8.1"],
  },
  {
    title: "Sri Gayathri Matriculation School",
    details: ["Class 12: 95.33%", "Class 10: 89.2%", "2022 - 2024"],
  },
];

function SectionCard({
  title,
  children,
  icon,
  className = "",
}: {
  title: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`rounded-[28px] border border-[#dfe5f4] bg-[linear-gradient(180deg,rgba(255,255,255,0.82)_0%,rgba(248,250,255,0.72)_100%)] p-6 shadow-[0_18px_40px_rgba(108,121,173,0.08)] backdrop-blur-md transition duration-300 hover:-translate-y-1 ${className}`}
    >
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-[24px] font-semibold tracking-[-0.05em] text-[var(--foreground)]">
          {title}
        </h2>
        {icon ? (
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[linear-gradient(180deg,#f1edff_0%,#edf5ff_100%)] text-[#746cff] shadow-[0_10px_22px_rgba(109,124,176,0.08)]">
            {icon}
          </div>
        ) : null}
      </div>
      <div className="mt-5">{children}</div>
    </section>
  );
}

function Bullet({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <li className="flex items-start gap-3 text-[14px] leading-[1.65] tracking-[-0.02em] text-[var(--muted)]">
      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[linear-gradient(135deg,#7e86ff_0%,#9d79ff_100%)]" />
      <span>{children}</span>
    </li>
  );
}

export function AboutSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-8%] top-[8%] h-[260px] w-[260px] rounded-full bg-[radial-gradient(circle,rgba(208,188,255,0.14)_0%,rgba(208,188,255,0)_72%)] blur-3xl" />
        <div className="absolute right-[-4%] top-[10%] h-[300px] w-[300px] rounded-full bg-[radial-gradient(circle,rgba(182,206,255,0.14)_0%,rgba(182,206,255,0)_72%)] blur-3xl" />
        <div className="absolute bottom-[6%] left-[20%] h-[240px] w-[240px] rounded-full bg-[radial-gradient(circle,rgba(221,200,255,0.1)_0%,rgba(221,200,255,0)_72%)] blur-3xl" />
        <svg
          aria-hidden="true"
          viewBox="0 0 1600 1200"
          className="absolute inset-0 hidden h-full w-full text-[#d8d6fb] opacity-80 lg:block"
        >
          <path
            d="M72 244c128-82 286-112 474-85 176 26 312 102 474 138 178 40 354 2 580-120"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            className="animate-soft-pulse"
          />
          <path
            d="M18 458c164-88 332-113 506-80 179 34 304 115 470 154 188 44 375 17 588-92"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeDasharray="5 10"
            className="animate-drift"
          />
          <path
            d="M154 792c176-48 334-53 486-13 145 39 270 104 444 117 154 11 300-18 490-105"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="round"
            opacity="0.72"
          />
        </svg>
      </div>

      <div className="relative px-6 py-8 md:px-10 xl:px-[56px] xl:py-10">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.06fr)_minmax(380px,0.94fr)]">
          <div className="rounded-[30px] border border-[#e2e7f3] bg-white/54 p-6 shadow-[0_16px_40px_rgba(112,125,174,0.06)] backdrop-blur-sm lg:border-none lg:bg-transparent lg:p-0 lg:shadow-none">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#dddff9] bg-white/84 px-3 py-1.5 text-[13px] font-medium tracking-[-0.03em] text-[#5b62b0] shadow-[0_8px_20px_rgba(121,132,181,0.08)]">
              <BadgeInfo className="h-3.5 w-3.5" strokeWidth={1.9} />
              <span className="h-2 w-2 rounded-full bg-[#7a72ff]" />
              <span>About Me</span>
            </div>

            <h1 className="mt-6 max-w-[620px] text-[42px] font-semibold leading-[1.03] tracking-[-0.075em] text-[var(--foreground)] md:text-[54px] xl:text-[64px]">
              Turning real-world
              <br />
              problems into{" "}
              <span className="bg-[linear-gradient(135deg,#6178ff_0%,#8a78ff_42%,#68a8ff_100%)] bg-clip-text text-transparent">
                impactful
                <br />
                digital systems.
              </span>
            </h1>

            <p className="mt-5 max-w-[620px] text-[16px] leading-[1.95] tracking-[-0.02em] text-[var(--muted)] md:text-[17px]">
              B.E. Computer Science student at SSN College of Engineering,
              focused on building scalable full-stack and mobile applications
              with AI integration. I work on real-world systems that emphasize
              performance, scalability, and user impact.
            </p>

            <div className="mt-7 flex flex-col gap-4 sm:flex-row">
              <Link
                href="mailto:sanjai05126@gmail.com?subject=Let%27s%20Connect"
                className="inline-flex h-[52px] items-center justify-center gap-3 rounded-[14px] bg-[linear-gradient(135deg,#edf0ff_0%,#e7ecff_46%,#e2eeff_100%)] px-6 text-[15px] font-medium tracking-[-0.03em] text-[#4d5d9c] shadow-[0_14px_28px_rgba(118,132,180,0.1),inset_0_1px_0_rgba(255,255,255,0.88)] transition duration-300 hover:-translate-y-1"
              >
                <span>Let&apos;s Connect</span>
                <ArrowUpRight className="h-4 w-4" strokeWidth={1.8} />
              </Link>

              <Link
                href="/assets/resume/Resume-Final-Draft.pdf"
                download="Sanjai-M-Resume.pdf"
                className="inline-flex h-[52px] items-center justify-center gap-3 rounded-[14px] bg-[linear-gradient(135deg,#f3eeff_0%,#ecefff_46%,#e7f1ff_100%)] px-6 text-[15px] font-medium tracking-[-0.03em] text-[#5663a8] shadow-[0_14px_28px_rgba(118,132,180,0.08),inset_0_1px_0_rgba(255,255,255,0.92)] transition duration-300 hover:-translate-y-1"
              >
                <span>Download Resume</span>
                <Download className="h-4 w-4" strokeWidth={1.8} />
              </Link>
            </div>
          </div>

          <SectionCard title="Who I Am" className="relative overflow-hidden">
            <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(260px,300px)] lg:items-center">
              <div>
                <ul className="space-y-4">
                  <Bullet>Full-stack developer focused on scalable systems</Bullet>
                  <Bullet>
                    Experience with React, Next.js, Flutter, and backend systems
                  </Bullet>
                  <Bullet>Strong focus on AI-powered applications</Bullet>
                  <Bullet>Builds real-world production-level solutions</Bullet>
                  <Bullet>Approaches products with both engineering depth and user clarity</Bullet>
                </ul>
              </div>

              <div className="hidden lg:flex lg:justify-center">
                <div className="relative h-[258px] w-[258px] -translate-x-1 xl:-translate-x-2">
                  <div className="absolute inset-[8%] rounded-[38px] bg-[radial-gradient(circle,rgba(173,161,255,0.2)_0%,rgba(173,161,255,0.08)_40%,rgba(173,161,255,0)_76%)] blur-3xl" />
                  <div className="absolute inset-[6%] rounded-[34px] bg-[linear-gradient(145deg,rgba(236,233,255,0.9)_0%,rgba(230,239,255,0.8)_100%)] shadow-[0_24px_42px_rgba(139,145,218,0.14)]" />
                  <div className="absolute inset-[9%] rounded-[30px] border border-white/72 bg-[linear-gradient(180deg,rgba(255,255,255,0.8)_0%,rgba(241,243,255,0.42)_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.92)] backdrop-blur-sm" />
                  <Image
                    src="/assets/images/about-icon.png"
                    alt="About page profile icon"
                    className="animate-float relative z-10 mx-auto h-full w-full scale-[0.8] rounded-[28px] object-cover drop-shadow-[0_20px_30px_rgba(142,136,232,0.14)]"
                    priority
                    width={258}
                    height={258}
                    sizes="258px"
                  />
                </div>
              </div>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {[
                ["Scalable", "Architecture"],
                ["AI Integrated", "Applications"],
                ["Multi-Platform", "Web + Mobile"],
                ["Performance", "Driven Systems"],
              ].map(([title, subtitle]) => (
                <div
                  key={title}
                  className="rounded-[18px] border border-[#e6eaf6] bg-white/82 px-4 py-4 text-center shadow-[0_10px_22px_rgba(116,129,181,0.06)] transition duration-300 hover:-translate-y-1"
                >
                  <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-2xl bg-[linear-gradient(180deg,#f0edff_0%,#eef4ff_100%)] text-[#756aff]">
                    {title === "Scalable" ? (
                      <Layers3 className="h-4 w-4" strokeWidth={1.8} />
                    ) : title === "AI Integrated" ? (
                      <Bot className="h-4 w-4" strokeWidth={1.8} />
                    ) : title === "Multi-Platform" ? (
                      <Smartphone className="h-4 w-4" strokeWidth={1.8} />
                    ) : (
                      <Gauge className="h-4 w-4" strokeWidth={1.8} />
                    )}
                  </div>
                  <p className="text-[14px] font-semibold tracking-[-0.03em] text-[var(--foreground)]">
                    {title}
                  </p>
                  <p className="mt-1 text-[12px] tracking-[-0.02em] text-[var(--muted)]">
                    {subtitle}
                  </p>
                </div>
              ))}
            </div>
          </SectionCard>
        </div>

        <SectionCard title="What Drives Me" className="mt-6">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {driveItems.map((item) => (
              <div
                key={item.title}
                className="rounded-[22px] border border-[#e6ebf6] bg-white/78 px-5 py-6 shadow-[0_10px_22px_rgba(109,124,176,0.06)] transition duration-300 hover:-translate-y-1"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[linear-gradient(180deg,#f0ecff_0%,#edf4ff_100%)] text-[#746cff]">
                  {item.icon}
                </div>
                <h3 className="mt-4 text-[16px] font-semibold tracking-[-0.04em] text-[var(--foreground)]">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-[220px] text-[14px] leading-[1.72] tracking-[-0.02em] text-[var(--muted)]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard title="How I Work" className="mt-6">
          <div className="relative grid gap-5 xl:grid-cols-5">
            {workflowSteps.map((step) => (
              <div key={step.number} className="relative rounded-[20px] border border-[#ebeff8] bg-white/72 px-4 py-5 shadow-[0_8px_20px_rgba(112,124,176,0.05)]">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[linear-gradient(180deg,#f1edff_0%,#edf5ff_100%)] text-[#746cff]">
                    {step.icon}
                  </div>
                  <div>
                    <p className="text-[14px] font-semibold tracking-[-0.03em] text-[#746cff]">
                      {step.number}
                    </p>
                    <p className="text-[16px] font-semibold tracking-[-0.04em] text-[var(--foreground)]">
                      {step.title}
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-[14px] leading-[1.72] tracking-[-0.02em] text-[var(--muted)]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </SectionCard>

        <div className="mt-6 grid gap-5 xl:grid-cols-3">
          <SectionCard
            title="Tech Approach"
            icon={<Layers3 className="h-5 w-5" strokeWidth={1.8} />}
          >
            <ul className="space-y-4">
              {techApproach.map((item) => (
                <Bullet key={item}>{item}</Bullet>
              ))}
            </ul>
          </SectionCard>

          <SectionCard
            title="Accomplishments"
            icon={<Sparkles className="h-5 w-5" strokeWidth={1.8} />}
          >
            <ul className="space-y-4">
              {accomplishments.map((item) => (
                <Bullet key={item}>{item}</Bullet>
              ))}
            </ul>
          </SectionCard>

          <SectionCard
            title="Education"
            icon={<GraduationCap className="h-5 w-5" strokeWidth={1.8} />}
            className="relative overflow-hidden"
          >
            <div className="space-y-6">
              {education.map((item) => (
                <div key={item.title}>
                  <h3 className="text-[15px] font-semibold tracking-[-0.03em] text-[var(--foreground)]">
                    {item.title}
                  </h3>
                  <div className="mt-2 space-y-1">
                    {item.details.map((detail) => (
                      <p
                        key={detail}
                        className="text-[14px] leading-[1.65] tracking-[-0.02em] text-[var(--muted)]"
                      >
                        {detail}
                      </p>
                    ))}
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
