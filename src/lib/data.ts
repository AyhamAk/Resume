export const personalInfo = {
  name: "Ayham Klaani",
  title: "Full-Stack Product Engineer",
  roles: ["AI Agents", "Mobile", "Enterprise Web"],
  tagline: "I ship multi-agent AI systems, enterprise platforms, and mobile apps people actually use.",
  email: "aklaani508@gmail.com",
  phone: "+972-50-431-5245",
  location: "Israel, Golan Heights",
  website: "https://www.ayham.work",
  github: "https://github.com/AyhamAk",
  linkedin: "https://www.linkedin.com/in/ayham-klaani-31b81b157/",
  bio: `Full-stack product engineer with 4+ years at BMC Software — shipping production multi-agent AI systems for enterprise customers, supporting clients directly and delivering patches to production, and independently publishing trilingual mobile apps with real users on iOS and Android. I own features from user problem to measured outcome: scoping, building across Angular / Java / Node / mobile, and iterating on feedback.`,
  languages: ["Arabic (Native)", "English (Fluent)", "Hebrew (Fluent)"],
};

export const stats = [
  { value: "4+", label: "Years at BMC Software" },
  { value: "5h → 1h", label: "Test authoring time" },
  { value: "30+", label: "Families on my mobile app" },
  { value: "2", label: "App stores, solo-shipped" },
];

export const skills: Record<string, string[]> = {
  "ai & llm": [
    "Multi-Agent Orchestration",
    "RAG",
    "MCP",
    "Google ADK",
    "LangGraph",
    "Claude & Gemini APIs",
    "AWS Bedrock",
    "Prompt Engineering",
    "Claude Code",
  ],
  languages: ["TypeScript", "JavaScript", "Java", "Python"],
  frontend: ["Angular", "React / Next.js", "HTML/CSS"],
  backend: ["Java REST APIs", "Spring Boot", "Node.js"],
  mobile: ["React Native / Expo", "App Store & Google Play", "OTA updates"],
  "cloud & infra": ["Supabase", "Cloudflare R2", "Railway", "Jenkins", "CI/CD", "Kibana", "Git"],
  testing: ["Playwright", "Robot Framework"],
};

export const experience = [
  {
    id: 1,
    title: "Software Engineer",
    company: "BMC Software",
    location: "Israel",
    period: "September 2023 – Present",
    type: "Full-time",
    description: [
      "Architected and shipped a production multi-agent AI system (Google ADK + Claude on AWS Bedrock) — orchestrator plus 4 specialized sub-agents — giving Control-M enterprise users a natural-language interface to create and update workflow jobs",
      "Built an AI test-generation pipeline (RAG over 600+ existing Playwright builders) that cut integration-test authoring time from ~5 hours to ~1 hour per test",
      "Built RAG knowledge bases enabling AI agents to navigate and reason over large enterprise codebases; integrated MCP servers into local dev workflows and demoed AI-driven developer tooling to the broader team",
      "Owned core Forecast domain features end-to-end — Angular frontend and Java REST backend — across both On-Prem and SaaS deployments, serving enterprise clients",
      "Led technical support sessions directly with enterprise customers: reproduced production issues, shipped targeted patches, and delivered resolutions — turning customer-reported bugs into shipped fixes with minimal back-and-forth",
      "Designed CI/CD pipelines and a Kibana monitoring dashboard that cut failed-build detection from hours to minutes; drove Angular upgrades across 3 major versions",
      "Expanded automated test coverage with Robot Framework; mentored student developers on the team as tech lead on AI-powered features",
    ],
    technologies: [
      "Google ADK",
      "Claude",
      "AWS Bedrock",
      "RAG",
      "MCP",
      "Angular",
      "Java",
      "Playwright",
      "Robot Framework",
      "Jenkins",
      "Kibana",
    ],
  },
  {
    id: 2,
    title: "Product Developer Intern",
    company: "BMC Software",
    location: "Israel",
    period: "May 2022 – September 2023",
    type: "Internship",
    description: [
      "Shipped full-stack features to production quality alongside senior developers; built Git automation tooling and debugging scripts that streamlined team workflows",
      "Promoted to full-time Software Engineer after one year based on output and ownership",
    ],
    technologies: ["Angular", "TypeScript", "Java", "Git", "CI/CD", "Automation"],
  },
  {
    id: 3,
    title: "C Language Tutor",
    company: "Tel-Hai College",
    location: "Tel-Hai, Israel",
    period: "April 2021 – July 2021",
    type: "Part-time",
    description: [
      "Assisted students with understanding core concepts of the C programming language",
      "Developed teaching materials and facilitated coding exercises to help students build a solid foundation in programming",
      "Provided one-on-one mentoring and support to students struggling with complex programming concepts",
      "Created practical coding challenges and assignments to reinforce learning",
    ],
    technologies: ["C", "Teaching", "Mentoring", "Programming Fundamentals"],
  },
];

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  features: string[];
  category: string;
  featured?: boolean;
  github?: string;
  demo?: string;
}

/**
 * Flagship shipped product — rendered in its own showcase section.
 * Store links are intentionally unset until the public URLs are provided.
 */
export const shippedApp = {
  name: "Steps Academy",
  subtitle: "Trilingual Montessori Parent & Staff App",
  role: "Solo Developer",
  year: "2026",
  platforms: ["iOS", "Android"],
  languages: ["العربية", "עברית", "English"],
  summary:
    "Sole developer: scoped, designed, built and published a trilingual (Arabic / Hebrew / English, full RTL) parent app — 30+ families onboarded across iOS and Android within weeks of launch.",
  highlights: [
    "Child-specific photo gallery, private to each family via invite-code onboarding",
    "Daily nursery schedule, after-school course sign-ups with evening reminders",
    "Parenting tip videos and push-notification announcements",
    "Web admin panel for rosters, child-tagged album uploads, weekly schedule templates, course management and per-user engagement analytics",
    "OTA updates to skip store review cycles; infrastructure cost ~$0/month",
  ],
  stack: [
    "React Native / Expo",
    "Railway",
    "Supabase",
    "Cloudflare R2",
    "JWT + RBAC",
    "Push Notifications",
  ],
  appStoreUrl: undefined as string | undefined,
  playStoreUrl: undefined as string | undefined,
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Steps Academy",
    description:
      "Trilingual (Arabic / Hebrew / English, full RTL) Montessori parent & staff app, published solo on the App Store and Google Play. 30+ families onboarded within weeks, backed by a custom Railway + Supabase + R2 backend and web admin panel.",
    image: "/projects/steps-academy.svg",
    technologies: ["React Native", "Expo", "Supabase", "Railway", "Cloudflare R2"],
    features: [
      "Invite-code onboarding with JWT auth and role-based access",
      "Private per-child photo galleries",
      "Push notifications and OTA updates",
      "Web admin panel with engagement analytics",
    ],
    category: "Mobile",
    featured: true,
  },
  {
    id: 2,
    title: "War Room — Multi-Agent Orchestration",
    description:
      "Six specialized LLM agents (Director, Engineer, Designer, Developer, QA, Sales) autonomously plan, build and ship working web apps from a one-line brief, with a self-correcting loop and real-time SSE streaming.",
    image: "/projects/war-room.svg",
    technologies: ["Node.js", "LangGraph", "Claude", "Gemini", "Playwright"],
    features: [
      "6 agents with scoped tools and defined handoff protocol",
      "Self-correcting agent loop",
      "Real-time streaming via SSE",
      "From one-line brief to shipped app",
    ],
    category: "AI & Automation",
    featured: true,
  },
  {
    id: 3,
    title: "Shakkil — AI-Driven CAD Drafting",
    description:
      "Local web app where you describe what you want to draft and AI agents generate and execute the CAD commands through AutoCAD and Blender MCP integrations.",
    image: "/projects/shakkil.svg",
    technologies: ["TypeScript", "AutoCAD 2027", "Blender MCP", "MCP"],
    features: [
      "Natural-language drafting",
      "AutoCAD and Blender MCP integrations",
      "Agents execute CAD commands directly",
      "Runs locally",
    ],
    category: "AI & Automation",
    featured: true,
  },
  {
    id: 4,
    title: "AI Content Automation Pipeline",
    description:
      "End-to-end pipeline: Google Sheets → Claude (script generation) → ElevenLabs (voiceover) → Telegram (delivery) — fully automated video content production with zero manual steps per episode.",
    image: "/projects/content-pipeline.svg",
    technologies: ["n8n", "Docker", "ElevenLabs", "Claude API"],
    features: [
      "Sheet-driven episode queue",
      "Claude script generation",
      "ElevenLabs voiceover",
      "Telegram delivery, zero manual steps",
    ],
    category: "AI & Automation",
  },
  {
    id: 5,
    title: "AI-Powered Test Generator",
    description:
      "Built a multi-agent pipeline (RAG over 600+ existing Playwright builders) that automatically generates Playwright test specs — cutting integration-test authoring from ~5 hours to ~1 hour per test.",
    image: "/projects/test-generator.gif",
    technologies: ["TypeScript", "Playwright", "RAG", "Multi-Agent Systems", "Node.js"],
    features: [
      "Multi-agent system architecture",
      "Automatic test spec generation",
      "RAG over 600+ Playwright builders",
      "Integration with CI/CD pipelines",
    ],
    category: "AI & Automation",
  },
  {
    id: 6,
    title: "Control-M Job Assistant",
    description:
      "Production multi-agent AI system (Google ADK + Claude on AWS Bedrock) — an orchestrator plus 4 specialized sub-agents — giving Control-M enterprise users a natural-language interface to create and update workflow jobs.",
    image: "/projects/control-m-agents.svg",
    technologies: ["Google ADK", "Claude", "AWS Bedrock", "Multi-Agent Systems"],
    features: [
      "Orchestrator + 4 specialized sub-agents",
      "Natural-language job creation and updates",
      "Production enterprise deployment",
      "Built at BMC Software",
    ],
    category: "Enterprise Software",
  },
  {
    id: 7,
    title: "Forecast Domain Development",
    description:
      "Owned core forecasting features used by enterprise clients at BMC Software end-to-end — Angular frontend and Java REST backend — across both On-Prem and SaaS deployments.",
    image: "/projects/forecast.gif",
    technologies: ["Angular", "TypeScript", "Java", "REST APIs", "Enterprise Architecture"],
    features: [
      "Predictive analytics engine",
      "Real-time data processing",
      "Enterprise-grade scalability",
      "On-Prem and SaaS support",
    ],
    category: "Enterprise Software",
  },
  {
    id: 8,
    title: "CI/CD Monitoring Dashboard",
    description:
      "Kibana-based dashboard monitoring Jenkins pipelines that cut failed-build detection from hours to minutes, with real-time insight into build status, test results, and deployment metrics.",
    image: "/projects/cicd-dashboard.gif",
    technologies: ["Kibana", "Jenkins", "Elasticsearch", "CI/CD", "Monitoring"],
    features: [
      "Real-time pipeline monitoring",
      "Test failure analytics",
      "Deployment performance tracking",
      "Custom alerts and notifications",
    ],
    category: "DevOps & Infrastructure",
  },
  {
    id: 9,
    title: "Student Housing Platform",
    description:
      "Full-stack student housing web platform with authentication and search features. Academic project using Angular, NoSQL, and Node.js with comprehensive CRUD operations and user management.",
    image: "/projects/housing.gif",
    technologies: ["Angular", "Node.js", "NoSQL", "MongoDB", "Express"],
    features: [
      "User authentication system",
      "Advanced search and filtering",
      "Property listing management",
      "Real-time updates",
    ],
    category: "Web Development",
  },
];

export const education = [
  {
    degree: "B.Sc. in Computer Science",
    institution: "Tel-Hai College",
    location: "Israel",
    period: "2019 – 2023",
    specialization: "Software Development",
    achievements: [
      "Software Development track",
      "Full-stack student housing platform (Angular / Node.js)",
      "Real-time people-detection system (Python, OpenCV)",
    ],
  },
];

export const certifications: { name: string; issuer: string; date: string }[] = [];
