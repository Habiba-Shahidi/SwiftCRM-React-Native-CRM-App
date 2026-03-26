// src/navigation/AppNavigator.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ListingScreen from '../screens/ListingScreen';
import DetailsScreen from '../screens/DetailsScreen';
import { Property } from '../types';

export type RootStackParamList = {
  Listing: undefined;
  Details: { property: Property }; // Keep this consistent with what you're passing
};

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Listing"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Listing" component={ListingScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;