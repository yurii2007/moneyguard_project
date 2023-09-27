import { register, logIn, logOut, refreshUser } from './AuthThunk';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: '',
  isLoading: false,
  error: '',
  user: null,
  isAuth: false,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.error = '';
  state.token = payload.token;
  state.user = payload.user;
  state.isAuth = true;
};
const handleFulfilledRefresh = (state, { payload }) => {
  state.isLoading = false;
  state.error = '';
  state.user = payload.user;
  state.isAuth = true;
};

const handleRejected = state => {
  state.isLoading = false;
  state.error = '';
  state.token = '';
  state.user = null;
  state.isAuth = false;
};

const handleLogOut = state => {
  state.isLoading = false;
  state.token = '';
  state.user = null;
  state.isAuth = false;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,

  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, handleFulfilled)
      .addCase(logIn.fulfilled, handleFulfilled)
      .addCase(logIn.pending, handlePending)
      .addCase(logIn.rejected, handleRejected)
      .addCase(logOut.fulfilled, handleLogOut)
      .addCase(refreshUser.fulfilled, handleFulfilledRefresh)
      .addCase(refreshUser.pending, handlePending)
      .addCase(refreshUser.rejected, handleRejected);
  },
});

export const authReducer = authSlice.reducer;
