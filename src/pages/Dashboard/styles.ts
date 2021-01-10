import styled from 'styled-components';

import dashboardImg from '../../assets/dashboard.jpg';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  background-color: #220601;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  max-width: 640px;

  h1 {
    font-family: 'Dancing Script', cursive;
    font-weight: 700;
    font-size: 80px;
  }

  h2 {
    font-family: 'Dancing Script', cursive;
    font-weight: 400;
    font-size: 30px;
    margin-bottom: 30px;
  }
`;

export const FormContent = styled.div`
  Form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
  }

  button {
    height: 25px;
    width: 90px;
    font-weight: 700;
    margin: 6px 0 6px 0;
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${dashboardImg}) no-repeat center;
  background-size: cover;
`;
