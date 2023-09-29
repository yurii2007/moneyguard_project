import { Container } from 'components/Container/Container';
import TransactionsList from 'components/TransactionsList/TransactionsList';
import React from 'react';

const Home = () => {
  return (
    <>
      <Container Size="main">
        <TransactionsList />
      </Container>
    </>
  );
};

export default Home;
