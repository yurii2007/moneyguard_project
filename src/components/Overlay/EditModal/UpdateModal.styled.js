import styled from 'styled-components';

export const ChangesActiveTypeIncome = styled.span`
  color: ${({ $activetype }) => $activetype === 'INCOME' && '#FFB627'};
`;
export const ChangesActiveTypeExpense = styled.span`
  color: ${({ $activetype }) => $activetype === 'EXPENSE' && '#FF868D'};
`;
export const WrapperCategories = styled.div`
  color: var(--white, #fbfbfb);
  font-size: 18px;
  line-height: 1.5;
  border-bottom: 1px solid var(--transparency-60);
  margin-bottom: 40px;
  textarea {
    resize: none;
    overflow-y: hidden;
    transition: height 0.2s;
    background-color: transparent;
    border: none;
    color: var(--white);
    padding-left: 20px;
    height: 24px;
  }
  textarea:focus {
    outline: none;
  }
`;

export const WrapperInputEditor = styled.div`
  margin-bottom: 40px;
  border-bottom: 1px solid var(--transparency-60);
`;

export const WrapperComment = styled.div`
  color: var(--white, #fbfbfb);
  font-size: 18px;
  line-height: 1.5;

  border-bottom: 1px solid var(--transparency-60);
  margin-bottom: 40px;

  textarea {
    font-size: 18px;
    line-height: 1.5;
    resize: none;
    transition: height 0.2s;
    background-color: transparent;
    border: none;
    color: var(--white);
    padding-left: 20px;
    height: auto;
    &::placeholder {
      color: var(--white, #fbfbfb);
    }
  }

  textarea:focus {
    outline: none;
  }
`;
