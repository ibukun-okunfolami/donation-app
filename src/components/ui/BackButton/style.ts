import { StyleSheet } from 'react-native';
import { horizontalScale } from '../../../styles/scaling';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fafafa',
    height: horizontalScale(44),
    width: horizontalScale(44),
    borderRadius: horizontalScale(26),
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#000000',
    borderWidth: 1,
  },
});

export default styles;
