import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { Total, TotalContainer } from './Chart.styled';
import { colorStatistics } from '../Transaction/colorsForTypes';
import { transaction } from '../Transaction/Transaction';

ChartJS.register(ArcElement, Tooltip, Legend);

const ChartComponent = () => {
  const balans = 30; //берем со строра в user

  const data = {
    labels: transaction.categoriesSummary.map(item => item.name),
    datasets: [
      {
        label: 'Ammount',
        data: transaction.categoriesSummary.map(item => Math.abs(item.total)),
        backgroundColor: transaction.categoriesSummary.map(item => {
          const colorItems = colorStatistics.find(
            colorItem => colorItem.name === item.name
          );
          return colorItems.color;
        }),
        hoverOffset: 2,
        borderWidth: 0,
      },
    ],
  };
  const options = {
    borderRadius: 2,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <TotalContainer>
      <Doughnut data={data} options={options} />
      <Total>₴ {balans.toFixed(2)}</Total>
    </TotalContainer>
  );
};

export default ChartComponent;
