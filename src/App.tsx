import './App.css'
import { BrowserRouter } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import MainRoutes from './routes/MainRoutes';
import { theme } from './theme/customTheme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CssBaseline />
        <MainRoutes />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
