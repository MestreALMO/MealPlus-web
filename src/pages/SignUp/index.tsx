import React, { useRef, useCallback } from 'react';
import { HiOutlineMail, HiOutlineLockClosed, HiUser } from 'react-icons/hi';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { Form } from '@unform/web';

import Input from '../../components/Input/Input';
import { Container, Content, Background, FormContent } from './styles';
import getValidationErrors from '../../utils/getValidationErrors';

const Dashboard: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('Name required'),
        email: Yup.string()
          .required('E-mail required')
          .email('Writte a valid e-mail'),
        password: Yup.string().min(6, 'Minimum of 6 characters'),
      });

      await schema.validate(data, { abortEarly: false });
    } catch (err) {
      const errors = getValidationErrors(err);

      formRef.current?.setErrors(errors);
    }
  }, []);

  return (
    <Container>
      <Background />
      <Content>
        <h1>Meal Plus</h1>
        <h2>Sign Up</h2>

        <FormContent>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input placeholder="Name" icon={HiUser} />
            <Input placeholder="E-mail" icon={HiOutlineMail} />
            <Input placeholder="Password" icon={HiOutlineLockClosed} />
            <button type="submit">Done</button>
          </Form>
        </FormContent>

        <a href="/">return to log up</a>
      </Content>
    </Container>
  );
};

export default Dashboard;
