import { ReactComponent as SvgAdd } from '../../images/svg/plus.svg';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyledTransactionsList, Wraper } from './TransactionsList.styled';
import { TransactionsItem } from 'components/TransactionsList/TransactionsItem/TransactionsItem';
import {
  createTransactionThunk,
  fetchAllTransactionsThunk,
  getTransactionCategoriesThunk,
} from 'redux/finance/financeThunks';

const TransactionsList = () => {
  const dispatch = useDispatch();
  const transactions = useSelector(state => state.transactions.data);

  useEffect(() => {
    dispatch(fetchAllTransactionsThunk());
    dispatch(getTransactionCategoriesThunk());
  }, [dispatch]);

  const onAddTransaction = () => {
    dispatch(
      createTransactionThunk({
        transactionDate: '2023-09-28',
        type: 'EXPENSE',
        categoryId: '3caa7ba0-79c0-40b9-ae1f-de1af1f6e386',
        comment: 'Car',
        amount: -150,
      })
    );
  };

  return (
    <Wraper>
      <StyledTransactionsList>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Type</th>
              <th>Category</th>
              <th>Comment</th>
              <th>Sum</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(transactions) && transactions.length > 0 ? (
              transactions.map(
                ({
                  id,
                  transactionDate,
                  type,
                  categoryId,
                  comment,
                  amount,
                }) => (
                  <TransactionsItem
                    key={id}
                    id={id}
                    transactionDate={transactionDate}
                    type={type}
                    categoryId={categoryId}
                    comment={comment}
                    amount={amount}
                  />
                )
              )
            ) : (
              <p>There are no transactions added!</p>
            )}
          </tbody>
        </table>
      </StyledTransactionsList>

      <button onClick={onAddTransaction}>
        <span><SvgAdd width='10px'height='10px'/></span>
        {/* <svg>
          <use href='../../images/svg/plus.svg'></use>
        </svg> */}
        {/* <img src="../../images/svg/plus.svg" alt="" /> */}
      </button>
    </Wraper>
  );
};

TransactionsList.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      transactionDate: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      categoryId: PropTypes.string.isRequired,
      comment: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
    })
  ),
};

export default TransactionsList;
