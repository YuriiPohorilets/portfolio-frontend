export const wrapper = {
  height: { md: '100vh' },

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: { xs: 'wrap', md: 'nowrap' },
  gap: { xs: '32px', md: '56px' },
};

export const imgWrapper = {
  order: { xs: 1, md: 0 },
};

export const contentWrapper = {
  pt: { xs: '120px', md: 0 },
  maxWidth: '550px',

  textAlign: { xs: 'left' },
};

export const text = {
  mb: '24px',

  fontSize: { xs: '28px', md: '36px' },
};

export const accentText = {
  mb: '56px',

  fontWeight: 900,
  fontSize: { xs: '54px', md: '64px' },
  color: 'primary.accent',
};

export const buttonWrapper = {
  display: 'flex',
  gap: '16px',
};

export const buttonIcon = {
  ml: '4px',
  width: '24px',
  height: '24px',
};
