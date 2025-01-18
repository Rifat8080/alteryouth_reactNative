import React from 'react';
import { SafeAreaView } from 'react-native';
import BottomTabBar from './src/navigation/BottomTabBar';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <BottomTabBar />
    </SafeAreaView>
  );
};

export default App;