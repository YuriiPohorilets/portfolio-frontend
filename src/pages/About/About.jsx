import { Box, Typography, List, ListItem } from '@mui/material';
import { Container } from 'components/Container/Container';
import { Wrapper } from 'components/Wrapper/Wrapper';
import { Title } from 'components/Title/Title';
import { aboutInfo } from 'data/initialData';
import {
  wrapper,
  contentWrapper,
  text,
  subtitle,
  skillWrapper,
  skillList,
  skillItem,
} from './aboutStyles';

export const About = () => {
  const { intro, main, conclusion, techSkills, softSkills } = aboutInfo;

  return (
    <Wrapper component="section" id="about">
      <Container>
        <Title>About me</Title>

        <Box sx={wrapper}>
          <Box sx={contentWrapper}>
            <Typography sx={text}>{intro}</Typography>
            <Typography sx={text}>{main}</Typography>
            <Typography sx={text}>{conclusion}</Typography>
          </Box>

          <Box sx={skillWrapper}>
            <Box>
              <Typography component="h3" sx={subtitle}>
                Tech skills
              </Typography>

              <List sx={skillList}>
                {techSkills.map(skill => (
                  <ListItem key={skill} sx={skillItem}>
                    <Typography>{skill}</Typography>
                  </ListItem>
                ))}
              </List>
            </Box>

            <Box>
              <Typography component="h3" sx={subtitle}>
                Soft skills
              </Typography>

              <List sx={skillList}>
                {softSkills.map(skill => (
                  <ListItem key={skill} sx={skillItem}>
                    <Typography>{skill}</Typography>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Box>
        </Box>
      </Container>
    </Wrapper>
  );
};
