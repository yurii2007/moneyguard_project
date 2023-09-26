import React from 'react';
import { nanoid } from 'nanoid';
import {
  HeaderTitle,
  HeaderTransaction,
  SumTitleList,
  SumTitleItem,
  TransactionList,
  Total,
} from './Transaction.styled';
import { colorStatistics } from './colorsForTypes';
import TransactionItemComponent from '../TransactionItem/TransactionItem';

export const transaction = {
  categoriesSummary: [
    { name: 'Car', type: 'EXPENSE', total: -20 },
    { name: 'Leisure', type: 'EXPENSE', total: -30 },
    { name: 'Income', type: 'INCOME', total: 100 },
    { name: 'Self care', type: 'INCOME', total: -20 },
  ],
  incomeSummary: 100,
  expenseSummary: -70,
  periodTotal: 30,
};

const Transaction = () => {
  return (
    <>
      <HeaderTransaction>
        <HeaderTitle>Category</HeaderTitle>
        <HeaderTitle>Sum</HeaderTitle>
      </HeaderTransaction>
      <TransactionList>
        {transaction.categoriesSummary.map(item => {
          const color =
            colorStatistics.find(category => category.name === item.name)
              ?.color || '';
          return (
            <TransactionItemComponent
              key={nanoid()}
              color={color}
              item={item}
            />
          );
        })}
      </TransactionList>
      <SumTitleList>
        <SumTitleItem>
          <p>Expenses:</p>
          <Total className="expense">
            {Math.abs(transaction.expenseSummary).toFixed(2)}
          </Total>
        </SumTitleItem>
        <SumTitleItem>
          <p>Income:</p>
          <Total className="income">
            {Math.abs(transaction.incomeSummary).toFixed(2)}
          </Total>
        </SumTitleItem>
      </SumTitleList>
    </>
  );
};

export default Transaction;
