import { StyleSheet } from 'react-native';
import { scaleFontSize } from '../../../styles/scaling';

const styles = StyleSheet.create({
  heading1: {
    fontFamily: 'Inter',
    fontSize: scaleFontSize(24),
    lineHeight: scaleFontSize(29),
    fontWeight: '600',
  },

  heading2: {
    fontFamily: 'Inter',
    fontSize: scaleFontSize(18),
    lineHeight: scaleFontSize(20),
    fontWeight: '600',
  },

  heading3: {
    fontFamily: 'Inter',
    fontSize: scaleFontSize(16),
    lineHeight: scaleFontSize(19.36),
    fontWeight: '600',
  },
});

export default styles;
