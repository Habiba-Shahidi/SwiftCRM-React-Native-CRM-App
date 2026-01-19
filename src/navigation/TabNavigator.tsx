import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import type { IconProps } from 'react-native-vector-icons/Icon';

import Dashboard from '../screens/Dashboard';
import Leads from '../screens/Leads';

import { BottomTabParamList } from './types';
import Deals from '../screens/Deals';
import Profile from '../screens/Profile';

const Tab = createBottomTabNavigator<BottomTabParamList>();

const TabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
        tabBarIcon: ({ focused }) => {
          let iconName: IconProps['name'];

          switch (route.name) {
            case 'Dashboard':
              iconName = focused ? 'grid' : 'grid-outline';
              break;
            case 'Leads':
              iconName = focused ? 'people' : 'people-outline';
              break;
            case 'Deals':
              iconName = focused ? 'briefcase' : 'briefcase-outline';
              break;
            case 'Profile':
              iconName = focused ? 'person' : 'person-outline';
              break;
            default:
              iconName = 'ellipse-outline';
          }

          return (
            <View style={styles.iconContainer}>
              <Ionicons
                name={iconName}
                size={22}
                color={focused ? '#14B8A6' : '#94A3B8'}
              />
              <Text
                style={[
                  styles.label,
                  focused && styles.activeLabel,
                ]}
              >
                {route.name}
              </Text>
            </View>
          );
        },
      })}
    >
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen name="Leads" component={Leads} />
       <Tab.Screen name="Deals" component={Deals} />
       <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default TabNavigator;

/* =======================
   Styles
======================= */

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#020617',
    height: 70,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: 'absolute',
    overflow: 'hidden',
    elevation: 10,
  },

  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  label: {
    fontSize: 11,
    marginTop: 4,
    color: '#94A3B8',
    fontWeight: '600',
  },

  activeLabel: {
    color: '#14B8A6',
  },
});
