import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type DonationScreenParams = {
  categoryName: string;
};

export type MainStackParamList = {
  Home: undefined;
  Donation: DonationScreenParams | undefined;
  Login: undefined;
  SignUp: undefined;
};

export type MainStackNavigationProp<T extends keyof MainStackParamList> = {
  navigation: StackNavigationProp<MainStackParamList, T>;
  route: RouteProp<MainStackParamList, T>;
};
