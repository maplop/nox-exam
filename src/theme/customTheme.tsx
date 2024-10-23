import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  typography: {
    fontFamily: "'Poppins', Arial, sans-serif",
    h1: {
      fontFamily: "'Poppins', Arial, sans-serif",
      fontWeight: 700,
    },
    h2: {
      fontFamily: "'Poppins', Arial, sans-serif",
      fontWeight: 600,
    },
    body1: {
      fontFamily: "'Poppins', Arial, sans-serif",
      fontWeight: 400,
    },
  },
  palette: {
    primary: {
      main: '#FF7500',
    },
    secondary: {
      main: '#05004E',
    },
    background: {
      default: '#ffffff',
    },
    text: {
      primary: '#333',
    },
  },
});