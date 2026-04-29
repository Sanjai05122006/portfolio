import type { Project } from "@/components/project/project-card";

export type Filter = "All" | "AI Systems" | "Full Stack" | "Backend" | "Extensions";

const projectImageBasePath = "/assets/project-imgs";

export const allProjects: Project[] = [
  {
    slug: "fraudshield",
    name: "FraudShield",
    description: "Multi-modal AI system for real-time scam detection",

    heroTitle: "Most scam detectors fail because they only see one signal.",
    heroSummary:
      "FraudShield analyzes text, links, images, and voice together to detect scams in real time with clear, explainable outputs.",

    category: "AI Systems",
    type: "Scam Detection Engine",
    image: `${projectImageBasePath}/fraushield-img.png`,
    stack: ["Next.js", "FastAPI", "Node.js", "Supabase", "NLP", "OCR"],

    highlights: [
      "Multi-modal detection across text, URL, image, and voice",
      "Explainable AI with real-time risk scoring",
    ],

    metric: "93.7% accuracy • <2s latency • 10+ languages",

    overview:
      "Users can’t reliably verify scams across SMS, WhatsApp, URLs, and media inputs in real-world scenarios.",

    challenge:
      "Most scam detection systems operate on a single input type, making them ineffective against multi-format attacks.",

    solution:
      "Built a real-time AI pipeline for scam detection across text, URL, image, and voice inputs with explainable outputs.",

    outcomes: [
      "Unified detection across multiple input formats",
      "Explainable risk scoring with actionable insights",
      "Designed for real-world security workflows",
    ],

    year: "2025",
    role: "Full-stack developer",
    status: "Active",
    duration: "2 Months",

    impact: [
      "93.7% detection accuracy",
      "<2s latency",
      "Supports 10+ Indian languages",
      "Multi-modal input pipeline (text, URL, image, voice)",
    ],

    techGroups: [
      { label: "Frontend", value: "Next.js, TypeScript, Tailwind CSS" },
      { label: "Backend", value: "FastAPI, Node.js, Express" },
      { label: "AI / ML", value: "MuRIL (HuggingFace), scikit-learn, Tesseract OCR, Librosa" },
      { label: "Database", value: "Supabase (PostgreSQL)" },
      { label: "Security APIs", value: "Google Safe Browsing, VirusTotal, PhishTank, WHOIS" },
      { label: "Deployment", value: "Vercel, Railway" },
    ],

    challengeCards: [
      {
        title: "Handling noisy real-world inputs (SMS, OCR, voice)",
        detail: "Built normalization and preprocessing pipelines",
      },
      {
        title: "Balancing accuracy with real-time latency",
        detail: "Optimized async processing and caching",
      },
    ],

    buildPoints: [
      "Built multi-modal fraud detection pipelines",
      "Designed real-time FastAPI inference system",
      "Integrated external threat intelligence APIs",
      "Implemented multilingual NLP using MuRIL",
      "Developed explainable verdict engine",
      "Deployed production-ready system",
    ],

    heroStats: [
      { title: "Multi-Modal Analysis", detail: "Text, URL, Image, Voice" },
      { title: "Real-time Detection", detail: "<2s latency" },
      { title: "Explainable AI", detail: "Clear reasoning outputs" },
      { title: "Production Ready", detail: "Scalable system design" },
    ],

    href: "https://github.com/Sanjai05122006/fraudshield",
    githubHref: "https://github.com/Sanjai05122006/fraudshield",
  },

  {
    slug: "vora",
    name: "VORA",
    description: "Voice-driven 3D AI assistant",

    heroTitle: "Chatbots respond. This one feels present.",
    heroSummary:
      "A voice-first AI assistant with a real-time 3D presence that listens, reasons, and responds naturally.",

    category: "AI Systems",
    image: `${projectImageBasePath}/vora-img.png`,
    stack: ["Next.js", "TypeScript", "Three.js", "Whisper", "ElevenLabs"],

    highlights: [
      "Real-time speech-to-reasoning pipeline",
      "3D avatar with expressive interaction states",
    ],

    metric: "Real-time voice AI with 3D interaction",

    overview:
      "Text-based AI lacks presence and natural interaction, reducing engagement and usability.",

    challenge:
      "Traditional AI interfaces feel static and lack conversational depth and feedback.",

    solution:
      "Built a voice-first AI system with real-time reasoning and a 3D avatar interface for expressive interaction.",

    outcomes: [
      "Natural voice-driven interaction flow",
      "Immersive assistant experience",
      "Reduced friction vs text interfaces",
    ],

    year: "2025",
    role: "Frontend and AI systems developer",
    status: "Active",
    duration: "3 Months",

    impact: [
      "Real-time voice interaction pipeline",
      "3D immersive assistant interface",
      "Reduced interaction friction",
      "Improved user engagement",
    ],

    techGroups: [
      { label: "Frontend", value: "Next.js, TypeScript, Tailwind CSS" },
      { label: "3D Interface", value: "Three.js" },
      { label: "Speech", value: "Whisper, ElevenLabs" },
      { label: "AI Layer", value: "Prompt orchestration and pipelines" },
      { label: "Deployment", value: "Web-based delivery" },
    ],

    challengeCards: [
      {
        title: "Making AI interaction feel human",
        detail: "Integrated voice pipeline with expressive 3D avatar",
      },
      {
        title: "Maintaining responsiveness",
        detail: "Optimized speech processing and UI feedback loops",
      },
    ],

    buildPoints: [
      "Built voice-first AI interaction system",
      "Connected speech recognition and reasoning pipeline",
      "Developed 3D avatar interface using Three.js",
      "Designed expressive response states",
      "Optimized real-time interaction flow",
    ],

    heroStats: [
      { title: "Voice-first UX", detail: "Natural interaction" },
      { title: "3D Presence", detail: "Avatar-based interface" },
      { title: "Real-time AI", detail: "Fast responses" },
      { title: "Immersive Design", detail: "Beyond chat UI" },
    ],

    href: "https://github.com/Sanjai05122006/VORA",
    githubHref: "https://github.com/Sanjai05122006/VORA",
    type: "",
    
  },

  {
    slug: "eventhub",
    name: "EventHub",
    description: "Full-stack event management platform",

    heroTitle: "Most events fail because workflows break.",
    heroSummary:
      "A centralized platform for managing event creation, approvals, and participation across roles.",

    category: "Full Stack",
    image: `${projectImageBasePath}/eventhub-img.png`,
    stack: ["React", "Spring Boot", "MongoDB", "JWT", "Microservices"],

    highlights: [
      "Role-based workflows for students and faculty",
      "Secure authentication with scalable backend design",
    ],

    metric: "Centralized event workflow system",

    overview:
      "Event management in colleges is fragmented across tools, leading to inefficiency and poor visibility.",

    challenge:
      "Managing approvals, participation, and coordination across roles creates operational complexity.",

    solution:
      "Built a full-stack system with structured workflows, role-based access, and modular backend services.",

    outcomes: [
      "Centralized event operations",
      "Role-based dashboards",
      "Scalable backend architecture",
    ],

    year: "2024",
    role: "Full-stack developer",
    status: "Active",
    duration: "2 Months",

    impact: [
      "Streamlined approval workflows",
      "Centralized event visibility",
      "Secure role-based access",
      "Scalable backend architecture",
    ],

    techGroups: [
      { label: "Frontend", value: "React" },
      { label: "Backend", value: "Spring Boot" },
      { label: "Database", value: "MongoDB" },
      { label: "Security", value: "JWT authentication" },
      { label: "Architecture", value: "Microservices-ready design" },
    ],

    challengeCards: [
      {
        title: "Managing multiple user roles",
        detail: "Designed structured permission-based workflows",
      },
      {
        title: "Scaling backend systems",
        detail: "Used modular service separation",
      },
    ],

    buildPoints: [
      "Built role-based event workflows",
      "Implemented secure authentication system",
      "Developed full-stack dashboards and APIs",
      "Structured backend for scalability",
      "Integrated approval and participation flows",
    ],

    heroStats: [
      { title: "Role-based System", detail: "Multi-user workflows" },
      { title: "Centralized Platform", detail: "Single system" },
      { title: "Secure Access", detail: "JWT authentication" },
      { title: "Scalable Design", detail: "Modular backend" },
    ],

    href: "https://github.com/Sanjai05122006/eventhub",
    githubHref: "https://github.com/Sanjai05122006/eventhub",
    type: "",
    
  },

  {
    slug: "urlguard",
    name: "URLGuard",
    description: "URL threat detection API",

    heroTitle: "A malicious link doesn’t look malicious.",
    heroSummary:
      "Analyzes URLs using structure, page signals, and AI reasoning to detect threats beyond surface patterns.",

    category: "Backend / AI",
    image: `${projectImageBasePath}/url.png`,
    stack: ["FastAPI", "BeautifulSoup", "Selenium", "Gemini API"],

    highlights: [
      "Layered URL inspection and analysis",
      "Explainable threat scoring system",
    ],

    metric: "Multi-layer threat detection API",

    overview:
      "Users cannot reliably identify malicious URLs based on appearance alone.",

    challenge:
      "Phishing links mimic legitimate ones, requiring deeper inspection beyond static checks.",

    solution:
      "Built a layered analysis pipeline combining structure inspection, content signals, and AI reasoning.",

    outcomes: [
      "Explainable threat detection",
      "API-ready system for integration",
      "Improved phishing identification",
    ],

    year: "2025",
    role: "Backend and AI developer",
    status: "Active",
    duration: "1.5 Months",

    impact: [
      "Multi-layer URL risk analysis",
      "Explainable scoring system",
      "API-first architecture",
      "Improved detection reliability",
    ],

    techGroups: [
      { label: "Backend", value: "FastAPI, Python" },
      { label: "Scraping", value: "BeautifulSoup, Selenium" },
      { label: "AI Layer", value: "Gemini API" },
      { label: "Runtime", value: "Uvicorn" },
    ],

    challengeCards: [
      {
        title: "Detecting disguised malicious links",
        detail: "Combined structural and content-based analysis",
      },
      {
        title: "Providing clear output",
        detail: "Designed explainable API responses",
      },
    ],

    buildPoints: [
      "Built layered URL inspection pipeline",
      "Integrated scraping and content analysis",
      "Implemented AI-based threat reasoning",
      "Designed API-first architecture",
      "Focused on explainable outputs",
    ],

    heroStats: [
      { title: "Threat Analysis", detail: "URL + content signals" },
      { title: "Explainable Output", detail: "Readable results" },
      { title: "API-first", detail: "Integration ready" },
      { title: "Phishing Detection", detail: "Security-focused" },
    ],

    href: "https://github.com/Sanjai05122006/URL-Analyzer",
    githubHref: "https://github.com/Sanjai05122006/URL-Analyzer",
    type: "",
    
  },

  {
    slug: "leetcode-sync",
    name: "LeetCode Sync",
    description: "Auto-sync coding solutions to GitHub",

    heroTitle: "Solving problems isn’t enough. Tracking them matters.",
    heroSummary:
      "Automatically syncs accepted LeetCode solutions to GitHub without manual effort.",

    category: "Extension",
    image: `${projectImageBasePath}/leetcode-img.png`,
    stack: ["JavaScript", "Browser APIs", "GitHub API"],

    highlights: [
      "Automatic GitHub sync for accepted solutions",
      "Structured repository updates",
    ],

    metric: "Zero-effort solution tracking",

    overview:
      "Developers often fail to maintain coding archives due to repetitive manual workflows.",

    challenge:
      "Manual syncing of solutions is time-consuming and inconsistent.",

    solution:
      "Built a browser automation workflow to detect and sync accepted solutions automatically.",

    outcomes: [
      "Reduced manual effort",
      "Consistent coding archive",
      "Improved developer visibility",
    ],

    year: "2024",
    role: "JavaScript developer",
    status: "Active",
    duration: "2 Weeks",

    impact: [
      "Automated GitHub syncing",
      "Consistent problem tracking",
      "Reduced repetitive work",
      "Improved workflow efficiency",
    ],

    techGroups: [
      { label: "Extension", value: "JavaScript, browser APIs" },
      { label: "Integration", value: "GitHub API" },
    ],

    challengeCards: [
      {
        title: "Reducing manual workflow",
        detail: "Automated solution detection and sync",
      },
      {
        title: "Maintaining structure",
        detail: "Defined consistent repository updates",
      },
    ],

    buildPoints: [
      "Built browser-based automation system",
      "Integrated GitHub API for syncing",
      "Structured repository updates",
      "Reduced manual copy-paste workflow",
      "Designed for daily coding habits",
    ],

    heroStats: [
      { title: "Auto Sync", detail: "GitHub integration" },
      { title: "Browser Tool", detail: "Lightweight extension" },
      { title: "Developer Workflow", detail: "Daily usage" },
      { title: "Progress Tracking", detail: "Public archive" },
    ],

    href: "https://github.com/Sanjai05122006/LeetCode-Code-Documentation",
    githubHref: "https://github.com/Sanjai05122006/LeetCode-Code-Documentation",
    type: "",
    
  },

  {
    slug: "focustab",
    name: "FocusTab",
    description: "Notion-powered productivity dashboard",

    heroTitle: "You don’t need more tools. You need visibility.",
    heroSummary:
      "Turns every new tab into a real-time Notion-powered task dashboard.",

    category: "Extension",
    image: `${projectImageBasePath}/focus-img.png`,
    stack: ["JavaScript", "Notion API", "Browser Extension"],

    highlights: [
      "Notion-integrated task dashboard",
      "Real-time task updates",
    ],

    metric: "Tasks visible on every tab",

    overview:
      "Task management tools are often disconnected from daily browsing workflows.",

    challenge:
      "Users don’t consistently check productivity tools, reducing effectiveness.",

    solution:
      "Built a new-tab extension that surfaces tasks instantly using Notion integration.",

    outcomes: [
      "Improved task visibility",
      "Faster task interaction",
      "Better workflow consistency",
    ],

    year: "2024",
    role: "Extension developer",
    status: "Active",
    duration: "3 Weeks",

    impact: [
      "Tasks visible on every new tab",
      "Real-time Notion sync",
      "Faster task access",
      "Reduced workflow friction",
    ],

    techGroups: [
      { label: "Extension", value: "JavaScript" },
      { label: "Integration", value: "Notion API" },
    ],

    challengeCards: [
      {
        title: "Improving task visibility",
        detail: "Used new-tab surface as primary UI",
      },
      {
        title: "Maintaining performance",
        detail: "Optimized sync and rendering",
      },
    ],

    buildPoints: [
      "Built new-tab productivity dashboard",
      "Integrated Notion API",
      "Implemented real-time updates",
      "Designed fast task interactions",
      "Optimized performance",
    ],

    heroStats: [
      { title: "New-tab Dashboard", detail: "Instant access" },
      { title: "Notion Sync", detail: "Live updates" },
      { title: "Quick Actions", detail: "Fast task flow" },
      { title: "Daily Use", detail: "High frequency" },
    ],

    href: "https://github.com/Sanjai05122006/Todo-Extension",
    githubHref: "https://github.com/Sanjai05122006/Todo-Extension",
    type: "",
    
  },
];

export function getProjectBySlug(slug: string) {
  return allProjects.find((project) => project.slug === slug);
}

export function getProjectSlugs() {
  return allProjects.map((project) => project.slug);
}

export const filterOptions: Filter[] = [
  "All",
  "AI Systems",
  "Full Stack",
  "Backend",
  "Extensions",
];

export function matchesFilter(project: Project, filter: Filter) {
  if (filter === "All") return true;
  if (filter === "Backend") return project.category === "Backend / AI";
  if (filter === "Extensions") return project.category === "Extension";
  return project.category === filter;
}