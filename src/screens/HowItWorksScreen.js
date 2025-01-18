import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const HowItWorksScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      
      <View style={styles.whiteSection}>
        <Text style={styles.sectionTitle}>The Uber for Scholarships</Text>
        <Text style={styles.sectionSubtitle}>A platform connecting the world with financially struggling students in Government Primary Schools of Bangladesh</Text>
        <View style={styles.iconContainer}>
          <Image source={require('../assets/icons/appstore_small.png')} style={styles.icon} />
          <Image source={require('../assets/icons/playstore_small.png')} style={styles.icon} />
        </View>
        <View style={styles.imageContainer}>
          <View style={styles.imageCard}>
            <Image source={require('../assets/images/app_scholarship.jpg')} style={styles.cardImage} />
            <Text style={styles.cardTitle}>Title 1</Text>
            <Text style={styles.cardDescription}>Description for image 1</Text>
          </View>
          <View style={styles.imageCard}>
            <Image source={require('../assets/images/app_school.png')} style={styles.cardImage} />
            <Text style={styles.cardTitle}>Title 2</Text>
            <Text style={styles.cardDescription}>Description for image 2</Text>
          </View>
          <View style={styles.imageCard}>
            <Image source={require('../assets/images/app_graduation.png')} style={styles.cardImage} />
            <Text style={styles.cardTitle}>Title 3</Text>
            <Text style={styles.cardDescription}>Description for image 3</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    height: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#21252A',
  },
  whiteSection: {
    backgroundColor: 'white',
    width: '100%',
    padding: 20,
    alignItems: 'center',
    height: '100%',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#21252A',
    marginBottom: 10,
  },
  sectionSubtitle: {
    fontSize: 16,
    color: '#21252A',
    marginBottom: 20,
    textAlign: 'center',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
    marginBottom: 20,
  },
  icon: {
    width: "150",
    height: "150",
    padding:"20" ,
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  imageCard: {
    alignItems: 'center',
    width: '30%',
  },
  cardImage: {
    width: '100%',
    height: 100,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#21252A',
    marginBottom: 5,
  },
  cardDescription: {
    fontSize: 14,
    color: '#21252A',
    textAlign: 'center',
  },
});

export default HowItWorksScreen;