import { Container } from 'components/Container/Container';
import { useTranslation } from 'react-i18next';
import {
  ChartBox,
  StatisticsPageStyledBox,
  TransactionBox,
} from 'components/StatisticsModules/StatisticsPage.styled';
import ChartComponent from 'components/StatisticsModules/components/Chart/Chart';
import SelectComponent from 'components/StatisticsModules/components/Select/Select';
import Title from 'components/StatisticsModules/components/Title/Title';
import Transaction from 'components/StatisticsModules/components/Transaction/Transaction';
import React from 'react';
import { useTransaction } from 'utils/useTransaction';

const StatisticsPage = () => {
  const { t } = useTranslation();
  const { transactions } = useTransaction();
  return (
    <Container size="statistics">
      <StatisticsPageStyledBox>
        <ChartBox>
          <Title>{t('stat')}</Title>
          <ChartComponent transactions={transactions} />
        </ChartBox>
        <TransactionBox>
          <SelectComponent />
          <Transaction />
        </TransactionBox>
      </StatisticsPageStyledBox>
    </Container>
  );
};

export default StatisticsPage;
