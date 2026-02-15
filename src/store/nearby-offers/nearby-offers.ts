import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../constants/constants';
import NearbyOffers from '../../types/nearby-offers';
import { fetchNearbyOffers } from '../api-actions';
const initialState: nearbyOffers = {
  nearbyOffers: [],
};

type nearbyOffers = {
  nearbyOffers: NearbyOffers[];
};

export const nearbyOffers = createSlice({
  name: NameSpace.NearbyOffers,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchNearbyOffers.fulfilled, (state, action) => {
      state.nearbyOffers = action.payload;
    });
  },
});
