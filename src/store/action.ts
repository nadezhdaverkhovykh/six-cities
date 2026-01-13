import { OffersProps } from '../types/offers';
import { AuthorizationStatus } from '../constants/constants';
import { createAction } from '@reduxjs/toolkit';
import { CurrentOffer } from '../types/offers';
import NearbyOffers from '../types/nearby-offers';
import ReviewsProps from '../types/reviews';
import CommentProps from '../types/comment';
export const loadCity = createAction<string>('City/load');
export const loadOffers = createAction<OffersProps[]>('Offers/load');
export const sortOffers = createAction<string>('Offers/sort');
export const setOffersLoadingStatus = createAction<boolean>(
  'data/setOffersLoadingStatus'
);
export const requireAuthorization = createAction<AuthorizationStatus>(
  'user/requireAuthorization'
);
export const setError = createAction<string | null>('offers/setError');
export const loadCurrentOffer = createAction<CurrentOffer>('Offer/load');
export const loadReviews = createAction<ReviewsProps[]>('Reviews/load');
export const postReview = createAction<CommentProps>('Review/post');
export const loadNearbyOffers = createAction<NearbyOffers[]>('Nearby/load');
