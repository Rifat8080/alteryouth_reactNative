import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';

const HomeScreen = () => {
    const theme  = useTheme();
  return (
    <View style={{backgroundColor: theme.colors.secondary}}>
      <Text >Home Screen</Text>
    </View>
  );
};

export default HomeScreen;