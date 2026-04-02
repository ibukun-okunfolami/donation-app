import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/user';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer, persistStore } from 'redux-persist';
import { logger } from 'redux-logger';
import categoryReducer from './reducers/category';
import donationsReducer from './reducers/donations';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  version: 1,
};

const persistedUserReducer = persistReducer(persistConfig, userReducer);
// const persistedCategoriesReducer = persistReducer(persistConfig, categoriesReducer);

const store = configureStore({
  reducer: {
    user: persistedUserReducer,
    category: categoryReducer,
    donations: donationsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
export const persistor = persistStore(store);
