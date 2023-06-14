export const item = {
  '&:nth-of-type(even) > #preview-img': { md: { order: 1 } },

  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'stretch',
  gap: '32px',
  flexWrap: 'wrap',
};

export const imgWrapper = {
  maxWidth: '550px',

  flex: '1 1 550px',

  borderRadius: '8px',
  overflow: 'hidden',
};

export const contentWrapper = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: '32px',
  flex: '1 1 300px',
};

export const titleProject = {
  mb: '8px',

  fontSize: '32px',
};

export const skillList = {
  mb: '16px',
  maxWidth: '400px',

  display: 'flex',
  flexWrap: 'wrap',
  gap: '4px',
};

export const skillItem = {
  p: '2px 14px',
  width: 'auto',

  fontWeight: 300,
  fontSize: '14px',

  border: '1px solid',
  borderColor: 'primary.accent',
  borderRadius: '4px',
};

export const text = {
  fontWeight: 300,
  fontSize: '16px',
};

export const buttonWrapper = {
  display: 'flex',
  gap: '8px',
};

export const buttonProject = {
  p: { xs: '8px 16px', md: '8px 24px' },

  fontSize: '16px',
};

export const divider = {
  width: '100%',

  bgcolor: 'primary.light',

  opacity: 0.2,
};
