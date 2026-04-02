import { View } from 'react-native';
import React from 'react';
import {
  FontAwesomeIcon,
  Props as FontAwesomeProps,
} from '@fortawesome/react-native-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { scaleFontSize } from '../../../styles/scaling';

const Icon = ({ icon, size, ...fontAwesomeProps }: IconProps) => {
  return (
    <View>
      <FontAwesomeIcon
        icon={icon as IconProp}
        size={scaleFontSize(size as number)}
        {...fontAwesomeProps}
      />
    </View>
  );
};

type IconProps = {
  icon: unknown;
} & Omit<FontAwesomeProps, 'icon'>;

export default Icon;
