import { store } from '../store';
import { setError } from '../store/offers/offers';
import { clearErrorAction } from './clearError';

export const processErrorHandle = (message: string): void => {
  store.dispatch(setError(message));
  store.dispatch(clearErrorAction());
};
