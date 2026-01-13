import { createReducer } from '@reduxjs/toolkit';
import { Cities, AuthorizationStatus } from '../constants/constants';
import {
  loadOffers,
  loadCity,
  sortOffers,
  setOffersLoadingStatus,
  requireAuthorization,
  setError,
  loadCurrentOffer,
  loadReviews,
  postReview,
} from './action';
import { OffersProps, CurrentOffer } from '../types/offers';
import ReviewsProps from '../types/reviews';
import CommentProps from '../types/comment';
import NearbyOffers from '../types/nearby-offers';
import { loadNearbyOffers } from './action';

const initialState: StoreState = {
  city: Cities.Paris,
  sortType: 'Popular',
  offers: [],
  currentOffer: null,
  currentCityOffers: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  isOffersDataLoading: false,
  error: null,
  reviews: [],
  comment: null,
  nearbyOffers: [],
};

type StoreState = {
  city: string;
  sortType: string;
  offers: OffersProps[];
  currentOffer: CurrentOffer | null;
  currentCityOffers: OffersProps[];
  authorizationStatus: AuthorizationStatus;
  isOffersDataLoading: boolean;
  error: string | null;
  reviews: ReviewsProps[];
  comment: CommentProps | null;
  nearbyOffers: NearbyOffers[];
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(sortOffers, (state, action) => {
      state.sortType = action.payload;
    })
    .addCase(setOffersLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(loadCurrentOffer, (state, action) => {
      state.currentOffer = action.payload;
    })
    .addCase(loadReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(postReview, (state, action) => {
      state.comment = action.payload;
    })
    .addCase(loadNearbyOffers, (state, action) => {
      state.nearbyOffers = action.payload;
    });
});
