import React from 'react';
import { IconBaseProps } from 'react-icons';

import { Container } from './styles';

interface InputProps {
  placeholder: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({ placeholder, icon: Icon }) => {
  return (
    <Container>
      {Icon && <Icon size={20} />}
      <input placeholder={placeholder} />
    </Container>
  );
};

export default Input;
