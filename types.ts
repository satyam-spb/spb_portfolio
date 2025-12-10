export interface Project {
  id: string;
  title: string;
  subtitle: string;
  tech: string[];
  tags: string[]; // New field for filtering
  isFeatured?: boolean; // New field for main project highlight
  problem: string;
  solution: string;
  impact: string;
  githubUrl: string;
  liveUrl?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  highlights: string[];
  type: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  leetcode: string;
  x: string;
}