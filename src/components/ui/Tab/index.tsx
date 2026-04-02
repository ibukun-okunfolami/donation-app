import { Pressable, PressableProps, Text, TextLayoutEvent } from 'react-native';
import React, { useMemo, useRef, useState } from 'react';
import styles from './style';
import { horizontalScale } from '../../../styles/scaling';

const Tab = ({ title, active, marginRight, ...pressableProps }: TabProps) => {
  const [width, setWidth] = useState(0);
  const textRef = useRef<Text>(null);
  const PADDING_HORIZONTAL = 33;

  // const tabWidth = {
  //   width: horizontalScale(width + PADDING_HORIZONTAL * 2),
  // };

  const onTextLayout = (event: TextLayoutEvent) => {
    setWidth(event.nativeEvent.lines[0].width);
  };

  const defaultStyle = useMemo(() => {
    return [
      { marginRight: marginRight ? horizontalScale(marginRight) : undefined },
      styles.button,
      active && styles.activeTab,
      {
        width: horizontalScale(width + PADDING_HORIZONTAL * 2),
      },
    ];
  }, [active, marginRight, width]);

  return (
    <Pressable style={defaultStyle} {...pressableProps}>
      <Text
        ref={textRef}
        style={[styles.title, active && styles.activeTitle]}
        onTextLayout={onTextLayout}
      >
        {title}
      </Text>
    </Pressable>
  );
};

type TabProps = {
  title: string;
  active?: boolean;
  marginRight?: number;
} & PressableProps;

export default Tab;
