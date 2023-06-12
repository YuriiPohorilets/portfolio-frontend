import { Box, Typography, Button, Link } from '@mui/material';
import { Container } from 'components/Container/Container';
import { FileDownloadOutlined } from '@mui/icons-material';

import MainImg from 'img/photo.png';
import { containedButton, outlinedButton } from 'shared/commonStyles';

export const Home = () => {
  return (
    <Box component="section" id="home" sx={{ bgcolor: 'primary.darker' }}>
      <Container>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: { xs: 'wrap', md: 'nowrap' },
            gap: { xs: '32px', md: '56px' },
            height: { md: '100vh' },
          }}
        >
          <Box sx={{ order: { xs: 1, md: 0 } }}>
            <img src={MainImg} alt="Man in glass" width="474" height="634" loading="lazy" />
          </Box>

          <Box
            sx={{
              textAlign: { xs: 'left' },
              maxWidth: '550px',
              pt: { xs: '120px', md: 0 },
            }}
          >
            <Typography sx={{ fontSize: { xs: '28px', md: '36px' } }}>Hi there!</Typography>
            <Typography sx={{ fontSize: { xs: '28px', md: '36px' }, mb: '24px' }}>
              I'm{' '}
              <Typography
                component="span"
                sx={{
                  color: 'primary.accent',
                  fontSize: { xs: '28px', md: '36px' },
                }}
              >
                Pohorilets Yura
              </Typography>
            </Typography>

            <Typography
              component="h1"
              sx={{
                mb: '56px',
                fontSize: { xs: '54px', md: '64px' },
                fontWeight: 900,
              }}
            >
              Junior{' '}
              <Typography
                component="span"
                sx={{
                  fontSize: { xs: '54px', md: '64px' },
                  fontWeight: 900,
                  color: 'primary.accent',
                }}
              >
                Frontend Developer
              </Typography>
            </Typography>

            <Box sx={{ display: 'flex', gap: '16px' }}>
              <Button
                variant="contained"
                component={Link}
                target="_blank"
                href="https://drive.google.com/file/d/1SUJdjHkVTZ_H-ZJbAEHLFM1Md-W9YNfB/view?usp=sharing"
                sx={containedButton}
              >
                Get CV <FileDownloadOutlined sx={{ ml: '4px', width: '24px', height: '24px' }} />
              </Button>

              <Button variant="outlined" component={Link} href="#contacts" sx={outlinedButton}>
                Hire me
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
