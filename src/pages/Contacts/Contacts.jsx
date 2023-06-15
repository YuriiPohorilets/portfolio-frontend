import { Box } from '@mui/material';
import { Container } from 'components/Container/Container';
import { Wrapper } from 'components/Wrapper/Wrapper';
import { Title } from 'components/Title/Title';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Social } from 'components/Social/Social';
import { wrapper } from './contactsStyles';

export const Contacts = () => {
  return (
    <Wrapper component="div" id="contacts" sx={{ bgcolor: 'primary.darker' }}>
      <Container>
        <Title>Contacts</Title>

        <Box sx={wrapper}>
          <ContactForm />

          <Social />
        </Box>
      </Container>
    </Wrapper>
  );
};
