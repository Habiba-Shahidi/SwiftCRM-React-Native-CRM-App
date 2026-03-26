// // src/screens/DetailsScreen.tsx
// import React from 'react';
// import {
//   View,
//   Text,
//   ScrollView,
//   Image,
//   StyleSheet,
//   Dimensions,
//   TouchableOpacity,
//   StatusBar,
//   SafeAreaView,
//   Share,
//   Linking,
// } from 'react-native';
// import { RouteProp, useRoute, useNavigation } from '@react-navigation/native';
// import { StackNavigationProp } from '@react-navigation/stack';
// import Icon from 'react-native-vector-icons/Ionicons';
// import { Property } from '../types';

// const { width } = Dimensions.get('window');

// // Define the navigation param list
// type RootStackParamList = {
//   Listing: undefined;
//   Details: { property: Property };
// };

// // Define the route prop type
// type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'Details'>;
// type DetailsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Details'>;

// const DetailsScreen: React.FC = () => {
//   // Use hooks to get route params and navigation
//   const route = useRoute<DetailsScreenRouteProp>();
//   const navigation = useNavigation<DetailsScreenNavigationProp>();
  
//   // Get property from route params
//   const { property } = route.params;

//   const formatPrice = (price: number) => {
//     return new Intl.NumberFormat('en-IE', {
//       style: 'currency',
//       currency: 'EUR',
//       minimumFractionDigits: 0,
//       maximumFractionDigits: 0,
//     }).format(price);
//   };

//   const handleShare = async () => {
//     try {
//       await Share.share({
//         message: `Check out this property: ${property.title} - ${formatPrice(property.price)}\n${property.address}`,
//         title: property.title,
//       });
//     } catch (error) {
//       console.error('Error sharing:', error);
//     }
//   };

//   const handleCallAgent = () => {
//     // You can add the actual phone number from the API if available
//     Linking.openURL('tel:+35312345678');
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBar barStyle="light-content" backgroundColor="#000" />
//       <ScrollView showsVerticalScrollIndicator={false}>
//         {/* Image Gallery */}
//         <View style={styles.imageContainer}>
//           <Image
//             source={{ uri: property.images[0] }}
//             style={styles.mainImage}
//             resizeMode="cover"
//           />
//           <TouchableOpacity
//             style={styles.backButton}
//             onPress={() => navigation.goBack()}>
//             <Icon name="arrow-back" size={24} color="#fff" />
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.shareButton} onPress={handleShare}>
//             <Icon name="share-outline" size={22} color="#fff" />
//           </TouchableOpacity>
//           <View style={styles.imageCountBadge}>
//             <Icon name="images-outline" size={16} color="#fff" />
//             <Text style={styles.imageCountText}>{property.images.length}</Text>
//           </View>
//         </View>

//         {/* Content */}
//         <View style={styles.content}>
//           {/* Price and Title */}
//           <View style={styles.priceSection}>
//             <Text style={styles.price}>{formatPrice(property.price)}</Text>
//             <View style={styles.propertyTypeBadge}>
//               <Text style={styles.propertyTypeText}>{property.propertyType}</Text>
//             </View>
//           </View>

//           <Text style={styles.title}>{property.title}</Text>

//           {/* Location */}
//           <View style={styles.locationSection}>
//             <Icon name="location-outline" size={20} color="#666" />
//             <Text style={styles.address}>{property.address}</Text>
//           </View>

//           {/* Key Details */}
//           <View style={styles.detailsGrid}>
//             <View style={styles.detailBox}>
//               <Icon name="bed-outline" size={24} color="#2c3e50" />
//               <Text style={styles.detailValue}>{property.bedrooms}</Text>
//               <Text style={styles.detailLabel}>Bedrooms</Text>
//             </View>
//             <View style={styles.detailBox}>
//               <Icon name="water-outline" size={24} color="#2c3e50" />
//               <Text style={styles.detailValue}>{property.bathrooms}</Text>
//               <Text style={styles.detailLabel}>Bathrooms</Text>
//             </View>
//             <View style={styles.detailBox}>
//               <Icon name="resize-outline" size={24} color="#2c3e50" />
//               <Text style={styles.detailValue}>{property.size}</Text>
//               <Text style={styles.detailLabel}>m²</Text>
//             </View>
//             {property.berRating && (
//               <View style={styles.detailBox}>
//                 <Icon name="leaf-outline" size={24} color="#2c3e50" />
//                 <Text style={styles.detailValue}>{property.berRating}</Text>
//                 <Text style={styles.detailLabel}>BER Rating</Text>
//               </View>
//             )}
//           </View>

//           {/* Description */}
//           <View style={styles.section}>
//             <Text style={styles.sectionTitle}>Description</Text>
//             <Text style={styles.description}>{property.description}</Text>
//           </View>

//           {/* Features */}
//           {property.features && property.features.length > 0 && (
//             <View style={styles.section}>
//               <Text style={styles.sectionTitle}>Features</Text>
//               <View style={styles.featuresList}>
//                 {property.features.map((feature, index) => (
//                   <View key={index} style={styles.featureItem}>
//                     <Icon name="checkmark-circle-outline" size={20} color="#27ae60" />
//                     <Text style={styles.featureText}>{feature}</Text>
//                   </View>
//                 ))}
//               </View>
//             </View>
//           )}

//           {/* Additional Info */}
//           <View style={styles.section}>
//             <Text style={styles.sectionTitle}>Additional Information</Text>
//             <View style={styles.infoRow}>
//               <Text style={styles.infoLabel}>Property Type:</Text>
//               <Text style={styles.infoValue}>{property.propertyType}</Text>
//             </View>
//             {property.yearBuilt && (
//               <View style={styles.infoRow}>
//                 <Text style={styles.infoLabel}>Year Built:</Text>
//                 <Text style={styles.infoValue}>{property.yearBuilt}</Text>
//               </View>
//             )}
//           </View>
//         </View>
//       </ScrollView>

//       {/* Contact Button */}
//       <View style={styles.contactButtonContainer}>
//         <TouchableOpacity style={styles.contactButton} onPress={handleCallAgent}>
//           <Icon name="call-outline" size={20} color="#fff" />
//           <Text style={styles.contactButtonText}>Contact Agent</Text>
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   imageContainer: {
//     position: 'relative',
//   },
//   mainImage: {
//     width: width,
//     height: 300,
//   },
//   backButton: {
//     position: 'absolute',
//     top: 23,
//     left: 16,
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     backgroundColor: 'rgba(0,0,0,0.5)',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   shareButton: {
//     position: 'absolute',
//     top: 23,
//     right: 16,
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     backgroundColor: 'rgba(0,0,0,0.5)',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   imageCountBadge: {
//     position: 'absolute',
//     bottom: 16,
//     right: 16,
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0,0,0,0.7)',
//     paddingHorizontal: 12,
//     paddingVertical: 6,
//     borderRadius: 20,
//   },
//   imageCountText: {
//     color: '#fff',
//     marginLeft: 4,
//     fontSize: 14,
//   },
//   content: {
//     padding: 20,
//   },
//   priceSection: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 12,
//   },
//   price: {
//     fontSize: 32,
//     fontWeight: 'bold',
//     color: '#2c3e50',
//   },
//   propertyTypeBadge: {
//     backgroundColor: '#e8f5e9',
//     paddingHorizontal: 12,
//     paddingVertical: 6,
//     borderRadius: 20,
//   },
//   propertyTypeText: {
//     fontSize: 14,
//     color: '#27ae60',
//     fontWeight: '500',
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: '600',
//     color: '#2c3e50',
//     marginBottom: 12,
//   },
//   locationSection: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 24,
//   },
//   address: {
//     fontSize: 14,
//     color: '#666',
//     marginLeft: 8,
//     flex: 1,
//   },
//   detailsGrid: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 32,
//     paddingVertical: 20,
//     borderTopWidth: 1,
//     borderBottomWidth: 1,
//     borderColor: '#f0f0f0',
//   },
//   detailBox: {
//     alignItems: 'center',
//     flex: 1,
//   },
//   detailValue: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#2c3e50',
//     marginTop: 8,
//   },
//   detailLabel: {
//     fontSize: 12,
//     color: '#666',
//     marginTop: 4,
//   },
//   section: {
//     marginBottom: 32,
//   },
//   sectionTitle: {
//     fontSize: 20,
//     fontWeight: '600',
//     color: '#2c3e50',
//     marginBottom: 16,
//   },
//   description: {
//     fontSize: 16,
//     lineHeight: 24,
//     color: '#555',
//   },
//   featuresList: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//   },
//   featureItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     width: '50%',
//     marginBottom: 12,
//   },
//   featureText: {
//     fontSize: 14,
//     color: '#555',
//     marginLeft: 8,
//   },
//   infoRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     paddingVertical: 8,
//     borderBottomWidth: 1,
//     borderBottomColor: '#f0f0f0',
//   },
//   infoLabel: {
//     fontSize: 16,
//     color: '#666',
//   },
//   infoValue: {
//     fontSize: 16,
//     color: '#2c3e50',
//     fontWeight: '500',
//   },
//   contactButtonContainer: {
//     padding: 16,
//     backgroundColor: '#fff',
//     borderTopWidth: 1,
//     borderTopColor: '#f0f0f0',
//   },
//   contactButton: {
//     backgroundColor: '#2c3e50',
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingVertical: 14,
//     borderRadius: 12,
//     gap: 8,
//   },
//   contactButtonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: '600',
//   },
// });

// export default DetailsScreen;

// src/screens/DetailsScreen.tsx
import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
  Share,
  Linking,
  FlatList,
  Modal,
  Animated,
} from 'react-native';
import { RouteProp, useRoute, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import { Property } from '../types';

const { width, height } = Dimensions.get('window');
const THUMBNAIL_SIZE = 80;

type RootStackParamList = {
  Listing: undefined;
  Details: { property: Property };
};

type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'Details'>;
type DetailsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Details'>;

const DetailsScreen: React.FC = () => {
  const route = useRoute<DetailsScreenRouteProp>();
  const navigation = useNavigation<DetailsScreenNavigationProp>();
  const { property } = route.params;
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const flatListRef = useRef<FlatList>(null);
  const scrollX = useRef(new Animated.Value(0)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IE', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const handleShare = async () => {
    try {
      await Share.share({
        message: `Check out this property: ${property.title} - ${formatPrice(property.price)}\n${property.address}`,
        title: property.title,
      });
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  const handleCallAgent = () => {
    if (property.agent?.phone) {
      Linking.openURL(`tel:${property.agent.phone}`);
    } else {
      Linking.openURL('tel:+35312345678');
    }
  };

  const handleEmailAgent = () => {
    if (property.agent?.email) {
      Linking.openURL(`mailto:${property.agent.email}`);
    }
  };

  const onScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
    { useNativeDriver: false }
  );

  const handleScrollEnd = (event: any) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    setCurrentImageIndex(index);
  };

  const scrollToImage = (index: number) => {
    flatListRef.current?.scrollToIndex({ index, animated: true });
    setCurrentImageIndex(index);
  };

  const renderImageItem = ({ item, index }: { item: string; index: number }) => (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => setModalVisible(true)}>
      <Image
        source={{ uri: item }}
        style={styles.carouselImage}
        resizeMode="cover"
      />
    </TouchableOpacity>
  );

  const renderThumbnail = ({ item, index }: { item: string; index: number }) => (
    <TouchableOpacity
      style={[
        styles.thumbnailButton,
        currentImageIndex === index && styles.thumbnailButtonActive,
      ]}
      onPress={() => scrollToImage(index)}>
      <Image
        source={{ uri: item }}
        style={styles.thumbnailImage}
        resizeMode="cover"
      />
    </TouchableOpacity>
  );

  const renderFullscreenImage = ({ item }: { item: string }) => (
    <View style={styles.fullscreenImageContainer}>
      <Image
        source={{ uri: item }}
        style={styles.fullscreenImage}
        resizeMode="contain"
      />
    </View>
  );

  // Animated header opacity based on scroll
  const headerOpacity = scrollX.interpolate({
    inputRange: [0, width / 2],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      
      {/* Image Carousel */}
      <View style={styles.carouselContainer}>
        <FlatList
          ref={flatListRef}
          data={property.images}
          renderItem={renderImageItem}
          keyExtractor={(_, index) => index.toString()}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={onScroll}
          onMomentumScrollEnd={handleScrollEnd}
          bounces={false}
        />
        
        {/* Navigation Buttons */}
        {property.images.length > 1 && (
          <>
            <TouchableOpacity
              style={[styles.navButton, styles.navButtonLeft]}
              onPress={() => scrollToImage(Math.max(0, currentImageIndex - 1))}>
              <Icon name="chevron-back" size={24} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.navButton, styles.navButtonRight]}
              onPress={() => scrollToImage(Math.min(property.images.length - 1, currentImageIndex + 1))}>
              <Icon name="chevron-forward" size={24} color="#fff" />
            </TouchableOpacity>
          </>
        )}
        
        {/* Header Buttons */}
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.shareButton} onPress={handleShare}>
          <Icon name="share-outline" size={22} color="#fff" />
        </TouchableOpacity>
        
        {/* Image Counter */}
        <View style={styles.imageCounter}>
          <Text style={styles.imageCounterText}>
            {currentImageIndex + 1} / {property.images.length}
          </Text>
        </View>
        
        {/* Pagination Dots */}
        {property.images.length > 1 && (
          <View style={styles.paginationContainer}>
            {property.images.map((_, index) => {
              const inputRange = [(index - 1) * width, index * width, (index + 1) * width];
              const dotWidth = scrollX.interpolate({
                inputRange,
                outputRange: [8, 20, 8],
                extrapolate: 'clamp',
              });
              const opacity = scrollX.interpolate({
                inputRange,
                outputRange: [0.5, 1, 0.5],
                extrapolate: 'clamp',
              });
              
              return (
                <Animated.View
                  key={index}
                  style={[
                    styles.paginationDot,
                    { width: dotWidth, opacity },
                  ]}
                />
              );
            })}
          </View>
        )}
      </View>
      
      {/* Thumbnail Strip */}
      {property.images.length > 1 && (
        <View style={styles.thumbnailStrip}>
          <FlatList
            data={property.images}
            renderItem={renderThumbnail}
            keyExtractor={(_, index) => index.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.thumbnailList}
          />
        </View>
      )}
      
      {/* Content */}
      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}>
        <View style={styles.content}>
          {/* Price and Title */}
          <View style={styles.priceSection}>
            <View>
              <Text style={styles.price}>{formatPrice(property.price)}</Text>
              {property.isFeatured && (
                <View style={styles.featuredBadge}>
                  <Icon name="star" size={12} color="#FFD700" />
                  <Text style={styles.featuredText}>Featured Property</Text>
                </View>
              )}
            </View>
            <View style={styles.propertyTypeBadge}>
              <Text style={styles.propertyTypeText}>{property.propertyType}</Text>
            </View>
          </View>

          <Text style={styles.title}>{property.title}</Text>

          {/* Location */}
          <View style={styles.locationSection}>
            <Icon name="location-outline" size={20} color="#666" />
            <Text style={styles.address}>{property.address}</Text>
            <TouchableOpacity style={styles.mapButton}>
              <Text style={styles.mapButtonText}>View on Map</Text>
            </TouchableOpacity>
          </View>

          {/* Key Details */}
          <View style={styles.detailsGrid}>
            <View style={styles.detailBox}>
              <Icon name="bed-outline" size={24} color="#2c3e50" />
              <Text style={styles.detailValue}>{property.bedrooms}</Text>
              <Text style={styles.detailLabel}>Bedrooms</Text>
            </View>
            <View style={styles.detailBox}>
              <Icon name="water-outline" size={24} color="#2c3e50" />
              <Text style={styles.detailValue}>{property.bathrooms}</Text>
              <Text style={styles.detailLabel}>Bathrooms</Text>
            </View>
            <View style={styles.detailBox}>
              <Icon name="resize-outline" size={24} color="#2c3e50" />
              <Text style={styles.detailValue}>{property.size}</Text>
              <Text style={styles.detailLabel}>m²</Text>
            </View>
            {property.berRating && (
              <View style={styles.detailBox}>
                <Icon name="leaf-outline" size={24} color="#2c3e50" />
                <Text style={styles.detailValue}>{property.berRating}</Text>
                <Text style={styles.detailLabel}>BER Rating</Text>
              </View>
            )}
          </View>

          {/* Description */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Description</Text>
            <Text style={styles.description}>{property.description}</Text>
          </View>

          {/* Features */}
          {property.features && property.features.length > 0 && (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Features & Amenities</Text>
              <View style={styles.featuresList}>
                {property.features.map((feature, index) => (
                  <View key={index} style={styles.featureItem}>
                    <Icon name="checkmark-circle" size={20} color="#27ae60" />
                    <Text style={styles.featureText}>{feature}</Text>
                  </View>
                ))}
              </View>
            </View>
          )}

          {/* Additional Info */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Additional Information</Text>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Property Type:</Text>
              <Text style={styles.infoValue}>{property.propertyType}</Text>
            </View>
            {property.yearBuilt && (
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Year Built:</Text>
                <Text style={styles.infoValue}>{property.yearBuilt}</Text>
              </View>
            )}
            {property.listedDate && (
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Listed Date:</Text>
                <Text style={styles.infoValue}>
                  {new Date(property.listedDate).toLocaleDateString('en-IE', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </Text>
              </View>
            )}
          </View>

          {/* Agent Information */}
          {property.agent && (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Listing Agent</Text>
              <View style={styles.agentCard}>
                {property.agent.avatar ? (
                  <Image source={{ uri: property.agent.avatar }} style={styles.agentAvatar} />
                ) : (
                  <View style={styles.agentAvatarPlaceholder}>
                    <Icon name="person-outline" size={30} color="#fff" />
                  </View>
                )}
                <View style={styles.agentInfo}>
                  <Text style={styles.agentName}>{property.agent.name}</Text>
                  <TouchableOpacity onPress={handleCallAgent} style={styles.agentPhone}>
                    <Icon name="call-outline" size={14} color="#27ae60" />
                    <Text style={styles.agentPhoneText}>{property.agent.phone}</Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.messageButton} onPress={handleEmailAgent}>
                  <Icon name="mail-outline" size={20} color="#2c3e50" />
                </TouchableOpacity>
              </View>
            </View>
          )}
        </View>
      </ScrollView>

      {/* Contact Buttons */}
      <View style={styles.contactButtonContainer}>
        <TouchableOpacity style={styles.contactButton} onPress={handleCallAgent}>
          <Icon name="call-outline" size={20} color="#fff" />
          <Text style={styles.contactButtonText}>Call Agent</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.messageButtonLarge} onPress={handleEmailAgent}>
          <Icon name="mail-outline" size={20} color="#2c3e50" />
          <Text style={styles.messageButtonText}>Email</Text>
        </TouchableOpacity>
      </View>

      {/* Fullscreen Image Modal */}
      <Modal
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalContainer}>
          <TouchableOpacity
            style={styles.modalCloseButton}
            onPress={() => setModalVisible(false)}>
            <Icon name="close" size={24} color="#fff" />
          </TouchableOpacity>
          <FlatList
            data={property.images}
            renderItem={renderFullscreenImage}
            keyExtractor={(_, index) => index.toString()}
            horizontal
            pagingEnabled
            initialScrollIndex={currentImageIndex}
            showsHorizontalScrollIndicator={false}
            getItemLayout={(_, index) => ({
              length: width,
              offset: width * index,
              index,
            })}
          />
          <View style={styles.modalCounter}>
            <Text style={styles.modalCounterText}>
              {currentImageIndex + 1} / {property.images.length}
            </Text>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  carouselContainer: {
    position: 'relative',
    height: 300,
  },
  carouselImage: {
    width: width,
    height: 300,
  },
  navButton: {
    position: 'absolute',
    top: '50%',
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -20,
  },
  navButtonLeft: {
    left: 16,
  },
  navButtonRight: {
    right: 16,
  },
  backButton: {
    position: 'absolute',
    top: 16,
    left: 16,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  shareButton: {
    position: 'absolute',
    top: 16,
    right: 16,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageCounter: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    backgroundColor: 'rgba(0,0,0,0.7)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  imageCounterText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '500',
  },
  paginationContainer: {
    position: 'absolute',
    bottom: 16,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paginationDot: {
    height: 4,
    borderRadius: 2,
    backgroundColor: '#fff',
    marginHorizontal: 4,
  },
  thumbnailStrip: {
    backgroundColor: '#fff',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  thumbnailList: {
    paddingHorizontal: 16,
  },
  thumbnailButton: {
    width: THUMBNAIL_SIZE,
    height: THUMBNAIL_SIZE,
    borderRadius: 8,
    marginRight: 12,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: 'transparent',
  },
  thumbnailButtonActive: {
    borderColor: '#2c3e50',
  },
  thumbnailImage: {
    width: '100%',
    height: '100%',
  },
  scrollContent: {
    paddingBottom: 100,
  },
  content: {
    padding: 20,
  },
  priceSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  price: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  featuredBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
    gap: 4,
  },
  featuredText: {
    fontSize: 12,
    color: '#FFD700',
    fontWeight: '500',
  },
  propertyTypeBadge: {
    backgroundColor: '#e8f5e9',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  propertyTypeText: {
    fontSize: 14,
    color: '#27ae60',
    fontWeight: '500',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: 12,
  },
  locationSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
    flexWrap: 'wrap',
  },
  address: {
    fontSize: 14,
    color: '#666',
    marginLeft: 8,
    flex: 1,
  },
  mapButton: {
    marginLeft: 8,
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: '#f8f9fa',
    borderRadius: 16,
  },
  mapButtonText: {
    fontSize: 12,
    color: '#2c3e50',
    fontWeight: '500',
  },
  detailsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 32,
    paddingVertical: 20,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#f0f0f0',
  },
  detailBox: {
    alignItems: 'center',
    flex: 1,
  },
  detailValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginTop: 8,
  },
  detailLabel: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#555',
  },
  featuresList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '50%',
    marginBottom: 12,
  },
  featureText: {
    fontSize: 14,
    color: '#555',
    marginLeft: 8,
    flex: 1,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  infoLabel: {
    fontSize: 16,
    color: '#666',
  },
  infoValue: {
    fontSize: 16,
    color: '#2c3e50',
    fontWeight: '500',
  },
  agentCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    padding: 16,
    borderRadius: 12,
  },
  agentAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  agentAvatarPlaceholder: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#2c3e50',
    justifyContent: 'center',
    alignItems: 'center',
  },
  agentInfo: {
    flex: 1,
    marginLeft: 12,
  },
  agentName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: 4,
  },
  agentPhone: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  agentPhoneText: {
    fontSize: 14,
    color: '#27ae60',
  },
  messageButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  contactButtonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    padding: 16,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
    gap: 12,
  },
  contactButton: {
    flex: 2,
    backgroundColor: '#2c3e50',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    borderRadius: 12,
    gap: 8,
  },
  contactButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  messageButtonLarge: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    borderRadius: 12,
    gap: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  messageButtonText: {
    color: '#2c3e50',
    fontSize: 16,
    fontWeight: '600',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: '#000',
  },
  modalCloseButton: {
    position: 'absolute',
    top: 40,
    right: 20,
    zIndex: 10,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullscreenImageContainer: {
    width: width,
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullscreenImage: {
    width: width,
    height: height,
  },
  modalCounter: {
    position: 'absolute',
    bottom: 40,
    alignSelf: 'center',
    backgroundColor: 'rgba(0,0,0,0.7)',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  modalCounterText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },
});

export default DetailsScreen;