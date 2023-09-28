
export const TransactionsItem = ({
  id,
  transactionDate,
  type,
  categoryId,
  comment,
  amount,
}) => {
  return (
    <tr key={id}>
      <td>{transactionDate}</td>
      <td>{type}</td>
      <td>{categoryId}</td>
      <td>{comment}</td>
      <td>{amount}</td>
    </tr>
  );
};


