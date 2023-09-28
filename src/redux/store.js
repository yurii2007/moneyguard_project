import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth/AuthSlice';
import { financeReducer } from './finance/finanseSlice';

export const store = configureStore({
  reducer: { auth: authReducer, transactions: financeReducer },
});
