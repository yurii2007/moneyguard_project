import styled from 'styled-components';

export const TogglerStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  .secondary-text {
    color: var(--white-color);
  }
  .active-type-text {
    color: var(--yellow);
  }
  label {
    position: relative;
    width: 80px;
    height: 40px;
    border-radius: 30px;
    background: var(--white-color);
    svg {
      position: absolute;
      background: var(--yellow);
      border-radius: 50%;
      top: -2px;
    }
    .minus {
      display: ${props => (props.active === 'true' ? '' : 'none')};
    }
    .plus {
      display: ${props => (props.active === 'true' ? 'none' : '')};
    }
  }

  input {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
    white-space: nowrap;
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden;
  }
`;
