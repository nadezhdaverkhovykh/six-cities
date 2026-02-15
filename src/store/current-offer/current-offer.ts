import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../constants/constants';
import { CurrentOffer } from '../../types/offers';
import { fetchCurrentOfferAction } from '../api-actions';
const initialState: currentOffer = {
  currentOffer: null,
};

type currentOffer = {
  currentOffer: CurrentOffer | null;
};

export const currentOffer = createSlice({
  name: NameSpace.CurrentOffer,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchCurrentOfferAction.fulfilled, (state, action) => {
      state.currentOffer = action.payload;
    });
  },
});
