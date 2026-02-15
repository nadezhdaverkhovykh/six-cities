import { createAsyncThunk } from '@reduxjs/toolkit';
import { setError } from '../store/offers/offers';
import { store } from '../store';
import { TIMEOUT_SHOW_ERROR } from '../constants/constants';

export const clearErrorAction = createAsyncThunk('offers/clearError', () => {
  setTimeout(() => store.dispatch(setError(null)), TIMEOUT_SHOW_ERROR);
});
