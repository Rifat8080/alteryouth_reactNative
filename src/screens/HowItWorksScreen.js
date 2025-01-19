import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const HowItWorksScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.whiteSection}>
        <Text style={styles.sectionTitle}>The Uber for Scholarships</Text>
        <Text style={styles.sectionSubtitle}>A platform connecting the world with financially struggling students in Government Primary Schools of Bangladesh</Text>
        
        <View style={styles.imageContainer}>
          <View style={styles.imageCard}>
            <Image source={require('../assets/images/app_scholarship.jpg')} style={styles.cardImage} />
            <Text style={styles.cardTitle}>Transfer directly</Text>
            <Text style={styles.cardDescription}>Your scholarship is transferred directly to your student's family on their mobile bank account.</Text>
          </View>
          <View style={styles.imageCard}>
            <Image source={require('../assets/images/app_school.png')} style={styles.cardImage} />
            <Text style={styles.cardTitle}>Get school reports</Text>
            <Text style={styles.cardDescription}>View attendance data and report cards from your student's school, until completion of Class 5.</Text>
          </View>
          <View style={styles.imageCard}>
            <Image source={require('../assets/images/app_graduation.png')} style={styles.cardImage} />
            <Text style={styles.cardTitle}>Ensure a literate citizen</Text>
            <Text style={styles.cardDescription}>Your scholarship continues until completion of class 5, when your student achieves literacy.</Text>
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
  whiteSection: {
    backgroundColor: 'white',
    width: '100%',
    padding: 20,
    alignItems: 'center',
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
 
  imageContainer: {
    width: '100%',
  },
  imageCard: {
    alignItems: 'center',
    marginBottom: 20,
  },
  cardImage: {
    width: '90%',
    height: 600,
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
    paddingHorizontal: 20,
  },
});

export default HowItWorksScreen;