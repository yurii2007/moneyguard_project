import styled from 'styled-components';

export const StyledDateWrapper = styled.div`
  position: relative;
  border-bottom: 1px solid var(--transparency-60);
  && {
    input {
      position: relative;
      border: none;
      font-size: 18px;
      color: var(--white);
      background-color: transparent;
      padding-left: 20px;
      padding-bottom: 4.5px;
      cursor: pointer;
      &:focus-visible {
        outline: 0;
      }
    }

    &.rdt {
      position: relative;
    }

    &.rdtPicker {
      position: absolute;
      min-width: 250px;
      padding: 4px;
    }

    .rdtPicker td.rdtToday:before {
      border-bottom: 7px solid var(--picker);
    }

    @media (max-width: 767.9px) {
      input {
        width: 280px;
      }
    }
    @media screen and (min-width: 768px) {
      height: 29px;
    }
  }
`;

export const IconWrapper = styled.div`
  position: absolute;
  width: 22px;
  top: 0;
  right: 0;
  margin-right: 10px;

  fill: var(--icon-violet);
`;
