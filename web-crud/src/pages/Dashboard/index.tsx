import React from 'react';

import { Container, Content, Background } from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Content>
        <h1>Meal Plus</h1>
        <h2>Welcome to our establishment</h2>
      </Content>
      <Background />
    </Container>
  );
};

export default Dashboard;
