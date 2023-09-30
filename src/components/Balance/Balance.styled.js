import styled from "styled-components";

export const BalanceWrapper = styled.div`
    padding: 10px 32px;
    border-radius: 8px;
    background: var(--background-table);
    box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(50px);
  .balance-head {
    margin-bottom: 12px;
    color: var(--transparency-40);
    font-size: 12px;
    text-transform: uppercase;
  }
  .balance-body {
    color: var(--main-font-color);
    font-size: 30px;
    font-weight: 700;
  }
  @media screen and (min-width: 768px) {
    padding: 10px 120px 11px 40px;
  }
  `