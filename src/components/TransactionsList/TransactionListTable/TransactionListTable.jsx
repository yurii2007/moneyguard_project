import { ReactComponent as EditButton } from '../../../images/svg/edit-button.svg';
import { TableStyle } from './TransactionListTable.styled';

export const TransactionListTable = ({
  transactions,
  defineCategory,
  handleDelete,
}) => {
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
        {transactions?.map(
          ({ id, transactionDate, type, categoryId, comment, amount }) => (
            <tr key={id}>
              <td>{transactionDate}</td>
              <td>{type === 'EXPENSE' ? '-' : '+'}</td>
              <td>{defineCategory(categoryId)}</td>
              <td>{comment}</td>
              <td>{amount}</td>
              <td>
                <div>
                  <button className="edit-button">
                    <EditButton width={14} height={14} />
                  </button>
                  <button
                    className="delete-button"
                    onClick={() => handleDelete(id)}
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          )
        )}
      </tbody>
    </TableStyle>
  );
};
