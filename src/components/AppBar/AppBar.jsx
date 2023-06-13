import { AppBar as MuiAppBar, Box } from '@mui/material';
import { Container } from 'components/Container/Container';
import { Logo } from 'components/Logo/Logo';
import { NavBar } from 'components/NavBar/NavBar';
import { appBar, wrapper } from './appBarStyles';

export const AppBar = () => {
  return (
    <MuiAppBar component="nav" sx={appBar}>
      <Container>
        <Box sx={wrapper}>
          <Logo />

          <NavBar />
        </Box>
      </Container>
    </MuiAppBar>
  );
};
