import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Dimensions, FlatList, TouchableOpacity, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import schoolData from '../assets/data/schools.json';

const { width: screenWidth } = Dimensions.get('window');

// Create a mapping of image paths
const imageMapping = {
  1: require('../assets/school/school1.jpeg'),
  2: require('../assets/school/school2.jpeg'),
  3: require('../assets/school/school3.jpeg'),
  4: require('../assets/school/school4.jpeg'),
  5: require('../assets/school/school5.jpeg'),
  6: require('../assets/school/school6.jpeg'),
  7: require('../assets/school/school7.jpeg'),
};

const images = [
  { id: '1', src: require('../assets/carousel/community_1.jpg') },
  { id: '2', src: require('../assets/carousel/community_2.jpg') },
  { id: '3', src: require('../assets/carousel/community_3.jpg') },
  { id: '4', src: require('../assets/carousel/community_4.jpg') },
  { id: '5', src: require('../assets/carousel/community_5.jpg') },
  { id: '6', src: require('../assets/carousel/community_6.jpg') },
  { id: '7', src: require('../assets/carousel/community_7.jpg') },
  { id: '8', src: require('../assets/carousel/community_8.jpg') },
  { id: '9', src: require('../assets/carousel/community_9.jpg') },
  { id: '10', src: require('../assets/carousel/community_10.jpg') },
  { id: '11', src: require('../assets/carousel/community_11.jpg') },
  { id: '12', src: require('../assets/carousel/community_12.jpg') },
  { id: '13', src: require('../assets/carousel/community_13.jpg') },
  { id: '14', src: require('../assets/carousel/community_14.jpg') },
  { id: '15', src: require('../assets/carousel/community_15.jpg') },
  { id: '16', src: require('../assets/carousel/community_16.jpg') },
  { id: '17', src: require('../assets/carousel/community_17.jpg') },
  { id: '18', src: require('../assets/carousel/community_18.jpg') },
];

const CollaborateScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImagePress = (image) => {
    setSelectedImage(image);
    setModalVisible(true);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleImagePress(item.src)}>
      <View style={styles.imageContainer}>
        <Image source={item.src} style={styles.image} />
      </View>
    </TouchableOpacity>
  );

  const renderSchoolItem = ({ item }) => (
    <View style={styles.schoolItemContainer}>
      <Image source={imageMapping[item.school_img_id]} style={styles.schoolImage} />
      <View style={styles.schoolTextContainer}>
        <Text style={styles.schoolTitle}>{item.name}</Text>
        <View style={styles.locationContainer}>
          <Icon name="map-marker" size={20} color="#38C367" />
          <Text style={styles.schoolLocation}>{item.location}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        <Text style={styles.title}>Community Impact</Text>
        <Text style={styles.description}>
          Every scholarship begins with shipping a mobile phone to the parent of the student. Then they create their own mobile bank account
          using that phone, to start receiving their child's scholarships directly, every month.
        </Text>
        <FlatList
          data={images}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.gallery}
        />
        {selectedImage && (
          <Modal
            visible={modalVisible}
            transparent={true}
            onRequestClose={() => setModalVisible(false)}
          >
            <View style={styles.modalContainer}>
              <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
                <Text style={styles.closeButtonText}>×</Text>
              </TouchableOpacity>
              <Image source={selectedImage} style={styles.fullImage} />
            </View>
          </Modal>
        )}
        <Text style={styles.sectionTitle}>Students from Government Primary Schools Nationwide</Text>
        <FlatList
          data={schoolData}
          renderItem={renderSchoolItem}
          keyExtractor={(item) => item.name}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.schoolGallery}
        />
        <Text style={styles.sectionTitle}>Scholarship Eligibility</Text>
        <Text style={styles.description}>Only students who are currently enrolled in Government Primary Schools and fall under any of the following criteria are eligible to apply for scholarships</Text>
        <View style={styles.cardContainer}>
          <View style={styles.card}>
            <Icon name="school" size={40} color="#38C367" style={styles.cardIcon} />
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>Education for All</Text>
              <Text style={styles.cardDescription}>Providing quality education to underprivileged children.</Text>
            </View>
          </View>
          <View style={styles.card}>
            <Icon name="heart" size={40} color="#38C367" style={styles.cardIcon} />
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>Health and Wellness</Text>
              <Text style={styles.cardDescription}>Ensuring the health and wellness of students.</Text>
            </View>
          </View>
          <View style={styles.card}>
            <Icon name="food" size={40} color="#38C367" style={styles.cardIcon} />
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>Nutrition Programs</Text>
              <Text style={styles.cardDescription}>Providing nutritious meals to support learning.</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    paddingTop: 20,
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
    alignItems: 'center',
  },
  imageContainer: {
    margin: 10,
  },
  image: {
    width: screenWidth - 40,
    height: 550,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullImage: {
    width: screenWidth * 0.9,
    height: screenWidth * 0.9,
    resizeMode: 'contain',
  },
  closeButton: {
    position: 'absolute',
    top: 40,
    right: 20,
    zIndex: 1,
  },
  closeButtonText: {
    fontSize: 30,
    color: 'white',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginVertical: 20,
  },
  schoolGallery: {
    alignItems: 'center',
  },
  schoolItemContainer: {
    margin: 10,
    alignItems: 'center',
  },
  schoolImage: {
    width: screenWidth - 40,
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  schoolTextContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
  schoolTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  schoolLocation: {
    fontSize: 14,
    color: 'gray',
    marginLeft: 5,
  },
  cardContainer: {
    width: '100%',
    paddingHorizontal: 20,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  cardIcon: {
    marginRight: 15,
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  cardDescription: {
    fontSize: 14,
    color: 'gray',
  },
});

export default CollaborateScreen;