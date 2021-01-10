import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;
/** dando a ButtonProps as propriedades padrões do button do HTML */

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => (
  <Container type="button" {...rest}>
    {/* O type do button não pode ser vazio, logo precisamos passar ele além do "{...prop}" */}
    {children}
  </Container>
);
export default Button;
