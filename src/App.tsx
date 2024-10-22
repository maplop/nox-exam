import './App.css'
import { BrowserRouter } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import MainRoutes from './routes/MainRoutes';

function App() {
  return (
    <>
      <BrowserRouter>
        <CssBaseline />
        <MainRoutes />
      </BrowserRouter >
    </>
  )
}

export default App
