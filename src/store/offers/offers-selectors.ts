import { NameSpace } from '../../constants/constants';
import { State } from '../../types/state';
import { OffersProps } from '../../types/offers';

export const getOffers = (state: State): OffersProps[] =>
  state[NameSpace.Offers].offers;

export const getDataLoading = (state: State) =>
  state[NameSpace.Offers].isOffersDataLoading;

export const getSortType = (state: State) => state[NameSpace.Offers].sortType;
export const getChosenCity = (state: State) => state[NameSpace.Offers].city;
export const getError = (state: State) => state[NameSpace.Offers].error;
