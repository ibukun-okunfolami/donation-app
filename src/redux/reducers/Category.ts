import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import categoriesData from '../../data/categories.json';
import { CategorieItem } from '../types';

const initialState = {
  categories: categoriesData,
  selectedCategoryId: 1,
};

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setCategories: (state, action: PayloadAction<CategorieItem[]>) => {
      state.categories = action.payload;
    },
    resetCategoriesIntialState: () => {
      return initialState;
    },
    updateSelectedCategoryId: (state, action: PayloadAction<number>) => {
      state.selectedCategoryId = action.payload;
    },
  },
});

export const {
  setCategories,
  resetCategoriesIntialState,
  updateSelectedCategoryId,
} = categorySlice.actions;
export default categorySlice.reducer;
