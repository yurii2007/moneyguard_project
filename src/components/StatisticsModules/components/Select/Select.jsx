import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { optionsMonth, optionsYear } from './selectOptions';
import { SelectBox } from './Select.styled';

const SelectComponent = () => {
  const date = new Date();

  const [month, setMonth] = useState(date.getMonth() + 1);
  const [year, setYear] = useState(date.getFullYear());
  useEffect(() => {
    console.log({ month: Number(month), year: Number(year) });
  }, [month, year]);

  const customSelect = {
    container: provided => ({
      ...provided,

      maxHeight: '50px',

      fontFamily: 'Poppins',

      fontSize: '16px',
      border: '1px solid var(--white-60, --transparency-60)',
      borderRadius: '8px',

      '@media (max-width: 767px)': {
        maxWidth: '440px',
        width: '100%',
      },
      '@media (min-width: 768px) and (max-width: 1279px)': {
        maxWidth: '160px',
      },
      '@media (min-width: 1280px)': {
        maxWidth: '182px',
      },
    }),

    singleValue: provided => ({
      ...provided,
      color: 'var(--white)',
      fontSize: '16px',
      marginLeft: '20px',
    }),
    control: provided => ({
      ...provided,
      background: 'rgba(74, 86, 226, 0.10)',
      minHeight: '50px',
      width: '182px',
      border: 'none',
      boxShadow: 'none',
      margin: '0',

      '@media (max-width: 1279px)': {
        width: '160px',
      },
      '@media (max-width: 767px)': {
        maxWidth: '440px',
        width: '100%',
      },
    }),
    option: (provided, { isFocused }) => ({
      ...provided,
      cursor: 'pointer',
      backgroundColor: isFocused ? 'var(--transparency-10)' : 'transparent',
      color: isFocused ? 'var(--dashboard-text)' : 'var(--white)',
      '&:hover': {
        backgroundColor: isFocused ? 'var(--transparency-10)' : 'transparent',
        color: isFocused ? 'var(--dashboard-text)' : '#FBFBFB',
      },
      textAlign: 'left',
      paddingLeft: '20px',
      fontSize: '16px',
    }),
    menu: provided => ({
      ...provided,
      textAlign: 'center',
      borderRadius: '8px',
      margin: '0',
      background:
        'linear-gradient(360deg, rgba(83, 61, 186, 1) 0%, rgba(80, 48, 154, 1) 35.94%, rgba(106, 70, 165, 1) 61.04%, rgba(133, 93, 175, 1) 100%)',
    }),
    menuList: provided => ({
      ...provided,
      borderRadius: '8px',
      boxShadow: '0px 4px 60px 0px rgba(0, 0, 0, 0.25)',
      backdropFilter: 'blur(50px)',
      maxHeight: '157px',
      '&::-webkit-scrollbar': {
        width: '4px',
      },

      '&::-webkit-scrollbar-track': {
        background: 'transparent',
      },

      '&::-webkit-scrollbar-thumb': {
        background: '#bdbdbd',
      },

      '&::-webkit-scrollbar-thumb:hover': {
        background: '#bdbdbd',
      },
    }),
    placeholder: provided => ({
      ...provided,
      paddingBottom: '2px',
      color: 'var(--white)',
      fontSize: '16px',
    }),
    indicatorSeparator: provided => ({
      ...provided,
      display: 'none',
    }),
  };
  return (
    <SelectBox>
      <Select
        onChange={event => {
          setMonth(event.value);
        }}
        options={optionsMonth}
        styles={customSelect}
      />
      <Select
        onChange={event => {
          setYear(event.value);
        }}
        options={optionsYear}
        styles={customSelect}
      />
    </SelectBox>
  );
};

export default SelectComponent;