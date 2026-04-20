import React, { useMemo, useState } from 'react';
import ScreenWrapper from '../../components/blocks/ScreenWrapper';
import Input from '../../components/ui/Input';
import { Pressable, ScrollView, Text, View } from 'react-native';
import styles from './style';
import Heading from '../../components/ui/Heading';
import Button from '../../components/ui/Button';
import { MainStackNavigationProp } from '../../navigation/types';
import { Routes } from '../../navigation/routes';
import BackButton from '../../components/ui/BackButton';
import { createUser } from '../../api/user';

const SignUp = ({ navigation }: SignUpProps) => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async () => {
    try {
      await createUser({
        fullName: formState.name,
        email: formState.email,
        password: formState.password,
      });
      setError('');
      setSuccess('You have successfully registered!');
      setTimeout(() => {
        navigation.navigate(Routes.Login);
      }, 3000);
    } catch (err) {
      const errorMessage = (err as Error).message;
      setError(errorMessage);
    }
  };

  const isButtonDisabled = useMemo(() => {
    return (
      formState.name.length <= 2 ||
      formState.email.length <= 5 ||
      formState.password.length <= 6
    );
  }, [formState]);

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
            // containerStyle={styles.input}
          />
        </View>
        {error.length > 0 && <Text style={styles.error}>{error}</Text>}
        {success.length > 0 && <Text style={styles.success}>{success}</Text>}
        <Button
          disabled={isButtonDisabled}
          title="Register"
          onPress={handleRegister}
        />
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
