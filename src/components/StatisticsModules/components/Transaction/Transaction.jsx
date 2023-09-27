import React, { useEffect, useState } from 'react';
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
import FilterButton from '../FilterButton/FilterButton';

const Transaction = () => {
  const { transactions, summary, income } = useTransaction();
  const [data, setData] = useState(transactions);
  useEffect(() => {
    setData(transactions);
  }, [transactions]);

  const handleFilterData = toggle => {
    const x = [...data];
    let newData;
    if (toggle) {
      newData = x.sort(
        (first, second) => Math.abs(first.total) - Math.abs(second.total)
      );
    } else {
      newData = x.sort(
        (first, second) => Math.abs(second.total) - Math.abs(first.total)
      );
    }

    setData(newData);
  };

  return (
    <>
      <HeaderTransaction>
        <HeaderTitle>Category</HeaderTitle>
        <FilterButton handleFilterData={handleFilterData} />
        <HeaderTitle>Sum</HeaderTitle>
      </HeaderTransaction>
      <TransactionList>
        {data?.map(item => {
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
