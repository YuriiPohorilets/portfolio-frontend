import { Typography, Box, Link, IconButton, Tooltip } from '@mui/material';
import { socialList } from 'data/constants';
import { wrapperContacts, text, mediaWrapper, mediaIcon } from './socialStyles';

export const Social = () => {
  const { email, phone, address, socialLinks } = socialList;
  return (
    <Box>
      <Box sx={wrapperContacts}>
        <Typography
          component={Link}
          underline="always"
          href="#"
          onClick={e => {
            e.preventDefault();
            window.location.href = `mailto: ${email}`;
          }}
          sx={text}
        >
          {email}
        </Typography>
        <Typography
          component={Link}
          underline="always"
          href="#"
          onClick={e => {
            e.preventDefault();
            window.location.href = `tel: ${phone}`;
          }}
          sx={text}
        >
          {phone}
        </Typography>
        <Typography sx={text}>
          {address}{' '}
          <Typography component="span" fontStyle="italic" color="primary.accent">
            (ready to relocate at own expense)
          </Typography>
        </Typography>
      </Box>

      <Box sx={mediaWrapper}>
        {socialLinks.map(({ name, url, icon }) => (
          <Tooltip key={name} title={name}>
            <IconButton
              component={Link}
              href={url}
              target="_blank"
              sx={{ ...mediaIcon, '&:hover': { bgcolor: `media.${name}` } }}
            >
              {icon}
            </IconButton>
          </Tooltip>
        ))}
      </Box>
    </Box>
  );
};
