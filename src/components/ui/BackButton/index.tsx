import { View, Text, Pressable, PressableProps } from 'react-native';
import React from 'react';
import styles from './style';
import Icon from '../../blocks/Icon';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const BackButton = ({ onPress }: BackButtonProps) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Icon icon={faArrowLeft} size={20} color="#000" />
    </Pressable>
  );
};

type BackButtonProps = {
  onPress: PressableProps['onPress'];
};

export default BackButton;
