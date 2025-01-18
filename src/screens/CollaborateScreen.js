import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CollaborateScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Collaborate Screen</Text>
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

export default CollaborateScreen;