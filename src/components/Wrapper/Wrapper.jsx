import { Box } from '@mui/material';

export const Wrapper = ({ children, id }) => {
  return (
    <Box component="section" id={id} sx={{ py: '60px' }}>
      {children}
    </Box>
  );
};
