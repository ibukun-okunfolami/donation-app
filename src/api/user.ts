import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { CreateUserParams } from './type';

export const createUser = async ({
  fullName,
  email,
  password,
}: CreateUserParams) => {
  try {
    const user = await auth().createUserWithEmailAndPassword(email, password);
    console.log('user', user);
    await user.user.updateProfile({ displayName: fullName });

    return user;
  } catch (error) {
    const authError = error as FirebaseAuthTypes.NativeFirebaseAuthError;
    if (authError.code === 'auth/email-already-in-use') {
      throw new Error('That email address is already in use!');
    }

    if (authError.code === 'auth/invalid-email') {
      throw new Error('That email address is invalid!');
    }
    throw new Error('An error occurred while creating the user.');
  }
};

export const signInUser = async (email: string, password: string) => {
  try {
    const user = await auth().signInWithEmailAndPassword(email, password);
    const token = await user.user.getIdToken();
    return {
      status: true,
      data: {
        displayName: user.user.displayName ?? '',
        email: user.user.email ?? '',
        uid: user.user.uid,
        // ...user.user,
        token,
      },
    };
  } catch (error) {
    const authError = error as FirebaseAuthTypes.NativeFirebaseAuthError;
    console.log('authError', authError);
    if (authError.code === 'auth/wrong-password') {
      throw new Error('Please enter correct password');
    }
    if (authError.code === 'auth/invalid-credential') {
      throw new Error('No user found with that email address!');
    }

    throw new Error('An error occurred while signing in.');
  }
};
