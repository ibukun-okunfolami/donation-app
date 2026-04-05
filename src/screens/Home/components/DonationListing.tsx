import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from '../style';
import { DonationItems } from '../../../redux/types';
import DonationItem from '../../../components/blocks/DonationItem';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { updateSelectedDonationId } from '../../../redux/reducers/donations';

const DonationListing = ({ onClick }: DonationListingProps) => {
  const category = useAppSelector(state => state.category);
  const donations = useAppSelector(state => state.donations);
  const dispatch = useAppDispatch();

  const [donationItems, setDonationItems] = useState<DonationItems[]>([]);

  useEffect(() => {
    const updateDonations = [...donations.items];
    const filteredDonations = updateDonations.filter(item =>
      item.categoryIds.includes(category.selectedCategoryId!),
    );
    setDonationItems(filteredDonations);
  }, [category.selectedCategoryId, donations.items]);

  const handleDonationClick = (
    donationItemId: number,
    categoryName: string,
  ) => {
    dispatch(updateSelectedDonationId(donationItemId));
    onClick(categoryName);
  };
  return (
    <View style={styles.donationItems}>
      {donationItems.length ? (
        donationItems.map((item, idx) => {
          const categoryName =
            category.categories.find(
              cat => cat.categoryId === category.selectedCategoryId,
            )?.name || 'Unknown';
          return (
            <View key={idx} style={styles.donationItem}>
              <DonationItem
                key={idx * Math.random()}
                badgeTitle={categoryName}
                donationTitle={item.name}
                price={parseFloat(item.price)}
                uri={item.image}
                onPress={() =>
                  handleDonationClick(item.donationItemId, categoryName)
                }
              />
            </View>
          );
        })
      ) : (
        <Text>No donation items available.</Text>
      )}
    </View>
  );
};

type DonationListingProps = {
  onClick: (categoryName: string) => void;
};
export default DonationListing;
