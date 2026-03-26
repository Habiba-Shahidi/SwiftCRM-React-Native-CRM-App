// src/types/index.ts
export interface Property {
  id: number;
  title: string;
  price: number;
  location: string;
  address: string;
  bedrooms: number;
  bathrooms: number;
  propertyType: string;
  size: number;
  images: string[];
  description: string;
  features: string[];
  berRating?: string;
  yearBuilt?: number;
  
  latitude?: number;
  longitude?: number;
  status: 'for-sale' | 'sold' | 'reserved';
  created_at?: string;
  updated_at?: string;
  agent?: {
    name: string;
    phone: string;
    email: string;
    avatar?: string;
  };
  viewCount?: number;
   isFeatured?: boolean;
  listedDate?: string;
 
}

export interface ApiResponse {
  status: string;
  message?: string;
  data: Property[];
  pagination?: {
    current_page: number;
    total_pages: number;
    total_items: number;
    items_per_page: number;
  };
}

export interface SearchFilters {
  location?: string;
  minPrice?: number;
  maxPrice?: number;
  bedrooms?: number;
  bathrooms?: number;
  propertyType?: string;
  minSize?: number;
  maxSize?: number;
  berRating?: string;
}