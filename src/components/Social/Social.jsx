import { Box, Link, IconButton, Tooltip } from '@mui/material';
import { socialList } from 'data/constants';
import { mediaWrapper, mediaIcon } from './socialStyles';

export const Social = () => {
  const { socialLinks } = socialList;

  return (
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
  );
};
