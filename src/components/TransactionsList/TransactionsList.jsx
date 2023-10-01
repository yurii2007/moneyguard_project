import { useEffect } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import {
  createTransactionThunk,
  delTransactionThunk,
  fetchAllTransactionsThunk,
  getTransactionCategoriesThunk,
} from 'redux/finance/financeThunks';
import { useMediaQuery } from 'react-responsive';
import { TransactionListMobile } from './TransactionListMobile/TransactionListMobile';
import { TransactionListTable } from './TransactionListTable/TransactionListTable';
import { selectAllTransactions, selectCategories } from 'redux/selectors';
import { TransactionWrapper } from './TransactionsList.styled';
import { useState } from 'react';
import { UpdateModal } from './UpdateModal/UpdateModal';

const TransactionsList = () => {
  const [isUpdating, setIsUpdating] = useState(false);
  const [modalUpdObject, setUpdObject] = useState(null);
  const dispatch = useDispatch();
  const transactions = useSelector(selectAllTransactions);
  const isMobile = useMediaQuery({ query: '(max-width: 767.9px)' });
  const categories = useSelector(selectCategories);

  useEffect(() => {
    document.body.style.overflow = isUpdating ? 'hidden' : 'auto';
    dispatch(fetchAllTransactionsThunk());
    dispatch(getTransactionCategoriesThunk());
  }, [dispatch, isUpdating]);

  const openUpdModal = obj => {
    setUpdObject(obj);
    setIsUpdating(true);
  };
  const closeUpdModal = () => {
    setUpdObject(null);
    setIsUpdating(false);
  };

  const defineCategory = id => categories?.find(category => category.id === id).name;

  const onDelete = transactionId => {
    dispatch(delTransactionThunk(transactionId));
  };

  const onAddTransaction = () => {
    dispatch(
      createTransactionThunk({
        transactionDate: '2023-09-28',
        type: 'EXPENSE',
        categoryId: '3caa7ba0-79c0-40b9-ae1f-de1af1f6e386',
        comment: 'Test',
        amount: -50,
      })
    );
  };

  if (transactions?.length === 0) {
    return (
      <TransactionWrapper>
        <p>No transactions</p>
        <button className="transaction-add-button" onClick={onAddTransaction}>
          <AiOutlinePlus />
        </button>
      </TransactionWrapper>
    );
  }

  return (
    <>
      {isUpdating && (
        <UpdateModal
          updatingTransaction={modalUpdObject}
          selfDestruction={closeUpdModal}
        />
      )}
      <TransactionWrapper>
        {isMobile ? (
          <TransactionListMobile
            transactions={transactions}
            defineCategory={defineCategory}
            handleDelete={onDelete}
            openUpdating={openUpdModal}
          />
        ) : (
          <TransactionListTable
            transactions={transactions}
            defineCategory={defineCategory}
            handleDelete={onDelete}
            openUpdating={openUpdModal}
          ></TransactionListTable>
        )}
        <button className="transaction-add-button" onClick={onAddTransaction}>
          <AiOutlinePlus />
        </button>
      </TransactionWrapper>
    </>
  );
};

export default TransactionsList;
