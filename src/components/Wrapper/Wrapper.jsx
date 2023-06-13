import { Box } from '@mui/material';

export const Wrapper = ({ children, id, sx }) => {
  return (
    <Box component="section" id={id} sx={{ py: '60px', ...sx }}>
      {children}
    </Box>
  );
};
