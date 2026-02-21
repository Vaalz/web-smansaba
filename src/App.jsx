import { Box, CssBaseline } from '@mui/material';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import './App.css';

function App() {
  return (
    <Box>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/beranda" element={<LandingPage />} />
          <Route path="/" element={<Navigate to="/beranda" replace />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;
