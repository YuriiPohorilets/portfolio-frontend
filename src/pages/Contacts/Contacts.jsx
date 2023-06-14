import { Container } from 'components/Container/Container';
import { Wrapper } from 'components/Wrapper/Wrapper';
import { Title } from 'components/Title/Title';
import { ContactForm } from 'components/ContactForm/ContactForm';

export const Contacts = () => {
  return (
    <Wrapper id="contacts" sx={{ bgcolor: 'primary.darker' }}>
      <Container>
        <Title>Contacts</Title>

        <ContactForm />
      </Container>
    </Wrapper>
  );
};
