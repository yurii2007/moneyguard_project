import LoaderCurrencySvg from '../../images/svg/loader/loaderMoney.svg';
import { LoaderCurrencyStyled } from './LoaderCurrency.styled';

export default function LoaderCurrency() {
  return (
    <LoaderCurrencyStyled
      src={LoaderCurrencySvg}
      alt="Loader"
      width="100px"
      height="100px"
    />
  );
}
