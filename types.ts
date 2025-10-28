
export interface Project {
  emoji: string;
  title: string;
  description: string;
  valueProp: string;
  tech: string[];
  githubUrl: string;
  // FIX: Added optional 'gallery' property to support project modals with image galleries.
  gallery?: string[];
}

export interface WorkExperience {
  role: string;
  company: string;
  duration: string;
  points: string[];
}

export interface Education {
  degree: string;
  institution: string;
  duration: string;
  gpa: string;
}

export interface Skills {
  languages: string[];
  technologies: string[];
  devops: string[];
  databases: string[];
}

export interface Certification {
  name: string;
  issuer: string;
}

export interface ResumeData {
  summary: string;
  experience: WorkExperience[];
  education: Education;
  skills: Skills;
  certifications: Certification[];
  activities: string[];
}
