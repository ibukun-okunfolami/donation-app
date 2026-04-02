import { StyleSheet } from 'react-native';
import { horizontalScale, verticalScale } from '../../styles/scaling';
// import { Size } from '../../styles/dimension';
import { scaleFontSize } from '../../styles/scaling';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    marginTop: verticalScale(20),
    marginHorizontal: horizontalScale(24),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerIntroText: {
    fontFamily: 'Inter',
    fontSize: scaleFontSize(16),
    lineHeight: scaleFontSize(19),
    fontWeight: '400',
    color: '#636776',
  },
  profileImage: {
    height: verticalScale(50),
    width: horizontalScale(50),
  },
  search: {
    marginHorizontal: horizontalScale(24),
    marginTop: verticalScale(15),
  },
  hightlighted: {
    marginHorizontal: horizontalScale(24),
  },
  highlightedImage: {
    width: '100%',
    height: verticalScale(160),
  },
  categories: {
    marginLeft: horizontalScale(24),
  },
});

export default styles;
