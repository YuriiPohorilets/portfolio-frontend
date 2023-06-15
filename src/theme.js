import { outlinedInputClasses } from '@mui/material/OutlinedInput';
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
      skype: '#0078D7',
      telegram: '#20A0E1',
    },
  },

  typography: {
    fontFamily: ['Jost', 'sans-serif'].join(','),
  },

  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '--TextField-brandBorderColor': '#AA8B56',
          '--TextField-brandBorderHoverColor': 'rgba(221, 221, 221, 0.4)',
          '--TextField-brandBorderFocusedColor': 'rgba(170, 139, 86, 0.4)',
          '--TextField-text': '#DDDDDD',
          '--TextField-text-focused': 'rgba(170, 139, 86, 0.4)',
          '& label.Mui-focused': {
            color: 'var(--TextField-text-focused)',
          },
          '& > label': {
            color: 'var(--TextField-text)',
          },
          '& .MuiInputBase-input': {
            color: 'var(--TextField-text)',
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: 'var(--TextField-brandBorderColor)',
        },
        root: {
          [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
            borderColor: 'var(--TextField-brandBorderHoverColor)',
          },
          [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
            borderColor: 'var(--TextField-brandBorderFocusedColor)',
          },
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          '&:before': {
            borderBottom: '2px solid var(--TextField-brandBorderColor)',
          },
          '&:hover:not(.Mui-disabled, .Mui-error):before': {
            borderBottom: '2px solid var(--TextField-brandBorderHoverColor)',
          },
          '&.Mui-focused:after': {
            borderBottom: '2px solid var(--TextField-brandBorderFocusedColor)',
          },
        },
      },
    },
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
