import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../constants/constants';
import { offers } from './offers/offers';
import { login } from './login/login';
import { currentOffer } from './current-offer/current-offer';
import { nearbyOffers } from './nearby-offers/nearby-offers';
import { getReviews } from './reviews/reviews';

export const rootReducer = combineReducers({
  [NameSpace.Offers]: offers.reducer,
  [NameSpace.Login]: login.reducer,
  [NameSpace.CurrentOffer]: currentOffer.reducer,
  [NameSpace.NearbyOffers]: nearbyOffers.reducer,
  [NameSpace.Reviews]: getReviews.reducer,
});
export type Reducer = ReturnType<typeof rootReducer>;
