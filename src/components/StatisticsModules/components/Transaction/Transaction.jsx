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
import { useTransaction } from 'utils/useTransaction';

const Transaction = () => {
  const { transactions, summary, income } = useTransaction();

  return (
    <>
      <HeaderTransaction>
        <HeaderTitle>Category</HeaderTitle>
        <HeaderTitle>Sum</HeaderTitle>
      </HeaderTransaction>
      <TransactionList>
        {transactions.map(item => {
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
          <Total className="expense">{Math.abs(summary).toFixed(2)}</Total>
        </SumTitleItem>
        <SumTitleItem>
          <p>Income:</p>
          <Total className="income">{Math.abs(income).toFixed(2)}</Total>
        </SumTitleItem>
      </SumTitleList>
    </>
  );
};

export default Transaction;
