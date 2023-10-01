import { Container } from 'components/Container/Container';
import TransactionsList from 'components/TransactionsList/TransactionsList';
import React from 'react';

const Home = () => {
  return (
    <>
      <Container size="main">
        <TransactionsList />
      </Container>
    </>
  );
};

export default Home;
