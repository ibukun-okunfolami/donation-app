import { View } from 'react-native';
import React from 'react';
import styles from './style';
import ScreenWrapper from '../../components/blocks/ScreenWrapper';
import Heading from '../../components/ui/Heading';
// import Button from '../../components/ui/Button';
// import Tab from '../../components/ui/Tab';
// import Badge from '../../components/ui/Badge';
// import { faSearch } from '@fortawesome/free-solid-svg-icons/faSearch';
// import Icon from '../../components/blocks/Icon';
// import SearchInput from '../../components/ui/SearchInput';
// import DonationItem from '../../components/blocks/DonationItem';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { updateName } from '../../redux/reducers/User';
import Button from '../../components/ui/Button';

const Home = () => {
  // const user = useAppSelector(state => state.user);
  // console.log('User from Redux:', user);
  const userName = useAppSelector(state => state.user.name);
  const dispatch = useAppDispatch();
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <Heading variant="heading1">{userName}</Heading>
        <Button
          title="Update Name"
          onPress={() => dispatch(updateName('Ibukun'))}
        />
        {/* <Tab title="Donations" active />
        <Tab title="History" /> */}
        {/* <Badge title="Donations" /> */}
        {/* <Icon icon={faSearch} /> */}
        {/* <SearchInput onSearch={e => dispatch(updateName(e))} /> */}
        {/* <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 16,
          }}
        >
          {Array.from({ length: 10 }).map((_, index) => (
            <DonationItem
              key={index}
              badgeTitle="Environment"
              donationTitle="Tree cactus"
              price={10.99}
              uri="https://example.com/tree-cactus.jpg"
            />
          ))}
        </View> */}
      </View>
    </ScreenWrapper>
  );
};

export default Home;
