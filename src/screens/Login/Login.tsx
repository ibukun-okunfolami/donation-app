// import { View, Text } from 'react-native';
import React, { useMemo, useState } from 'react';
// import styles from './style';
import ScreenWrapper from '../../components/blocks/ScreenWrapper';
import Input from '../../components/ui/Input';
import { Pressable, ScrollView, Text, View } from 'react-native';
import styles from './style';
import Heading from '../../components/ui/Heading';
import Button from '../../components/ui/Button';
import { MainStackNavigationProp } from '../../navigation/types';
import { Routes } from '../../navigation/routes';
import { signInUser } from '../../api/user';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { login } from '../../redux/reducers/user';

const Login = ({ navigation }: LoginProps) => {
  const dispatch = useAppDispatch();
  const [formState, setFormState] = useState({
    email: '',
    password: '',
  });
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const response = await signInUser(formState.email, formState.password);
      console.log('response', response);
      setError('');
      setSuccess('You have successfully logged in!');
      dispatch(login(response.data));
      // navigation.navigate(Routes.HOME);
      // navigation.reset({
      //   index: 0,
      //   routes: [{ name: Routes.HOME }],
      // });
    } catch (err) {
      setSuccess('');
      const errorMessage = (err as Error).message;
      setError(errorMessage);
    }
  };

  const isButtonDisabled = useMemo(() => {
    return formState.email.length <= 5 || formState.password.length <= 6;
  }, [formState]);

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
            // containerStyle={styles.input}
          />
        </View>
        {error.length > 0 && <Text style={styles.error}>{error}</Text>}
        {success.length > 0 && <Text style={styles.success}>{success}</Text>}
        <Button
          disabled={isButtonDisabled}
          onPress={handleLogin}
          title="Login"
        />

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
