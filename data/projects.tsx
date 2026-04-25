import type { Project } from "@/components/project/project-card";

export type Filter = "All" | "AI Systems" | "Full Stack" | "Backend" | "Extensions";

const projectImageBasePath = "/assets/project-imgs";

export const allProjects: Project[] = [
  {
    slug: "fraudshield",
    name: "FraudShield",
    description: "AI-powered scam detection system",
    category: "AI Systems",
    type: "Scam Detection Engine",
    image: `${projectImageBasePath}/fraushield-img.png`,
    stack: ["Next.js", "FastAPI", "Node.js", "Supabase", "NLP", "OCR"],
    highlights: [
      "Multi-modal detection across SMS, email, URL, image, and voice inputs",
      "Explainable AI with risk scoring and sub-3s response time",
    ],
    metric: "Detects threats in under 3 seconds",
    href: "https://github.com/Sanjai05122006/fraudshield",
    githubHref: "https://github.com/Sanjai05122006/fraudshield",
  },
  {
    slug: "vora",
    name: "VORA",
    description: "Voice-driven 3D AI assistant",
    category: "AI Systems",
    image: `${projectImageBasePath}/vora-img.png`,
    stack: ["Next.js", "TypeScript", "Three.js", "Whisper", "ElevenLabs"],
    highlights: [
      "Real-time AI assistant with speech-to-text and LLM reasoning",
      "3D avatar with expressive interaction and lip-sync system",
    ],
    href: "https://github.com/Sanjai05122006/VORA",
    githubHref: "https://github.com/Sanjai05122006/VORA",
    type: "",
    metric: "",
  },
  {
    slug: "eventhub",
    name: "EventHub",
    description: "Full-stack event management platform",
    category: "Full Stack",
    image: `${projectImageBasePath}/eventhub-img.png`,
    stack: ["React", "Spring Boot", "MongoDB", "JWT", "Microservices"],
    highlights: [
      "Role-based workflows for students and faculty",
      "Microservices architecture with secure JWT authentication",
    ],
    href: "https://github.com/Sanjai05122006/eventhub",
    githubHref: "https://github.com/Sanjai05122006/eventhub",
    type: "",
    metric: "",
    imageFrameClassName:
      "border-[#2b3150] bg-[linear-gradient(180deg,#171c2b_0%,#111522_100%)] p-0",
    imageClassName: "p-0",
  },
  {
    slug: "urlguard",
    name: "URLGuard",
    description: "URL threat detection API",
    category: "Backend / AI",
    image: `${projectImageBasePath}/url.png`,
    stack: ["FastAPI", "BeautifulSoup", "Selenium", "Gemini API"],
    highlights: [
      "Multi-layer analysis using URL structure, content, and AI scoring",
      "Detects phishing and malicious links with explainable output",
    ],
    href: "https://github.com/Sanjai05122006/URL-Analyzer",
    githubHref: "https://github.com/Sanjai05122006/URL-Analyzer",
    type: "",
    metric: "",
    imageFrameClassName:
      "border-[#2b3150] bg-[linear-gradient(180deg,#171c2b_0%,#111522_100%)] p-0",
    imageClassName: "object-contain p-0 scale-[1.02]",
  },
  {
    slug: "leetcode-sync",
    name: "LeetCode Sync",
    description: "Auto-sync coding solutions to GitHub",
    category: "Extension",
    image: `${projectImageBasePath}/leetcode-img.png`,
    stack: ["JavaScript", "Browser APIs", "GitHub API"],
    highlights: [
      "Automatically syncs accepted solutions to GitHub repositories",
      "Maintains structured version tracking for problems",
    ],
    href: "https://github.com/Sanjai05122006/LeetCode-Code-Documentation",
    githubHref: "https://github.com/Sanjai05122006/LeetCode-Code-Documentation",
    type: "",
    metric: "",
    imageFrameClassName:
      "border-[#2b3150] bg-[linear-gradient(180deg,#171c2b_0%,#111522_100%)] p-0",
    imageClassName: "object-cover p-0 scale-[1.08]",
  },
  {
    slug: "focustab",
    name: "FocusTab",
    description: "Notion-powered productivity dashboard",
    category: "Extension",
    image: `${projectImageBasePath}/focus-img.png`,
    stack: ["JavaScript", "Notion API", "Browser Extension"],
    highlights: [
      "Transforms new tab into a Notion-powered task dashboard",
      "Real-time task sync with quick add and completion features",
    ],
    href: "https://github.com/Sanjai05122006/Todo-Extension",
    githubHref: "https://github.com/Sanjai05122006/Todo-Extension",
    type: "",
    metric: "",
    imageFrameClassName:
      "border-[#2b3150] bg-[linear-gradient(180deg,#171c2b_0%,#111522_100%)] p-0",
    imageClassName: "object-cover p-0 scale-[1.08]",
  },
];

export const filterOptions: Filter[] = [
  "All",
  "AI Systems",
  "Full Stack",
  "Backend",
  "Extensions",
];

export function matchesFilter(project: Project, filter: Filter) {
  if (filter === "All") {
    return true;
  }

  if (filter === "Backend") {
    return project.category === "Backend / AI";
  }

  if (filter === "Extensions") {
    return project.category === "Extension";
  }

  return project.category === filter;
}
