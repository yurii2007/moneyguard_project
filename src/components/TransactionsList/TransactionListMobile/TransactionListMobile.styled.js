import styled from 'styled-components';

export const TransactionMobileList = styled.ul`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;

  li {
    position: relative;
    padding: 0 20px 0 15px;
    background-color: var(--btn-gradient-color);
    border-radius: 10px;
    // border-left: 5px solid var(--dashboard-text);
    color: var(--white);
  }
  li > div {
    display: flex;
    justify-content: space-between;
    padding-block: 12px;
  }
  li > div:not(:last-child) {
    border-bottom: 1px solid var(--transparency-20);
  }

  .transaction-head {
    font-size: 16px;
    font-weight: 600;
  }
  .transaction-desc {
    text-align: right;
    font-size: 16px;
  }
  .delete-button {
    padding: 4px 12px;
    border-radius: 18px;
    background: var(--btn-gradient-color);
    box-shadow: 1px 9px 15px 0px rgba(0, 0, 0, 0.2);
    border: none;
    color: var(--white-color);
    text-align: center;
    font-size: 14px;
    line-height: normal;
  }
  .edit-button {
    padding: 4px 12px;
    background: transparent;
    border: none;
    text-align: center;
    color: var(--transparency-60);
    font-size: 16px;
    line-height: normal;
    letter-spacing: 0.32px;
    svg {
      margin-right: 4px;
    }
  }
`;