import { StyleSheet } from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../styles/scaling';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: horizontalScale(24),
    flex: 1,
    justifyContent: 'center',
  },
  inputContainer: {
    marginBottom: verticalScale(24),
  },
  input: {
    marginBottom: verticalScale(16),
  },
  registerButton: {
    alignItems: 'center',
  },
  error: {
    fontFamily: 'Inter',
    color: '#ff0000',
    marginBottom: verticalScale(24),
    fontSize: scaleFontSize(16),
  },
  success: {
    color: '#28a745',
    marginBottom: verticalScale(24),
    fontSize: scaleFontSize(16),
  },
});

export default styles;
