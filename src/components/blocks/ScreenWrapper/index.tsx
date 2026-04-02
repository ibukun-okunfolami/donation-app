import { SafeAreaView, StatusBar } from 'react-native';
import React from 'react';
import styles from './style';
import globalStyles from '../../../styles/globalStyles';

const ScreenWrapper = ({ children }: ScreenWrapperProps) => {
  return (
    <SafeAreaView
      style={[
        styles.container,
        globalStyles.backgroundWhite,
        globalStyles.flex,
      ]}
    >
      <StatusBar />
      {children}
    </SafeAreaView>
  );
};

type ScreenWrapperProps = {
  children: React.ReactNode;
};
export default ScreenWrapper;
