import { CiCircleMinus, CiCirclePlus } from 'react-icons/ci';
import { TogglerStyles } from './CheckBox.styled';
import { useField } from 'formik';

export const Checkbox = ({ ...props }) => {
  const { checked } = props;
  const [field] = useField(props);

  return (
    <TogglerStyles active={checked.toString()}>
      <p className={`${checked ? 'secondary-text' : 'active-text-yellow'}`}>
        Income
      </p>
      <label htmlFor="type">
        <input id='type' {...field} {...props} />
        <CiCircleMinus className='minus'  size={44} />
        <CiCirclePlus className='plus' size={44} />
      </label>
      <p className={`${checked ? 'active-text-dashboard' : 'secondary-text'}`}>
        Expense
      </p>
    </TogglerStyles>
  );
};
