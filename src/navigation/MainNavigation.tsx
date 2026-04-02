import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Routes } from './routes';
import HomeScreen from '../screens/Home/Home';

const Stack = createStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={Routes.HOME} component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
