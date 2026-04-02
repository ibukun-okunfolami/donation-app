import { StyleSheet } from 'react-native';
import { horizontalScale, verticalScale } from '../../../styles/scaling';

const styles = StyleSheet.create({
  itemImage: {
    width: horizontalScale(155),
    height: verticalScale(170),
    backgroundColor: '#D9D9D9',
    borderRadius: horizontalScale(20),
  },
  badgeContainer: {
    position: 'absolute',
    zIndex: 1,
    top: verticalScale(13),
    left: horizontalScale(10),
  },

  donationInformation: {
    marginTop: verticalScale(16),
  },

  price: {
    marginTop: verticalScale(5),
  },
});

export default styles;
