/**
 * Portfolio Content Constants
 * Edit this file to customize the portfolio content.
 */

export const PORTFOLIO_DATA = {
  name: "Anom",
  fullName: "Anom Abebe",
  title: "Anom Abebe",
  tagline: "Building backend systems and transitioning into production-ready machine learning engineering",
  location: "Ethiopia",
  availability: "Open to internships and junior roles",
  resumeUrl: "/cv/anomabebe.pdf",
  about: {
    headline: "Backend systems engineer transitioning into ML engineering.",
    description1: "Software engineering student focused on backend systems and data-driven applications.",
    description2: "Experienced in building REST APIs with Go and Django, working with SQL and MongoDB, and analyzing data using Python tools. Currently transitioning toward machine learning engineering and MLOps."
  },
  skills: [
    "Go (Gin)", "Django", "REST APIs", "Python", "Pandas", "NumPy", "Matplotlib", "SQL", "MongoDB", "Clean architecture", "Git", "Error handling", "MLOps", "Scikit-learn", "System design", "postgres","langchain"
  ],
  skillGroups: {
    backend: ["Go (Gin)", "Django", "REST APIs"],
    data: ["Python", "Pandas", "NumPy", "Matplotlib"],
    databases: ["SQL", "MongoDB"],
    practices: ["Clean architecture", "Git", "Error handling"],
    learning: ["MLOps", "Scikit-learn", "System design"]
  },
  projects: [
    {
      id: "leather-college-portal",
      name: "Leather College Portal",
      description: "Portal system for managing academic workflows and structured data operations",
      highlights: [
        "Designed system for handling institutional workflows",
        "Implemented structured data management",
        "Built maintainable backend architecture"
      ],
      stack: ["Django", "SQL", "REST APIs"],
      image: "/lightcollege.png",
      link: "https://github.com/Anom-a/light-institute-platform/",
      demo: "",
      code: ""
    },
    {
      id: "orchestrix",
      name: "Orchestrix",
      description: "System-focused application for organizing backend processes",
      highlights: [
        "Designed modular system architecture",
        "Organized workflow handling",
        "Focused on clean backend structure"
      ],
      stack: ["Go (Gin)", "REST APIs", "MongoDB"],
      image: "/orchestrix.png",
      link: "https://github.com/Anom-a/Orchestrix",
      demo: "",
      code: ""
    },
    {
      id: "rate-my-professors",
      name: "Rate My Professors",
      description: "Platform for submitting and viewing professor ratings",
      highlights: [
        "Handled user-generated data",
        "Designed structured data models",
        "Implemented backend logic for submissions"
      ],
      stack: ["Django", "REST APIs", "SQL"],
      image: "/rate_my_proffesor.png",
      link: "https://github.com/Anom-a/Rate-My-Proffesor",
      demo: "",
      code: ""
    }
  ],
  journey: [
    {
      period: "Present",
      role: "Software Engineering Student",
      company: "",
      description: "Focused on backend systems and machine learning transition"
    }
  ],
  contact: {
    email: "anomabebe639@gmail.com",
    github: "https://github.com/Anom-a",
    linkedin: "https://www.linkedin.com/in/anom-abebe-37053928b/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    twitter: "https://x.com/anom_ab",
    telegram: "https://t.me/anom_yah"
  },
  achievements: [],
  certifications: [],
  testimonials: [],
  writing: []
};
