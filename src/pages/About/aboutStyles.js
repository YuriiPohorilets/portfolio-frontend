export const wrapper = {
  display: 'flex',
  justifyContent: 'space-between',
  flexWrap: { xs: 'wrap', md: 'nowrap' },
  gap: '32px',
};

export const contentWrapper = {
  maxWidth: { xs: '100%', md: '60%' },

  flex: '1 1 auto',
};

export const text = {
  '&:not(:last-child)': { mb: '16px' },

  fontSize: '20px',
};

export const subtitle = {
  mb: '8px',

  fontSize: '24px',
};

export const skillWrapper = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: '24px',
};

export const skillList = {
  p: 0,
  height: 'fit-content',
  maxWidth: '400px',

  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'flex-start',
  gap: '8px',
  flex: '1 1 auto',
};

export const skillItem = {
  p: '2px 14px',
  width: 'auto',

  border: '1px solid',
  borderColor: 'primary.accent',
  borderRadius: '3px',
};
