import { useDispatch, useSelector } from 'react-redux';
import { UpdateWrapper } from '../UpdateModal/UpdateModal.styled';
import { createTransactionThunk } from 'redux/finance/financeThunks';
import { Formik } from 'formik';
import { object, string, date, bool, mixed, number } from 'yup';
import DatePickerForm from '../DatePicker/DatePicker';
import { parseDate } from 'utils/helpers';
import { selectCategories } from 'redux/selectors';
import { Checkbox } from './Checkbox/Checkbox';
import {
  CancelButton,
  HeaderText,
  InputEditor,
  SaveButton,
  WrapperButton,
  WrapperCategories,
  WrapperComment,
  WrapperInputEditor,
} from './AddModal.syled';
import { ErrorText } from './AddModal.syled';
import { refreshUserBalance } from 'redux/auth/AuthThunk';
import { useEffect } from 'react';

export const AddModal = ({ closeModal }) => {
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeModal]);
  const categories = useSelector(selectCategories);
  const dispatch = useDispatch();

  const submitForm = values => {
    const formattingData = {
      transactionDate: parseDate(values.transactionDate),
      type: values.type ? 'EXPENSE' : 'INCOME',
      categoryId: values.type
        ? values.category
        : '063f1132-ba5d-42b4-951d-44011ca46262',
      comment: values.comment,
      amount: values.type ? -values.amount : Math.abs(values.amount),
    };
    dispatch(createTransactionThunk(formattingData))
      .unwrap()
      .then(() => dispatch(refreshUserBalance()));
  };

  const unmountModal = e => {
    if (e.target === e.currentTarget) closeModal();
  };

  return (
    <UpdateWrapper onClick={unmountModal}>
      <Formik
        initialValues={{
          type: true,
          amount: '',
          transactionDate: new Date(Date.now()),
          comment: '',
          category: 'c9d9e447-1b83-4238-8712-edc77b18b739',
        }}
        validationSchema={object({
          type: bool(),
          category: mixed().required('Please choose transaction category.'),
          amount: number()
            .typeError('Transaction value must be a number')
            .required('Please provide transaction value.'),
          transactionDate: date().required('Please provide transaction date.'),
          comment: string().required(),
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          submitForm(values);
          resetForm();
          setSubmitting(false);
          closeModal();
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
          <form
            onSubmit={e => {
              e.preventDefault();
              handleSubmit(e);
            }}
          >
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
                <select
                  name="category"
                  placeholder="Select a category"
                  onChange={evt => setFieldValue('category', evt.target.value)}
                >
                  {categories?.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
                <ErrorText>{errors.category}</ErrorText>
              </WrapperCategories>
            )}
            <WrapperInputEditor>
              <InputEditor
                placeholder="0.00"
                title="Please put the transaction value"
                name="value"
                type="number"
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
            </WrapperComment>
            <WrapperButton>
              <SaveButton type="submit">Add</SaveButton>
              <CancelButton type="button" onClick={closeModal}>
                Cancel
              </CancelButton>
            </WrapperButton>
            <div>
              <ErrorText>{errors.comment}</ErrorText>
            </div>
          </form>
        )}
      </Formik>
    </UpdateWrapper>
  );
};
