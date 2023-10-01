export const TransactionListTable = ({ transactions, defineCategory, handleDelete }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Type</th>
          <th>Category</th>
          <th>Comment</th>
          <th>Sum</th>
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
                  <button onClick={()=>handleDelete(id)}>Delete</button>
                  <button>Edit</button>
                </div>
              </td>
            </tr>
          )
        )}
      </tbody>
    </table>
  );
};
