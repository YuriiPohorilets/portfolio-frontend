import * as Yup from 'yup';

export const contactFormValidation = Yup.object({
  name: Yup.string('Enter your name')
    .min(2, 'Name should be of minimum 2 characters length')
    .required('Name is required'),
  email: Yup.string('Enter your email').email('Enter a valid email').required('Email is required'),
  message: Yup.string('Enter message')
    .min(16, 'Message should be of minimum 16 characters length')
    .required('Message is required'),
});
