import styled from 'styled-components';

export const TogglerStyles = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;

  color: var(--white-60, rgba(255, 255, 255, 0.6));
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;

  margin-bottom: 42px;

  &:focus {
    color: var(--dashboard-text, #ff868d);
  }
`;
