import React, { useState } from 'react';
import ScreenWrapper from '../../components/blocks/ScreenWrapper';
import Input from '../../components/ui/Input';
import { Pressable, ScrollView, View } from 'react-native';
import styles from './style';
import Heading from '../../components/ui/Heading';
import Button from '../../components/ui/Button';
import { MainStackNavigationProp } from '../../navigation/types';
import { Routes } from '../../navigation/routes';
import BackButton from '../../components/ui/BackButton';

const SignUp = ({ navigation }: SignUpProps) => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    password: '',
  });

  return (
    <ScreenWrapper>
      <BackButton
        onPress={() => navigation.goBack()}
        style={styles.backButton}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
      >
        <Heading marginBottom={24}>Hello and Welcome !</Heading>
        <View style={styles.inputContainer}>
          <Input
            label={'Name'}
            placeholder="Enter First and Last Name"
            value={formState.name}
            onChangeText={value => {
              setFormState(prev => ({ ...prev, name: value }));
            }}
            containerStyle={styles.input}
          />
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
        <Button title="Register" />
        <Pressable
          style={styles.registerButton}
          onPress={() => {
            navigation.navigate(Routes.Login);
          }}
        >
          <Heading marginTop={24} variant="heading3" color="#156cf7">
            Already have an account? Login
          </Heading>
        </Pressable>
      </ScrollView>
    </ScreenWrapper>
  );
};

type SignUpProps = MainStackNavigationProp<'SignUp'>;

export default SignUp;
