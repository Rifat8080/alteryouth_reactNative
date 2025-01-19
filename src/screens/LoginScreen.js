import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const LoginScreen = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <ImageBackground source={require('../assets/images/hero_pc.jpg')} style={styles.background}>
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.title}>{isLogin ? 'Login' : 'Sign Up'}</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="black"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="black"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          {!isLogin && (
            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              placeholderTextColor="black"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry
            />
          )}
          <Button title={isLogin ? 'Login' : 'Sign Up'} onPress={() => {}} color="#38c367" />
          <View style={styles.iconContainer}>
            <TouchableOpacity>
              <Icon name="google" size={30} color="#DB4437" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon name="facebook" size={30} color="#4267B2" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon name="linkedin" size={30} color="#0077B5" />
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={toggleForm}>
            <Text style={styles.toggleText}>
              {isLogin ? "Don't have an account? " : 'Already have an account? '}
              <Text style={styles.highlightText}>{isLogin ? 'Sign Up' : 'Login'}</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Add a semi-transparent overlay
  },
  card: {
    width: '80%',
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  toggleText: {
    marginTop: 10,
    color: 'black',
    textAlign: 'center',
  },
  highlightText: {
    color: '#38c367',
    fontWeight: 'bold',
  },
});

export default LoginScreen;