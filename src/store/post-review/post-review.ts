import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../constants/constants';

import { postReviewAction } from '../api-actions';
const initialState: comment = {
  isPosting: false,
};

type comment = {
  isPosting: boolean;
};

export const postReview = createSlice({
  name: NameSpace.PostReview,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(postReviewAction.pending, (state) => {
        state.isPosting = true;
      })
      .addCase(postReviewAction.fulfilled, (state) => {
        state.isPosting = false;
      })
      .addCase(postReviewAction.rejected, (state) => {
        state.isPosting = false;
      });
  },
});
