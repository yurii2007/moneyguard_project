import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getTransaction = createAsyncThunk(
  'transaction/getTransaction',
  async (period, thunkAPI) => {
    try {
      const { data } = await axios.get('/api/transactions-summary', {
        params: period,
      });

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
