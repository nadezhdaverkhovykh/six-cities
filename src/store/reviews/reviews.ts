import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../constants/constants';
import { fetchReviewsAction } from '../api-actions';
import ReviewsProps from '../../types/reviews';

const initialState: reviews = {
  reviews: null,
};

type reviews = {
  reviews: ReviewsProps[] | null;
};

export const getReviews = createSlice({
  name: NameSpace.Reviews,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchReviewsAction.fulfilled, (state, action) => {
      state.reviews = action.payload;
    });
  },
});
