import 'react-datepicker/dist/react-datepicker.css';
import { format, isValid } from 'date-fns';
import { useField, useFormikContext } from 'formik';
import { IconWrapper, StyledDateWrapper } from './DatePicker.styled';
import { ReactComponent as Calendar } from 'images/svg/calendar.svg';
import DatePicker from 'react-datepicker';

export const DatePickerForm = ({ name }) => {
  const [field] = useField(name);
  const { setFieldValue } = useFormikContext();

  return (
    <StyledDateWrapper>
      <DatePicker
        inputProps={{ readOnly: true }}
        selected={field.value ? new Date(field.value) : null}
        closeOnSelect={true}
        onChange={values => {
          if (isValid(values)) {
            setFieldValue(field.name, values, format(values, 'yyyy-MM-dd'));
          }
        }}
        dateFormat="yyyy-MM-dd"
      />
      <IconWrapper>
        <Calendar />
      </IconWrapper>
    </StyledDateWrapper>
  );
};

export default DatePickerForm;
