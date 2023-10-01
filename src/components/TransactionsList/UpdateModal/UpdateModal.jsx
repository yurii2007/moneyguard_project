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
        amount: updatingTransaction.type === "INCOME" ? +values.amount : -values.amount,
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
              <span active={(updatingTransaction.type === 'INCOME').toString()}>
                Income
              </span>
              /
              <span
                active={(updatingTransaction.type === 'EXPENSE').toString()}
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
                  onChange={value =>
                    setFieldValue('amount', value.target.value)
                  }
                  onBlur={handleBlur}
                  onKeyUp={handleBlur}
                />
              </div>
              <div>
                <DatePickerForm
                  dateFormat="dd.mm.yyyy"
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
                onChange={value => setFieldValue('comment', value.target.value)}
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
