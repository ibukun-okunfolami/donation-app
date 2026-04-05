import { View, Text, ScrollView, Image } from 'react-native';
import React from 'react';
import styles from './style';
import { useAppSelector } from '../../hooks/useAppSelector';
import ScreenWrapper from '../../components/blocks/ScreenWrapper';
import BackButton from '../../components/ui/BackButton';
import { MainStackNavigationProp } from '../../navigation/types';
import Badge from '../../components/ui/Badge';
import Heading from '../../components/ui/Heading';
import Button from '../../components/ui/Button';

const Donation = ({ navigation, route }: DonationProps) => {
  const donation = useAppSelector(state => state.donations);
  console.log('donation', donation.selectedDonation);
  console.log('route', route.params);

  const categoryName = route.params?.categoryName || 'Unknown Category';
  return (
    <ScreenWrapper>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <BackButton onPress={() => navigation.goBack()} />

        <Image
          source={{ uri: donation.selectedDonation?.image }}
          style={styles.image}
        />
        <View style={styles.badge}>
          <Badge title={categoryName} />
        </View>

        <Heading>{donation.selectedDonation?.name}</Heading>

        <Text style={styles.description}>
          {donation.selectedDonation?.description}
        </Text>
      </ScrollView>
      <Button title="Donate" style={styles.donateButton} />
    </ScreenWrapper>
  );
};

type DonationProps = MainStackNavigationProp<'Donation'>;

export default Donation;
