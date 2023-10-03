import { useModal } from 'components/ModalContext/ModalContext';
import { ReactComponent as EditButton } from '../../../images/svg/edit-button.svg';
import { TableStyle } from './TransactionListTable.styled';
import { useTranslation } from 'react-i18next';

export const TransactionListTable = ({
  transactions,
  defineCategory,
  handleDelete,
}) => {
  const { t } = useTranslation();
  const { modalOpen } = useModal();

  return (
    <TableStyle>
      <thead>
        <tr>
          <th>{t('date')}</th>
          <th>{t('type')}</th>
          <th>{t('category')}</th>
          <th>{t('comment')}</th>
          <th>{t('sum')}</th>
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
                  {t('btnDel')}
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </TableStyle>
  );
};
