import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { UpdateWrapper } from './UpdateModal.styled';
import DatePickerForm from '../DatePicker/DatePicker';
import getCategoryName from '../categories';
import { updTransactionThunk } from 'redux/finance/financeThunks';
import { parseDate } from 'utils/helpers';

export const UpdateModal = ({ selfDestruction, updatingTransaction }) => {
  const dispatch = useDispatch();
  const submitForm = async values => {
    const data = {
      id: updatingTransaction.id,
      data: {
        transactionDate: parseDate(new Date(values.date)),
        type: updatingTransaction.type,
        categoryId: updatingTransaction.categoryId,
        comment: values.comment,
        amount:
          updatingTransaction.type === 'INCOME'
            ? Math.abs(values.amount)
            : -values.amount,
      },
    };
    dispatch(updTransactionThunk(data));
  };

  const unmountModal = e => {
    if (e.target === e.currentTarget) selfDestruction();
  };
  return (
    <UpdateWrapper onClick={unmountModal}>
      <Formik
        initialValues={{
          type: updatingTransaction.type === 'EXPENSE' ? true : false,
          amount: Math.abs(updatingTransaction.amount),
          date: updatingTransaction.transactionDate,
          comment: updatingTransaction.comment,
        }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          submitForm(values);
          resetForm();
          setSubmitting(false);
          selfDestruction();
        }}
        enableReinitialize
      >
        {({ handleSubmit, values, setFieldValue, handleBlur }) => (
          <form
            onSubmit={e => {
              e.preventDefault();
              handleSubmit(e);
            }}
          >
            <h3>Edit transaction</h3>
            <div>
              <span
                className={
                  updatingTransaction.type === 'INCOME' ? 'active' : ''
                }
              >
                Income
              </span>
              /
              <span
                active={updatingTransaction.type === 'EXPENSE' ? 'active' : ''}
              >
                Expense
              </span>
            </div>

            <div>
              <textarea
                name="category"
                autoComplete="off"
                value={getCategoryName(updatingTransaction.categoryId)}
                readOnly
              />
            </div>
            <div>
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
                />
              </div>
              <div>
                <DatePickerForm
                  dateFormat="dd-MM-yyyy"
                  name="date"
                  type="date"
                  timeFormat={false}
                />
              </div>
            </div>
            <div>
              <textarea
                placeholder="Comment"
                title="Please describe your transaction."
                name="comment"
                type="text"
                autoComplete="off"
                value={values.comment}
                onChange={evt => setFieldValue('comment', evt.target.value)}
              />
            </div>
            <button type="submit">Save</button>
            <button type="button" onClick={selfDestruction}>
              Cancel
            </button>
          </form>
        )}
      </Formik>
    </UpdateWrapper>
  );
};
