import React from 'react';
import { SafeAreaView } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import BottomTabBar from './src/navigation/BottomTabBar';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <HomeScreen />
      <BottomTabBar />
    </SafeAreaView>
  );
};

export default App;