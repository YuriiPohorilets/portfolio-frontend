import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useFormik } from 'formik';
import { TextField, Button, Box, Snackbar } from '@mui/material';
import { contactFormValidation } from 'schemas/contactFormValidation';
import { AlertBar } from 'components/AlertBar/AlertBar';
import { Loader } from 'components/Loader/Loader';
import { containedLightButton } from 'shared/commonStyles';
import { formWrapper } from './contactsFormStyles';

const initialValues = {
  name: '',
  email: '',
  message: '',
};

export const ContactForm = () => {
  const { REACT_APP_SERVICE_ID, REACT_APP_TEMPLATE_ID, REACT_APP_PUBLIC_KEY } = process.env;
  const [isOpenAlert, setIsOpenAlert] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const form = useRef();

  const handleCloseAlert = (e, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setIsOpenAlert(false);
  };

  const { handleSubmit, handleChange, resetForm, values, touched, errors } = useFormik({
    initialValues,
    validationSchema: contactFormValidation,

    onSubmit: () => {
      emailjs
        .sendForm(REACT_APP_SERVICE_ID, REACT_APP_TEMPLATE_ID, form.current, REACT_APP_PUBLIC_KEY)
        .then(setIsLoading(true))
        .then(
          () => {
            setIsLoading(false);
            setIsOpenAlert(true);
          },
          error => {
            setIsError(true);
            console.log(error.text);
          }
        )
        .catch(error => {
          setIsError(true);
          console.log(error.message);
        });

      resetForm();
    },
  });

  return (
    <>
      <Box component="form" noValidate onSubmit={handleSubmit} ref={form} sx={formWrapper}>
        <TextField
          variant="outlined"
          id="name"
          type="text"
          label="Name"
          name="name"
          value={values.name}
          onChange={handleChange}
          error={touched.name && !!errors.name}
          helperText={touched.name && errors.name}
        />

        <TextField
          variant="outlined"
          id="email"
          type="email"
          label="Email"
          name="email"
          value={values.email}
          onChange={handleChange}
          error={touched.email && !!errors.email}
          helperText={touched.email && errors.email}
        />

        <TextField
          variant="outlined"
          id="message"
          type="text"
          label="Message"
          name="message"
          multiline
          rows={6}
          value={values.message}
          onChange={handleChange}
          error={touched.message && !!errors.message}
          helperText={touched.message && errors.message}
        />

        <Button type="sumbit" disabled={isLoading} sx={{ ...containedLightButton, width: '100%' }}>
          {isLoading ? 'Sending...' : 'Send'} {isLoading && <Loader />}
        </Button>
      </Box>

      <Snackbar
        open={isOpenAlert}
        autoHideDuration={2000}
        onClose={handleCloseAlert}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <AlertBar
          onClose={handleCloseAlert}
          severity={isError ? 'error' : 'success'}
          sx={{ width: '100%' }}
        >
          {isError ? 'Oops, something went wrong!' : 'Message sent successfully!'}
        </AlertBar>
      </Snackbar>
    </>
  );
};
