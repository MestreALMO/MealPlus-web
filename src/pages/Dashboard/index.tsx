import React from 'react';
import { HiOutlineMail, HiOutlineLockClosed } from 'react-icons/hi';

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
          <Input placeholder="Password" icon={HiOutlineLockClosed} />
          <button type="submit">Log-in</button>
        </Form>
        <a href="forgot">Forgot password?</a>
        <a href="SignUp">Sign Up</a>
      </Content>
      <Background />
    </Container>
  );
};

export default Dashboard;
