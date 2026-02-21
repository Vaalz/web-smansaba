import { AppBar, Toolbar, Box, Button, Container } from '@mui/material';
import { useState, useEffect } from 'react';
import logo from '../assets/image/logo.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState('Beranda');

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const menuItems = [
    'Beranda',
    'Tentang',
    'Guru',
    'Prestasi',
    'Ekstrakurikuler',
    'Berita',
    'Galeri',
    'Kontak',
  ];

  return (
    <AppBar 
      position="fixed"
      sx={{
        backgroundColor: scrolled ? '#ffffff' : 'transparent',
        boxShadow: scrolled ? '0 2px 4px rgba(0,0,0,0.1)' : 'none',
        transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar 
          disableGutters
          sx={{
            minHeight: '80px',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 0 }}>
            <Box
              component="img"
              src={logo}
              alt="Logo SMANSABA"
              sx={{
                height: '50px',
                marginRight: '20px',
              }}
            />
          </Box>
          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
            {menuItems.map((item) => (
              <Button 
                key={item}
                onClick={() => setActiveMenu(item)}
                sx={{
                  color: scrolled ? '#333' : '#ffffff',
                  textTransform: 'none',
                  fontSize: '15px',
                  fontWeight: activeMenu === item ? 700 : 500,
                  padding: '15px 16px',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  borderBottom: activeMenu === item ? '3px solid' : '3px solid transparent',
                  borderColor: activeMenu === item ? (scrolled ? '#34495e' : '#ffffff') : 'transparent',
                  borderRadius: 0,
                  '&:hover': {
                    backgroundColor: scrolled ? '#f5f5f5' : 'rgba(255,255,255,0.1)',
                  },
                }}
              >
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
