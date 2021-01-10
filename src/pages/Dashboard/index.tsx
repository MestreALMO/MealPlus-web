import React, { useRef, useCallback } from 'react';
import {
  HiOutlineMail,
  HiOutlineLockClosed,
  HiOutlineLogout,
} from 'react-icons/hi';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { FormHandles } from '@unform/core';

import { Container, Content, Background } from './styles';
import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';
import getValidationErrors from '../../utils/getValidationErrors';
import Input from '../../components/Input';
import Button from '../../components/Button';

// import { AuthContext } from '../../context/AuthContext';

interface SignInFormData {
  email: string;
  password: string;
}

const Dashboard: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { signIn } = useAuth();
  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail required')
            .email('Writte a valid e-mail'),
          password: Yup.string().required('Password needed'),
        });

        await schema.validate(data, { abortEarly: false });

        await signIn({
          email: data.email,
          password: data.password,
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
        }

        addToast({
          type: 'error',
          title: 'Erro in autentication',
          description: 'An error has ocorred, check your credentials',
        });
      }
    },
    [signIn, addToast],
  );

  return (
    <Container>
      <Content>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Log-in</h1>

          <Input name="email" icon={HiOutlineMail} placeholder="E-mail" />

          <Input
            name="password"
            icon={HiOutlineLockClosed}
            type="password"
            placeholder="Password"
          />

          <Button type="submit">Log-in</Button>

          <a href="forgot">Forgot password?</a>
        </Form>

        <a href="signup">
          <HiOutlineLogout />
          Sign up
        </a>
      </Content>
      <Background />
    </Container>
  );

  // return (
  //   <Container>
  //     <Content>
  //       <h1>Meal Plus</h1>
  //       <h2>Welcome to our establishment</h2>
  //       <FormContent>
  //         <Form ref={formRef} onSubmit={handleSubmit}>
  //           <Input placeholder="E-mail" icon={HiOutlineMail} />
  //           <Input placeholder="Password" icon={HiOutlineLockClosed} />
  //           <button type="submit">Log-in</button>
  //         </Form>
  //       </FormContent>
  //       <a href="forgot">Forgot password?</a>
  //       <a href="SignUp">Sign Up</a>
  //     </Content>
  //     <Background />
  //   </Container>
  // );
};

export default Dashboard;
