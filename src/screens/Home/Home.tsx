import { Image, Pressable, ScrollView, Text, View } from 'react-native';
import React from 'react';
import styles from './style';
import ScreenWrapper from '../../components/blocks/ScreenWrapper';
import Heading from '../../components/ui/Heading';
import { useAppSelector } from '../../hooks/useAppSelector';
import SearchInput from '../../components/ui/SearchInput';
import CategoriesList from './components/CategoriesList';
import DonationListing from './components/DonationListing';
import { MainStackNavigationProp } from '../../navigation/types';
import { Routes } from '../../navigation/routes';

const Home: React.FC<HomeProps> = ({ navigation }) => {
  const user = useAppSelector(state => state.user);

  return (
    <ScreenWrapper>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View>
            <Text style={styles.headerIntroText}>Hello,</Text>
            <Heading marginTop={5}>{user.name}</Heading>
          </View>
          <Image
            source={{ uri: user.profileImage }}
            style={styles.profileImage}
            resizeMode="contain"
          />
        </View>
        <View style={styles.search}>
          <SearchInput />
        </View>

        <Pressable style={styles.hightlighted} onPress={() => {}}>
          <Image
            style={styles.highlightedImage}
            source={require('../../assets/images/highlighted_image.png')}
            resizeMode="contain"
          />
        </Pressable>
        <CategoriesList />
        <DonationListing
          onClick={categoryName => {
            navigation.navigate(Routes.DONATION, { categoryName });
          }}
        />
      </ScrollView>
    </ScreenWrapper>
  );
};

type HomeProps = MainStackNavigationProp<'Home'>;

export default Home;
