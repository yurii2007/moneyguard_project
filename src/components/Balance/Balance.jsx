import { selectBalance } from 'redux/selectors';
import { useSelector } from 'react-redux';
import { BalanceWrapper } from './Balance.styled';
import { useTranslation } from 'react-i18next';

export const Balance = () => {
  const { t } = useTranslation();
  const balance = useSelector(selectBalance);
  return (
    <BalanceWrapper>
      <p className="balance-head">{t('balance')}</p>
      <p className="balance-body">&#8372;{balance ?? 0}</p>
    </BalanceWrapper>
  );
};
