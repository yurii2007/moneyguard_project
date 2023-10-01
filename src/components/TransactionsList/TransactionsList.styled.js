import styled from 'styled-components';

export const Wraper = styled.div`
  div > div {
    position: relative;
  }
  div + button {
    color: white;
    fill: white;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    border: none;
    background: var(
      --button-gradient,
      linear-gradient(97deg, #ffc727 -16.42%, #9e40ba 97.04%, #7000ff 150.71%)
    );
    position: absolute;
    right: 0;
    bottom: 0px;
  }
  @media only screen and (min-width: 767px) {
    div + button {
      bottom: -20px;
    }
  }

  @media only screen and (min-width: 1280px) {
    div + button {
      bottom: -50px;
    }
  }
`;

export const StyledTransactionsList = styled.div`
  margin: 0 auto;
  position: relative;
  overflow-y: overlay;

  &.expense::before {
    content: '';
    position: absolute;
    left: 0;
    height: 300px;
    width: 5px;
    background-color: var(--dashboard-text);
  }

  &.income::before {
    content: '';
    position: absolute;
    left: 0;
    height: 300px;
    width: 5px;
    background-color: var(--yellow);
  }

  li {
    height: 48px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
  }

  li:nth-child(4) p {
    text-align: right;
  }

  li:not(:last-child)::after {
    content: '';
    position: absolute;
    left: -20px;
    right: -20px;
    bottom: -1px;
    height: 1px;
    border-bottom: 1px solid white;
    opacity: 0.2;
  }

  li:last-child {
    height: 53px;
  }

  &.expense li:nth-child(5) p {
    font-weight: 600;
    color: var(--dashboard-text);
    text-align: right;
  }

  &.income li:nth-child(5) p {
    font-weight: 600;
    color: var(--yellow);
    text-align: right;
  }

  b {
    font-weight: 600;
    margin-right: 27px;
  }

  button.edit {
    width: 48px;
    height: 24px;
    background-color: transparent;
    color: var(--white-60);
    box-shadow: none;
  }

  button.edit:hover {
    color: var(--white);
  }

  button.delete {
    color: var(--white);
    background: var(--gradient-button);
    width: 69px;
    height: 29px;
    border-radius: 20px;
    font-size: 14px;
    box-shadow: var(--button-shadow);
  }

  @media only screen and (max-width: 767px) {
    padding: 0 20px;
    height: 293px;
    margin-bottom: 8px;
    border-radius: 10px;
    height: 293px;
    background: rgba(255, 255, 255, 0.1);

    table {
      display: flex;
    }

    // thead tr {
    //   height: 100%;
    //   display: flex;
    //   flex-direction: column;
    //   justify-content: space-between
    // }

    tr {
      display: flex;
      flex-direction: column;
      // outline: solid green;
      position: relative;
      padding: 12px 0;
    }

    tbody tr:nth-child(7) {
      padding-bottom: 53px;
    }
    tbody tr::after {
      content: '';
      display: block;
      height: 1px;
      width: 150%;
      background-color: rgba(255, 255, 255, 0.41);
      position: absolute;
      left: -50%;
      bottom: 0;
    }

    span + div {
      position: absolute;
      left: -60%;
      bottom: 12px;
    }

    button.edit {
      display: flex;
      justify-content: space-between;
    }
  }

  @media only screen and (min-width: 768px) {
    display: block;
    max-height: 318px;
    overflow: auto;
    width: 704px;
    &::-webkit-scrollbar {
      width: 8px;
      border-radius: 4px;
      background-color: #734aef;
    }

    &::-webkit-scrollbar-thumb {
      background-color: var(--balance-background-color);
      border-radius: 4px;
    }

    .income {
      font-weight: 600;
      color: var(--yellow);
      text-align: right;
    }
    .expense {
      font-weight: 600;
      color: var(--dashboard-text);
      text-align: right;
    }

    table {
      width: 100%;
      border-spacing: 0px;
      border-collapse: collapse;
      max-height: 308px;
    }

    thead {
      height: 56px;
      border-radius: 8px;
      background: rgba(82, 59, 126, 0.6);
      box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);
      backdrop-filter: blur(50px);
      position: sticky;
      top: 0;
      z-index: 2;
    }

    tbody {
      max-height: 265px;
      overflow: hidden;
    }

    span {
      padding: 0;
      font-weight: 600;
      text-align: left;
    }
    span:first-child {
      border-top-left-radius: 8px;
      border-bottom-left-radius: 8px;
      text-align: left;
      padding-left: 20px;
      width: 91px;
    }

    span:nth-child(2) {
      text-align: center;
    }

    span:nth-child(3) {
      width: 146px;
    }

    span:nth-child(4) {
      width: 135px;
    }

    span:nth-child(5) {
      text-align: right;
    }

    span:last-child {
      border-top-right-radius: 8px;
      border-bottom-right-radius: 8px;
      width: 141px;
    }

    tbody {
      font-size: 14px;
    }
    thead tr {
      color: var(--white, #fbfbfb);
      font-family: Poppins;
      font-size: 16px;
      font-weight: 600;
    }
    tbody div {
      color: var(--white, #fbfbfb);
      font-family: Poppins;
      font-size: 14px;
      font-weight: 400;
    }

    tr {
      position: relative;
      height: 53px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    tr:not(:last-child)::after {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      bottom: -1px;
      height: 1px;
      border-bottom: 1px solid white;
      opacity: 0.2;
    }

    td {
      text-align: left;
      padding: 0;
    }

    td:first-child {
      padding-left: 20px;
    }

    td:nth-child(2) {
      width: 123px;
      text-align: center;
    }

    /* td:nth-child(4) {
            text-transform: capitalize;
        } */

    td:last-child {
      text-align: right;
      padding-right: 6px;
    }

    span > button {
      background-color: transparent;
      border: none;
      fill: white;
    }

    button + button {
      margin-left: 8px;
      border: none;
      border-radius: 20px;
      background: var(
        --button-gradient,
        linear-gradient(97deg, #ffc727 -16.42%, #9e40ba 97.04%, #7000ff 150.71%)
      );
      box-shadow: 1px 9px 15px 0px rgba(0, 0, 0, 0.2);
    }

    button.edit {
      width: 14px;
      height: 14px;
      margin-right: 8px;
    }
  }
`;
