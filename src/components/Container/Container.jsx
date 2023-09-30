import { ContainerStyle } from './Container.styled';

export const Container = ({ children, size }) => {
  return <ContainerStyle size={size}>{children}</ContainerStyle>;
};
