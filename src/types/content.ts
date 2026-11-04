export interface Activity {
  id: string;
  number: string;
  title: string;
  shortTitle: string;
  image: string;
  imagePosition?: string;
  alt: string;
  summary: string;
  description: string;
  objectives: string[];
}
export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  status: string;
  image: string;
  imagePosition?: string;
  alt: string;
  summary: string;
  vision: string;
  considerations: string[];
}
export interface Article {
  id: string;
  title: string;
  category: string;
  image: string;
  imagePosition?: string;
  alt: string;
  excerpt: string;
  readTime: string;
  sections: { heading: string; body: string }[];
}
