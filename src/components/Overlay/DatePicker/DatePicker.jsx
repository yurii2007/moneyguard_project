import 'react-datepicker/dist/react-datepicker.css';
import { format, isValid } from 'date-fns';
import { useField, useFormikContext } from 'formik';
import { IconWrapper, StyledDateWrapper } from './DatePicker.styled';
import { ReactComponent as Calendar } from 'images/svg/calendar.svg';
import DatePicker from 'react-datepicker';
import uk from 'date-fns/locale/uk';
import en from 'date-fns/locale/en-US';
import { registerLocale } from 'react-datepicker';
import { getLanguage } from 'utils/helpers';

export const DatePickerForm = ({ name }) => {
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
      />
      <IconWrapper>
        <Calendar />
      </IconWrapper>
    </StyledDateWrapper>
  );
};

export default DatePickerForm;
