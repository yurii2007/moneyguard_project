import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { optionsMonth, optionsYear } from './selectOptions';
import { SelectBox } from './Select.styled';
import { customSelect } from './selectCustomStyles';
import { useDispatch } from 'react-redux';
import { getTransaction } from 'redux/Transaction/transactionOperation';

const SelectComponent = () => {
  const date = new Date();
  const dispatch = useDispatch();
  const [month, setMonth] = useState(date.getMonth() + 1);
  const [year, setYear] = useState(date.getFullYear());

  useEffect(() => {
    dispatch(getTransaction({ month: Number(month), year: Number(year) }));
  }, [dispatch, month, year]);

  return (
    <SelectBox>
      <Select
        onChange={event => {
          setMonth(event.value);
        }}
        options={optionsMonth}
        styles={customSelect}
        isSearchable={false}
      />
      <Select
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
