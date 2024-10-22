import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  typography: {
    fontFamily: "'Poppins', Arial, sans-serif", // Fuente Poppins como principal
    h1: {
      fontFamily: "'Poppins', Arial, sans-serif", // Puedes personalizar cada nivel de encabezado
      fontWeight: 700, // Ejemplo: hacer el h1 más pesado
    },
    h2: {
      fontFamily: "'Poppins', Arial, sans-serif",
      fontWeight: 600,
    },
    body1: {
      fontFamily: "'Poppins', Arial, sans-serif",
      fontWeight: 400, // Peso normal para body1
    },
    // Añade otras variaciones según sea necesario (h3, h4, etc.)
  },
  palette: {
    // Puedes personalizar los colores aquí también
    primary: {
      main: '#1976d2', // Color primario (puedes cambiarlo si lo necesitas)
    },
    secondary: {
      main: '#dc004e', // Color secundario
    },
    background: {
      default: '#f4f6f8', // Color de fondo predeterminado
    },
    text: {
      primary: '#333', // Color del texto primario
    },
  },
});