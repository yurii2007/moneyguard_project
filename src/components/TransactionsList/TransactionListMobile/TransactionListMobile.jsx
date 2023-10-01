export const TransactionListMobile = ({ transactions, defineCategory }) => {
  return (
    <ul style={{display: 'flex', flexDirection: 'column'}}>
      {transactions?.map(
        ({ id, transactionDate, type, categoryId, comment, amount }) => (
          <li key={id} style={{ display: 'flex', flexDirection: 'column' }}>
            <div>
              <p>Date</p>
              <p>{transactionDate}</p>
            </div>
            <div>
              <p>Type</p>
              <p>{type === 'EXPENSE' ? '-' : '+'}</p>
            </div>
            <div>
              <p>Category</p>
              <p>{defineCategory(categoryId)}</p>
            </div>
            <div>
              <p>Comment</p>
              <p>{comment}</p>
            </div>
            <div>
              <p>Sum</p>
              <p>{amount}</p>
            </div>
            <div>
              <button>Delete</button>
              <button>Edit</button>
            </div>
          </li>
        )
      )}
    </ul>
  );
};
