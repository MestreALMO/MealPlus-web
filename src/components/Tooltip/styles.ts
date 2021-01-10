import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  /**Assim todo position absolute que estiver dentro do container será relativo ao container e não ao restante da tela */

  span {
    width: 160px;
    background: #ff9000;
    padding: 8px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 500;
    opacity: 0;
    transition: opacity 0.4s;
    /**Ou seja quando o user passar o mouse em cima do Tooltip o erro vai aparescer em 0.4s */
    visibility: hidden;

    position: absolute;
    bottom: calc(100% + 12px);
    /**100% é logo acima do icon, + 12px pra ficar um pouco acima */
    left: 50%;
    transform: translateX(-50%);
    /** Truque para centralizar objeto
      * "left: 50%;" joga o elemento na metade.
      * "transform: translateX(-50%);" joga na outra metade deixando tudo centralizado */

    color: #312e38;

    &::before {
      content: '';
      border-style: solid;
      border-color: #ff9000 transparent;
      border-width: 6px 6px 0 6px;
      top: 100%;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
    /**Código pra colocar triangulo em baixo da informação, deixandoa aparência similar a de um balão de HQ */
  }

  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`;
