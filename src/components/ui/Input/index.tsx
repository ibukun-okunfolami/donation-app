import { View, Text, TextInput, ViewStyle } from 'react-native';
import React from 'react';
import styles from './style';

const Input = ({
  label,
  placeholder,
  containerStyle,
  ...props
}: InputProps) => {
  return (
    <View style={containerStyle}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} placeholder={placeholder} {...props} />
    </View>
  );
};

type InputProps = {
  label?: string;
  placeholder?: string;
  containerStyle?: ViewStyle | ViewStyle[];
} & React.ComponentProps<typeof TextInput>;

export default Input;
