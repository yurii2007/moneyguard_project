import { useDispatch, useSelector } from 'react-redux';
import { createTransactionThunk } from 'redux/finance/financeThunks';
import { Formik } from 'formik';
import Select from 'react-select';
import { object, string, date, bool, mixed, number } from 'yup';
import DatePickerForm from '../DatePicker/DatePicker';
import { parseDate } from 'utils/helpers';
import { IoIosClose } from 'react-icons/io';
import { selectCategories } from 'redux/selectors';
import { Checkbox } from './Checkbox/Checkbox';
import {
  BtnClose,
  CancelButton,
  FormStyles,
  HeaderText,
  InputEditor,
  SaveButton,
  WrapperButton,
  WrapperCategories,
  WrapperComment,
  WrapperInputEditor,
  WrapperTablet,
} from './AddModal.syled';
import { ErrorText } from './AddModal.syled';
import { refreshUserBalance } from 'redux/auth/AuthThunk';
import { customSelectStyles } from './customerStylesSelect';
import { useModal } from 'components/ModalContext/ModalContext';

export const AddModal = () => {
  const { modalClose } = useModal();
  const categories = useSelector(selectCategories);
  const dispatch = useDispatch();

  const submitForm = values => {
    const formattingData = {
      transactionDate: parseDate(values.transactionDate),
      type: values.type ? 'EXPENSE' : 'INCOME',
      categoryId: values.type
        ? values.category.id
        : '063f1132-ba5d-42b4-951d-44011ca46262',
      comment: values.comment,
      amount: values.type ? -values.amount : Math.abs(values.amount),
    };
    dispatch(createTransactionThunk(formattingData))
      .unwrap()
      .then(() => dispatch(refreshUserBalance()));
  };

  return (
    <>
      <Formik
        initialValues={{
          type: true,
          amount: '',
          transactionDate: new Date(Date.now()),
          comment: '',
          category: null,
        }}
        validationSchema={object({
          type: bool(),
          category: mixed().when('type', {
            is: type => type,
            then: () => mixed().required('Please choose transaction category.'),
            otherwise: () => mixed().notRequired(),
          }),
          amount: number()
            .typeError('Transaction value must be a number')
            .required('Please provide transaction value.'),
          transactionDate: date().required('Please provide transaction date.'),
          comment: string().required('Please add commit.'),
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          submitForm(values);
          resetForm();
          setSubmitting(false);
          modalClose();
        }}
      >
        {({
          handleSubmit,
          values,
          setFieldValue,
          handleBlur,
          errors,
          touched,
        }) => (
          <FormStyles
            onSubmit={e => {
              e.preventDefault();
              handleSubmit(e);
            }}
          >
            <BtnClose type="button" onClick={modalClose}>
              <IoIosClose size={44} />
            </BtnClose>
            <HeaderText>Add Transaction</HeaderText>
            <Checkbox
              type="checkbox"
              name="type"
              checked={values.type}
              onChange={evt => {
                setFieldValue('type', evt.target.checked);
              }}
              onBlur={handleBlur}
              onKeyUp={handleBlur}
            />
            {values.type && (
              <WrapperCategories>
                <Select
                  name="category"
                  value={values.category}
                  placeholder="Select a category"
                  onChange={option => setFieldValue('category', option)}
                  options={categories?.map(option => ({
                    value: option.type,
                    label: option.name,
                    id: option.id,
                  }))}
                  styles={customSelectStyles}
                />
                <ErrorText>{errors.category}</ErrorText>
              </WrapperCategories>
            )}
            <WrapperTablet>
              <WrapperInputEditor>
                <InputEditor
                  placeholder="0.00"
                  title="Please put the transaction value"
                  name="value"
                  autoComplete="off"
                  value={values.amount}
                  onChange={evt => setFieldValue('amount', evt.target.value)}
                  onBlur={handleBlur}
                  onKeyUp={handleBlur}
                />
                {touched.amount && errors.amount && (
                  <ErrorText>{errors.amount}</ErrorText>
                )}
              </WrapperInputEditor>
              <div>
                <DatePickerForm
                  dateFormat="dd.mm.yyyy"
                  name="transactionDate"
                  type="date"
                  timeFormat={false}
                />
                {errors.transactionDate && (
                  <ErrorText>{errors.transactionDate}</ErrorText>
                )}
              </div>
            </WrapperTablet>
            <WrapperComment>
              <textarea
                placeholder="Comment"
                title="Leave the description here"
                name="comment"
                type="text"
                autoComplete="off"
                value={values.comment}
                onChange={evt => setFieldValue('comment', evt.target.value)}
                onBlur={handleBlur}
                onKeyUp={handleBlur}
              />
              <ErrorText>{errors.comment}</ErrorText>
            </WrapperComment>
            <WrapperButton>
              <SaveButton type="submit">Add</SaveButton>
              <CancelButton type="button" onClick={modalClose}>
                Cancel
              </CancelButton>
            </WrapperButton>
            <div></div>
          </FormStyles>
        )}
      </Formik>
    </>
  );
};
