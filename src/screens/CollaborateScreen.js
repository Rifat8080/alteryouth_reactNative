import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';

const { width: screenWidth } = Dimensions.get('window');

const images = [
  { id: '1', src: require('../assets/images/app_scholarship.jpg') },
  { id: '2', src: require('../assets/images/app_school.png') },
  { id: '3', src: require('../assets/images/app_graduation.png') },
  // Add more images as needed
];

const CollaborateScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Community Impact</Text>
      <Text style={styles.description}>
        Every scholarship begins with shipping a mobile phone to the parent of the student. Then they create their own mobile bank account
        using that phone, to start receiving their child's scholarships directly, every month.
      </Text>
      <View style={styles.gallery}>
        <TouchableOpacity onPress={handlePrev} style={styles.navButton}>
          <Text style={styles.navButtonText}>‹</Text>
        </TouchableOpacity>
        <View style={styles.imageContainer}>
          <Image source={images[currentIndex].src} style={styles.image} />
        </View>
        <TouchableOpacity onPress={handleNext} style={styles.navButton}>
          <Text style={styles.navButtonText}>›</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
    marginBottom: 20,
  },
  gallery: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageContainer: {
    marginHorizontal: 10,
  },
  image: {
    width: screenWidth * 0.8,
    height: 200,
    resizeMode: 'contain',
    borderRadius: 10,
  },
  navButton: {
    padding: 10,
    backgroundColor: '#37C467',
    borderRadius: 5,
  },
  navButtonText: {
    fontSize: 24,
    color: 'white',
  },
});

export default CollaborateScreen;