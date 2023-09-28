import { createSlice } from '@reduxjs/toolkit';
import { getTransaction } from './transactionOperation';

const initialState = {
  categoriesSummary: [
    {
      name: '',
      type: '',
      total: 0,
    },
  ],
  incomeSummary: 0,
  expenseSummary: 0,
  periodTotal: 0,
  year: 0,
  month: 0,
  isLoading: false,
  isError: '',
};

const transactionSlice = createSlice({
  name: 'transaction',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getTransaction.pending, state => {
        state.isLoading = true;
        state.isError = '';
      })
      .addCase(getTransaction.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.categoriesSummary = payload.categoriesSummary;
        state.incomeSummary = payload.incomeSummary;
        state.expenseSummary = payload.expenseSummary;
        state.periodTotal = payload.periodTotal;
        state.year = payload.year;
        state.month = payload.month;
      })
      .addCase(getTransaction.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = payload;
      });
  },
});

export const transactionReducer = transactionSlice.reducer;
