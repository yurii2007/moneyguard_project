import { selectBalance } from 'redux/selectors';
import { useSelector } from 'react-redux';
import { BalanceWrapper } from "./Balance.styled";

export const Balance = () => {
    const balance = useSelector(selectBalance);
  return (
    <BalanceWrapper>
      <p className="balance-head">your balance</p>
      <p className="balance-body">&#8372;{balance ?? 0}</p>
    </BalanceWrapper>
  );
};
