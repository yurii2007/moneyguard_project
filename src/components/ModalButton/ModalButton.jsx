import { ButtonStyled } from './ModalButton.styled';

export const Button = ({ type = 'button', text }) => {
  return (
    <ButtonStyled variant={'gradient'} type={type}>
      {text}
    </ButtonStyled>
  );
};
