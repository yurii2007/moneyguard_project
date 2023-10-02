import { useDispatch, useSelector } from 'react-redux';
import { UpdateWrapper } from '../UpdateModal/UpdateModal.styled';
import { createTransactionThunk } from 'redux/finance/financeThunks';
import { Formik } from 'formik';
import DatePickerForm from '../DatePicker/DatePicker';
import { parseDate } from 'utils/helpers';
import { selectCategories } from 'redux/selectors';
import { Checkbox } from './Checkbox/Checkbox';
import { HeaderText } from './AddModal.syled';

export const AddModal = ({ closeModal }) => {
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
    dispatch(createTransactionThunk(formattingData));
  };

  const unmountModal = e => {
    if (e.target === e.currentTarget) closeModal();
  };

  return (
    <UpdateWrapper onClick={unmountModal}>
      <Formik
        initialValues={{
          type: true,
          amount: 0.0,
          transactionDate: new Date(Date.now()),
          comment: '',
          category: 'c9d9e447-1b83-4238-8712-edc77b18b739',
        }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          submitForm(values);
          resetForm();
          setSubmitting(false);
          closeModal();
        }}
      >
        {({ handleSubmit, values, setFieldValue, handleBlur }) => (
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
              <div>
                <select
                  name="category"
                  onChange={evt => setFieldValue('category', evt.target.value)}
                >
                  {categories?.map(category => (
                    <option
                      key={category.id}
                      value={category.id}
                      defaultValue={'c9d9e447-1b83-4238-8712-edc77b18b739'}
                    >
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
            )}
            <div>
              <input
                placeholder="0.00"
                title="Please put the transaction value"
                name="value"
                type="number"
                autoComplete="off"
                value={values.amount}
                onChange={evt => setFieldValue('amount', evt.target.value)}
                onBlur={handleBlur}
                onKeyUp={handleBlur}
                required
              />
            </div>
            <div>
              <DatePickerForm
                dateFormat="dd.mm.yyyy"
                name="transactionDate"
                type="date"
                timeFormat={false}
              />
            </div>
            <div>
              <input
                placeholder="Comment"
                title="Leave the description here"
                name="comment"
                type="textarea"
                autoComplete="off"
                value={values.comment}
                onChange={evt => setFieldValue('comment', evt.target.value)}
                onBlur={handleBlur}
                onKeyUp={handleBlur}
                required
              />
            </div>
            <button type="submit">Add transaction</button>
          </form>
        )}
      </Formik>
    </UpdateWrapper>
  );
};
