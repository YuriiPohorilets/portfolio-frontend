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
import { useScroll } from 'hooks/useScroll';
import { Logo } from 'components/Logo/Logo';
import { navList } from 'data/constants';
import {
  drawerPaper,
  drawerWrapper,
  drawerMenu,
  drawerButton,
  drawerItem,
  wrapper,
  toolbar,
  iconWrapper,
  icon,
  menuList,
  menuItem,
} from './navBarStyles';

export const NavBar = props => {
  const ids = ['home', 'about', 'projects', 'contacts'];
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const activeId = useScroll(ids, 250);
  const { window } = props;

  const container = window !== undefined ? () => window().document.body : undefined;

  const handleDrawerToggle = () => setIsMobileOpen(prevState => !prevState);

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={drawerWrapper}>
      <Logo />

      <List sx={drawerMenu}>
        {navList.map(({ name, path }) => (
          <ListItem key={name} disablePadding>
            <ListItemButton
              component={Link}
              href={path}
              sx={drawerButton}
              className={activeId === path.split('#')[1] ? 'active' : ''}
            >
              <ListItemText primary={name} sx={drawerItem} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={wrapper}>
      <Toolbar sx={toolbar} disableGutters>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          size="large"
          sx={iconWrapper}
        >
          <MenuIcon sx={icon} />
        </IconButton>

        <Box sx={menuList}>
          {navList.map(({ name, path }) => (
            <Link
              key={path}
              underline="none"
              href={path}
              sx={menuItem}
              className={activeId === path.split('#')[1] ? 'active' : ''}
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
          ModalProps={{ keepMounted: true }}
          sx={drawerPaper}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};
