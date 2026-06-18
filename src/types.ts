/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Feature {
  id: string;
  name: string;
  description: string;
  price: number;
  category: "essential" | "marketing" | "advanced";
  iconName: string;
}

export interface WebsitePackage {
  id: string;
  name: string;
  price: number;
  description: string;
  features: string[];
  duration: string;
  isPopular?: boolean;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: "Company Profile" | "UMKM" | "Landing Page" | "Toko Online" | "Custom System";
  description: string;
  image: string;
  liveUrl?: string;
  features: string[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface CustomEstimatorState {
  category: string;
  themeColor: string;
  pageCount: number;
  features: string[];
  businessName: string;
}
