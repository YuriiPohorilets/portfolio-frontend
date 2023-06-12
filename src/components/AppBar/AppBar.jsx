import { AppBar as MuiAppBar, Box } from '@mui/material';
import { Container } from 'components/Container/Container';
import { Logo } from 'components/Logo/Logo';
import { NavBar } from 'components/NavBar/NavBar';

export const AppBar = () => {
  return (
    <MuiAppBar component="nav" sx={{ py: '16px', bgcolor: 'primary.darker', boxShadow: 0 }}>
      <Container>
        <Box
          sx={{
            display: 'flex',
            gap: '60px',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Logo />

          <NavBar />
        </Box>
      </Container>
    </MuiAppBar>
  );
};
