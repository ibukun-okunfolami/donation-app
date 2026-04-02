import { StyleSheet } from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../../styles/scaling';

const styles = StyleSheet.create({
  searchInputContainer: {
    flexDirection: 'row',
    paddingHorizontal: horizontalScale(16),
    backgroundColor: '#f3f5f9',
    height: verticalScale(50),
    alignItems: 'center',
    borderRadius: horizontalScale(15),
  },
  input: {
    // borderWidth: horizontalScale(1),
    flex: 1,
    marginLeft: horizontalScale(6),
    height: '100%',
    fontFamily: 'Inter',
    fontSize: scaleFontSize(14),
    lineHeight: scaleFontSize(14),
  },
});

export default styles;
