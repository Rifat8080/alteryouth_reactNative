import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground, TextInput, TouchableOpacity, ScrollView, Alert, Platform, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { request, PERMISSIONS } from 'react-native-permissions';
import VideoSection from '../screens/VideoSection';
import IconSection from '../screens/IconSection';

const AboutScreen = () => {
  const [count, setCount] = useState(0);
  const [countryCodes, setCountryCodes] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [limitReached, setLimitReached] = useState(false);

  useEffect(() => {
    const data = require('../assets/data/code.json');
    setCountryCodes(data);
    requestLocationPermission().then(() => {
      getUserCountry(data);
    });
  }, []);

  const requestLocationPermission = async () => {
    try {
      const granted = await request(
        Platform.OS === 'ios'
          ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
          : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
      );
      if (granted === 'granted') {
        getUserCountry();
      } else {
        Alert.alert('Location permission denied');
      }
    } catch (err) {
      Alert.alert('Error requesting location permission', err.message);
    }
  };

  const getUserCountry = (data) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`)
            .then((response) => response.json())
            .then((locationData) => {
              const country = data.find((country) => country.name === locationData.countryName);
              if (country) {
                setSelectedCountry(country.dial_code);
              } else {
                Alert.alert('Country not found in data');
              }
            })
            .catch((error) => Alert.alert('Error fetching location data', error.message));
        },
        (error) => Alert.alert('Error getting location', error.message),
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
      );
    }
  };

  const increment = () => {
    if (count < 3) {
      setCount(count + 1);
      setLimitReached(false);
    } else {
      setLimitReached(true);
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
      setLimitReached(false);
    }
  };

  const getPrice = () => {
    return count * 1650;
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <ImageBackground source={require('../assets/images/hero_home_phone.jpg')} style={styles.background}>
        <View style={styles.overlay}>
          <Image source={require('../assets/logo/ay.png')} style={styles.logo} />
          <Text style={styles.h1}>Start your scholarship</Text>
          <Text style={styles.h3}>Directly for students in Government Primary Schools throughout Bangladesh</Text>
          <View style={styles.form}>
            <Text style={styles.formTitle}>Join the <Text style={styles.highlight}>#alteryouthrevolution</Text></Text>
            <TextInput style={styles.input} placeholder="Your Name" />
            <TextInput style={styles.input} placeholder="Your Email" keyboardType="email-address" />
            <View style={styles.phoneInputContainer}>
              <Picker
                selectedValue={selectedCountry}
                style={styles.picker}
                onValueChange={(itemValue) => setSelectedCountry(itemValue)}
              >
                {countryCodes.map((country, index) => (
                  <Picker.Item key={index} label={`${country.flag} ${country.dial_code}`} value={country.dial_code} />
                ))}
              </Picker>
              <TextInput
                style={styles.phoneInput}
                placeholder="Your Number"
                keyboardType="phone-pad"
                value={phoneNumber}
                onChangeText={(text) => setPhoneNumber(text)}
              />
            </View>
            <Text style={styles.label}>Number of Scholarships</Text>
            <View style={styles.counterContainer}>
              <TouchableOpacity
                onPress={decrement}
                style={[styles.counterButton, count === 0 && styles.disabledButton]}
                disabled={count === 0}
              >
                <Text style={styles.counterButtonText}>-</Text>
              </TouchableOpacity>
              <Text style={styles.counter}>{count}</Text>
              <TouchableOpacity
                onPress={increment}
                style={[styles.counterButton, count === 3 && styles.disabledButton]}
                disabled={count === 3}
              >
                <Text style={styles.counterButtonText}>+</Text>
              </TouchableOpacity>
            </View>
            {limitReached && (
              <Text style={styles.limitMessage}>Scholarship limit reached for current scholarship session</Text>
            )}
            <Text style={styles.price}>BDT {getPrice()}<Text style={styles.pricePerMonth}>/month</Text></Text>
            <TouchableOpacity style={styles.submitButton}>
              <Text style={styles.submitButtonText}>START NOW</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
      <VideoSection />
      <IconSection />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent overlay
    width: '100%',
    paddingBottom: 50, // Add some padding at the bottom
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  h1: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
    paddingTop: 10, // Add some padding at the top
  },
  h3: {
    fontSize: 18,
    fontWeight: '600', // Semi-bold
    color: 'white',
    marginBottom: 20,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  form: {
    width: '80%',
    backgroundColor: 'white', // Semi-transparent form background
    padding: 20,
    borderRadius: 10,
    marginTop: 60,
  },
  formTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#21252A',
    marginBottom: 10,
  },
  highlight: {
    color: '#37C467',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    color: 'black',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  phoneInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
  },
  picker: {
    flex: 2.5,
  },
  phoneInput: {
    flex: 2.8,
    height: 40,
    paddingHorizontal: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: 'black',
    marginBottom: 10,
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  counterButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#37C467',
    borderRadius: 5,
  },
  disabledButton: {
    backgroundColor: 'gray',
  },
  counterButtonText: {
    fontSize: 24,
    color: 'white',
  },
  counter: {
    fontSize: 18,
    fontWeight: '600',
    color: 'black',
  },
  limitMessage: {
    color: 'red',
    marginTop: 10,
    textAlign: 'center',
  },
  price: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
  },
  pricePerMonth: {
    fontSize: 16,
    fontWeight: '600',
    color: 'black',
  },
  submitButton: {
    backgroundColor: '#37C467',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  submitButtonText: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
  },
});

export default AboutScreen;