import { useModal } from 'components/ModalContext/ModalContext';
import { ReactComponent as EditButton } from '../../../images/svg/edit-button.svg';
import { TableStyle } from './TransactionListTable.styled';

export const TransactionListTable = ({
  transactions,
  defineCategory,
  handleDelete,
}) => {
  const { modalOpen } = useModal();
  return (
    <TableStyle>
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
        {transactions?.map(transaction => (
          <tr key={transaction.id}>
            <td>{transaction.transactionDate}</td>
            <td>{transaction.type === 'EXPENSE' ? '-' : '+'}</td>
            <td>{defineCategory(transaction.categoryId)}</td>
            <td>{transaction.comment}</td>
            <td>{transaction.amount}</td>
            <td>
              <div>
                <button
                  className="edit-button"
                  onClick={() => modalOpen('edit', transaction)}
                >
                  <EditButton width={14} height={14} />
                </button>
                <button
                  className="delete-button"
                  onClick={() => handleDelete(transaction.id)}
                >
                  Delete
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </TableStyle>
  );
};
