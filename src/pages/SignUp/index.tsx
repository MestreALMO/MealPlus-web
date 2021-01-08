import React from 'react';
import { HiOutlineMail, HiOutlineLockClosed, HiUser } from 'react-icons/hi';

import Input from '../../components/Input/Input';

import { Container, Content, Background, Form } from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Background />
      <Content>
        <h1>Meal Plus</h1>
        <h2>Sign Up</h2>

        <Form>
          <Input placeholder="Name" icon={HiUser} />
          <Input placeholder="E-mail" icon={HiOutlineMail} />
          <Input placeholder="Password" icon={HiOutlineLockClosed} />
          <button type="submit">Done</button>
        </Form>

        <a href="/">return to log up</a>
      </Content>
    </Container>
  );
};

export default Dashboard;
