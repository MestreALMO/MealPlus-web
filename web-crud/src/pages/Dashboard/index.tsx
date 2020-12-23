import React from 'react';
import { HiOutlineMail } from 'react-icons/hi';

import Input from '../../components/Input/Input';

import { Container, Content, Background, Form } from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Content>
        <h1>Meal Plus</h1>
        <h2>Welcome to our establishment</h2>
        <Form>
          <Input placeholder="E-mail" icon={HiOutlineMail} />
          <Input placeholder="Password" />
          <button type="submit">Log-in</button>
        </Form>
        <a href="forgot">Forgot password?</a>
        <a href="register">Register</a>
      </Content>
      <Background />
    </Container>
  );
};

export default Dashboard;
