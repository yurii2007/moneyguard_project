import { forwardRef, useRef } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import { registerLocale } from 'react-datepicker';
import { format, isValid } from 'date-fns';
import { useField, useFormikContext } from 'formik';
import uk from 'date-fns/locale/uk';
import en from 'date-fns/locale/en-US';
import { CalendarGlobalStyles, IconWrapper, StyledDateWrapper } from './DatePicker.styled';
import { ReactComponent as Calendar } from 'images/svg/calendar.svg';
import { getLanguage } from 'utils/helpers';
import Input from './Input';

const CustomInput = forwardRef((props, ref) => {
  return <Input {...props} ref={ref} />;
});

export const DatePickerForm = ({ name }) => {
  const inputRef = useRef(null);
  const [field] = useField(name);
  const { setFieldValue } = useFormikContext();
  const userLanguage = getLanguage();
  registerLocale(uk);
  registerLocale(en);

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
        dateFormat="dd.MM.yyyy"
        locale={userLanguage === 'ua' ? uk : en}
        customInput={<CustomInput ref={inputRef} />}
      />
      <CalendarGlobalStyles />
      <IconWrapper>
        <Calendar />
      </IconWrapper>
    </StyledDateWrapper>
  );
};

export default DatePickerForm;
