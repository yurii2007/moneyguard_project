import { ContainerStyle } from './Container.styled';

export const Container = ({ children, Size }) => {
  return <ContainerStyle Size={Size}>{children}</ContainerStyle>;
};
