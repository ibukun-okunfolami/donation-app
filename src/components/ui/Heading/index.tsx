import { Text, TextProps, TextStyle } from 'react-native';
import React, { useMemo } from 'react';
import styles from './style';
import { horizontalScale, verticalScale } from '../../../styles/scaling';

const Heading = ({
  variant = 'heading1',
  children,
  color = '#000',
  marginBottom,
  marginTop,
  marginHorizontal,
  marginVertical,
  style,
  ...props
}: HeadingProps) => {
  const defaultStyles = useMemo(() => {
    return [
      {
        marginBottom: marginBottom ? verticalScale(marginBottom) : undefined,
        marginTop: marginTop ? verticalScale(marginTop) : undefined,
        marginHorizontal: marginHorizontal
          ? horizontalScale(marginHorizontal)
          : undefined,
        marginVertical: marginVertical
          ? verticalScale(marginVertical)
          : undefined,
      },
      styles[variant],
      color && { color },
      style,
    ];
  }, [
    marginBottom,
    marginTop,
    marginHorizontal,
    marginVertical,
    variant,
    color,
    style,
  ]);

  // return <Text style={[styles[variant], color && { color }]}>{children}</Text>;
  return (
    <Text style={defaultStyles} {...props}>
      {children}
    </Text>
  );
};

type HeadingProps = {
  children: React.ReactNode;
  variant?: 'heading1' | 'heading2' | 'heading3';
  color?: string;
  marginTop?: number;
  marginBottom?: number;
  marginHorizontal?: number;
  marginVertical?: number;
  style?: TextStyle | TextStyle[];
} & TextProps;

export default Heading;
