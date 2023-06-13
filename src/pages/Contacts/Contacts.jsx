import { Container } from 'components/Container/Container';
import { Wrapper } from 'components/Wrapper/Wrapper';
import { Title } from 'components/Title/Title';

export const Contacts = () => {
  return (
    <Wrapper id="contacts" sx={{ bgcolor: 'primary.darker' }}>
      <Container>
        <Title>Contacts</Title>
      </Container>
    </Wrapper>
  );
};
