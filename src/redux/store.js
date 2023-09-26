import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth/AuthSlice';
import { transactionReducer } from './Transaction/transactionSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    transaction: transactionReducer,
  },
});
