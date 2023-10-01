import { ReactComponent as SvgAdd } from '../../images/svg/plus.svg';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  createTransactionThunk,
  fetchAllTransactionsThunk,
  getTransactionCategoriesThunk,
} from 'redux/finance/financeThunks';
import { useMediaQuery } from 'react-responsive';
import { TransactionListMobile } from './TransactionListMobile/TransactionListMobile';

const TransactionsList = () => {
  const dispatch = useDispatch();
  const transactions = useSelector(state => state.transactions.data);
  const isMobile = useMediaQuery({ query: '(max-width: 767.9px)' });

  useEffect(() => {
    dispatch(fetchAllTransactionsThunk());
    dispatch(getTransactionCategoriesThunk());
  }, [dispatch]);

  const onAddTransaction = () => {
    dispatch(
      createTransactionThunk({
        transactionDate: '2023-09-28',
        type: 'EXPENSE',
        categoryId: '3caa7ba0-79c0-40b9-ae1f-de1af1f6e386',
        comment: 'Car',
        amount: -150,
      })
    );
  };

  return (
    <>
      {isMobile ? <TransactionListMobile transactions={transactions} /> : <></>}
    </>
    // <Wrapper>
    //   <StyledTransactionsList>
    //     {Array.isArray(transactions) && transactions.length > 0 ? (
    //       <table>
    //         <thead>
    //           <tr>
    //             <th>Date</th>
    //             <th>Type</th>
    //             <th>Category</th>
    //             <th>Comment</th>
    //             <th>Sum</th>
    //             <th></th>
    //           </tr>
    //         </thead>
    //         <tbody>
    //           {transactions.map(
    //             ({
    //
    //             }) => (
    //               <TransactionsItem
    //                 key={id}
    //                 id={id}
    //                 transactionDate={transactionDate}
    //                 type={type}
    //                 categoryId={categoryId}
    //                 comment={comment}
    //                 amount={amount}
    //               />
    //             )
    //           )}{' '}
    //         </tbody>
    //       </table>
    //     ) : (
    //       <p>There are no transactions added!</p>
    //     )}
    //   </StyledTransactionsList>

    //   <button onClick={onAddTransaction}>
    //     <SvgAdd width="10px" height="10px" />
    //   </button>
    // </Wrapper>
  );
};

export default TransactionsList;

/*
   <>
     {isMobile &&
         sortedTransactions.map(
             ({
                 id,
                 transactionDate,
                 type,
                 categoryId,
                 comment,
                 amount,
             }) => (
                 <StyledTransactionsList
                     key={id}
                     className={type.toLowerCase()}
                 >
                     <ul>
                         <li>
                             <b>Date</b>
                             <p>{formatDate(transactionDate)}</p>
                         </li>
                         <li>
                             <b>Type</b>
                             <p>{type === 'EXPENSE' ? '-' : '+'}</p>
                         </li>
                         <li>
                             <b>Category</b>
                             <p>{findCategoryName(categoryId)}</p>
                         </li>
                         <li>
                             <b>Comment</b>
                             <p>{formatComment(comment)}</p>
                         </li>
                         <li>
                             <b>Sum</b>
                             <p>{Math.abs(amount)}</p>
                         </li>
                         <li>
                             <button
                                 className="delete"
                                 type="button"
                                 onClick={() => onDelete(id)}
                             >
                                 Delete
                             </button>
                             <button
                                 className="edit"
                                 type="button"
                                 onClick={() =>
                                     onEditTransaction({
                                         id,
                                         transactionDate,
                                         type,
                                         categoryId,
                                         comment,
                                         amount,
                                     })
                                 }
                             >
                                 <GoPencil />
                                 Edit
                             </button>
                         </li>
                     </ul>
                 </StyledTransactionsList>
             )
         )}
     {isDesktopOrTablet && (
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
                     {transactions &&
                         sortedTransactions.map(
                             ({
                                 id,
                                 transactionDate,
                                 type,
                                 categoryId,
                                 comment,
                                 amount,
                             }) => (
                                 <tr key={id}>
                                     <td>
                                         {formatDate(transactionDate)}
                                     </td>
                                     <td>
                                         {type === 'EXPENSE' ? '-' : '+'}
                                     </td>
                                     <td>
                                         {findCategoryName(categoryId)}
                                     </td>
                                     <td>{formatComment(comment)}</td>
                                     <td className={type.toLowerCase()}>
                                         {Math.abs(amount)}
                                     </td>
                                     <td>
                                         <button
                                             className="edit"
                                             type="button"
                                             onClick={() =>
                                                 onEditTransaction({
                                                     id,
                                                     transactionDate,
                                                     type,
                                                     categoryId,
                                                     comment,
                                                     amount,
                                                 })
                                             }
                                         >
                                             <GoPencil />
                                         </button>
                                         <button
                                             className="delete"
                                             type="button"
                                             onClick={() => onDelete(id)}
                                         >
                                             Delete
                                         </button>
                                     </td>
                                 </tr>
                             )
                         )}
                 </tbody>
             </table>
         </StyledTransactionsList>
     )}
 </> */
