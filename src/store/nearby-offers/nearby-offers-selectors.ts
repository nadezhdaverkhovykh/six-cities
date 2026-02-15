import { NameSpace } from '../../constants/constants';
import { State } from '../../types/state';
import NearbyOffers from '../../types/nearby-offers';

export const getNearbyOffers = (state: State): NearbyOffers[] =>
  state[NameSpace.NearbyOffers].nearbyOffers;
