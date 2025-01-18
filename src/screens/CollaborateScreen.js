import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, FlatList, TouchableOpacity, Modal } from 'react-native';

const { width: screenWidth } = Dimensions.get('window');

const images = [
  { id: '1', src: require('../assets/carousel/community_1.jpg') },
  { id: '2', src: require('../assets/carousel/community_2.jpg') },
  { id: '3', src: require('../assets/carousel/community_3.jpg') },
  { id: '4', src: require('../assets/carousel/community_4.jpg') },
  { id: '5', src: require('../assets/carousel/community_5.jpg') },
  { id: '6', src: require('../assets/carousel/community_6.jpg') },
  // Add more images as needed
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

  return (
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginBottom: 10,
    paddingTop: 90,
  },
  description: {
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
  
  },
  gallery: {
    alignItems: 'center',
  },
  imageContainer: {
    margin: 10,
  },
  image: {
    width: screenWidth - 40,
    height: screenWidth - 40,
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
});

export default CollaborateScreen;