import { Typography, Link } from '@mui/material';
import { outer, inner } from './logoStyles';

export const Logo = () => {
  return (
    <Link href="/" underline="none" sx={outer}>
      [
      <Typography component="span" sx={inner}>
        YP
      </Typography>
      ]
    </Link>
  );
};
