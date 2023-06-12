import { Box } from '@mui/material';
import { AppBar } from 'components/AppBar/AppBar';
import { Home } from 'pages/Home';
import { About } from 'pages/About';

export const App = () => {
  return (
    <>
      <Box component="header">
        <AppBar />
      </Box>

      <Box component="main">
        <Home />
        <About />
      </Box>
    </>
  );
};
