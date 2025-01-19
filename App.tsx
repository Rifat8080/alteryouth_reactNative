import React from 'react';
import { SafeAreaView } from 'react-native';
import BottomTabBar from './src/navigation/BottomTabBar';
import TopBar from './src/navigation/TopBar';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopBar />
      <BottomTabBar />
    </SafeAreaView>
  );
};

export default App;