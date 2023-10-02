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
    text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.25);
  }
  .active-text-dashboard {
    color: var(--dashboard-text);
    text-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
  }
  .active-text-yellow {
    color: var(--yellow);
    text-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
  }
  label {
    position: relative;
    width: 80px;
    height: 40px;
    border-radius: 30px;
    background: var(--white-color);
    svg {
      position: absolute;
      background: var(--dashboard-text);
      border-radius: 50%;
      top: -2px;
      left: 40px;
      transition: left 500ms cubic-bezier(0.4, 0, 0.2, 1);
    }
    input:not(:checked) + .minus,
    input:not(:checked) + .minus ~ svg {
      left: 0;
      background: var(--yellow);
    }
    .minus {
      opacity: ${props => (props.active === 'true' ? '1' : '0')};
    }
    .plus {
      opacity: ${props => (props.active === 'true' ? '0' : '1')};
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
