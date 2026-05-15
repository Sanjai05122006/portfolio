"use client";

import type { FormEvent } from "react";
import { useEffect, useState } from "react";

function MailIcon() {
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
      <path d="M3 6.75h18v10.5H3z" />
      <path d="m4 8 8 6 8-6" />
    </svg>
  );
}

function UserIcon() {
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
      <path d="M18 20a6 6 0 0 0-12 0" />
      <circle cx="12" cy="10" r="4" />
    </svg>
  );
}

function ChatIcon() {
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
      <path d="M21 15a3 3 0 0 1-3 3H8l-5 3V6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3z" />
      <path d="M8 9h8" />
      <path d="M8 13h5" />
    </svg>
  );
}

function PenIcon() {
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
      <path d="m12 20 7-7" />
      <path d="M18 13a2.83 2.83 0 1 0-4-4L7 16v4h4Z" />
      <path d="M16 7 17.5 5.5" />
    </svg>
  );
}

function SendIcon() {
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
      <path d="M22 2 11 13" />
      <path d="m22 2-7 20-4-9-9-4Z" />
    </svg>
  );
}

function ShieldIcon() {
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
      <path d="M12 3 5 6v5c0 5 3.4 8.74 7 10 3.6-1.26 7-5 7-10V6l-7-3Z" />
      <path d="m9.5 12 1.7 1.7 3.3-3.7" />
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
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="3" />
      <path d="M3 10h18" />
      <path d="M8 14h3" />
    </svg>
  );
}
function ContactField({
  icon,
  label,
  placeholder,
  type = "text",
  multiline = false,
  name,
}: {
  icon: React.ReactNode;
  label: string;
  placeholder: string;
  type?: string;
  multiline?: boolean;
  name: string;
}) {
  const sharedClassName =
    "w-full bg-transparent text-[17px] leading-7 tracking-[-0.02em] text-[var(--foreground)] placeholder:text-[#808aa0] focus:outline-none";

  return (
    <label
      className={`group flex rounded-[18px] border border-[#dde4f1] bg-white/70 shadow-[0_8px_24px_rgba(110,126,172,0.06),inset_0_1px_0_rgba(255,255,255,0.8)] backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:border-[#cfd7f3] hover:bg-white/82 hover:shadow-[0_18px_34px_rgba(122,136,190,0.12)] focus-within:-translate-y-0.5 focus-within:border-[#8d98ff] focus-within:shadow-[0_0_0_4px_rgba(132,148,255,0.14),0_18px_36px_rgba(122,136,190,0.12)] ${
        multiline ? "items-start gap-4 px-5 py-5" : "items-center gap-4 px-5 py-4"
      }`}
    >
      <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[linear-gradient(180deg,#f7f9ff_0%,#eef2ff_100%)] text-[#58627a] shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] transition duration-300 group-hover:scale-[1.03] group-hover:text-[#6176ff] group-focus-within:text-[#6176ff]">
        {icon}
      </span>

      <span className="flex min-w-0 flex-1 flex-col">
        <span className="text-[15px] font-medium tracking-[-0.03em] text-[#46516a]">{label}</span>
        {multiline ? (
          <textarea
            name={name}
            rows={6}
            placeholder={placeholder}
            className={`${sharedClassName} mt-1 resize-none`}
          />
        ) : (
          <input
            name={name}
            type={type}
            placeholder={placeholder}
            className={`${sharedClassName} mt-1`}
          />
        )}
      </span>
    </label>
  );
}

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  useEffect(() => {
    if (!submitState) {
      return;
    }

    const timer = window.setTimeout(() => {
      setSubmitState(null);
    }, 3500);

    return () => window.clearTimeout(timer);
  }, [submitState]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      subject: String(formData.get("subject") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
      website: String(formData.get("website") ?? "").trim(),
    };

    if (!payload.name || !payload.email || !payload.subject || !payload.message) {
      setSubmitState({
        type: "error",
        message: "Please fill in all fields before sending your message.",
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitState(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = (await response.json()) as { error?: string; message?: string };

      if (!response.ok) {
        setSubmitState({
          type: "error",
          message: result.error ?? "Something went wrong while sending your message.",
        });
        return;
      }

      form.reset();
      setSubmitState({
        type: "success",
        message: result.message ?? "Your message has been sent successfully.",
      });
    } catch {
      setSubmitState({
        type: "error",
        message: "Unable to send your message right now. Please try again shortly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative overflow-hidden py-6 md:py-8">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-10%] bottom-[-14%] h-[380px] w-[380px] rounded-full bg-[radial-gradient(circle,rgba(207,171,255,0.22)_0%,rgba(207,171,255,0.08)_34%,rgba(207,171,255,0)_70%)] blur-3xl" />
        <div className="absolute right-[-4%] top-[0%] h-[430px] w-[430px] rounded-full bg-[radial-gradient(circle,rgba(202,197,255,0.24)_0%,rgba(202,197,255,0.08)_36%,rgba(202,197,255,0)_74%)] blur-3xl" />
        <div className="absolute right-[8%] top-[24%] h-[190px] w-[190px] rounded-full bg-[radial-gradient(circle,rgba(170,202,255,0.26)_0%,rgba(170,202,255,0.06)_38%,rgba(170,202,255,0)_72%)] blur-3xl" />
        <svg
          aria-hidden="true"
          viewBox="0 0 1400 800"
          className="absolute inset-0 hidden h-full w-full text-[#dcdcf8] opacity-80 lg:block"
        >
          <path
            d="M32 514c120-102 250-142 406-125 173 18 286 105 411 157 145 61 319 55 519-53"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="4 10"
            className="animate-soft-pulse"
          />
          <path
            d="M238 232c86-53 186-77 302-66 132 13 212 71 305 119 106 54 230 82 406 25"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.75"
            className="animate-drift"
          />
          <path
            d="M104 664c143-48 286-53 419-21 115 28 218 80 372 86 124 4 228-25 360-90"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.65"
          />
        </svg>
      </div>

      <div className="relative grid gap-6 px-6 py-5 md:px-10 md:py-5 lg:grid-cols-[minmax(0,1.24fr)_minmax(320px,0.84fr)] lg:items-start lg:gap-6 lg:px-10 xl:px-[56px] xl:py-6">
        <div className="relative z-10 pt-1">
          <h1 className="max-w-[640px] text-[48px] font-semibold leading-[0.98] tracking-[-0.075em] text-[var(--foreground)] md:text-[56px] xl:text-[64px]">
            Let&apos;s build something
            <br />
            <span className="bg-[linear-gradient(135deg,#4168ff_0%,#6e85ff_38%,#8d63ff_100%)] bg-clip-text text-transparent">
              amazing
            </span>{" "}
            together.
          </h1>

          <form className="mt-6 grid gap-4" onSubmit={handleSubmit}>
            <div className="grid gap-4 md:grid-cols-2">
              <ContactField
                icon={<UserIcon />}
                label="Your Name"
                placeholder="Enter your name"
                name="name"
              />
              <ContactField
                icon={<MailIcon />}
                label="Your Email"
                placeholder="Enter your email"
type="email"
                name="email"
              />
            </div>

            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
              aria-hidden="true"
            />

            <ContactField
              icon={<ChatIcon />}
              label="Subject"
              placeholder="What&apos;s this about?"
              name="subject"
            />
            <ContactField
              icon={<PenIcon />}
              label="Your Message"
              placeholder="Tell me about your project..."
              multiline
              name="message"
            />

            <div className="flex flex-col gap-4 pt-1 md:flex-row md:items-center md:justify-between">
              <button
                type="submit"
                disabled={isSubmitting}
                className="group inline-flex h-[50px] w-fit items-center justify-center gap-3 rounded-[14px] bg-[#171b25] px-6 text-[15px] font-medium tracking-[-0.03em] text-white shadow-[0_16px_34px_rgba(34,39,59,0.24)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_42px_rgba(72,82,122,0.28)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[rgba(90,118,232,0.18)]"
              >
                <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                <span className="transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                  <SendIcon />
                </span>
              </button>

              <div className="flex items-center gap-2 text-[15px] tracking-[-0.02em] text-[#62708a]">
                <span className="text-[#5673ff]">
                  <ShieldIcon />
                </span>
                <span>Your information is safe and secure.</span>
              </div>
            </div>

          </form>
        </div>

        <div className="relative z-10 flex flex-col gap-4 pt-1">
          <div className="relative hidden h-[220px] overflow-hidden lg:block xl:h-[240px]">
            <div className="animate-float absolute left-[10%] top-[10%] h-[28px] w-[28px] rounded-full bg-[radial-gradient(circle,rgba(139,107,255,0.88)_0%,rgba(139,107,255,0.18)_68%,rgba(139,107,255,0)_100%)] shadow-[0_16px_32px_rgba(113,108,255,0.24)]" />
            <div className="animate-float-delay absolute right-[8%] top-[8%] text-[#ecefff]">
              <svg
                aria-hidden="true"
                viewBox="0 0 120 120"
                className="h-20 w-20 -rotate-[10deg] drop-shadow-[0_22px_28px_rgba(186,194,255,0.45)]"
                fill="currentColor"
              >
                <path d="M112 8 54 112l-12-42L0 58 112 8Z" />
              </svg>
            </div>
            <svg
              aria-hidden="true"
              viewBox="0 0 520 280"
              className="absolute inset-0 h-full w-full text-[#d8daf5] animate-soft-pulse"
            >
              <path
                d="M80 148c42-66 106-88 186-82 70 5 139 31 220 111"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray="4 8"
              />
              <path
                d="M112 208c98 48 217 48 322-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeDasharray="4 8"
              />
              <path
                d="M152 106c58-18 116-13 182 18"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeDasharray="3 9"
                opacity="0.75"
              />
            </svg>
            <div className="animate-float-delay absolute bottom-[20%] right-[24%] h-8 w-8 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.96)_0%,rgba(233,237,252,0.92)_55%,rgba(220,226,247,0.3)_100%)] shadow-[0_18px_36px_rgba(184,191,232,0.38)]" />
            <div className="absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(223,220,255,0.72)_0%,rgba(223,220,255,0.18)_58%,rgba(223,220,255,0)_72%)]" />
            <div className="animate-float absolute left-1/2 top-[56%] h-[180px] w-[180px] -translate-x-1/2 -translate-y-1/2 rotate-[7deg] rounded-[32px] border border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.34)_0%,rgba(255,255,255,0.12)_100%)] shadow-[0_30px_60px_rgba(149,161,227,0.14)] backdrop-blur-xl" />
            <div className="animate-float-delay absolute left-1/2 top-[56%] flex h-[132px] w-[132px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[30px] bg-[radial-gradient(circle_at_50%_22%,rgba(255,255,255,0.96)_0%,rgba(247,248,255,0.94)_45%,rgba(197,191,255,0.94)_100%)] shadow-[0_32px_52px_rgba(117,124,240,0.34)]">
              <svg
                aria-hidden="true"
                viewBox="0 0 160 120"
                className="h-[74px] w-[92px] text-[#d7daf2]"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="10" y="18" width="140" height="86" rx="18" fill="url(#mailFill)" />
                <path d="m18 32 62 46 62-46" />
                <defs>
                  <linearGradient id="mailFill" x1="80" x2="80" y1="18" y2="104">
                    <stop stopColor="#ffffff" />
                    <stop offset="1" stopColor="#e9e9ff" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>

          <div className="animate-fade-up-delay-2 flex items-center gap-4 rounded-[18px] border border-[#dde4f1] bg-white/62 px-5 py-4 shadow-[0_16px_40px_rgba(102,116,168,0.08),inset_0_1px_0_rgba(255,255,255,0.86)] backdrop-blur-md">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[16px] bg-[linear-gradient(180deg,#f7f8ff_0%,#eef2ff_100%)] text-[#4e6fff] shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]">
              <CalendarIcon />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-[16px] font-semibold tracking-[-0.04em] text-[var(--foreground)]">
                Available for new opportunities
              </span>
              <span className="block text-[15px] tracking-[-0.02em] text-[var(--muted)]">
                Open to full-time roles and exciting collaborations.
              </span>
            </span>
            <span className="h-3 w-3 shrink-0 rounded-full bg-[#79c35f]" />
          </div>
        </div>
      </div>

      {submitState ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(16,19,31,0.28)] px-6 backdrop-blur-sm">
          <div className="w-full max-w-[420px] rounded-[24px] border border-[#dde4f1] bg-white px-6 py-6 text-center shadow-[0_30px_80px_rgba(61,74,119,0.24)]">
            <div
              className={`mx-auto flex h-14 w-14 items-center justify-center rounded-full ${
                submitState.type === "success"
                  ? "bg-[linear-gradient(180deg,#ecfbf2_0%,#dbf5e5_100%)] text-[#2e8a57]"
                  : "bg-[linear-gradient(180deg,#fff1f4_0%,#ffe2e8_100%)] text-[#c14d66]"
              }`}
            >
              {submitState.type === "success" ? <ShieldIcon /> : <ChatIcon />}
            </div>

            <h2 className="mt-4 text-[24px] font-semibold tracking-[-0.05em] text-[var(--foreground)]">
              {submitState.type === "success" ? "Message sent successfully" : "Unable to send message"}
            </h2>

            <p className="mt-3 text-[15px] leading-[1.7] tracking-[-0.02em] text-[var(--muted)]">
              {submitState.message}
            </p>

            <button
              type="button"
              onClick={() => setSubmitState(null)}
              className="mt-6 inline-flex h-[46px] min-w-[120px] items-center justify-center rounded-[14px] bg-[#171b25] px-5 text-[15px] font-medium tracking-[-0.03em] text-white shadow-[0_16px_34px_rgba(34,39,59,0.18)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_38px_rgba(72,82,122,0.22)]"
            >
              OK
            </button>
          </div>
        </div>
      ) : null}
    </section>
  );
}
