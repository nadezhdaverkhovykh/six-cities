import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../constants/constants';
import { AuthorizationStatus } from '../../constants/constants';
import { checkAuthAction, loginAction, logoutAction } from '../api-actions';

const initialState: authorizationStatus = {
  authorizationStatus: AuthorizationStatus.Unknown,
};

type authorizationStatus = {
  authorizationStatus: AuthorizationStatus;
};

export const login = createSlice({
  name: NameSpace.Login,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(loginAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(loginAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      });
  },
});
