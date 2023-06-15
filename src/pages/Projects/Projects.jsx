import { useState } from 'react';
import { List } from '@mui/material';
import { Container } from 'components/Container/Container';
import { Wrapper } from 'components/Wrapper/Wrapper';
import { Title } from 'components/Title/Title';
import { ProjectItem } from 'components/ProjectItem/ProjectItem';
import { Pagination } from 'components/Pagination/Pagination';
import { projectsList } from 'data/initialData';
import { scrollToSection } from 'helpers/scrollToSection';
import { list } from './projectsStyles';

export const Projects = () => {
  const [page, setPage] = useState(1);
  const [projectNumber] = useState(4);

  const count = Math.ceil(projectsList.length / projectNumber);
  const currentPageNumber = page * projectNumber - projectNumber;
  const paginatedProjects = [...projectsList].splice(currentPageNumber, projectNumber);

  const handleChangePage = (_, newPage) => {
    setPage(newPage);
    scrollToSection('projects');
  };

  return (
    <Wrapper component="section" id="projects">
      <Container>
        <Title>Projects</Title>

        <List disablePadding sx={list}>
          {paginatedProjects.map(project => (
            <ProjectItem key={project.id} project={project} />
          ))}
        </List>

        <Pagination onChange={handleChangePage} page={page} count={count} />
      </Container>
    </Wrapper>
  );
};
