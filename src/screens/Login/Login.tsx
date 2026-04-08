// import { View, Text } from 'react-native';
import React, { useState } from 'react';
// import styles from './style';
import ScreenWrapper from '../../components/blocks/ScreenWrapper';
import Input from '../../components/ui/Input';
import { Pressable, ScrollView, View } from 'react-native';
import styles from './style';
import Heading from '../../components/ui/Heading';
import Button from '../../components/ui/Button';
import { MainStackNavigationProp } from '../../navigation/types';
import { Routes } from '../../navigation/routes';

const Login = ({ navigation }: LoginProps) => {
  const [formState, setFormState] = useState({
    email: '',
    password: '',
  });

  return (
    <ScreenWrapper>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
      >
        <Heading marginBottom={24}>Welcome Back</Heading>
        <View style={styles.inputContainer}>
          <Input
            label={'Email'}
            placeholder="Enter your email"
            value={formState.email}
            onChangeText={value => {
              setFormState(prev => ({ ...prev, email: value }));
            }}
            keyboardType="email-address"
            containerStyle={styles.input}
          />
          <Input
            label={'Password'}
            placeholder="Enter your password"
            secureTextEntry
            value={formState.password}
            onChangeText={value => {
              setFormState(prev => ({ ...prev, password: value }));
            }}
            containerStyle={styles.input}
          />
        </View>
        <Button title="Login" />

        <Pressable
          style={styles.registerButton}
          onPress={() => {
            navigation.navigate(Routes.SignUp);
          }}
        >
          <Heading marginTop={24} variant="heading3" color="#156cf7">
            Don't have an account? Sign Up
          </Heading>
        </Pressable>
      </ScrollView>
    </ScreenWrapper>
  );
};

type LoginProps = MainStackNavigationProp<'Login'>;

export default Login;
