// src/components/PropertyCard.tsx
import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Property } from '../types';

const { width } = Dimensions.get('window');
const CARD_WIDTH = width - 32;

interface PropertyCardProps {
  property: Property;
  onPress: () => void;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property, onPress }) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IE', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.9}>
      <View style={styles.card}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: property.images[0] }}
            style={styles.image}
            resizeMode="cover"
          />
          {property.isFeatured && (
            <View style={styles.featuredBadge}>
              <Icon name="star" size={12} color="#FFD700" />
              <Text style={styles.featuredText}>Featured</Text>
            </View>
          )}
          <View style={styles.priceTag}>
            <Text style={styles.priceText}>{formatPrice(property.price)}</Text>
          </View>
        </View>
        
        <View style={styles.content}>
          <View style={styles.titleRow}>
            <Text style={styles.title} numberOfLines={1}>
              {property.title}
            </Text>
            <TouchableOpacity>
              <Icon name="heart-outline" size={22} color="#666" />
            </TouchableOpacity>
          </View>
          
          <View style={styles.locationContainer}>
            <Icon name="location-outline" size={14} color="#999" />
            <Text style={styles.location} numberOfLines={1}>
              {property.location}
            </Text>
          </View>
          
          <View style={styles.detailsContainer}>
            <View style={styles.detailItem}>
              <Icon name="bed-outline" size={16} color="#666" />
              <Text style={styles.detailText}>
                {property.bedrooms} {property.bedrooms === 1 ? 'Bed' : 'Beds'}
              </Text>
            </View>
            <View style={styles.detailItem}>
              <Icon name="water-outline" size={16} color="#666" />
              <Text style={styles.detailText}>
                {property.bathrooms} {property.bathrooms === 1 ? 'Bath' : 'Baths'}
              </Text>
            </View>
            <View style={styles.detailItem}>
              <Icon name="resize-outline" size={16} color="#666" />
              <Text style={styles.detailText}>{property.size} m²</Text>
            </View>
            <View style={styles.detailItem}>
              <Icon name="home-outline" size={16} color="#666" />
              <Text style={styles.detailText}>{property.propertyType}</Text>
            </View>
          </View>
          
          <View style={styles.berContainer}>
            <View style={styles.berBadge}>
              <Text style={styles.berText}>BER {property.berRating}</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    marginHorizontal: 16,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
    overflow: 'hidden',
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: CARD_WIDTH,
    height: 220,
  },
  featuredBadge: {
    position: 'absolute',
    top: 12,
    left: 12,
    backgroundColor: 'rgba(0,0,0,0.75)',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    gap: 4,
  },
  featuredText: {
    color: '#FFD700',
    fontSize: 11,
    fontWeight: '600',
  },
  priceTag: {
    position: 'absolute',
    bottom: 12,
    right: 12,
    backgroundColor: '#fff',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  priceText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  content: {
    padding: 16,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  title: {
    fontSize: 17,
    fontWeight: '600',
    color: '#2c3e50',
    flex: 1,
    marginRight: 12,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  location: {
    fontSize: 13,
    color: '#999',
    marginLeft: 4,
    flex: 1,
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailText: {
    fontSize: 13,
    color: '#666',
    marginLeft: 4,
  },
  berContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  berBadge: {
    backgroundColor: '#f8f9fa',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  berText: {
    fontSize: 11,
    color: '#27ae60',
    fontWeight: '500',
  },
});

export default PropertyCard;