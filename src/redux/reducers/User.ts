import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../types';

const initialState = {
  id: '',
  name: 'Ibukun 👋',
  email: '',
  isLoggedIn: false,
  profileImage:
    'https://cdn.dribbble.com/users/1577045/screenshots/4914645/media/028d394ffb00cb7a4b2ef9915a384fd9.png?compress=1&resize=400x300&vertical=top',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (
      state,
      action: PayloadAction<{ id: string; name: string; email: string }>,
    ) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
    updateName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    login: (state, action: PayloadAction<User>) => {
      return {
        ...state,
        ...{ isLoggedIn: true },
        name: action.payload.displayName,
        ...action.payload,
      };
    },
    resetUserIntialState: () => {
      return initialState;
    },
  },
});

export const { setUser, updateName, resetUserIntialState, login } =
  userSlice.actions;
export default userSlice.reducer;
