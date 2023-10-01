import { ButtonStyled } from './ModalButton.styled';

export const Button = ({ type = 'button', text, isGradient }) => {
  return (
    <ButtonStyled variant={'gradient'} type={type}>
      {text}
    </ButtonStyled>
  );
};
