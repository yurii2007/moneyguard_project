import { forwardRef } from 'react';
import { TitleWrapper } from './DatePicker.styled';

const Input = ({ value, onClick, onChange }, ref) => {
  return (
    <TitleWrapper
      type="text"
      value={value}
      ref={ref}
      onChange={e => onChange(e.target.value)}
      onClick={onClick}
    />
  );
};

export default forwardRef(Input);
