import { StyleSheet } from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../../styles/scaling';

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#f3f5f9',
    height: verticalScale(50),
    justifyContent: 'center',
    borderRadius: horizontalScale(50),
  },

  title: {
    fontFamily: 'Inter',
    fontSize: scaleFontSize(14),
    lineHeight: scaleFontSize(17),
    fontWeight: '500',
    color: '#79869f',
    textAlign: 'center',
  },

  activeTab: {
    backgroundColor: '#2979f2',
  },
  activeTitle: {
    color: '#fff',
  },
});

export default styles;
