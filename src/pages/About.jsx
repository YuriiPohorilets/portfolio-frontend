import { Box, Typography, List, ListItem } from '@mui/material';
import { Container } from 'components/Container/Container';
import { Wrapper } from 'components/Wrapper/Wrapper';
import { Title } from 'components/Title/Title';
import { aboutInfo } from 'data/initialData';

export const About = () => {
  const { intro, main, conclusion, techSkills } = aboutInfo;

  return (
    <Wrapper id="about">
      <Container>
        <Title>About me</Title>

        <Box
          sx={{
            display: 'flex',
            gap: '32px',
            flexWrap: { xs: 'wrap', md: 'nowrap' },
            justifyContent: 'space-between',
          }}
        >
          <Box sx={{ flex: '1 1 auto', maxWidth: { xs: '100%', md: '60%' } }}>
            <Typography sx={{ mb: '16px', fontSize: '20px' }}>{intro}</Typography>
            <Typography sx={{ mb: '16px', fontSize: '20px' }}>{main}</Typography>
            <Typography sx={{ fontSize: '20px' }}>{conclusion}</Typography>
          </Box>

          <Box>
            <Typography component="h3" sx={{ mb: '8px', fontSize: '24px' }}>
              Tech skills
            </Typography>
            <List
              sx={{
                display: 'flex',
                gap: '4px',
                p: 0,
                flexWrap: 'wrap',
                alignItems: 'flex-start',
                height: 'fit-content',
                flex: '1 1 auto',
                maxWidth: '400px',
              }}
            >
              {techSkills.map(skill => (
                <ListItem
                  key={skill}
                  sx={{
                    p: '2px 14px',
                    width: 'auto',
                    border: '1px solid',
                    borderColor: 'primary.accent',
                    borderRadius: '3px',
                  }}
                >
                  <Typography>{skill}</Typography>
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>
      </Container>
    </Wrapper>
  );
};
