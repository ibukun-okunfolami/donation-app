import { StyleSheet } from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../../styles/scaling';

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#2979f2',
    height: verticalScale(55),
    justifyContent: 'center',
    borderRadius: horizontalScale(50),
  },

  disable: {
    opacity: 0.5,
  },

  title: {
    fontFamily: 'Inter',
    fontSize: scaleFontSize(16),
    lineHeight: scaleFontSize(19),
    fontWeight: '500',
    color: '#fff',
    textAlign: 'center',
  },
});

export default styles;
