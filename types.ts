
export interface Project {
  title: string;
  description: string;
  tech: string[];
  imageUrl: string;
  githubUrl: string;
}

export interface Skill {
  name: string;
  icon: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
}
