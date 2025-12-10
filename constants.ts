import { ContactInfo, Experience, Project, SkillCategory } from "./types";

export const CONTACT_INFO: ContactInfo = {
  email: "bharti.satyamspb@gmail.com",
  phone: "+91 6204764664",
  location: "Bengaluru, India",
  linkedin: "https://www.linkedin.com/in/satyam-spb/",
  github: "https://github.com/satyam-spb",
  leetcode: "https://leetcode.com/u/satyam_spb",
  x: "https://x.com/satyam_spb",
};

export const SIGNAL_PILLS = [
  "Reduced Training Time to 7.12m (LoRA)",
  "97% Accuracy on ID System (SMOTE)",
  "Adversarial NLP Research (Samsung)",
  "Production RAG Pipelines"
];

export const SKILLS: SkillCategory[] = [
  {
    title: "AI / LLM / NLP",
    skills: ["RAG", "LoRA Fine-Tuning", "Embeddings", "Adversarial NLP", "TextAttack", "LLM Security", "LangChain"]
  },
  {
    title: "Full-Stack Engineering",
    skills: ["React", "TypeScript", "FastAPI", "Tailwind CSS", "JWT Auth", "REST APIs", "Node.js", "MongoDB"]
  },
  {
    title: "Languages & Core",
    skills: ["Java", "Data Structures & Algorithms", "System Design", "OOP", "Python", "SQL"]
  },
  {
    title: "ML / Data Science",
    skills: ["SMOTE", "scikit-learn", "XGBoost", "Random Forest", "SVM", "Model Evaluation", "MySQL"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "cosmilearn",
    title: "CosmiLearn",
    subtitle: "Production-Grade AI Tutoring Platform",
    tech: [
      "React",
      "TypeScript",
      "FastAPI",
      "MongoDB",
      "RAG",
      "Groq Llama-3.1",
    ],
    tags: ["Full-Stack", "AI", "RAG", "Product"],
    isFeatured: true, // Mark as main project
    problem:
      "Static learning platforms lack personalization, leading to low student engagement and retention.",
    solution:
      "Engineered a RAG-based recommendation engine with MiniLM embeddings and streaming AI tutoring via Groq Llama-3.1.",
    impact:
      "Deployed secure production system with JWT auth, rate-limiting, and abuse filtering. Scalable microservices architecture.",
    githubUrl: "https://github.com/satyam-spb/e-learning",
    liveUrl: "https://cosmilearnai.vercel.app/",
  },
  {
    id: "ids",
    title: "SMOTE-Enhanced IDS",
    subtitle: "High-Recall Intrusion Detection System",
    tech: ["Python", "scikit-learn", "SMOTE", "XGBoost", "Random Forest"],
    tags: ["ML", "Security", "Research", "Python"],
    problem:
      "Imbalanced cybersecurity datasets caused high false-negative rates for minority attack classes.",
    solution:
      "Implemented SMOTE for class balancing and benchmarked ensemble models (XGBoost, RF) against traditional SVM.",
    impact:
      "Achieved 97% accuracy and improved minority-class recall by >35% for critical threats like Blackhole attacks.",
    githubUrl: "https://github.com/satyam-spb/SMOTE-ML-Experiments",
  },
];

export const EXPERIENCE: Experience[] = [
  {
    id: "samsung-prism",
    role: "AI Safety Research Collaborator",
    company: "Samsung PRISM",
    period: "11/2023 – 10/2024",
    type: "Research / Internship",
    highlights: [
      "Designed adversarial prompt-injection attacks on transformer LLMs (DistilBERT, Llama-3.1) using TextAttack framework.",
      "Optimized Llama-3.1-8B fine-tuning pipeline using LoRA/4-bit quantization, reducing training time to 7.12 minutes with 52.7% GPU utility.",
      "Curated a high-quality adversarial dataset of 61,857 samples to benchmark and improve model refusal consistency.",
      "Delivered research outcomes directly to SRI-B mentorship team, enhancing internal LLM safety protocols."
    ]
  }
];

export const EDUCATION = {
  degree: "Bachelor of Engineering — Computer Science",
  university: "Visvesvaraya Technological University, Bengaluru",
  cgpa: "8.5 / 10",
  period: "05/2022 – 04/2026"
};