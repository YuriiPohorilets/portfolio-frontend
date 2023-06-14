import { useFormik } from 'formik';
import { TextField, Button, Box } from '@mui/material';
import { contactFormValidation } from 'schemas/contactFormValidation';
import { containedLightButton } from 'shared/commonStyles';

const initialValues = {
  name: '',
  email: '',
  message: '',
};

export const ContactForm = () => {
  const { handleSubmit, handleChange, resetForm, values, touched, errors } = useFormik({
    initialValues,
    validationSchema: contactFormValidation,

    onSubmit: values => {
      console.log(values);
      resetForm();
    },
  });

  return (
    <div>
      <Box
        component="form"
        noValidate
        onSubmit={handleSubmit}
        sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
      >
        <TextField
          variant="outlined"
          id="name"
          type="text"
          label="Name"
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
          multiline
          rows={6}
          value={values.message}
          onChange={handleChange}
          error={touched.message && !!errors.message}
          helperText={touched.message && errors.message}
        />

        <Button type="sumbit" sx={containedLightButton}>
          Send
        </Button>
      </Box>
    </div>
  );
};
