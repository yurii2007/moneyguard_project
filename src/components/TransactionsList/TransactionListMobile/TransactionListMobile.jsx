import { useModal } from 'components/ModalContext/ModalContext';
import { ReactComponent as EditButton } from '../../../images/svg/edit-button.svg';
import { TransactionMobileList } from './TransactionListMobile.styled';

export const TransactionListMobile = ({
  transactions,
  defineCategory,
  handleDelete,
}) => {
  const { modalOpen } = useModal();
  return (
    <TransactionMobileList>
      {transactions?.map(transaction => (
        <li
          style={{
            borderLeft: `5px solid ${
              transaction.categoryId === '063f1132-ba5d-42b4-951d-44011ca46262'
                ? 'var(--yellow)'
                : 'var(--dashboard-text)'
            }`,
          }}
          key={transaction.id}
        >
          <div>
            <p className="transaction-head">Date</p>
            <p className="transaction-desc">{transaction.transactionDate}</p>
          </div>
          <div>
            <p className="transaction-head">Type</p>
            <p className="transaction-desc">
              {transaction.type === 'EXPENSE' ? '-' : '+'}
            </p>
          </div>
          <div>
            <p className="transaction-head">Category</p>
            <p className="transaction-desc">
              {defineCategory(transaction.categoryId)}
            </p>
          </div>
          <div>
            <p className="transaction-head">Comment</p>
            <p className="transaction-desc">{transaction.comment}</p>
          </div>
          <div>
            <p className="transaction-head">Sum</p>
            <p className="transaction-desc">{transaction.amount}</p>
          </div>
          <div>
            <button
              className="delete-button"
              onClick={() => handleDelete(transaction.id)}
            >
              Delete
            </button>
            <button
              className="edit-button"
              onClick={() => modalOpen('edit', transaction)}
            >
              <EditButton width={14} height={14} />
              Edit
            </button>
          </div>
        </li>
      ))}
    </TransactionMobileList>
  );
};
