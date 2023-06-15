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
  '&.active': { color: 'red' },

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
  '&.active': { color: 'red' },

  fontSize: '20px',
  color: 'primary.light',
};
