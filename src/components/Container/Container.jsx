import { ContainerStyle } from './Container.styles';

export const Container = ({ children, ...props }) => {
  return <ContainerStyle>{children}</ContainerStyle>;
};
