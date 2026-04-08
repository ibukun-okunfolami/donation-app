import { StyleSheet } from 'react-native';
import { horizontalScale, verticalScale } from '../../styles/scaling';

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
});

export default styles;
