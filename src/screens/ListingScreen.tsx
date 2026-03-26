// src/screens/ListingScreen.tsx
import React, { useState, useEffect } from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  ActivityIndicator,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import PropertyCard from '../components/PropertyCard';
import { fetchProperties } from '../api/propertyApi';
import { Property } from '../types';

type RootStackParamList = {
  Listing: undefined;
  Details: { property: Property };
};

type ListingScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Listing'
>;

interface ListingScreenProps {
  navigation: ListingScreenNavigationProp;
}

const ListingScreen: React.FC<ListingScreenProps> = ({ navigation }) => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadProperties();
  }, []);

  const loadProperties = async () => {
    try {
      setLoading(true);
      const data = await fetchProperties();
      setProperties(data);
      setError(null);
    } catch (err) {
      setError('Failed to load properties. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

 // src/screens/ListingScreen.tsx (relevant part)
const handlePropertyPress = (property: Property) => {
  navigation.navigate('Details', { property }); // Pass the whole property object
};

  const renderHeader = () => (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>Properties for Sale</Text>
      <Text style={styles.headerSubtitle}>
        {properties.length} properties available
      </Text>
    </View>
  );

  if (loading) {
    return (
      <View style={styles.centerContainer}>
        <ActivityIndicator size="large" color="#2c3e50" />
        <Text style={styles.loadingText}>Loading properties...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centerContainer}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <FlatList
        data={properties}
        renderItem={({ item }) => (
          <PropertyCard
            property={item}
            onPress={() => handlePropertyPress(item)}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
        ListHeaderComponent={renderHeader}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
  },
  listContent: {
    paddingBottom: 20,
  },
  header: {
    paddingHorizontal: 16,
    paddingTop: 30,
    paddingBottom: 12,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  loadingText: {
    marginTop: 12,
    fontSize: 16,
    color: '#666',
  },
  errorText: {
    fontSize: 16,
    color: '#e74c3c',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});

export default ListingScreen;