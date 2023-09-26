import { ButtonStyled } from './ModalButton.styled';

export const Button = ({ text, isGradient }) => {
    const styles = isGradient ? {
        background: "var(--btn-gradient-color)",
        color: 'var(--white-color)'
  } : {
    background: "var(--main-font-color)",
    color: '#623F8B'
}
  return <ButtonStyled style={styles}>{text}</ButtonStyled>;
};
