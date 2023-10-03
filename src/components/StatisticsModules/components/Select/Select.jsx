import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import {
  currentMonth,
  currentYear,
  monthName,
  optionsMonth,
  optionsMonthUa,
  optionsYear,
  monthNameUa,
} from './selectOptions';
import { SelectBox } from './Select.styled';
import { customSelect } from './selectCustomStyles';
import { useDispatch } from 'react-redux';
import { getTransaction } from 'redux/Transaction/transactionOperation';
import i18next from 'i18next';

const SelectComponent = () => {
  const dispatch = useDispatch();

  const [month, setMonth] = useState(currentMonth);
  const [year, setYear] = useState(currentYear);

  useEffect(() => {
    dispatch(getTransaction({ month: Number(month), year: Number(year) }));
  }, [dispatch, month, year]);
  const lableMonth = i18next.language === 'ua' ? monthNameUa : monthName;

  return (
    <SelectBox>
      <Select
        defaultValue={{
          value: month,
          label: lableMonth,
        }}
        onChange={event => {
          setMonth(event.value);
        }}
        options={i18next.language === 'ua' ? optionsMonthUa : optionsMonth}
        styles={customSelect}
        isSearchable={false}
      />
      <Select
        defaultValue={{ value: year, label: year }}
        onChange={event => {
          setYear(event.value);
        }}
        options={optionsYear}
        styles={customSelect}
        isSearchable={false}
      />
    </SelectBox>
  );
};

export default SelectComponent;
