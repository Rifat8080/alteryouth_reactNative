import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AboutScreen from '../screens/AboutScreen';
import HowItWorksScreen from '../screens/HowItWorksScreen';
import ScholarshipsScreen from '../screens/ScholarshipsScreen';
import CollaborateScreen from '../screens/CollaborateScreen';
import LoginScreen from '../screens/LoginScreen';

const Tab = createBottomTabNavigator();

const BottomTabBar = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            switch (route.name) {
              case 'About':
                iconName = 'information';
                break;
              case 'HowItWorks':
                iconName = 'help-circle';
                break;
              case 'Scholarships':
                iconName = 'school';
                break;
              case 'Collaborate':
                iconName = 'account-group';
                break;
              case 'Login':
                iconName = 'login';
                break;
              default:
                iconName = 'circle';
                break;
            }

            return (
              <Icon
                name={iconName}
                color={color}
                size={size}
              />
            );
          },
          tabBarActiveTintColor: '#38C367',
          tabBarInactiveTintColor: 'black',
          tabBarStyle: { paddingBottom: 10 },
          headerShown: false,
        })}
      >
        <Tab.Screen name="About" component={AboutScreen} />
        <Tab.Screen name="HowItWorks" component={HowItWorksScreen} />
        <Tab.Screen name="Scholarships" component={ScholarshipsScreen} />
        <Tab.Screen name="Collaborate" component={CollaborateScreen} />
        <Tab.Screen name="Login" component={LoginScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomTabBar;