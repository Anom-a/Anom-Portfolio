export const PORTFOLIO_DATA = {
  name: "Anom",
  fullName: "Anom Abebe",
  title: "Backend & ML Engineer",
  tagline: "I build backend systems in Go and Python — and I'm moving into ML engineering.",
  location: "Ethiopia",
  availability: "Open to remote internships and junior backend / ML roles",
  resumeUrl: "/cv/anomabebe.pdf",

  about: {
    headline: "Backend engineer moving into ML.",
    description1:
      "Third-year Software Engineering student with hands-on experience building REST APIs in Go (Gin) and Django, working with MongoDB and SQL, and shipping real systems used by real institutions.",
    description2:
      "Currently building Flaky Test Forensics — an AI-powered platform that detects flaky CI tests, diagnoses root causes, and suggests fixes using Gemini Flash 2.0. Targeting remote backend and ML engineering roles within the next 12 months.",
  },

  skillGroups: {
    backend: ["Go", "Gin", "Django", "REST APIs", "Docker"],
    databases: ["MongoDB", "PostgreSQL", "SQL"],
    data: ["Python", "Pandas", "NumPy", "Matplotlib"],
    practices: ["Clean architecture", "Git", "System design", "Error handling"],
    learning: ["MLOps", "Scikit-learn", "LangChain", "Gemini API"],
  },

  projects: [
    {
      id: "flaky-test-forensics",
      name: "Flaky Test Forensics",
      description:
        "AI-powered platform that detects flaky CI tests, diagnoses root causes, and suggests fixes. Integrates with GitHub webhooks and uses Gemini Flash 2.0 for diagnosis. Built with Go + Gin, MongoDB, and React.",
      highlights: [
        "GitHub webhook integration for real-time CI event capture",
        "Gemini Flash 2.0 embedded as AI diagnosis agent",
        "Go + Gin API gateway with MongoDB backend",
        "Docker Compose for local dev environment",
      ],
      stack: ["Go", "Gin", "MongoDB", "React", "Gemini Flash 2.0", "Docker"],
      image: "/flaky.webp",
      link: "", // no live link yet — shows "In Progress" badge
      demo: "",
      code: "https://github.com/Anom-a",
    },
    {
      id: "leather-college-portal",
      name: "Leather College Academic Portal",
      description:
        "Full-stack academic portal built with a team, serving 5 user roles — Admin, Registrar, Instructor, Student, and Public — with role-based access control across all workflows.",
      highlights: [
        "RBAC across 5 distinct user roles",
        "Built as a team project for a real institution",
        "Django backend with SQL database",
        "REST API powering a React frontend",
      ],
      stack: ["Django", "SQL", "REST APIs", "React"],
      image: "/lightcollege.webp",
      link: "https://light-institute-platform-rho.vercel.app/",
      demo: "",
      code: "https://github.com/Anom-a/light-institute-platform/",
    },
    {
      id: "orchestrix",
      name: "Orchestrix",
      description:
        "Task management REST API built in Go with Gin and MongoDB. Focused on clean architecture, proper error handling, and idiomatic Go patterns — my first production-minded Go project.",
      highlights: [
        "RESTful API with full CRUD operations",
        "MongoDB integration with Go driver",
        "Clean architecture with separation of concerns",
        "Idiomatic Go error handling patterns",
      ],
      stack: ["Go", "Gin", "MongoDB", "REST APIs"],
      image: "/orchestrix.webp",
      link: "https://github.com/Anom-a/Orchestrix",
      demo: "",
      code: "https://github.com/Anom-a/Orchestrix",
    },
    {
      id: "rate-my-professors",
      name: "Rate My Professors",
      description:
        "Platform for students to submit and browse professor ratings. Built the full backend — data models, submission logic, and REST API — using Django and SQL.",
      highlights: [
        "User-generated rating submissions with validation",
        "Structured relational data models",
        "Django REST API backend",
      ],
      stack: ["Django", "REST APIs", "SQL"],
      image: "/rate_my_proffesor.webp",
      link: "https://github.com/Anom-a/Rate-My-Proffesor",
      demo: "",
      code: "https://github.com/Anom-a/Rate-My-Proffesor",
    },
  ],

  journey: [
    {
      period: "2026 — Present",
      role: "Building Flaky Test Forensics",
      company: "Side Project",
      description:
        "Designing and building an AI-powered developer tool from scratch — Go API gateway, MongoDB backend, GitHub webhook integration, and Gemini Flash 2.0 for AI diagnosis. Covers the full product lifecycle.",
    },
    {
      period: "2024 — 2025",
      role: "Team Project — Academic Portal",
      company: "University Collaboration",
      description:
        "Co-built a full-stack academic portal for a real institution with a small team. Contributed backend architecture, RBAC design across 5 roles, and REST API development in Django.",
    },
    {
      period: "2023 — Present",
      role: "Software Engineering Student",
      company: "University",
      description:
        "Third-year student with a Go and backend focus. Completed coursework in database systems, algorithms, and software architecture. Pursuing ML engineering as a career direction.",
    },
  ],

  contact: {
    email: "anomabebe639@gmail.com",
    github: "https://github.com/Anom-a",
    linkedin: "https://www.linkedin.com/in/anom-abebe-37053928b/",
    twitter: "https://x.com/anom_ab",
    telegram: "https://t.me/anom_yah",
  },

  // Ready to fill when you have them
  achievements: [],
  certifications: [],
  testimonials: [],
  writing: [],
};