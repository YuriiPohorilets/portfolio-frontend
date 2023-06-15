import { Box } from '@mui/material';
import { AppBar } from 'components/AppBar/AppBar';
import { Home } from 'pages/Home/Home';
import { About } from 'pages/About/About';
import { Projects } from 'pages/Projects/Projects';
import { Contacts } from 'pages/Contacts/Contacts';

export const App = () => {
  return (
    <>
      <Box component="header">
        <AppBar />
      </Box>

      <Box component="main">
        <Home />
        <About />
        <Projects />
      </Box>

      <Box component="footer">
        <Contacts />
      </Box>
    </>
  );
};
