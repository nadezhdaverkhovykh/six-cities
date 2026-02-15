import { NameSpace } from '../../constants/constants';
import { State } from '../../types/state';

export const getReviews = (state: State) => state[NameSpace.Reviews].reviews;
