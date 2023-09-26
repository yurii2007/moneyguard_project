import { Container } from 'components/Container/Container';
import ChartComponent from 'components/StatisticsModules/components/Chart/Chart';
import Title from 'components/StatisticsModules/components/Title/Title';
import React from 'react';

const StatisticsPage = () => {
  return (
    <Container>
      <div style={{ width: '280px', margin: '0 auto' }}>
        <Title>Statistics</Title>
        <ChartComponent />
      </div>
    </Container>
  );
};

export default StatisticsPage;
