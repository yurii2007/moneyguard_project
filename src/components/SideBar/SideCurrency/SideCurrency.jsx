import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import getCurrency from '../../../utils/helpers';
import LoaderCurrency from 'components/Loader/LoaderCurrency';
import { useTranslation } from 'react-i18next';
import {
  Category,
  Currency,
  CurrencyBuy,
  CurrencySell,
  CurrencyTable,
  Purchase,
  Sale,
  Table,
} from './SideCurrency.styled';

const SideCurrency = () => {
  const [dataCurrency, setDataCurrency] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { t } = useTranslation();
  useEffect(() => {
    const localDate = localStorage.getItem('currencyDate');
    const localDataCurrency = localStorage.getItem('currency');

    if (!localDataCurrency || Date.now() - Number(localDate) > 1800000) {
      const fetchCurrency = async () => {
        setIsLoading(true);

        localStorage.setItem('currencyDate', JSON.stringify(Date.now()));
        try {
          const data = await getCurrency();
          localStorage.setItem('currency', JSON.stringify(data));

          setDataCurrency(data);
          setIsLoading(false);
        } catch (error) {
          localStorage.removeItem('currency');
          setDataCurrency(null);
        }
      };
      fetchCurrency();
    } else {
      try {
        setDataCurrency(JSON.parse(localDataCurrency));
      } catch (error) {
        toast.error('Something went wrong, please try again!');
      }
    }
  }, []);

  return (
    <>
      {isLoading && <LoaderCurrency />}
      {!!dataCurrency && (
        <>
          <Category>
            <Currency>{t('currency')}</Currency>
            <Purchase>{t('purchase')}</Purchase>
            <Sale>{t('sale')}</Sale>
          </Category>
          <Table>
            <tbody>
              {dataCurrency.map(({ currency, buy, sell }) => (
                <tr key={currency}>
                  <CurrencyTable>{currency}</CurrencyTable>
                  <CurrencyBuy>{buy}</CurrencyBuy>
                  <CurrencySell>{sell}</CurrencySell>
                </tr>
              ))}
            </tbody>
          </Table>
        </>
      )}
    </>
  );
};

export default SideCurrency;
