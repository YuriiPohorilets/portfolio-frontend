import { Typography } from '@mui/material';

export const Title = ({ children }) => {
  return <Typography sx={{ fontSize: '36px', fontWeight: 700 }}>{children}</Typography>;
};
