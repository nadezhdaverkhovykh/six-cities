import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { State, AppDispatch } from '../types/state';
import { OffersProps, CurrentOffer } from '../types/offers';
import { APIRoute } from '../constants/constants';
import { saveToken, dropToken } from '../services/token';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import ReviewsProps from '../types/reviews';
import CommentProps from '../types/comment';
import NearbyOffers from '../types/nearby-offers';

export const fetchOffersAction = createAsyncThunk<
  OffersProps[],
  undefined,
  { extra: AxiosInstance }
>('data/fetchOffers', async (_arg, { extra: api }) => {
  const { data } = await api.get<OffersProps[]>(APIRoute.Offers);
  return data;
});

export const fetchCurrentOfferAction = createAsyncThunk<
  CurrentOffer,
  string,
  { dispatch: AppDispatch; extra: AxiosInstance }
>('data/fetchCurrentOffer', async (id, { extra: api }) => {
  const { data } = await api.get<CurrentOffer>(`/offers/${id}`);
  return data;
});

export const fetchNearbyOffers = createAsyncThunk<
  NearbyOffers[],
  string,
  { dispatch: AppDispatch; extra: AxiosInstance }
>('data/fetchNearbyOffers', async (id, { extra: api }) => {
  const { data } = await api.get<NearbyOffers[]>(`/offers/${id}/nearby`);
  return data;
});

export const fetchReviewsAction = createAsyncThunk<
  ReviewsProps[],
  string,
  { dispatch: AppDispatch; extra: AxiosInstance }
>('data/fetchReviews', async (id, { extra: api }) => {
  const { data } = await api.get<ReviewsProps[]>(`/comments/${id}`);
  return data;
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
  { dispatch: AppDispatch; state: State; extra: AxiosInstance }
>('user/checkAuth', async (_arg, { extra: api }) => {
  await api.get(APIRoute.Login);
});

export const loginAction = createAsyncThunk<
  void,
  AuthData,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/login', async ({ login: email, password }, { extra: api }) => {
  const {
    data: { token },
  } = await api.post<UserData>(APIRoute.Login, { email, password });
  saveToken(token);
});

export const logoutAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/logout', async (_arg, { extra: api }) => {
  await api.delete(APIRoute.Logout);
  dropToken();
});
