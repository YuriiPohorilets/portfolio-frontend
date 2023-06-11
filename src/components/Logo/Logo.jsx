import { Typography, Link } from '@mui/material';

export const Logo = () => {
  return (
    <Link
      href="/"
      underline="none"
      sx={{ color: 'primary.main', fontSize: '32px', fontWeight: 900 }}
    >
      [
      <Typography
        component="span"
        sx={{ mx: '2px', color: 'primary.light', fontSize: '32px', fontWeight: 900 }}
      >
        YP
      </Typography>
      ]
    </Link>
  );
};
