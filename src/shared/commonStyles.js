// ================================================
// TITLE STYLES
// ================================================

export const title = {
  '&::after': {
    content: "''",

    position: 'absolute',
    left: 0,
    bottom: 0,

    width: '72px',
    height: '3px',
    display: 'block',

    bgcolor: 'primary.accent',
  },

  position: 'relative',

  mb: '32px',

  fontWeight: 700,
  fontSize: '36px',
};

// ================================================
// BUTTONS STYLES
// ================================================

export const baseButton = {
  p: '8px 32px',

  fontSize: '20px',
  textTransform: 'none',

  borderRadius: '4px',
  boxShadow: 0,
};

export const containedLightButton = {
  ...baseButton,

  '&:hover': { bgcolor: 'primary.light', boxShadow: 0 },
  color: 'primary.darker',
  bgcolor: 'primary.accent',
};

export const outlinedLightButton = {
  ...baseButton,

  '&:hover': { bgcolor: 'neutral.accent', borderColor: 'primary.accent' },
  color: 'primary.light',
  borderColor: 'primary.accent',
};

export const containedDarkButton = {
  ...baseButton,

  '&:hover': { bgcolor: 'primary.light', boxShadow: 0, color: 'primary.darker' },
  color: 'primary.light',
  bgcolor: 'primary.darker',
};

export const outlinedDarkButton = {
  ...baseButton,

  '&:hover': { bgcolor: 'neutral.darker', borderColor: 'primary.darker' },
  color: 'primary.light',
  borderColor: 'primary.darker',
};

// ================================================
// FORM STYLES
// ================================================
