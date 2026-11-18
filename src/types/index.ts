// Common Types for Blooms Academy

export interface Course {
  id: string;
  title: string;
  description: string;
  category: string;
  duration: string;
  level: string;
  image?: string;
  features?: string[];
  price?: number;
  syllabus?: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  count: number;
  icon?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  rank?: string;
  year?: string;
  image?: string;
  text: string;
  rating?: number;
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  message: string;
  course?: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}
