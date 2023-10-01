import { useSelector } from 'react-redux';
import { selectCategories } from 'redux/selectors';

export const TransactionListMobile = ({ transactions }) => {
  const categories = useSelector(selectCategories);

  const defineCategory = id =>
    categories?.find(category => category.id === id).name;

  return (
    <ul>
      {transactions?.map(
        ({ id, transactionDate, type, categoryId, comment, amount }) => (
          <li key={id} style={{ display: 'flex' }}>
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
