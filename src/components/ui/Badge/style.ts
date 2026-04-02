import { StyleSheet } from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../../styles/scaling';

const styles = StyleSheet.create({
  badge: {
    backgroundColor: '#145855',
    height: verticalScale(22),
    justifyContent: 'center',
    borderRadius: horizontalScale(50),
  },

  title: {
    fontFamily: 'Inter',
    fontSize: scaleFontSize(10),
    lineHeight: scaleFontSize(12),
    fontWeight: '600',
    color: '#fff',
    textAlign: 'center',
  },
});

export default styles;
