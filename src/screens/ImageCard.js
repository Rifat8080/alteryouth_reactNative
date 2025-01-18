import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
const { width: screenWidth } = Dimensions.get('window');

const ImageCard = ({ imageSrc, altText, caption, linkText, linkHref, isHeadteacher, bottomCaption }) => (
  <View style={styles.cardContainer}>
    <TouchableOpacity onPress={() => { /* Handle link navigation */ }}>
      <Image source={imageSrc} style={styles.image} />
    </TouchableOpacity>
    <View style={styles.captionContainer}>
      <Text style={styles.caption}>{caption}</Text>
      <TouchableOpacity onPress={() => { /* Handle link navigation */ }}>
        <Text style={styles.linkText}>{linkText} →</Text>
      </TouchableOpacity>
    </View>
    {isHeadteacher && (
      <View style={styles.bottomCaptionContainer}>
        <Text style={styles.bottomCaption}>{bottomCaption}</Text>
      </View>
    )}
  </View>
);

const styles = StyleSheet.create({
  cardContainer: {
    position: 'relative',
    margin: 10,
    width: screenWidth - 40,
    height: 400,
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    transition: 'transform 0.3s',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  captionContainer: {
    position: 'absolute',
    top: 20,
    left: 20,
    right: 20,
  },
  caption: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  linkText: {
    fontSize: 16,
    color: 'white',
    marginTop: 10,
    textDecorationLine: 'underline',
  },
  bottomCaptionContainer: {
    position: 'absolute',
    bottom: 20,
    left: '50%',
    transform: [{ translateX: -150 }],
    width: 300,
    textAlign: 'center',
  },
  bottomCaption: {
    fontSize: 14,
    color: 'white',
    textAlign: 'center',
  },
});

export default ImageCard;