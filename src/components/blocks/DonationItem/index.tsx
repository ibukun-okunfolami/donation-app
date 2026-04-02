import { View, Image } from 'react-native';
import React from 'react';
import Badge from '../../ui/Badge';
import Heading from '../../ui/Heading';
import styles from './style';

const DonationItem = ({
  uri,
  badgeTitle,
  donationTitle,
  price,
}: DonationItemProps) => {
  return (
    <View>
      <View>
        <View style={styles.badgeContainer}>
          <Badge title={badgeTitle} />
        </View>
        <Image resizeMode="contain" source={{ uri }} style={styles.itemImage} />
      </View>
      <View style={styles.donationInformation}>
        <Heading variant="heading3" color={'#0A043C'}>
          {donationTitle}
        </Heading>
        <View style={styles.price}>
          <Heading variant="heading3" color={'#156CF7'}>
            ${price.toFixed(2)}
          </Heading>
        </View>
      </View>
    </View>
  );
};

type DonationItemProps = {
  uri: string;
  badgeTitle: string;
  donationTitle: string;
  price: number;
};

export default DonationItem;
