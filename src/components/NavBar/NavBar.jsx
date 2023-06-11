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
import { navList } from 'data/constants';
import { Logo } from 'components/Logo/Logo';

export const NavBar = props => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { window } = props;

  const handleDrawerToggle = () => {
    setMobileOpen(prevState => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', bgcolor: 'primary.darker' }}>
      <Logo />

      <List>
        {navList.map(({ name, path }) => (
          <ListItem key={name} disablePadding>
            <ListItemButton
              component={Link}
              href={path}
              sx={{ textAlign: 'center', color: 'primary.light' }}
            >
              <ListItemText primary={name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <Toolbar sx={{ minHeight: '64px' }}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ display: { sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>

        <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: '32px' }}>
          {navList.map(({ name, path }) => (
            <Link key={path} underline="none" href={path} sx={{ color: 'primary.light' }}>
              {name}
            </Link>
          ))}
        </Box>
      </Toolbar>

      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
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
