// src/pages/Contact.js
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Contact = () => {
  const contactSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    message: Yup.string().required('Message is required'),
  });

  return (
    <Formik
      initialValues={{ name: '', email: '', message: '' }}
      validationSchema={contactSchema}
      onSubmit={(values) => alert(JSON.stringify(values, null, 2))}
    >
      {() => (
        <Form>
          <Field name="name" placeholder="Name" />
          <ErrorMessage name="name" />
          <Field name="email" type="email" placeholder="Email" />
          <ErrorMessage name="email" />
          <Field name="message" as="textarea" placeholder="Message" />
          <ErrorMessage name="message" />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default Contact;
