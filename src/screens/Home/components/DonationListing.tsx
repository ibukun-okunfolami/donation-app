import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from '../style';
import { DonationItems } from '../../../redux/types';
import DonationItem from '../../../components/blocks/DonationItem';
import { useAppSelector } from '../../../hooks/useAppSelector';

const DonationListing = () => {
  const category = useAppSelector(state => state.category);
  const donations = useAppSelector(state => state.donations);

  const [donationItems, setDonationItems] = useState<DonationItems[]>([]);

  useEffect(() => {
    const updateDonations = [...donations.items];
    const filteredDonations = updateDonations.filter(item =>
      item.categoryIds.includes(category.selectedCategoryId!),
    );
    setDonationItems(filteredDonations);
  }, [category.selectedCategoryId, donations.items]);
  return (
    <View style={styles.donationItems}>
      {donationItems.length ? (
        donationItems.map((item, idx) => (
          <View key={idx} style={styles.donationItem}>
            <DonationItem
              key={idx * Math.random()}
              badgeTitle={
                category.categories.filter(
                  cat => cat.categoryId === category.selectedCategoryId,
                )[0]?.name || 'Unknown'
              }
              donationTitle={item.name}
              price={parseFloat(item.price)}
              uri={item.image}
              onPress={() => console.log(item.donationItemId)}
            />
          </View>
        ))
      ) : (
        <Text>No donation items available.</Text>
      )}
    </View>
  );
};

export default DonationListing;
