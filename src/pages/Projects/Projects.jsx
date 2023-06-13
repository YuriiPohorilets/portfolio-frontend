import { List } from '@mui/material';
import { Container } from 'components/Container/Container';
import { Wrapper } from 'components/Wrapper/Wrapper';
import { Title } from 'components/Title/Title';
import { ProjectItem } from 'components/ProjectItem/ProjectItem';
import { projectsList } from 'data/initialData';

export const Projects = () => {
  return (
    <Wrapper id="projects">
      <Container>
        <Title>Projects</Title>

        <List disablePadding>
          {projectsList.map(project => (
            <ProjectItem key={project.id} project={project} />
          ))}
        </List>
      </Container>
    </Wrapper>
  );
};
