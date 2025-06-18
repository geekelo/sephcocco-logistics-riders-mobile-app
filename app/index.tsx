import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated, Image } from 'react-native';
import { useRouter } from 'expo-router';

const SplashScreen = () => {
  const spinAnim = useRef(new Animated.Value(0)).current;
  const router = useRouter();

  useEffect(() => {
    // Start spinning animation
    Animated.loop(
      Animated.timing(spinAnim, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      })
    ).start();

    // Navigate after 6 seconds
    const timeout = setTimeout(() => {
      router.replace('/riders');
    }, 6000);

    return () => clearTimeout(timeout);
  }, []);

  const spin = spinAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require('@/assets/images/logo.png')} // Your logo image
        style={[styles.logo, { transform: [{ rotate: spin }] }]}
      />
      <Text style={styles.logoText}>Sephcocco...</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  logoText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
