import { Box, Typography, Link } from '@mui/material';
import { Container } from 'components/Container/Container';
import { Wrapper } from 'components/Wrapper/Wrapper';
import { Title } from 'components/Title/Title';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Social } from 'components/Social/Social';
import { socialList } from 'data/constants';
import { wrapper } from './contactsStyles';
import { wrapperContacts, text } from './contactsStyles';

export const Contacts = () => {
  const { email, phone, address } = socialList;

  return (
    <Wrapper component="div" id="contacts" sx={{ bgcolor: 'primary.darker' }}>
      <Container>
        <Title>Contacts</Title>

        <Box sx={wrapper}>
          <ContactForm />

          <Box>
            <Box sx={wrapperContacts}>
              <Typography
                component={Link}
                underline="always"
                href="#"
                onClick={e => {
                  e.preventDefault();
                  window.location.href = `mailto: ${email}`;
                }}
                sx={text}
              >
                {email}
              </Typography>
              <Typography
                component={Link}
                underline="always"
                href="#"
                onClick={e => {
                  e.preventDefault();
                  window.location.href = `tel: ${phone}`;
                }}
                sx={text}
              >
                {phone}
              </Typography>
              <Typography sx={text}>
                {address}{' '}
                <Typography component="span" fontStyle="italic" color="primary.accent">
                  (ready to relocate at own expense)
                </Typography>
              </Typography>
            </Box>

            <Social />
          </Box>
        </Box>
      </Container>
    </Wrapper>
  );
};
