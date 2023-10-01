import { useEffect } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import {
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
import { AddModal } from './AddModal/AddModal';

const TransactionsList = () => {
  const [isUpdating, setIsUpdating] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [modalUpdObject, setUpdObject] = useState(null);
  const isMobile = useMediaQuery({ query: '(max-width: 767.9px)' });
  const dispatch = useDispatch();
  const transactions = useSelector(selectAllTransactions);
  const categories = useSelector(selectCategories);

  useEffect(() => {
    document.body.style.overflow = isUpdating || isAdding ? 'hidden' : 'auto';
    dispatch(fetchAllTransactionsThunk());
    dispatch(getTransactionCategoriesThunk());
  }, [dispatch, isUpdating, isAdding]);

  const openAddModal = () => setIsAdding(true);
  const closeAddModal = () => setIsAdding(false);

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

  if (transactions?.length === 0) {
    return (
      <TransactionWrapper>
        <p>No transactions</p>
        <button className="transaction-add-button" onClick={openAddModal}>
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
      {isAdding && (
        <AddModal
        closeModal={closeAddModal}
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
        <button className="transaction-add-button" onClick={openAddModal}>
          <AiOutlinePlus />
        </button>
      </TransactionWrapper>
    </>
  );
};

export default TransactionsList;
