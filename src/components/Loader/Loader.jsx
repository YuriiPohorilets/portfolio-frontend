import { Box, CircularProgress } from '@mui/material';

export const Loader = () => {
  return (
    <Box sx={{ display: 'flex', ml: '8px' }}>
      <CircularProgress size={24} />
    </Box>
  );
};
