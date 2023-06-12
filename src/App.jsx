import { Box } from '@mui/material';
import { AppBar } from 'components/AppBar/AppBar';
import { Home } from 'pages/Home';

export const App = () => {
  return (
    <>
      <Box component="header">
        <AppBar />
      </Box>

      <Box component="main">
        <Home />
      </Box>
    </>
  );
};
