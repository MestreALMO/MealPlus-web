import styled from 'styled-components';
import { shade } from 'polished';
import signInBackgroundImg from '../../assets/dashboard.jpg';

export const Container = styled.div`
  height: 100vh; /**exibir 100% do view por height(vh), forçar tudo a ser exibido na tela */

  display: flex; /**Faz os itens serem exibidos lado a lado */
  align-items: stretch; /**faz os itens incluídos aqui, Content e o Background, ocuparem o tamanho total da página */
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column; /**pra o flex ficar organizado por coluna */
  align-items: center;

  place-content: center;
  /*
  //"place-content: center;" equivale os códigos abaixo:
  justify-content: center;
  align-items: center;
  */
  width: 100%; /**conteúdo vai ser apresentada ao todo dela */
  max-width: 700px; /**tamanho da conteúdo está limitado a 700px */

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    a {
      color: #d4ede8;
      display: block;
      margin-top: 24px;
      text-decoration: none; /**tirar sublinhado */
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }

  > a {
    /**Vai estilizar o "a" apenas dentro do "Content", deixando os "a" dentro dos outro níveis de estilização sem modificar */
    color: #ff9000;
    display: block;
    margin-top: 24px;
    text-decoration: none; /**tirar sublinhado */
    transition: color 0.2s;

    display: flex;
    align-items: center;

    svg {
      margin-right: 16px;
    }

    &:hover {
      color: ${shade(0.2, '#ff9000')};
    }
  }
`;

export const Background = styled.div`
  flex: 1; /**ocupa todo o espaço, menos os 700px que definimos pro "Content" */
  background: url(${signInBackgroundImg}) no-repeat center;
  background-size: cover; /**Forçar a ocupar 100% do bg */
`;
