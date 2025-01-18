import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HowItWorksScreen = () => {
  return (
    <View style={styles.container}>
      <Text>How It Works Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HowItWorksScreen;