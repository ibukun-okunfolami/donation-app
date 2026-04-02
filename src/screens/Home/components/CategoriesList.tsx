import { View, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from '../style';
import { CategorieItem } from '../../../redux/types';
import { paginate } from '../../../utils/helpers';
import { useAppSelector } from '../../../hooks/useAppSelector';
import Tab from '../../../components/ui/Tab';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { updateSelectedCategoryId } from '../../../redux/reducers/category';
import Heading from '../../../components/ui/Heading';

const CategoriesList = () => {
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
    <>
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
    </>
  );
};

export default CategoriesList;
