import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://wallet.goit.ua/api',
});

export async function createTransaction(transaction) {
  const { data } = await instance.post('/transactions', transaction);
  return data;
}
export async function fetchAllTransactions() {
  const { data } = await instance.get('/transactions');
  return data;
}

export async function updTransaction({ transactionId, ...transactionData }) {
  const { data } = await instance.patch(
    `/transactions/${transactionId}`,
    transactionData
  );
  return data;
}

export async function delTransaction(id) {
  await instance.delete(`/transactions/${id}`);
  return id;
}

export async function getTransactionCategories() {
  const { data } = await instance.get('/transaction-categories');
  return data;
}

export async function getSummaryTransaction({ month = null, year = null }) {
  const { data } = await instance.get('/transactions-summary', {
    params: { month, year },
  });
  return data;
}

export const createTransactionThunk = createAsyncThunk(
  'finance/createTransactionThunk',
  async (transaction, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
    try {
      return await createTransaction(transaction);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const fetchAllTransactionsThunk = createAsyncThunk(
  'finance/fetchAllTransactionsThunk',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;

    try {
      return await fetchAllTransactions();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const updTransactionThunk = createAsyncThunk(
  'finance/updTransactionThunk',
  async (transaction, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
    try {
      return await updTransaction(transaction);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const delTransactionThunk = createAsyncThunk(
  'finance/delTransactionThunk',
  async (id, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
    try {
      return await delTransaction(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const getTransactionCategoriesThunk = createAsyncThunk(
  'finance/getTransactionCategoriesThunk',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
    try {
      return await getTransactionCategories();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const getSummaryTransactionThunk = createAsyncThunk(
  'finance/getSummaryTransactionThunk',
  async (date, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
    try {
      return await getSummaryTransaction(date);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
