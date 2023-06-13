import { Box, Typography, Button, Link } from '@mui/material';
import { Container } from 'components/Container/Container';
import { FileDownloadOutlined } from '@mui/icons-material';
import MainImg from 'img/photo.png';
import { containedLightButton, outlinedLightButton } from 'shared/commonStyles';
import {
  wrapper,
  imgWrapper,
  contentWrapper,
  text,
  accentText,
  buttonWrapper,
  buttonIcon,
} from './homeStyles';

export const Home = () => {
  return (
    <Box component="section" id="home" sx={{ bgcolor: 'primary.darker' }}>
      <Container>
        <Box sx={wrapper}>
          <Box sx={imgWrapper}>
            <img src={MainImg} alt="Man in glass" width="474" height="634" loading="lazy" />
          </Box>

          <Box sx={contentWrapper}>
            <Typography sx={text}>Hi there!</Typography>
            <Typography sx={text}>
              I'm{' '}
              <Typography component="span" sx={{ ...text, color: 'primary.accent' }}>
                Pohorilets Yura
              </Typography>
            </Typography>

            <Typography component="h1" sx={{ ...accentText, color: 'primary.light' }}>
              Junior{' '}
              <Typography component="span" sx={{ ...accentText, mb: 0 }}>
                Frontend Developer
              </Typography>
            </Typography>

            <Box sx={buttonWrapper}>
              <Button
                variant="contained"
                component={Link}
                target="_blank"
                href="https://drive.google.com/file/d/1SUJdjHkVTZ_H-ZJbAEHLFM1Md-W9YNfB/view?usp=sharing"
                sx={containedLightButton}
              >
                Get CV <FileDownloadOutlined sx={buttonIcon} />
              </Button>

              <Button variant="outlined" component={Link} href="#contacts" sx={outlinedLightButton}>
                Hire me
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
