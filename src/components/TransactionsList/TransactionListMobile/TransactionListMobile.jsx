import {ReactComponent as EditButton} from '../../../images/svg/edit-button.svg'
import { TransactionMobileList } from "./TransactionListMobile.styled";

export const TransactionListMobile = ({ transactions, defineCategory, handleDelete }) => {
  return (
    <TransactionMobileList>
      {transactions?.map(
        ({ id, transactionDate, type, categoryId, comment, amount }) => (
          <li key={id} style={{ display: 'flex', flexDirection: 'column' }}>
            <div>
              <p className="transaction-head">Date</p>
              <p className="transaction-desc">{transactionDate}</p>
            </div>
            <div>
              <p className="transaction-head">Type</p>
              <p className="transaction-desc">{type === 'EXPENSE' ? '-' : '+'}</p>
            </div>
            <div>
              <p className="transaction-head">Category</p>
              <p className="transaction-desc">{defineCategory(categoryId)}</p>
            </div>
            <div>
              <p className="transaction-head">Comment</p>
              <p className="transaction-desc">{comment}</p>
            </div>
            <div>
              <p className="transaction-head">Sum</p>
              <p className="transaction-desc">{amount}</p>
            </div>
            <div>
              <button className="delete-button" onClick={()=>handleDelete(id)}>Delete</button>
              <button className="edit-button">
                <EditButton width={14} height={14} />
                Edit</button>
            </div>
          </li>
        )
      )}
    </TransactionMobileList>
  );
};
