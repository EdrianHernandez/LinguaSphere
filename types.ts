export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  isInteractive?: boolean;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  features: string[];
  isRecommended?: boolean;
  color: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatarUrl: string;
  flagUrl: string; // Emoji or image URL
}

export enum SupportedLanguage {
  SPANISH = 'Spanish',
  FRENCH = 'French',
  GERMAN = 'German',
  JAPANESE = 'Japanese',
  ITALIAN = 'Italian',
  CHINESE = 'Chinese'
}