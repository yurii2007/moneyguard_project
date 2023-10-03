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
  WrapperButton,
  WrapperCategories,
  WrapperChanges,
  WrapperComment,
  WrapperInputEditor,
} from './UpdateModal.styled';
import DatePickerForm from '../DatePicker/DatePicker';
import getCategoryName from '../../TransactionsList/categories';
import { updTransactionThunk } from 'redux/finance/financeThunks';
import { parseDate } from 'utils/helpers';
import { refreshUserBalance } from 'redux/auth/AuthThunk';
import { BtnClose } from '../AddModal/AddModal.syled';
import { useModal } from 'components/ModalContext/ModalContext';

export const UpdateModal = () => {
  const { editTransaction, modalClose } = useModal();

  const dispatch = useDispatch();
  const submitForm = async values => {
    const data = {
      id: editTransaction.id,
      data: {
        transactionDate: parseDate(new Date(values.date)),
        type: editTransaction.type,
        categoryId: editTransaction.categoryId,
        comment: values.comment,
        amount:
          editTransaction.type === 'INCOME'
            ? Math.abs(values.amount)
            : -values.amount,
      },
    };
    dispatch(updTransactionThunk(data))
      .unwrap()
      .then(() => dispatch(refreshUserBalance()));
  };
  return (
    <>
      <BtnClose type="button" onClick={modalClose}>
        <IoIosClose />
      </BtnClose>
      <Formik
        initialValues={{
          type: editTransaction.type === 'EXPENSE' ? true : false,
          amount: Math.abs(editTransaction.amount),
          date: editTransaction.transactionDate,
          comment: editTransaction.comment,
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
          modalClose();
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
              <ChangesActiveTypeIncome activetype={editTransaction.type}>
                Income
              </ChangesActiveTypeIncome>
              /
              <ChangesActiveTypeExpense activetype={editTransaction.type}>
                Expense
              </ChangesActiveTypeExpense>
            </WrapperChanges>

            <WrapperCategories>
              <textarea
                name="category"
                autoComplete="off"
                value={getCategoryName(editTransaction.categoryId)}
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
              <CancelButton type="button" onClick={modalClose}>
                Cancel
              </CancelButton>
            </WrapperButton>
          </form>
        )}
      </Formik>
    </>
  );
};
