import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TextInput, Button } from 'react-native';

const AboutScreen = () => {
  return (
    <ImageBackground source={require('../assets/images/hero_home_phone.jpg')} style={styles.background}>
      <View style={styles.overlay}>
        <Text style={styles.h1}>Start your scholarship</Text>
        <Text style={styles.h3}>Directly for students in Government Primary Schools throughout Bangladesh</Text>
        <View style={styles.form}>
          <TextInput style={styles.input} placeholder="Enter your name" />
          <TextInput style={styles.input} placeholder="Enter your email" keyboardType="email-address" />
          <Button title="Submit" onPress={() => {}} />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent overlay
    width: '100%',
    height: '100%',
  },
  h1: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
    paddingTop: 300,
  },
  h3: {
    fontSize: 18,
    fontWeight: '600', // Semi-bold
    color: 'white',
    marginBottom: 20,
    textAlign: 'center',
    paddingHorizontal: 20,
    maxWidth: 400,
  },
  form: {
    width: '80%',
    backgroundColor: 'white', // Semi-transparent form background
    padding: 20,
    borderRadius: 10,
  },
  input: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});

export default AboutScreen;