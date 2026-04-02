import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  Text,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from './style';
import ScreenWrapper from '../../components/blocks/ScreenWrapper';
import Heading from '../../components/ui/Heading';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useAppDispatch } from '../../hooks/useAppDispatch';
// import Heading from '../../components/ui/Heading';
// import Button from '../../components/ui/Button';
import Tab from '../../components/ui/Tab';
// import Badge from '../../components/ui/Badge';
// import { faSearch } from '@fortawesome/free-solid-svg-icons/faSearch';
// import Icon from '../../components/blocks/Icon';
import SearchInput from '../../components/ui/SearchInput';
import { updateSelectedCategoryId } from '../../redux/reducers/Category';
import { CategorieItem } from '../../redux/types';
import { paginate } from '../../utils/helpers';
// import DonationItem from '../../components/blocks/DonationItem';
// import { useAppSelector } from '../../hooks/useAppSelector';
// import { useAppDispatch } from '../../hooks/useAppDispatch';
// import { updateName } from '../../redux/reducers/User';
// import Button from '../../components/ui/Button';

const Home = () => {
  const user = useAppSelector(state => state.user);
  const category = useAppSelector(state => state.category);

  const dispatch = useAppDispatch();

  const [categoryPageNo, setCategoryPageNo] = useState(1);
  const categoryPageSize = 4;
  const [categoryList, setCategoryList] = useState<CategorieItem[]>([]);
  const [isLoadingCategories, setIsLoadingCategories] = useState(false);

  useEffect(() => {
    setIsLoadingCategories(true);
    setCategoryList(
      paginate(category.categories, categoryPageNo, categoryPageSize),
    );
    setCategoryPageNo(prev => prev + 1);
    setIsLoadingCategories(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLoadMoreCategories = () => {
    if (isLoadingCategories) return;
    setIsLoadingCategories(true);
    const newCategories = paginate(
      category.categories,
      categoryPageNo,
      categoryPageSize,
    );
    if (newCategories.length === 0) return; // No more categories to load
    setCategoryList(prev => [...prev, ...newCategories]);
    setCategoryPageNo(prev => prev + 1);
    setIsLoadingCategories(false);
  };

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

        <View>
          <Heading
            variant="heading2"
            marginBottom={16}
            marginTop={6}
            marginHorizontal={24}
          >
            Select Category
          </Heading>
        </View>
        <View style={styles.categories}>
          <FlatList
            onEndReachedThreshold={0.5}
            onEndReached={handleLoadMoreCategories}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={categoryList}
            renderItem={({ item }) => (
              <Tab
                title={item.name}
                key={item.categoryId}
                marginRight={10}
                active={item.categoryId === category.selectedCategoryId}
                onPress={() =>
                  dispatch(updateSelectedCategoryId(item.categoryId))
                }
              />
            )}
          />
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
};

export default Home;
