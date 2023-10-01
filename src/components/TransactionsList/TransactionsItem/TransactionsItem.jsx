import { useDispatch } from 'react-redux';
import {
  delTransactionThunk,
  updTransactionThunk,
} from 'redux/finance/financeThunks';

import { useState } from 'react';
import { ReactComponent as SvgUpdate } from '../../../images/svg/edit-button.svg';

export const TransactionsItem = ({
  id,
  transactionDate,
  type,
  categoryId,
  comment,
  amount,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();

  const onDelete = transactionId => {
    dispatch(delTransactionThunk(transactionId));
  };

  const handleUpdateTransaction = event => {
    event.preventDefault();

    const newTransactionDate =
      event.currentTarget.elements.transactionDate.value;
    const newType = event.currentTarget.elements.type.value;
    const newComment = event.currentTarget.elements.comment.value;
    const newAmount = event.currentTarget.elements.amount.value;

    const updatedTransaction = {
      transactionId: id,
      transactionDate: newTransactionDate,
      type: newType,
      categoryId: categoryId,
      comment: newComment,
      amount: Number(newAmount),
    };
    dispatch(updTransactionThunk(updatedTransaction));
  };

  return (
    <div>
      <span>{transactionDate}</span> |<span>{type}</span> |
      <span>{categoryId}</span> | <span>{comment}</span> | <span>{amount}</span>
      |
      <span>
        <button onClick={() => setIsEditing(true)}>
          <SvgUpdate width='10px' height='10px'/>
        </button>
        <button onClick={() => onDelete(id)}>Delete</button>
      </span>
      {isEditing && (
        <form onSubmit={handleUpdateTransaction}>
          <button onClick={() => setIsEditing(false)}>&times;</button>
          <label>
            <span>Date:</span>
            <input
              defaultValue={transactionDate}
              type="text"
              name="transactionDate"
            />
          </label>
          <label>
            <span>Type:</span>
            <input defaultValue={type} type="text" name="type" />
          </label>
          <label>
            <span>Comment:</span>
            <input defaultValue={comment} type="text" name="comment" />
          </label>
          <label>
            <span>Amount:</span>
            <input defaultValue={amount} type="text" name="amount" />
          </label>
          <button type="submit">Update transaction</button>
        </form>
      )}
    </div>
  );
};
