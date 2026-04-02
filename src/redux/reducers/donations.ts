import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import donationData from '../../data/donations.json';
import { Donation, DonationItems } from '../types';

const initialState: Donation = {
  items: donationData,
  selectedDonationId: null,
};

export const donationSlice = createSlice({
  name: 'donations',
  initialState,
  reducers: {
    setDonations: (state, action: PayloadAction<DonationItems[]>) => {
      state.items = action.payload;
    },
    resetDonationIntialState: () => {
      return initialState;
    },
    updateSelectedDonationId: (state, action: PayloadAction<number>) => {
      state.selectedDonationId = action.payload;
    },
  },
});

export const {
  setDonations,
  resetDonationIntialState,
  updateSelectedDonationId,
} = donationSlice.actions;
export default donationSlice.reducer;
