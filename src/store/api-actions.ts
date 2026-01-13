import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { State, AppDispatch } from '../types/state';
import { OffersProps } from '../types/offers';
import {
  APIRoute,
  AuthorizationStatus,
  TIMEOUT_SHOW_ERROR,
} from '../constants/constants';
import {
  setOffersLoadingStatus,
  requireAuthorization,
  loadOffers,
  setError,
  loadCurrentOffer,
  loadReviews,
} from './action';
import { saveToken, dropToken } from '../services/token';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { store } from '.';
import { CurrentOffer } from '../types/offers';
import ReviewsProps from '../types/reviews';
import CommentProps from '../types/comment';
import { loadNearbyOffers } from './action';
import NearbyOffers from '../types/nearby-offers';

export const clearErrorAction = createAsyncThunk('offers/clearError', () => {
  setTimeout(() => store.dispatch(setError(null)), TIMEOUT_SHOW_ERROR);
});

export const fetchOffersAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchOffers', async (_arg, { dispatch, extra: api }) => {
  dispatch(setOffersLoadingStatus(true));
  const { data } = await api.get<OffersProps[]>(APIRoute.Offers);
  dispatch(setOffersLoadingStatus(false));
  dispatch(loadOffers(data));
});

export const fetchCurrentOfferAction = createAsyncThunk<
  void,
  string,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchCurrentOffer', async (id, { dispatch, extra: api }) => {
  const { data } = await api.get<CurrentOffer>(`/offers/${id}`);
  dispatch(loadCurrentOffer(data));
});

export const fetchNearbyOffers = createAsyncThunk<
  void,
  string,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchNearbyOffers', async (id, { dispatch, extra: api }) => {
  const { data } = await api.get<NearbyOffers[]>(`/offers/${id}/nearby`);
  dispatch(loadNearbyOffers(data));
});

export const fetchReviewsAction = createAsyncThunk<
  void,
  string,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchReviews', async (id, { dispatch, extra: api }) => {
  const { data } = await api.get<ReviewsProps[]>(`/comments/${id}`);
  dispatch(loadReviews(data));
});

export const postReviewAction = createAsyncThunk<
  void,
  CommentProps,
  {
    extra: AxiosInstance;
  }
>('data/postReview', async ({ offerId, comment, rating }, { extra: api }) => {
  await api.post(`/comments/${offerId}`, {
    comment,
    rating,
  });
});

export const checkAuthAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/checkAuth', async (_arg, { dispatch, extra: api }) => {
  try {
    await api.get(APIRoute.Login);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
  } catch {
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  }
});

export const loginAction = createAsyncThunk<
  void,
  AuthData,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(
  'user/login',
  async ({ login: email, password }, { dispatch, extra: api }) => {
    const {
      data: { token },
    } = await api.post<UserData>(APIRoute.Login, { email, password });
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
  }
);

export const logoutAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/logout', async (_arg, { dispatch, extra: api }) => {
  await api.delete(APIRoute.Logout);
  dropToken();
  dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
});
