export interface Project {
  slug: string;
  name: string;
  whatItIs: string;
  image: string[];
  description: string;
  keyFeatures: string[];
  projectDoneMonthsAgo: number;
  detailedDescription: string;
  techStack: string[];
  frontendRepo: string;
  backendRepo: string;
  liveLink: string;
  underDevelopment?: boolean;
  walkthroughVideo?: string;
  motive?: string[];
  architecture?: string[];
  problemsSolved?: string[];
}
