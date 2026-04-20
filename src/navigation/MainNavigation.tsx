import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Routes } from './routes';
import HomeScreen from '../screens/Home/Home';
import DonationScreen from '../screens/Donation/Donation';
import { MainStackParamList } from './types';
import LoginScreen from '../screens/Login/Login';
import SignUpScreen from '../screens/SignUp/SignUp';

const Stack = createStackNavigator<MainStackParamList>();

// const MainNavigation = () => {
//   return (
//     <Stack.Navigator
//       screenOptions={{
//         headerShown: false,
//       }}
//       initialRouteName={Routes.Login}
//     >
//       <Stack.Screen name={Routes.SignUp} component={SignUpScreen} />
//       <Stack.Screen name={Routes.Login} component={LoginScreen} />
//       <Stack.Screen name={Routes.HOME} component={HomeScreen} />
//       <Stack.Screen name={Routes.DONATION} component={DonationScreen} />
//     </Stack.Navigator>
//   );
// };

// export default MainNavigation;

export const NonAuthenticated = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={Routes.Login}
    >
      <Stack.Screen name={Routes.SignUp} component={SignUpScreen} />
      <Stack.Screen name={Routes.Login} component={LoginScreen} />
    </Stack.Navigator>
  );
};

export const Authenticated = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={Routes.HOME}
    >
      <Stack.Screen name={Routes.HOME} component={HomeScreen} />
      <Stack.Screen name={Routes.DONATION} component={DonationScreen} />
    </Stack.Navigator>
  );
};
