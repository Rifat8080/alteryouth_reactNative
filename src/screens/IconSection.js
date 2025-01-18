import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

const { width: screenWidth } = Dimensions.get('window');

const IconSection = () => {
  return (
    <View style={styles.section}>
      <Text style={styles.title}>In Association With</Text>
      <View style={styles.logoContainer}>
        <View style={styles.logoWrapper}>
          <Image source={require('../assets/images/undp.jpg')} style={styles.logo} />
        </View>
        <View style={styles.logoWrapper}>
          <Image source={require('../assets/images/expo.png')} style={styles.logo} />
        </View>
        <View style={styles.logoWrapper}>
          <Image source={require('../assets/logo/google.png')} style={styles.logo} />
        </View>
      
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    paddingVertical: 20,
    backgroundColor: 'white',
    alignItems: 'center',
    width: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 20,
    textAlign: 'center',
  },
  logoContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  logoWrapper: {
    marginBottom: 20,
    alignItems: 'center',
  },
  logo: {
    width: screenWidth * 0.5,
    height: screenWidth * 0.5,
    resizeMode: 'contain',
  },
});

export default IconSection;