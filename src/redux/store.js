import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth/AuthSlice';
import { financeReducer } from './finance/finanseSlice';

import { transactionReducer } from './Transaction/transactionSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  REGISTER,
  PURGE,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    transaction: transactionReducer,
    auth: persistReducer(authPersistConfig, authReducer),
    transactions: financeReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistStor = persistStore(store);
