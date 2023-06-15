export const drawerPaper = {
  '& .MuiDrawer-paper': {
    boxSizing: 'border-box',
    width: '300px',
    bgcolor: 'primary.darker',
  },

  display: { xs: 'block', sm: 'none' },
};

export const drawerWrapper = {
  py: '32px',

  textAlign: 'center',

  bgcolor: 'primary.darker',
};

export const drawerMenu = {
  mt: '24px',
};

export const drawerButton = {
  '&:hover': { bgcolor: 'primary.main' },
  '&.active': { color: 'primary.accent', bgcolor: 'primary.main' },

  textAlign: 'center',
  color: 'primary.light',
};

export const drawerItem = {
  '& .MuiTypography-root': { fontSize: '20px' },
};

export const wrapper = {
  display: 'flex',
};

export const toolbar = {
  minHeight: '64px',
};

export const iconWrapper = {
  display: { sm: 'none' },
};

export const icon = {
  width: '32px',
  height: '32px',
};

export const menuList = {
  display: { xs: 'none', sm: 'flex' },
  gap: '32px',
};

export const menuItem = {
  '&:hover': { color: 'primary.accent' },

  '&::after': {
    content: "''",

    position: 'absolute',
    left: 0,
    bottom: 0,

    width: '65%',
    height: '2px',
    display: 'block',

    bgcolor: 'primary.accent',

    transform: 'scaleX(0)',
    transformOrigin: 'bottom right',
    transition: 'transform 250ms cubic-bezier(0.4, 0, 0.2, 1)',
  },

  '&.active': {
    color: 'primary.accent',

    '&::after': {
      transform: 'scaleX(1)',
      transformOrigin: 'bottom left',
    },
  },

  position: 'relative',

  py: '8px',

  fontSize: '20px',
  color: 'primary.light',

  transition: 'color 250ms cubic-bezier(0.4, 0, 0.2, 1)',
  overflow: 'hidden',
};
