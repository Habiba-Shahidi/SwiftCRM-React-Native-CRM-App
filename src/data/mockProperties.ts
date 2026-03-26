// src/data/mockProperties.ts
import { Property } from '../types';

export const mockProperties: Property[] = [
  {
      id: 1,
      title: "Modern Apartment in North City Centre",
      price: 450000,
      location: "North City Centre, Dublin 1",
      address: "123 O'Connell Street, Dublin 1",
      bedrooms: 2,
      bathrooms: 2,
      propertyType: "Apartment",
      size: 85,
      images: [
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
        "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6",
        "https://images.unsplash.com/photo-1484154218962-a197022b5858"
      ],
      description: "Stunning modern apartment located in the heart of Dublin's city centre. This beautifully designed property features spacious living areas, high-end finishes, and breathtaking city views. Perfect for professionals or families looking for convenience and luxury.",
      features: [
        "Lift Access",
        "Underground Parking",
        "Security System",
        "Balcony",
        "Modern Kitchen",
        "Underfloor Heating"
      ],
      berRating: "A2",
      yearBuilt: 2020,
      status: "for-sale"
    },
    {
      id: 2,
      title: "Victorian House in Ranelagh",
      price: 895000,
      location: "Ranelagh, Dublin 6",
      address: "45 Ranelagh Road, Dublin 6",
      bedrooms: 4,
      bathrooms: 3,
      propertyType: "House",
      size: 180,
      images: [
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
      ],
      description: "Beautiful Victorian residence with original period features, located in one of Dublin's most sought-after neighborhoods. This stunning property combines classic charm with modern amenities, offering spacious accommodation across three floors.",
      features: [
        "Period Features",
        "Private Garden",
        "Off-Street Parking",
        "Original Fireplaces",
        "High Ceilings",
        "Cellar Conversion"
      ],
      berRating: "C1",
      yearBuilt: 1890,
      status: "for-sale"
    },
    {
      id: 3,
      title: "Penthouse in Grand Canal Dock",
      price: 1250000,
      location: "Grand Canal Dock, Dublin 2",
      address: "12 Grand Canal Square, Dublin 2",
      bedrooms: 3,
      bathrooms: 3,
      propertyType: "Penthouse",
      size: 145,
      images: [
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
        "https://images.unsplash.com/photo-1600607687644-c7171b42498f"
      ],
      description: "Spectacular penthouse with panoramic city and canal views. This luxurious property features a private terrace, floor-to-ceiling windows, and premium finishes throughout. Located in the prestigious Grand Canal Dock area.",
      features: [
        "Private Terrace",
        "24hr Security",
        "Gym Access",
        "Concierge Service",
        "Smart Home System",
        "Wine Cellar"
      ],
      berRating: "A1",
      yearBuilt: 2018,
      status: "for-sale"
    },
    {
      id: 4,
      title: "Coastal Cottage in Howth",
      price: 375000,
      location: "Howth, Dublin 13",
      address: "8 Harbour Road, Howth, Dublin 13",
      bedrooms: 2,
      bathrooms: 1,
      propertyType: "Cottage",
      size: 65,
      images: [
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d",
        "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea"
      ],
      description: "Charming coastal cottage with sea views, nestled in the picturesque fishing village of Howth. This delightful property offers character-filled accommodation with modern upgrades, perfect for a peaceful retreat.",
      features: [
        "Sea Views",
        "Private Garden",
        "Fireplace",
        "Character Features",
        "Walking Distance to DART",
        "Off-Street Parking"
      ],
      berRating: "D1",
      yearBuilt: 1950,
      status: "for-sale"
    },
    {
      id: 5,
      title: "Family Home in Stillorgan",
      price: 675000,
      location: "Stillorgan, Dublin 18",
      address: "32 Stillorgan Park, Dublin 18",
      bedrooms: 4,
      bathrooms: 3,
      propertyType: "House",
      size: 160,
      images: [
        "https://images.unsplash.com/photo-1600566752355-35792bedcfea",
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3"
      ],
      description: "Spacious family home with a large garden, located in a quiet residential area. This property offers excellent living space with modern amenities, perfect for growing families.",
      features: [
        "Large Garden",
        "Sunroom Extension",
        "Home Office",
        "Driveway Parking",
        "Energy Efficient",
        "Close to Schools"
      ],
      berRating: "B3",
      yearBuilt: 2005,
      status: "for-sale"
    }
];