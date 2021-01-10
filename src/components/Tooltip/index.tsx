import React from 'react';

import { Container } from './styles';

interface TooltipProps {
  title: string;
  /** "title" é o texto do erro */
  className?: string;
  /** "className" é para receber a estilização de um arquivo superior */
}

const Tooltip: React.FC<TooltipProps> = ({
  title,
  className = '',
  children,
}) => {
  return (
    <Container className={className}>
      {children}
      {/** "{children}" só precisa ficar dentro do "Container", o "span" tem position absolute, por tanto ficará por cima de tudo */}
      <span>{title}</span>
    </Container>
  );
};

export default Tooltip;
