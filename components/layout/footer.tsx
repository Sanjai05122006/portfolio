import Link from "next/link";

function GithubIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
      <path d="M12 .5C5.65.5.5 5.66.5 12.02c0 5.09 3.29 9.4 7.86 10.92.58.11.79-.25.79-.56 0-.28-.01-1.19-.02-2.16-3.2.7-3.88-1.36-3.88-1.36-.52-1.34-1.28-1.7-1.28-1.7-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.25 3.33.95.1-.74.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.07 0 0 .96-.31 3.14 1.19a10.8 10.8 0 0 1 5.72 0c2.17-1.5 3.13-1.19 3.13-1.19.62 1.6.24 2.78.12 3.07.73.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.39-5.26 5.67.41.36.78 1.08.78 2.19 0 1.58-.01 2.85-.01 3.24 0 .31.21.68.8.56A11.53 11.53 0 0 0 23.5 12C23.5 5.66 18.35.5 12 .5Z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
      <path d="M4.98 3.5A2.49 2.49 0 0 0 2.5 6c0 1.37 1.1 2.48 2.48 2.48A2.49 2.49 0 0 0 7.45 6 2.49 2.49 0 0 0 4.98 3.5ZM2.84 9.87H7.1V21.5H2.84V9.87Zm6.93 0h4.08v1.59h.06c.57-1.08 1.96-2.22 4.03-2.22 4.31 0 5.1 2.84 5.1 6.53v5.73h-4.25v-5.08c0-1.21-.02-2.77-1.69-2.77-1.7 0-1.96 1.32-1.96 2.68v5.17H9.77V9.87Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-6 w-6"
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

export function Footer() {
  return (
    <footer className="border-t border-[var(--line)] bg-[var(--surface)]">
      <div className="flex w-full items-center justify-between px-6 py-8 md:px-10 xl:px-[56px]">
        <p className="text-[15px] tracking-[-0.02em] text-[var(--muted)]">
          © 2025 Sanjai M. All rights reserved.
        </p>

        <div className="flex items-center gap-[34px] text-[var(--muted)]">
          <Link
            href="https://github.com/Sanjai05122006"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="transition-colors hover:text-[var(--foreground)]"
          >
            <GithubIcon />
          </Link>
          <Link
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="transition-colors hover:text-[var(--foreground)]"
          >
            <LinkedinIcon />
          </Link>
          <Link
            href="mailto:sanjaimurugan08@gmail.com"
            aria-label="Email"
            className="transition-colors hover:text-[var(--foreground)]"
          >
            <MailIcon />
          </Link>
        </div>
      </div>
    </footer>
  );
}
