// src/screens/auth/Splash.tsx
import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated, Dimensions } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import { COLORS } from '../assets/colors';
import { RootStackParamList } from '../navigation/types';

const { width, height } = Dimensions.get('window');

// Type navigation specifically for stack
type SplashScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

const Splash: React.FC = () => {
  const navigation = useNavigation<SplashScreenNavigationProp>();
  const scaleAnim = useRef(new Animated.Value(0.6)).current;
  const floatAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Logo scale animation
    Animated.timing(scaleAnim, {
      toValue: 1,
      duration: 1200,
      useNativeDriver: true,
    }).start();

    // Floating shape animation
    Animated.loop(
      Animated.sequence([
        Animated.timing(floatAnim, {
          toValue: -20,
          duration: 2000,
          useNativeDriver: true,
        }),
        Animated.timing(floatAnim, {
          toValue: 0,
          duration: 2000,
          useNativeDriver: true,
        }),
      ])
    ).start();

    // Navigate to Login after 2.5s
    const timer = setTimeout(() => {
      navigation.replace('Login'); // ✅ now works
    }, 2500);

    return () => clearTimeout(timer);
  }, [navigation, scaleAnim, floatAnim]);

  return (
    <LinearGradient colors={['#1E3A8A', '#14B8A6']} style={styles.container}>
      <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
        <View style={styles.logoContainer}>
          <View style={styles.iconCircle}>
            <Text style={styles.iconText}>S</Text>
          </View>
          <Text style={styles.logoText}>SwiftCRM</Text>
        </View>
      </Animated.View>

      {/* Floating decorative shape */}
      <Animated.View
        style={[
          styles.floatingShape,
          { transform: [{ translateY: floatAnim }, { rotate: '10deg' }] },
        ]}
      />

      <Text style={styles.tagline}>Manage Your Leads Effortlessly</Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 2,
  },
  iconCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 8,
  },
  iconText: {
    color: COLORS.primary,
    fontSize: 36,
    fontWeight: '800',
  },
  logoText: {
    color: COLORS.white,
    fontSize: 32,
    fontWeight: '700',
  },
  tagline: {
    color: COLORS.white,
    fontSize: 16,
    marginTop: 25,
    fontStyle: 'italic',
    letterSpacing: 0.5,
  },
  floatingShape: {
    position: 'absolute',
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: 'rgba(255,255,255,0.1)',
    top: height / 2 - 100,
    left: width / 2 - 75,
    zIndex: 1,
  },
});

export default Splash;

