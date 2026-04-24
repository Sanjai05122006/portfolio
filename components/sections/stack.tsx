import Link from "next/link";

type StackItem = {
  name: string;
  description: string;
  icon: React.ReactNode;
};

type StackCategory = {
  title: string;
  description: string;
  icon: React.ReactNode;
  items: StackItem[];
  className?: string;
};

function BadgeIcon() {
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
      <path d="m12 3 7 4-7 4-7-4 7-4Z" />
      <path d="m5 12 7 4 7-4" />
      <path d="m5 17 7 4 7-4" />
    </svg>
  );
}

function CategoryIcon({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[16px] bg-[linear-gradient(180deg,#f6f3ff_0%,#eef2ff_100%)] text-[#6a63ff] shadow-[inset_0_1px_0_rgba(255,255,255,0.95)]">
      {children}
    </span>
  );
}

function IconShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <span className="flex h-[58px] w-[58px] items-center justify-center rounded-[18px] border border-[#e1e6f4] bg-[linear-gradient(180deg,#ffffff_0%,#f7f9ff_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.95)]">
      {children}
    </span>
  );
}

function LanguageIcon() {
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
      <path d="m8 7-5 5 5 5" />
      <path d="m16 7 5 5-5 5" />
      <path d="M13 4 11 20" />
    </svg>
  );
}

function FrameworkIcon() {
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
      <rect x="4" y="4" width="16" height="16" rx="3" />
      <path d="M8 8h8" />
      <path d="M8 12h5" />
      <path d="M8 16h8" />
    </svg>
  );
}

function DatabaseCategoryIcon() {
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
      <ellipse cx="12" cy="6" rx="7" ry="3" />
      <path d="M5 6v6c0 1.66 3.13 3 7 3s7-1.34 7-3V6" />
      <path d="M5 12v6c0 1.66 3.13 3 7 3s7-1.34 7-3v-6" />
    </svg>
  );
}

function ToolsIcon() {
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
      <path d="m14.7 6.3 3 3" />
      <path d="m11 8 5 5" />
      <path d="M4 20l6.5-6.5" />
      <path d="m14 4 6 6-2.5 2.5-6-6L14 4Z" />
      <path d="m6.5 11.5 6 6L10 20l-6-6 2.5-2.5Z" />
    </svg>
  );
}

function RocketIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-8 w-8"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.5 19.5c1.5-4 5-7.5 9-9 2.5-1 4.5-3 5.5-5.5-2.5 1-4.5 3-5.5 5.5-1.5 4-5 7.5-9 9Z" />
      <path d="M13 11l-2-2" />
      <path d="M7 17c-.5 1.5-2.5 2.5-4 2.5.5-1.5 1.5-3.5 3-4" />
      <path d="M15 7a2 2 0 1 0 0 .01" />
    </svg>
  );
}

function TypeScriptLogo() {
  return (
    <svg aria-hidden="true" viewBox="0 0 48 48" className="h-9 w-9">
      <rect width="48" height="48" rx="10" fill="#3178C6" />
      <path fill="#fff" d="M10 15.5h28V20H27.4v18h-6.8V20H10v-4.5Zm19.4 12.1h6.2c.1 3 2 3.7 4 3.7 2.1 0 3.3-.8 3.3-2.1 0-1.5-1.5-2-4.7-2.7-4.6-1-7.8-2.5-7.8-6.9 0-4.2 3.4-6.8 8.7-6.8 5.7 0 8.9 2.9 9.1 7.3h-6c-.2-1.8-1.4-2.8-3.3-2.8-1.8 0-2.8.8-2.8 1.9 0 1.3 1.3 1.8 4.8 2.6 5 .9 7.8 2.7 7.8 7 0 4.7-3.7 7.1-9.2 7.1-5.8 0-9.8-2.8-10.1-8.3Z" />
    </svg>
  );
}

function JavaScriptLogo() {
  return (
    <svg aria-hidden="true" viewBox="0 0 48 48" className="h-9 w-9">
      <rect width="48" height="48" rx="10" fill="#F7DF1E" />
      <path fill="#111318" d="M23 35.5c0 4.1-2.4 6-5.9 6-3.1 0-4.8-1.6-5.7-3.6l4.5-2.7c.9 1.5 1.6 2.7 3.5 2.7 1.8 0 2.9-.7 2.9-3.4V16h5.7v19.5Zm10.1 5.9c-3.5 0-5.8-1.7-6.9-3.9l4.5-2.6c1.2 2 2.8 2.7 4.5 2.7 1.9 0 3.1-1 3.1-2.3 0-1.6-1.2-2.1-3.4-3.1l-1.2-.5c-3.5-1.5-5.9-3.4-5.9-7.4 0-3.7 2.8-6.5 7.2-6.5 3.1 0 5.4 1.1 7 3.9l-4.3 2.8c-.9-1.6-1.9-2.2-2.7-2.2-1.3 0-2.1.8-2.1 1.9 0 1.3.8 1.8 2.7 2.6l1.2.5c4.1 1.7 6.4 3.5 6.4 7.6 0 4.4-3.4 6.9-8.1 6.9Z" />
    </svg>
  );
}

function PythonLogo() {
  return (
    <svg aria-hidden="true" viewBox="0 0 48 48" className="h-9 w-9">
      <path fill="#356C9B" d="M23.7 7c-10.2 0-9.6 4.4-9.6 4.4v4.6h9.8v1.4H10.1S3.5 16.7 3.5 27c0 10.4 5.8 10 5.8 10h3.5v-5s-.2-5.8 5.7-5.8h9.9s5.6.1 5.6-5.4v-9s.8-4.8-9.3-4.8h-.1Zm-5.5 2.8a1.8 1.8 0 1 1 0 3.6 1.8 1.8 0 0 1 0-3.6Z" />
      <path fill="#FFD34E" d="M24.3 41c10.2 0 9.6-4.4 9.6-4.4V32h-9.8v-1.4h13.8s6.6.7 6.6-9.6c0-10.4-5.8-10-5.8-10h-3.5v5s.2 5.8-5.7 5.8h-9.9s-5.6-.1-5.6 5.4v9s-.8 4.8 9.3 4.8h.1Zm5.5-2.8a1.8 1.8 0 1 1 0-3.6 1.8 1.8 0 0 1 0 3.6Z" />
    </svg>
  );
}

function SqlLogo() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 48 48"
      className="h-9 w-9"
      fill="none"
      stroke="#2F67E9"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <ellipse cx="24" cy="11" rx="12" ry="5" />
      <path d="M12 11v10c0 2.8 5.4 5 12 5s12-2.2 12-5V11" />
      <path d="M12 21v10c0 2.8 5.4 5 12 5s12-2.2 12-5V21" />
    </svg>
  );
}

function HtmlLogo() {
  return (
    <svg aria-hidden="true" viewBox="0 0 48 48" className="h-9 w-9">
      <path fill="#E44D26" d="m8 4 3.2 36.4L24 44l12.8-3.6L40 4H8Z" />
      <path fill="#F16529" d="M24 41V7h13.1l-2.7 30.6L24 41Z" />
      <path fill="#EBEBEB" d="M24 20.5H17.4l-.5-5.2H24V10h-13l1.4 15.7H24v-5.2Zm0 13.4-.1.1-5.5-1.5-.4-4.6h-5l.8 8.7L24 39.8v-5.9Z" />
      <path fill="#fff" d="M24 20.5v5.2h6.1l-.6 6.8-5.5 1.5v5.8l10.2-2.8 1.5-16.5H24Zm0-10.5v5.3h12.2l.1-1.2.3-4.1.1-1H24Z" />
    </svg>
  );
}

function CssLogo() {
  return (
    <svg aria-hidden="true" viewBox="0 0 48 48" className="h-9 w-9">
      <path fill="#264DE4" d="m8 4 3.2 36.4L24 44l12.8-3.6L40 4H8Z" />
      <path fill="#2965F1" d="M24 41V7h13.1l-2.7 30.6L24 41Z" />
      <path fill="#EBEBEB" d="M24 20.2h-6.3l-.4-4.9H24V10H11.6l1.4 15.2H24v-5Zm0 13.2-.1.1-5.2-1.4-.3-4.1h-4.7l.7 8.1L24 38.8v-5.4Z" />
      <path fill="#fff" d="M24 20.2v5h5.9l-.6 6.9-5.3 1.4v5.3l9.6-2.7L35 20.2H24Zm0-10.2v5.3h11.4l.1-1 .3-4.2.1-1H24Z" />
    </svg>
  );
}

function NextLogo() {
  return (
    <svg aria-hidden="true" viewBox="0 0 48 48" className="h-9 w-9">
      <circle cx="24" cy="24" r="20" fill="#000" />
      <path fill="#fff" d="M16.5 15.5H20l11.5 16.9V15.5H35v17H31.5L20 15.6v16.9h-3.5v-17Z" />
      <path fill="#fff" d="M28.3 29.4 31.9 34c2.4-1.3 4.2-3.3 5.2-5.8l-8.8 1.2Z" opacity=".65" />
    </svg>
  );
}

function ReactLogo() {
  return (
    <svg aria-hidden="true" viewBox="0 0 48 48" className="h-9 w-9">
      <circle cx="24" cy="24" r="3.2" fill="#35C8F3" />
      <ellipse cx="24" cy="24" rx="16" ry="6.5" fill="none" stroke="#35C8F3" strokeWidth="2.2" />
      <ellipse cx="24" cy="24" rx="16" ry="6.5" transform="rotate(60 24 24)" fill="none" stroke="#35C8F3" strokeWidth="2.2" />
      <ellipse cx="24" cy="24" rx="16" ry="6.5" transform="rotate(120 24 24)" fill="none" stroke="#35C8F3" strokeWidth="2.2" />
    </svg>
  );
}

function NodeLogo() {
  return (
    <svg aria-hidden="true" viewBox="0 0 48 48" className="h-9 w-9">
      <path fill="#66B648" d="M24 4 8.4 13v22L24 44l15.6-9V13L24 4Z" />
      <path fill="#fff" d="M24 14.5c-5 0-8.2 2.8-8.2 8.8 0 4.8 2.5 8.2 7.2 8.2 2.4 0 4-.8 5.3-2.2l-2.6-2.5c-.7.7-1.4 1.2-2.5 1.2-2 0-3-1.5-3-4.7 0-3.3 1.1-5 3.5-5 1.4 0 2.4.6 3.3 1.5l2.4-2.8c-1.5-1.6-3.2-2.5-5.4-2.5Zm7.4.4h4.2v16.2h-4.2V14.9Z" />
    </svg>
  );
}

function TailwindLogo() {
  return (
    <svg aria-hidden="true" viewBox="0 0 48 48" className="h-9 w-9">
      <path fill="#31B6D9" d="M24 14c-5.3 0-8.6 2.6-9.8 7.8 1.9-2.6 4.1-3.5 6.7-2.8 1.5.4 2.6 1.5 3.8 2.7 2 2 4.2 4.3 9.3 4.3 5.3 0 8.6-2.6 9.8-7.8-1.9 2.6-4.1 3.5-6.7 2.8-1.5-.4-2.6-1.5-3.8-2.7-2-2-4.2-4.3-9.3-4.3Zm-9.8 9.9C8.9 23.9 5.6 26.5 4.4 31.7c1.9-2.6 4.1-3.5 6.7-2.8 1.5.4 2.6 1.5 3.8 2.7 2 2 4.2 4.3 9.3 4.3 5.3 0 8.6-2.6 9.8-7.8-1.9 2.6-4.1 3.5-6.7 2.8-1.5-.4-2.6-1.5-3.8-2.7-2-2-4.2-4.3-9.3-4.3Z" />
    </svg>
  );
}

function MongoLogo() {
  return (
    <svg aria-hidden="true" viewBox="0 0 48 48" className="h-9 w-9">
      <path fill="#13AA52" d="M24 6c4.7 5.6 7.5 11.3 7.5 17.9 0 9.1-5.1 14.1-7.5 18.1-2.3-4-7.5-9-7.5-18.1C16.5 17.3 19.3 11.6 24 6Z" />
      <path fill="#B8E986" d="M24 10.7c2.2 4.6 3.5 8.9 3.5 13.9 0 6.9-1.5 10.4-3.5 13.3-2-2.9-3.5-6.4-3.5-13.3 0-5 1.2-9.3 3.5-13.9Z" />
    </svg>
  );
}

function PostgresLogo() {
  return (
    <svg aria-hidden="true" viewBox="0 0 48 48" className="h-9 w-9">
      <path fill="#336791" d="M16.2 11.2c4.8-3.3 10.6-2.3 13.3 1.6 2.4-.7 4.7.7 5.7 3 1.8 4.2.4 12.2-1.6 15.7-.9 1.5-2.6 2.8-4.5 2.4-1.4-.3-2.3-1.2-3-2.4v8.2c0 1.3-1.1 2.3-2.5 2.3s-2.5-1-2.5-2.3v-5.5c-.8 1-2 1.7-3.5 1.6-2.6-.1-4.5-2.1-5.3-4.4-1.7-4.7-1.6-14.2 3.9-18.2Z" />
      <path fill="#fff" d="M20.6 17.6c-1.4 0-2.4 1.1-2.4 2.4 0 1.4 1 2.4 2.4 2.4 1.3 0 2.4-1 2.4-2.4 0-1.3-1.1-2.4-2.4-2.4Zm9.2 0c-1.3 0-2.4 1.1-2.4 2.4 0 1.4 1.1 2.4 2.4 2.4 1.4 0 2.4-1 2.4-2.4 0-1.3-1-2.4-2.4-2.4Z" />
    </svg>
  );
}

function FirebaseLogo() {
  return (
    <svg aria-hidden="true" viewBox="0 0 48 48" className="h-9 w-9">
      <path fill="#FF9100" d="M10.6 36.4 23.3 4.5c.4-1 1.7-1.2 2.4-.4l4 7.7-19.1 24.6Z" />
      <path fill="#FFC400" d="m10.6 36.4 7.5-23.5c.3-.9 1.5-1.1 2.2-.4l3.6 3.6-13.3 20.3Z" />
      <path fill="#FF6F00" d="m10.6 36.4 25.1-22.9c.8-.7 2-.1 1.9 1L34.5 40l-23.9-3.6Z" />
    </svg>
  );
}

function GitLogo() {
  return (
    <svg aria-hidden="true" viewBox="0 0 48 48" className="h-9 w-9">
      <rect x="8" y="8" width="32" height="32" rx="8" transform="rotate(45 24 24)" fill="#F26A3D" />
      <path fill="#fff" d="M28.8 15.8a2.7 2.7 0 1 0-4.2 2.2v6.2a2.7 2.7 0 0 0-1.1 4.5l-3.2 3.2a2.7 2.7 0 1 0 1.9 1.9l3.2-3.2c.3.1.7.1 1 .1a2.7 2.7 0 0 0 1-5.2v-6.2c.8-.3 1.4-.9 1.8-1.7l3.3 3.3a2.7 2.7 0 1 0 1.9-1.9l-3.6-3.5Z" />
    </svg>
  );
}

function GithubLogo() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-9 w-9" fill="#111318">
      <path d="M12 .5C5.65.5.5 5.66.5 12.02c0 5.09 3.29 9.4 7.86 10.92.58.11.79-.25.79-.56 0-.28-.01-1.19-.02-2.16-3.2.7-3.88-1.36-3.88-1.36-.52-1.34-1.28-1.7-1.28-1.7-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.25 3.33.95.1-.74.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.07 0 0 .96-.31 3.14 1.19a10.8 10.8 0 0 1 5.72 0c2.17-1.5 3.13-1.19 3.13-1.19.62 1.6.24 2.78.12 3.07.73.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.39-5.26 5.67.41.36.78 1.08.78 2.19 0 1.58-.01 2.85-.01 3.24 0 .31.21.68.8.56A11.53 11.53 0 0 0 23.5 12C23.5 5.66 18.35.5 12 .5Z" />
    </svg>
  );
}

function DockerLogo() {
  return (
    <svg aria-hidden="true" viewBox="0 0 48 48" className="h-9 w-9">
      <path fill="#2396ED" d="M15.5 20.2h4.2v4.2h-4.2v-4.2Zm4.9 0h4.2v4.2h-4.2v-4.2Zm4.9 0h4.2v4.2h-4.2v-4.2Zm-9.8 5h4.2v4.2h-4.2v-4.2Zm4.9 0h4.2v4.2h-4.2v-4.2Zm4.9 0h4.2v4.2h-4.2v-4.2Zm4.9 0h4.2v4.2h-4.2v-4.2Z" />
      <path fill="#2396ED" d="M41 25.7c-1.5-.9-4.6-1-6.3-.8-.2-1.8-1.1-3.3-2.7-4.4l-1 .8c1.2 1 1.9 2.3 1.9 3.9 0 .5-.1.9-.2 1.3-.6 2.7-3.1 4.7-6 4.7H12c-4.1 0-7.4-3.3-7.4-7.4 0-.2 0-.5.1-.7 1.1.7 2.6 1 4.2.8 0 0 1.7-7.3 7-7.3 0 0 2.8-4.4 8.1-4.4 5 0 8.8 3.7 8.8 3.7 4.3-.3 6.7 2.6 7.6 5.4 1.1-.1 4.2 0 6.1 2.1-1 1.2-2.5 2-5.5 2.3Z" />
    </svg>
  );
}

function VSCodeLogo() {
  return (
    <svg aria-hidden="true" viewBox="0 0 48 48" className="h-9 w-9">
      <path fill="#2489CA" d="m35.8 5.6 7.2 3.5a1.8 1.8 0 0 1 1 1.6v26.6c0 .7-.4 1.4-1 1.6l-7.2 3.5c-1.2.6-2.7-.3-2.7-1.6V7.2c0-1.4 1.5-2.2 2.7-1.6Z" />
      <path fill="#1070B3" d="M33.1 13.8 18.7 27l-6.3-4.8-4.1 2.1a1.2 1.2 0 0 0-.2 2.1l6 5.4-6 5.4a1.2 1.2 0 0 0 .2 2l4.1 2.2 6.3-4.8L33.1 46V13.8Z" />
      <path fill="#29B6F6" d="M43 9.1 18.7 31.8l-6.3-4.8-4.1 2.1a1.2 1.2 0 0 0-.2 2.1l6 5.4-6 5.4a1.2 1.2 0 0 0 .2 2l4.1 2.2 6.3-4.8L43 38.9V9.1Z" opacity=".85" />
    </svg>
  );
}

function PostmanLogo() {
  return (
    <svg aria-hidden="true" viewBox="0 0 48 48" className="h-9 w-9">
      <circle cx="24" cy="24" r="18" fill="#FF6C37" />
      <path fill="#fff" d="M31.4 16.1a2.6 2.6 0 1 0 0 5.2 2.6 2.6 0 0 0 0-5.2Zm-15.9 13.3 13.8-7.1.7 1.4-13.7 7.1-.8-1.4Z" />
    </svg>
  );
}

function FigmaLogo() {
  return (
    <svg aria-hidden="true" viewBox="0 0 48 48" className="h-9 w-9">
      <path fill="#F24E1E" d="M24 24a6 6 0 1 1 0-12h6a6 6 0 1 1 0 12h-6Z" />
      <path fill="#FF7262" d="M18 36a6 6 0 1 1 6-6v6a6 6 0 1 1-6 0Z" />
      <path fill="#A259FF" d="M18 24a6 6 0 0 1 0-12h6v12h-6Z" />
      <path fill="#1ABCFE" d="M24 24a6 6 0 1 1 12 0 6 6 0 0 1-12 0Z" />
      <path fill="#0ACF83" d="M18 24h6v6a6 6 0 1 1-6-6Z" />
    </svg>
  );
}

function VercelLogo() {
  return (
    <svg aria-hidden="true" viewBox="0 0 48 48" className="h-9 w-9">
      <path fill="#000" d="M24 10 38 36H10L24 10Z" />
    </svg>
  );
}

function NetlifyLogo() {
  return (
    <svg aria-hidden="true" viewBox="0 0 48 48" className="h-9 w-9">
      <path fill="#27C1D5" d="m14.7 7 7.8 7.8-2.9 2.9-7.8-7.8L14.7 7Zm18.6 0 2.9 2.9-7.8 7.8-2.9-2.9L33.3 7ZM7 14.7 9.9 11.8l7.8 7.8-2.9 2.9L7 14.7Zm26.1 4.9 2.9-2.9 5 5-2.9 2.9-5-5ZM19.6 25.5l2.9-2.9 7.8 7.8-2.9 2.9-7.8-7.8ZM11.8 33.3l7.8-7.8 2.9 2.9-7.8 7.8-2.9-2.9Zm21.5-2.9 2.9-2.9 4 4-2.9 2.9-4-4ZM14.7 38.1l2.9-2.9 5 5-2.9 2.9-5-5Z" />
    </svg>
  );
}

const stackCategories: StackCategory[] = [
  {
    title: "Languages",
    description: "The core languages I use to build and bring ideas to life.",
    icon: (
      <CategoryIcon>
        <LanguageIcon />
      </CategoryIcon>
    ),
    className: "xl:grid-cols-[260px_repeat(6,minmax(0,1fr))]",
    items: [
      { name: "TypeScript", description: "Typed. Scalable. Maintainable.", icon: <TypeScriptLogo /> },
      { name: "JavaScript", description: "Dynamic. Versatile. Essential.", icon: <JavaScriptLogo /> },
      { name: "Python", description: "Powerful. Simple. Productive.", icon: <PythonLogo /> },
      { name: "SQL", description: "Structured. Reliable. Data-driven.", icon: <SqlLogo /> },
      { name: "HTML", description: "Semantic. Accessible. Foundation.", icon: <HtmlLogo /> },
      { name: "CSS", description: "Stylish. Responsive. Modern.", icon: <CssLogo /> },
    ],
  },
  {
    title: "Frameworks & Libraries",
    description: "Powerful tools and libraries that speed up development.",
    icon: (
      <CategoryIcon>
        <FrameworkIcon />
      </CategoryIcon>
    ),
    className: "xl:grid-cols-[260px_repeat(4,minmax(0,1fr))]",
    items: [
      { name: "Next.js", description: "Full-stack React framework.", icon: <NextLogo /> },
      { name: "React", description: "Composable UI architecture.", icon: <ReactLogo /> },
      { name: "Node.js", description: "Fast server-side runtime.", icon: <NodeLogo /> },
      { name: "Tailwind CSS", description: "Utility-first design system.", icon: <TailwindLogo /> },
    ],
  },
  {
    title: "Databases & Backend",
    description: "Robust backend and database solutions for modern apps.",
    icon: (
      <CategoryIcon>
        <DatabaseCategoryIcon />
      </CategoryIcon>
    ),
    className: "xl:grid-cols-[260px_repeat(3,minmax(0,1fr))]",
    items: [
      { name: "MongoDB", description: "Flexible document database.", icon: <MongoLogo /> },
      { name: "PostgreSQL", description: "Relational and production-ready.", icon: <PostgresLogo /> },
      { name: "Firebase", description: "Realtime backend services.", icon: <FirebaseLogo /> },
    ],
  },
  {
    title: "Tools & Services",
    description: "Essential tools that help me build, test, and deploy with confidence.",
    icon: (
      <CategoryIcon>
        <ToolsIcon />
      </CategoryIcon>
    ),
    className: "xl:grid-cols-[260px_repeat(8,minmax(0,1fr))]",
    items: [
      { name: "Git", description: "Version control and branching.", icon: <GitLogo /> },
      { name: "GitHub", description: "Code hosting and collaboration.", icon: <GithubLogo /> },
      { name: "Docker", description: "Containerized development workflow.", icon: <DockerLogo /> },
      { name: "VS Code", description: "Everyday coding environment.", icon: <VSCodeLogo /> },
      { name: "Postman", description: "API testing and inspection.", icon: <PostmanLogo /> },
      { name: "Figma", description: "Interface design and handoff.", icon: <FigmaLogo /> },
      { name: "Vercel", description: "Frontend deployment platform.", icon: <VercelLogo /> },
      { name: "Netlify", description: "Fast static site delivery.", icon: <NetlifyLogo /> },
    ],
  },
];

function StackItemCard({ item }: { item: StackItem }) {
  return (
    <div className="group flex h-full flex-col items-center border-l border-[#e9eef8] px-6 py-7 text-center transition duration-300 hover:-translate-y-1">
      <IconShell>{item.icon}</IconShell>
      <h3 className="mt-4 text-[16px] font-semibold tracking-[-0.04em] text-[var(--foreground)]">
        {item.name}
      </h3>
      <p className="mt-2 line-clamp-2 text-[14px] leading-[1.55] tracking-[-0.02em] text-[var(--muted)]">
        {item.description}
      </p>
    </div>
  );
}

function StackCategorySection({ category }: { category: StackCategory }) {
  return (
    <section className="rounded-[24px] border border-[#dde4f1] bg-white/62 shadow-[0_18px_44px_rgba(99,114,164,0.08),inset_0_1px_0_rgba(255,255,255,0.88)] backdrop-blur-md">
      <div className={`grid overflow-hidden ${category.className ?? ""}`}>
        <div className="flex gap-4 px-6 py-7">
          {category.icon}
          <div className="max-w-[200px]">
            <h2 className="text-[18px] font-semibold tracking-[-0.05em] text-[var(--foreground)]">
              {category.title}
            </h2>
            <p className="mt-2 text-[15px] leading-[1.55] tracking-[-0.02em] text-[var(--muted)]">
              {category.description}
            </p>
          </div>
        </div>

        {category.items.map((item) => (
          <StackItemCard key={item.name} item={item} />
        ))}
      </div>
    </section>
  );
}

export function StackSection() {
  return (
    <section className="relative h-full overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[7%] top-[8%] h-[150px] w-[150px] rounded-full bg-[radial-gradient(circle,rgba(189,173,255,0.34)_0%,rgba(189,173,255,0.12)_34%,rgba(189,173,255,0)_72%)] blur-2xl" />
        <div className="absolute right-[6%] top-[18%] h-[90px] w-[90px] rounded-full bg-[radial-gradient(circle,rgba(182,176,255,0.32)_0%,rgba(182,176,255,0.08)_38%,rgba(182,176,255,0)_72%)] blur-2xl" />
        <div className="absolute left-[8%] top-[18%] hidden h-[140px] w-[360px] rounded-full border border-white/30 opacity-70 lg:block" />
        <div className="absolute right-[14%] top-[7%] hidden h-[110px] w-[110px] bg-[radial-gradient(circle,#b8c7ff_1px,transparent_1px)] [background-size:12px_12px] opacity-45 lg:block" />
      </div>

      <div className="relative flex h-full min-h-0 flex-col px-6 py-6 md:px-10 md:py-7 xl:px-[56px] xl:py-8">
        <div className="mx-auto max-w-[760px] text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#dde3f3] bg-white/74 px-4 py-2 text-[14px] font-medium tracking-[-0.03em] text-[#3f4960] shadow-[0_10px_28px_rgba(104,119,164,0.08)] backdrop-blur-md">
            <span className="text-[#695fff]">
              <BadgeIcon />
            </span>
            <span>My Tech Stack</span>
          </div>

          <h1 className="mt-6 text-[48px] font-semibold leading-[1.02] tracking-[-0.08em] text-[var(--foreground)] md:text-[58px] xl:text-[64px]">
            The technologies I use
            <br />
            to build{" "}
            <span className="bg-[linear-gradient(135deg,#4a67ff_0%,#6f7dff_42%,#8d67ff_100%)] bg-clip-text text-transparent">
              impactful solutions.
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-[600px] text-[18px] leading-[1.65] tracking-[-0.03em] text-[var(--muted)]">
            A modern, scalable and performance-focused stack that helps me build
            reliable and user-friendly applications.
          </p>
        </div>

        <div className="mt-8 flex-1 space-y-5">
          <StackCategorySection category={stackCategories[0]} />

          <div className="grid gap-5 xl:grid-cols-[1.1fr_0.95fr]">
            <StackCategorySection category={stackCategories[1]} />
            <StackCategorySection category={stackCategories[2]} />
          </div>

          <StackCategorySection category={stackCategories[3]} />

          <section className="rounded-[24px] border border-[#d8e1f4] bg-[linear-gradient(90deg,rgba(245,230,255,0.78)_0%,rgba(233,241,255,0.76)_52%,rgba(197,219,255,0.8)_100%)] px-8 py-6 shadow-[0_18px_44px_rgba(99,114,164,0.08),inset_0_1px_0_rgba(255,255,255,0.88)] backdrop-blur-md">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex items-start gap-5">
                <span className="flex h-[62px] w-[62px] shrink-0 items-center justify-center rounded-[18px] bg-[linear-gradient(180deg,#f4f0ff_0%,#e9efff_100%)] text-[#645dff] shadow-[inset_0_1px_0_rgba(255,255,255,0.95)]">
                  <RocketIcon />
                </span>
                <div>
                  <h2 className="text-[18px] font-semibold tracking-[-0.05em] text-[var(--foreground)]">
                    Always learning. Always building.
                  </h2>
                  <p className="mt-2 max-w-[640px] text-[15px] leading-[1.65] tracking-[-0.02em] text-[var(--muted)]">
                    Technology evolves every day, and so do I. I love exploring new tools
                    and improving my stack to build better, faster, and more impactful
                    products.
                  </p>
                </div>
              </div>

              <Link
                href="/contact"
                className="group inline-flex h-[56px] items-center justify-center gap-3 rounded-[16px] bg-[#171b25] px-7 text-[16px] font-medium tracking-[-0.03em] text-white shadow-[0_18px_38px_rgba(34,39,59,0.22)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_46px_rgba(72,82,122,0.26)]"
              >
                <span className="text-white">Let&apos;s Build Something</span>
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
                  <path d="M7 17 17 7" />
                  <path d="M9 7h8v8" />
                </svg>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
