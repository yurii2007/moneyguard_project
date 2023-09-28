import { Container } from 'components/Container/Container';
import TransactionsList from 'components/TransactionsList/TransactionsList'
import React from 'react';


const Home = () => {
  return (
    <Container>
      <div>Home</div>
      <TransactionsList
        transactions={[
          {
            id: 'string',
            transactionDate: 'string',
            type: 'INCOME',
            categoryId: 'string',
            userId: 'string',
            comment: 'string',
            amount: 0,
            balanceAfter: 0,
          },
        ]}
       
      />
    </Container>
  );
};

export default Home;
