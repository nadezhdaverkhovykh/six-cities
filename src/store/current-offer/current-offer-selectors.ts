import { NameSpace } from '../../constants/constants';
import { State } from '../../types/state';

export const getCurrentOffer = (state: State) =>
  state[NameSpace.CurrentOffer].currentOffer;
