import { Formik } from 'formik';
import { object, string, date, bool, number } from 'yup';
import { useDispatch } from 'react-redux';
import { IoIosClose } from 'react-icons/io';
import {
  CancelButton,
  ChangesActiveTypeExpense,
  ChangesActiveTypeIncome,
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
import { useEffect } from 'react';
import { BtnClose } from '../AddModal/AddModal.syled';

export const UpdateModal = ({ selfDestruction, updatingTransaction }) => {
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        selfDestruction();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selfDestruction]);

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
      <BtnClose type="button" onClick={() => selfDestruction()}>
        <IoIosClose />
      </BtnClose>
      <Formik
        initialValues={{
          type: updatingTransaction.type === 'EXPENSE' ? true : false,
          amount: Math.abs(updatingTransaction.amount),
          date: updatingTransaction.transactionDate,
          comment: updatingTransaction.comment,
        }}
        validationSchema={object({
          type: bool(),
          amount: number().typeError('Transaction value must be a number'),
          date: date(),
          comment: string(),
        })}
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
              <ChangesActiveTypeIncome activetype={updatingTransaction.type}>
                Income
              </ChangesActiveTypeIncome>
              /
              <ChangesActiveTypeExpense activetype={updatingTransaction.type}>
                Expense
              </ChangesActiveTypeExpense>
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
