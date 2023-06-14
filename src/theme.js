import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#30475E',
      darker: '#222831',
      light: '#DDDDDD',
      accent: '#AA8B56',
    },

    neutral: {
      darker: 'rgba(34, 40, 49, 0.4);',
      accent: 'rgba(170, 139, 86, 0.4)',
      light: 'rgba(221, 221, 221, 0.4)',
    },

    secondary: {
      main: '#DDDDDD',
    },

    media: {
      linkedin: '#027BB5',
      github: '#161B22',
      skype: '#04ABEA',
      telegram: '#20A0E1',
    },
  },

  typography: {
    fontFamily: ['Jost', 'sans-serif'].join(','),
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 930,
      lg: 1200,
      xl: 1536,
    },
  },
});
