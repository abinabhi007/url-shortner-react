// src/pages/Login.js
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const { login } = useAuth();

  const loginSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
  });

  return (
    <Formik
      initialValues={{ username: '', password: '' }}
      validationSchema={loginSchema}
      onSubmit={(values) => login(values)}
    >
      {() => (
        <Form>
          <Field name="username" placeholder="Username" />
          <ErrorMessage name="username" />
          <Field name="password" type="password" placeholder="Password" />
          <ErrorMessage name="password" />
          <button type="submit">Log In</button>
        </Form>
      )}
    </Formik>
  );
};

export default Login;
