import React from 'react';
import {
  ColorsItem,
  NameItem,
  PriceItem,
  StatItem,
} from './TransactionItem.styled';

const TransactionItemComponent = ({ item, color }) => {
  return (
    <StatItem>
      <ColorsItem color={color}></ColorsItem>
      <NameItem>{item.name}</NameItem>
      <PriceItem>{Math.abs(item.total)}</PriceItem>
    </StatItem>
  );
};

export default TransactionItemComponent;
