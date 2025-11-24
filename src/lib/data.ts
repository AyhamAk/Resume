export const personalInfo = {
  name: "Ayham Klaani",
  title: "Full-Stack Developer & AI Engineer",
  tagline: "I build automation, AI-driven tools, and enterprise-grade systems.",
  email: "aklaani508@gmail.com",
  phone: "0504315245",
  location: "Israel, Golan Heights",
  github: "https://github.com/AyhamAk",
  linkedin: "https://www.linkedin.com/in/ayham-klaani-31b81b157/",
  bio: `Full-Stack Developer and AI Engineer with 3+ years building enterprise-grade Angular & Java applications at BMC Software. Strong focus on automation, AI-driven tooling, and scalable product development. I build systems that reduce manual work, improve performance, and ship real customer value. Experienced across frontend, backend, CI/CD, and AI automation (MCP, RAG, multi-agent systems).`,
  languages: ["Arabic (Native)", "English (Advanced)", "Hebrew (Advanced)"],
};

export const skills = {
  frontend: [
    { name: "Angular", level: 95 },
    { name: "TypeScript", level: 92 },
    { name: "HTML5/CSS3", level: 90 },
    { name: "React.js", level: 85 },
    { name: "Next.js", level: 82 },
    { name: "UI/UX Design", level: 80 },
  ],
  backend: [
    { name: "Java", level: 92 },
    { name: "REST APIs", level: 95 },
    { name: "Spring Boot", level: 88 },
    { name: "Node.js", level: 85 },
    { name: "NoSQL", level: 80 },
    { name: "MongoDB", level: 78 },
  ],
  "ai & automation": [
    { name: "AI Agents", level: 90 },
    { name: "MCP Servers", level: 88 },
    { name: "RAG Systems", level: 85 },
    { name: "Multi-Agent Systems", level: 87 },
    { name: "Playwright", level: 90 },
    { name: "Robot Framework", level: 85 },
  ],
  testing: [
    { name: "Test Automation", level: 92 },
    { name: "Playwright", level: 90 },
    { name: "Robot Framework", level: 88 },
    { name: "Jasmine", level: 82 },
    { name: "Unit Testing", level: 85 },
  ],
  "devops & tools": [
    { name: "Git", level: 95 },
    { name: "Jenkins", level: 88 },
    { name: "CI/CD Pipelines", level: 90 },
    { name: "Kibana", level: 85 },
    { name: "Docker", level: 78 },
    { name: "Jira", level: 85 },
  ],
  other: [
    { name: "Team Collaboration", level: 95 },
    { name: "Adaptability", level: 92 },
    { name: "Continuous Learning", level: 95 },
    { name: "Problem Solving", level: 90 },
    { name: "Python", level: 80 },
    { name: "OpenCV", level: 75 },
  ],
};

export const experience = [
  {
    id: 1,
    title: "Product Developer",
    company: "BMC Software",
    location: "Israel",
    period: "September 2023 – Present",
    type: "Full-time",
    description: [
      "Designed, built, and optimized full-stack web applications using Angular, Java (REST APIs), and modern development tools to meet enterprise-level performance standards",
      "Delivered scalable features for both On-Prem and SaaS environments, adapting architectures for different customer deployment models",
      "Designed and maintained RESTful Java APIs, improving system reliability and ensuring seamless integration across modules",
      "Increased automated test coverage using the Robot Framework, reducing manual QA efforts and catching defects earlier in the release cycle",
      "Led technical Webex sessions with customers, reproducing problems, analyzing logs, and delivering actionable solutions",
      "Participated in major code refactoring initiatives, improving architecture consistency, readability, and long-term maintainability",
      "Explored and integrated Model Context Protocol (MCP) servers into development workflows to enable AI-driven automation and tooling",
      "Collaborated on building Retrieval-Augmented Generation (RAG) knowledge bases to improve AI agents' understanding of code and enhance response accuracy",
    ],
    technologies: ["Angular", "TypeScript", "Java", "REST APIs", "Robot Framework", "MCP", "RAG", "CI/CD", "Kibana", "Jenkins"],
  },
  {
    id: 2,
    title: "Product Developer Intern (Student)",
    company: "BMC Software",
    location: "Israel",
    period: "May 2022 – September 2023",
    type: "Internship",
    description: [
      "Contributed to full-stack web development projects, collaborating with senior developers to deliver new product features on time and at production quality",
      "Used Git, automation tools, and debugging frameworks to enhance code quality and streamline team workflows",
      "Refactored and upgraded Angular applications across major versions, improving maintainability and performance while aligning with updated framework standards",
      "Fixed high-priority frontend and backend defects in TypeScript and Java, improving overall product stability and responsiveness",
      "Gained a strong understanding of product delivery cycles, helping bridge the gap between technical execution and business objectives",
      "Designed and managed CI/CD pipelines that built and tested complete applications end-to-end, gaining hands-on experience with automated build, test, and deployment workflows",
    ],
    technologies: ["Angular", "TypeScript", "Java", "Git", "CI/CD", "Debugging", "Automation"],
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

export const projects = [
  {
    id: 1,
    title: "AI-Powered Test Generator",
    description: "Built a multi-agent system that automatically generates Playwright test specs, increasing coverage and cutting manual scripting time. Uses AI to understand application behavior and create comprehensive test cases.",
    image: "/projects/test-generator.gif",
    technologies: ["TypeScript", "Playwright", "Multi-Agent Systems", "AI", "Node.js"],
    features: [
      "Multi-agent system architecture",
      "Automatic test spec generation",
      "Intelligent selector optimization",
      "Integration with CI/CD pipelines",
    ],
    category: "AI & Automation",
  },
  {
    id: 2,
    title: "Forecast Domain Development",
    description: "Designed and implemented core forecasting features used by enterprise clients at BMC Software, handling both frontend (Angular) and backend (Java REST) logic. Improved prediction accuracy and system reliability.",
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
    id: 3,
    title: "CI/CD Monitoring Dashboard",
    description: "Developed a Kibana-based dashboard to monitor Jenkins pipelines, improving visibility into deployment performance. Provides real-time insights into build status, test results, and deployment metrics.",
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
    id: 4,
    title: "Student Housing Platform",
    description: "Built a full-stack student housing web platform with authentication and search features. Academic project using Angular, NoSQL, and Node.js with comprehensive CRUD operations and user management.",
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
    period: "October 2019 – August 2023",
    specialization: "Software Development",
    achievements: [
      "Completed comprehensive software development program",
      "Led multiple successful team projects",
      "Developed full-stack applications and computer vision systems",
    ],
  },
];

export const certifications = [
  // Add any certifications here when available
];
