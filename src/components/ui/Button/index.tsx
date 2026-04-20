import { Pressable, PressableProps, Text, ViewStyle } from 'react-native';
import React, { useMemo } from 'react';
import styles from './style';

const Button = ({ title, disabled, style, ...pressableProps }: ButtonProps) => {
  const defaultStyles = useMemo(() => {
    return [styles.button, disabled && styles.disable, style];
  }, [disabled, style]);
  return (
    <Pressable style={defaultStyles} disabled={disabled} {...pressableProps}>
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
};

type ButtonProps = {
  title: string;
  style?: ViewStyle | ViewStyle[];
} & PressableProps;

export default Button;
