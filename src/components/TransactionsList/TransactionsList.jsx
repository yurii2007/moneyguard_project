import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { StyledTransactionsList } from './TransactionsList.styled';
import { TransactionsItem } from 'components/TransactionsList/TransactionsItem/TransactionsItem';
import { fetchAllTransactionsThunk } from 'redux/finance/financeThunks';

 const TransactionsList = ({ transactions }) => {
  const dispatch = useDispatch()

  useEffect(()=>{
  dispatch(fetchAllTransactionsThunk());
  },[dispatch])

  return (
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
          {transactions.map(
            ({ id, transactionDate, type, categoryId, comment, amount }) => (
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
          )}
        </tbody>
      </table>
    </StyledTransactionsList>
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