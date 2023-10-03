import { Formik } from 'formik';
import { object, string, date, bool, number } from 'yup';
import { useDispatch } from 'react-redux';
import { IoIosClose } from 'react-icons/io';
import {
  ChangesActiveTypeExpense,
  ChangesActiveTypeIncome,
  WrapperCategories,
  WrapperComment,
} from './UpdateModal.styled';
import {
  CancelButton,
  HeaderText,
  InputEditor,
  SaveButton,
  WrapperButton,
  WrapperChanges,
  WrapperInputEditor,
  WrapperTablet,
} from '../AddModal/AddModal.syled';
import DatePickerForm from '../DatePicker/DatePicker';
import getCategoryName from '../../TransactionsList/categories';
import { updTransactionThunk } from 'redux/finance/financeThunks';
import { parseDate } from 'utils/helpers';
import { refreshUserBalance } from 'redux/auth/AuthThunk';
import { BtnClose, FormStyles } from '../AddModal/AddModal.syled';
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
        comment: values.comment.trim(),
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
          <FormStyles
            onSubmit={e => {
              e.preventDefault();
              handleSubmit(e);
            }}
          >
            <BtnClose type="button" onClick={modalClose}>
              <IoIosClose size={44} />
            </BtnClose>
            <HeaderText>Edit transaction</HeaderText>
            <WrapperChanges>
              <ChangesActiveTypeIncome $activetype={editTransaction.type}>
                Income
              </ChangesActiveTypeIncome>
              &#x2F;
              <ChangesActiveTypeExpense $activetype={editTransaction.type}>
                Expense
              </ChangesActiveTypeExpense>
            </WrapperChanges>

            {editTransaction.type === 'INCOME' ? null : (
              <WrapperCategories>
                <textarea
                  name="category"
                  autoComplete="off"
                  value={getCategoryName(editTransaction.categoryId)}
                  readOnly
                />
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
              </WrapperInputEditor>
              <div>
                <DatePickerForm
                  dateFormat="dd-MM-yyyy"
                  name="date"
                  type="date"
                  timeFormat={false}
                />
              </div>
            </WrapperTablet>

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
          </FormStyles>
        )}
      </Formik>
    </>
  );
};
