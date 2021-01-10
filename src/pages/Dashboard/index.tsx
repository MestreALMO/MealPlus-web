import React, { useContext } from 'react';
import { HiOutlineMail, HiOutlineLockClosed } from 'react-icons/hi';
import { Form } from '@unform/web';

import Input from '../../components/Input/Input';
import { Container, Content, Background, FormContent } from './styles';
import AuthContext from '../../context/AuthContext';

const Dashboard: React.FC = () => {
  const auth = useContext(AuthContext);

  console.log(auth);

  return (
    <Container>
      <Content>
        <h1>Meal Plus</h1>
        <h2>Welcome to our establishment</h2>
        <FormContent>
          <Form
            onSubmit={() => {
              console.log('something');
            }}
          >
            <Input placeholder="E-mail" icon={HiOutlineMail} />
            <Input placeholder="Password" icon={HiOutlineLockClosed} />
            <button type="submit">Log-in</button>
          </Form>
        </FormContent>
        <a href="forgot">Forgot password?</a>
        <a href="SignUp">Sign Up</a>
      </Content>
      <Background />
    </Container>
  );
};

export default Dashboard;
