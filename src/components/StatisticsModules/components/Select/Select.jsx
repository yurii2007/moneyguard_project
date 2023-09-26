import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { optionsMonth, optionsYear } from './selectOptions';
import { SelectBox } from './Select.styled';
import { customSelect } from './selectCustomStules';

const SelectComponent = () => {
  const date = new Date();

  const [month, setMonth] = useState(date.getMonth() + 1);
  const [year, setYear] = useState(date.getFullYear());

  useEffect(() => {
    //  console.log({ month: Number(month), year: Number(year) });
  }, [month, year]);

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
