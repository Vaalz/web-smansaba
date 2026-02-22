import { Box, CssBaseline } from '@mui/material';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import TentangPage from './pages/TentangPage';
import GuruPage from './pages/GuruPage';
import PrestasiPage from './pages/PrestasiPage';
import EkstrakurikulerPage from './pages/EkstrakurikulerPage';
import DetailEkstrakurikulerPage from './pages/DetailEkstrakurikulerPage';
import BeritaPage from './pages/BeritaPage';
import DetailBeritaPage from './pages/DetailBeritaPage';
import GaleriPage from './pages/GaleriPage';
import KontakPage from './pages/KontakPage';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

function App() {
  return (
    <Box>
      <CssBaseline />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/beranda" element={<LandingPage />} />
          <Route path="/tentang" element={<TentangPage />} />
          <Route path="/guru" element={<GuruPage />} />
          <Route path="/prestasi" element={<PrestasiPage />} />
          <Route path="/ekstrakurikuler" element={<EkstrakurikulerPage />} />
          <Route path="/ekstrakurikuler/detail-ekstrakurikuler/:id" element={<DetailEkstrakurikulerPage />} />
          <Route path="/berita" element={<BeritaPage />} />
          <Route path="/detail-berita/:slug" element={<DetailBeritaPage />} />
          <Route path="/galeri" element={<GaleriPage />} />
          <Route path="/kontak" element={<KontakPage />} />
          <Route path="/" element={<Navigate to="/beranda" replace />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;
