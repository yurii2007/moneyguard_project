import { ButtonStyled } from './ModalButton.styled';

export const Button = ({ type = 'button', text, isGradient }) => {
  const styles = isGradient
    ? {
        background: 'var(--btn-gradient-color)',
        color: 'var(--white-color)',
      }
    : {
        background: 'var(--main-font-color)',
        color: '#623F8B',
      };
  return (
    <ButtonStyled variant={'gradient'} type={type}>
      {text}
    </ButtonStyled>
  );
};
