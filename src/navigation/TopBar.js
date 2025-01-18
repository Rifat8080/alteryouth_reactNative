import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { Image, StyleSheet } from 'react-native';

const TopBar = () => {
  return (
    <Appbar.Header style={styles.header}>
      <Appbar.Content title="" />
      <Image source={require('../assets/logo/ay.png')} style={styles.logo} />
      <Appbar.Content title="" />
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#38c367',
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    position: 'absolute',
    left: '35%',
    transform: [{ translateX: -20 }],
  },
});

export default TopBar;