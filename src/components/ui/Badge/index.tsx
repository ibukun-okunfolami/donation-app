import { View, Text, TextLayoutEvent } from 'react-native';
import React, { useRef, useState } from 'react';
import styles from './style';
import { horizontalScale } from '../../../styles/scaling';

const Badge = ({ title }: BadgeProps) => {
  const [width, setWidth] = useState(0);
  const textRef = useRef<Text>(null);
  const PADDING_HORIZONTAL = 10;

  const BadgeWidth = {
    width: horizontalScale(width + PADDING_HORIZONTAL * 2),
  };

  const onTextLayout = (event: TextLayoutEvent) => {
    setWidth(event.nativeEvent.lines[0].width);
  };

  return (
    <View style={[styles.badge, BadgeWidth]}>
      <Text ref={textRef} style={[styles.title]} onTextLayout={onTextLayout}>
        {title}
      </Text>
    </View>
  );
};

type BadgeProps = {
  title: string;
};

export default Badge;
