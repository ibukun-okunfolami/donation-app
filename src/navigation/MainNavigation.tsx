import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Routes } from './routes';
import HomeScreen from '../screens/Home/Home';
import DonationScreen from '../screens/Donation/Donation';
import { MainStackParamList } from './types';

const Stack = createStackNavigator<MainStackParamList>();

const MainNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={Routes.HOME} component={HomeScreen} />
      <Stack.Screen name={Routes.DONATION} component={DonationScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
