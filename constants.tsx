
import { Project, Skill, ExperienceItem } from './types';

export const PROJECTS: Project[] = [
  {
    title: "Personal Portfolio Website",
    description: "Modern portfolio showcasing skills and projects with a responsive design and smooth animations.",
    tech: ["Flutter Web", "Dart"],
    imageUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800",
    githubUrl: "https://github.com/Muhammad-Rashid-172002/muhammad-rashid-portfolio"
  },
  {
    title: "IELTS Study Assistance (AI-based)",
    description: "AI-powered preparation app for practice, guidance, and personalized feedback for IELTS candidates.",
    tech: ["Flutter", "Gemini AI", "Dart"],
    imageUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800",
    githubUrl: "https://github.com/Muhammad-Rashid-172002/IELTS-AI-Study-Assistant"
  },
  {
    title: "Flutter Chat Application",
    description: "Real-time messaging platform featuring secure authentication and instant data synchronization.",
    tech: ["Flutter", "Firebase", "Cloud Firestore"],
    imageUrl: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&q=80&w=800",
    githubUrl: "https://github.com/Muhammad-Rashid-172002/Firebase_Console"
  },
  {
    title: "Expense Tracker App",
    description: "Intuitive finance management tool with categorical spending insights and local data persistence.",
    tech: ["Flutter", "Firebase", "Charts"],
    imageUrl: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800",
    githubUrl: "https://github.com/Muhammad-Rashid-172002/muhammad-rashid-portfolio" 
  },
  {
    title: "Language Learning App",
    description: "Interactive application designed for learning new languages through bite-sized lessons and quizzes.",
    tech: ["Flutter", "Dart", "REST API"],
    imageUrl: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=800",
    githubUrl: "https://github.com/Muhammad-Rashid-172002/Language_Learning_App"
  },
  {
    title: "GenieGPT (AI Chat App)",
    description: "A sophisticated AI conversational interface powered by large language model APIs.",
    tech: ["Flutter", "AI API", "Clean Architecture"],
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    githubUrl: "https://github.com/Muhammad-Rashid-172002/GenieGPT"
  },
  {
    title: "Noor Diesel Company",
    description: "Professional corporate presence for an industrial diesel company highlighting services and products.",
    tech: ["Flutter Web", "Responsive Design"],
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
    githubUrl: "https://github.com/Muhammad-Rashid-172002/Noor-Diesel-Company-Website"
  },
  {
    title: "Fitness Tracker App",
    description: "Complete workout companion for tracking exercises, sets, and overall fitness journey progress.",
    tech: ["Flutter", "State Management", "Provider"],
    imageUrl: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800",
    githubUrl: "https://github.com/Muhammad-Rashid-172002/Fitness_App"
  }
];

export const SKILLS: Skill[] = [
  { name: "Flutter & Dart", icon: "fa-brands fa-google" },
  { name: "Firebase (Auth, DB)", icon: "fa-solid fa-fire" },
  { name: "REST APIs", icon: "fa-solid fa-cloud" },
  { name: "UI/UX Design", icon: "fa-solid fa-pen-nib" },
  { name: "Git & GitHub", icon: "fa-brands fa-github" },
  { name: "State Management", icon: "fa-solid fa-layer-group" }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    role: "Flutter Developer Intern",
    company: "MR Technologies Ltd",
    period: "Jun 2025 - Dec 2025",
    description: "Contributed to the development of enterprise mobile applications using Flutter. Collaborated on UI implementation and Firebase integration for real-time data sync."
  },
  {
    role: "Software Engineer",
    company: "Freelance / Projects",
    period: "2024 - Present",
    description: "Built and deployed multiple high-performance apps for global clients. Focused on clean architecture, optimized performance, and scalability."
  }
];
