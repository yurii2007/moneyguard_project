import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import {
  CancelButton,
  HeaderText,
  InputEditor,
  SaveButton,
  UpdateWrapper,
  WrapperButton,
  WrapperCategories,
  WrapperChanges,
  WrapperComment,
  WrapperInputEditor,
} from './UpdateModal.styled';
import DatePickerForm from '../DatePicker/DatePicker';
import getCategoryName from '../categories';
import { updTransactionThunk } from 'redux/finance/financeThunks';
import { parseDate } from 'utils/helpers';
import { refreshUserBalance } from 'redux/auth/AuthThunk';

import { refreshUserBalance } from 'redux/auth/AuthThunk';

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
    dispatch(updTransactionThunk(data))
      .unwrap()
      .then(() => dispatch(refreshUserBalance()));
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
            <HeaderText>Edit transaction</HeaderText>
            <WrapperChanges>
              <span
                className={
                  updatingTransaction.type === 'INCOME' ? 'active' : ''
                }
              >
                Income
              </span>
              /
              <span
                className={
                  updatingTransaction.type === 'EXPENSE' ? 'active' : ''
                }
              >
                Expense
              </span>
            </WrapperChanges>

            <WrapperCategories>
              <textarea
                name="category"
                autoComplete="off"
                value={getCategoryName(updatingTransaction.categoryId)}
                readOnly
              />
            </WrapperCategories>

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
            </WrapperInputEditor>
            <div>
              <DatePickerForm
                dateFormat="dd-MM-yyyy"
                name="date"
                type="date"
                timeFormat={false}
              />
            </div>

            <WrapperComment>
              <textarea
                placeholder="Comment"
                title="Please describe your transaction."
                name="comment"
                type="text"
                autoComplete="off"
                value={values.comment}
                onChange={evt => setFieldValue('comment', evt.target.value)}
              />
            </WrapperComment>
            <WrapperButton>
              <SaveButton type="submit">Save</SaveButton>
              <CancelButton type="button" onClick={selfDestruction}>
                Cancel
              </CancelButton>
            </WrapperButton>
          </form>
        )}
      </Formik>
    </UpdateWrapper>
  );
};
