import { Box } from '@mui/material';

export const Wrapper = ({ children, component, id, sx }) => {
  return (
    <Box component={component} id={id} sx={{ py: '60px', ...sx }}>
      {children}
    </Box>
  );
};
