import { CiCircleMinus, CiCirclePlus } from 'react-icons/ci';
import { TogglerStyles } from './CheckBox.styled';
import { useField } from 'formik';

export const Checkbox = ({ ...props }) => {
  const { checked } = props;
  const [field] = useField(props);

  return (
    <TogglerStyles>
      <p className={`${checked ? '' : 'active-type-text'}`}>Income</p>
      <label htmlFor="type">
        <input {...field} {...props} />
        <CiCirclePlus />
        <CiCircleMinus />
      </label>
      <p className={`${checked ? 'active-type-text' : ''}`}>Expense</p>
    </TogglerStyles>
  );
};
