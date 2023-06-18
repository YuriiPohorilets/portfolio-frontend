export const wrapper = {
  display: 'flex',
  justifyContent: { xs: 'center', sm: 'flex-start' },
  flexWrap: { xs: 'wrap', sm: 'nowrap' },
  gap: '64px',
};

export const wrapperContacts = {
  mb: '32px',

  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
};

export const text = {
  fontSize: '20px',
  color: 'primary.light',

  transition: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1)',
};
