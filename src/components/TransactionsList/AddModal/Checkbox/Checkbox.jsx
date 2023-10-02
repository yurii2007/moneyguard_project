import { CiCircleMinus, CiCirclePlus } from 'react-icons/ci';
import { TogglerStyles } from './CheckBox.styled';
import { useField } from 'formik';

export const Checkbox = ({ ...props }) => {
  const { checked } = props;
  const [field] = useField(props);

  return (
    <TogglerStyles active={checked.toString()}>
      <p className={`${checked ? 'secondary-text' : 'active-type-text'}`}>
        Income
      </p>
      <label htmlFor="type">
        <input id='type' {...field} {...props} />
        <CiCirclePlus className='plus' size={44} />
        <CiCircleMinus className='minus'  size={44} />
      </label>
      <p className={`${checked ? 'active-type-text' : 'secondary-text'}`}>
        Expense
      </p>
    </TogglerStyles>
  );
};
