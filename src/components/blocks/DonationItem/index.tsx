import { View, Image, Pressable } from 'react-native';
import React from 'react';
import Badge from '../../ui/Badge';
import Heading from '../../ui/Heading';
import styles from './style';

const DonationItem = ({
  uri,
  badgeTitle,
  donationTitle,
  price,
  onPress,
}: DonationItemProps) => {
  return (
    <Pressable onPress={onPress}>
      <View>
        <View style={styles.badgeContainer}>
          <Badge title={badgeTitle} />
        </View>
        <Image resizeMode="cover" source={{ uri }} style={styles.itemImage} />
      </View>
      <View style={styles.donationInformation}>
        <Heading variant="heading3" color={'#0A043C'} numberOfLines={1}>
          {donationTitle}
        </Heading>
        <View style={styles.price}>
          <Heading variant="heading3" color={'#156CF7'}>
            ${price.toFixed(2)}
          </Heading>
        </View>
      </View>
    </Pressable>
  );
};

type DonationItemProps = {
  uri: string;
  badgeTitle: string;
  donationTitle: string;
  price: number;
  onPress?: () => void;
};

export default DonationItem;
