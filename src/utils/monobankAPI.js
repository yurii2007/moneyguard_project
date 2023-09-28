/*
import getCurrency from 'path/to/monobankAPI'

async () => {
    const qwe = await getCurrency();
    console.log(qwe);
}
*/

import axios from 'axios';

const monoAPI = axios.create({
  baseURL: 'https://api.monobank.ua/',
});
const LS_KEY = 'currency';

const loadFromLS = () => {
  const response = JSON.parse(localStorage.getItem(LS_KEY)) ?? false;
  return response;
};

const saveToLS = data => {
  localStorage.setItem(LS_KEY, JSON.stringify(data));
};

const getCurrency = async () => {
  const dataFromLS = loadFromLS();
  if (dataFromLS && Date.now() - dataFromLS[0].date < 3600000) {
    return dataFromLS;
  }
  try {
    const { data } = await monoAPI.get('bank/currency');
    const toLS = data
      .filter(
        el =>
          (+el.currencyCodeA === 978 && +el.currencyCodeB === 980) ||
          +el.currencyCodeA === 840
      )
      .map(el =>
        el.currencyCodeA === 978
          ? {
              currency: 'EUR',
              date: Date.now(),
              buy: el.rateBuy,
              sell: el.rateSell,
            }
          : {
              currency: 'USD',
              date: Date.now(),
              buy: el.rateBuy,
              sell: el.rateSell,
            }
      );
    saveToLS(toLS);
    return toLS;
  } catch (error) {
    return error.message;
  }
};
export default getCurrency;
