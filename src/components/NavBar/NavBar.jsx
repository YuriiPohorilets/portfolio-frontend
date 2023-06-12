import { useState } from 'react';
import {
  Box,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Drawer,
  Toolbar,
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { Logo } from 'components/Logo/Logo';
import { navList } from 'data/constants';

export const NavBar = props => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { window } = props;

  const container = window !== undefined ? () => window().document.body : undefined;

  const handleDrawerToggle = () => setIsMobileOpen(prevState => !prevState);

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: 'center', bgcolor: 'primary.darker', py: '32px' }}
    >
      <Logo />

      <List sx={{ mt: '24px' }}>
        {navList.map(({ name, path }) => (
          <ListItem key={name} disablePadding>
            <ListItemButton
              component={Link}
              href={path}
              sx={{
                textAlign: 'center',
                color: 'primary.light',
                '&:hover': { bgcolor: 'primary.main' },
              }}
            >
              <ListItemText primary={name} sx={{ '& .MuiTypography-root': { fontSize: '20px' } }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <Toolbar sx={{ minHeight: '64px' }} disableGutters>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          size="large"
          sx={{ display: { sm: 'none' } }}
        >
          <MenuIcon sx={{ width: '32px', height: '32px' }} />
        </IconButton>

        <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: '32px' }}>
          {navList.map(({ name, path }) => (
            <Link
              key={path}
              underline="none"
              href={path}
              sx={{ color: 'primary.light', fontSize: '20px' }}
            >
              {name}
            </Link>
          ))}
        </Box>
      </Toolbar>

      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={isMobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: '300px',
              bgcolor: 'primary.darker',
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};
