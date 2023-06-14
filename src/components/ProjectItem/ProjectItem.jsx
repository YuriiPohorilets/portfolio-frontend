import { List, ListItem, Box, Typography, Button, Link, Divider } from '@mui/material';
import { OpenInNewOutlined } from '@mui/icons-material';
import { SourcesButton } from 'components/SourcesButton/SourcesButton';
import { containedDarkButton } from 'shared/commonStyles';
import {
  item,
  imgWrapper,
  contentWrapper,
  titleProject,
  skillList,
  skillItem,
  text,
  buttonWrapper,
  buttonProject,
  divider,
} from './projectItemStyles';

export const ProjectItem = ({ project }) => {
  const { title, description, techSkills, imgUrl, demoUrl, sources } = project;

  return (
    <>
      <ListItem disablePadding sx={item}>
        <Box id="preview-img" sx={imgWrapper}>
          <img src={imgUrl} alt={title} width="550" height="350" />
        </Box>

        <Box sx={contentWrapper}>
          <Box>
            <Typography component="h3" sx={titleProject}>
              {title}
            </Typography>

            <List disablePadding sx={skillList}>
              {techSkills.map(skill => (
                <ListItem key={skill} sx={skillItem}>
                  {skill}
                </ListItem>
              ))}
            </List>

            <Typography sx={text}>{description}</Typography>
          </Box>

          <Box sx={buttonWrapper}>
            <Button
              variant="contained"
              component={Link}
              href={demoUrl}
              target="_blank"
              sx={{ ...containedDarkButton, ...buttonProject }}
            >
              View demo
              <OpenInNewOutlined fontSize="small" sx={{ ml: '8px' }} />
            </Button>

            <SourcesButton sources={sources} />
          </Box>
        </Box>
      </ListItem>

      <Divider sx={divider} />
    </>
  );
};
