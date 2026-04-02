import { Pressable, PressableProps, Text } from 'react-native';
import React from 'react';
import styles from './style';

const Button = ({ title, disabled, ...pressableProps }: ButtonProps) => {
  return (
    <Pressable
      style={[styles.button, disabled && styles.disable]}
      {...pressableProps}
    >
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
};

type ButtonProps = {
  title: string;
} & PressableProps;

export default Button;
