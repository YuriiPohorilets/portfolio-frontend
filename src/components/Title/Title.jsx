import { Typography } from '@mui/material';
import { title } from 'shared/commonStyles';

export const Title = ({ children }) => {
  return (
    <Typography component="h2" sx={title}>
      {children}
    </Typography>
  );
};
