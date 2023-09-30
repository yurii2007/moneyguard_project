export const selectIsLoggedIn = state => state.auth.isAuth;

export const selectUser = state => state.auth.user;

export const selectIsRefreshing = state => state.auth.isRefresh;

export const selectUserEmail = state => state.auth.user?.email;

export const selectBalance = state => state.auth.user?.balance;

export const selectTransactions = state => state.transaction.categoriesSummary;

export const selectExpenseSummary = state => state.transaction.expenseSummary;

export const selectIncomeSummary = state => state.transaction.incomeSummary;