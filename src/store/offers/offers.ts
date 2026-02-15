import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace } from '../../constants/constants';
import { OffersProps } from '../../types/offers';
import { fetchOffersAction } from '../api-actions';
import { Cities } from '../../constants/constants';

const initialState: offers = {
  offers: [],
  isOffersDataLoading: false,
  city: Cities.Paris,
  sortType: 'Popular',
  error: null,
};

type offers = {
  offers: OffersProps[];
  isOffersDataLoading: boolean;
  city: string;
  sortType: string;
  error: string | null;
};

export const offers = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {
    loadCity: (state, action: PayloadAction<string>) => {
      state.city = action.payload;
    },
    sortOffers: (state, action: PayloadAction<string>) => {
      state.sortType = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.isOffersDataLoading = true;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isOffersDataLoading = false;
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.isOffersDataLoading = false;
      });
  },
});

export const { loadCity, sortOffers, setError } = offers.actions;
