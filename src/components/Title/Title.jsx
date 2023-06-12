import { Typography } from '@mui/material';

export const Title = ({ children }) => {
  return (
    <Typography
      component="h2"
      sx={{
        '&::after': {
          content: "''",
          position: 'absolute',
          left: 0,
          bottom: 0,
          display: 'block',
          width: '72px',
          height: '3px',
          bgcolor: 'primary.accent',
        },
        position: 'relative',
        fontSize: '36px',
        fontWeight: 700,
        mb: '32px',
      }}
    >
      {children}
    </Typography>
  );
};
