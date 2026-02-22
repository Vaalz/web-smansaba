import { AppBar, Toolbar, Box, Button, Container, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import { useState, useEffect } from 'react';
import logo from '../assets/image/logo.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState('Beranda');
  const [mobileOpen, setMobileOpen] = useState(false);

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

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMenuClick = (item) => {
    setActiveMenu(item);
    setMobileOpen(false);
  };

  const drawer = (
    <Box
      sx={{
        width: 280,
        height: '100%',
        backgroundColor: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '20px',
          borderBottom: '1px solid #e0e0e0',
        }}
      >
        <Box
          component="img"
          src={logo}
          alt="Logo SMANSABA"
          sx={{
            height: '40px',
          }}
        />
        <IconButton onClick={handleDrawerToggle} sx={{ color: '#333' }}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List sx={{ padding: 0 }}>
        {menuItems.map((item) => (
          <ListItem 
            button 
            key={item}
            onClick={() => handleMenuClick(item)}
            sx={{
              padding: '16px 24px',
              borderLeft: activeMenu === item ? '4px solid #34495e' : '4px solid transparent',
              backgroundColor: activeMenu === item ? '#f5f5f5' : 'transparent',
              '&:hover': {
                backgroundColor: '#f5f5f5',
              },
            }}
          >
            <ListItemText 
              primary={item}
              primaryTypographyProps={{
                fontSize: '16px',
                fontWeight: activeMenu === item ? 700 : 500,
                color: activeMenu === item ? '#34495e' : '#333',
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
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
              minHeight: { xs: '64px', md: '80px' },
              padding: { xs: '0 8px', md: '0' },
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
              <Box
                component="img"
                src={logo}
                alt="Logo SMANSABA"
                sx={{
                  height: { xs: '40px', md: '50px' },
                  marginRight: { xs: '12px', md: '20px' },
                }}
              />
            </Box>

            {/* Desktop Menu */}
            <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' }, gap: 1 }}>
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

            {/* Mobile Hamburger Menu */}
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{
                display: { xs: 'block', md: 'none' },
                color: scrolled ? '#333' : '#ffffff',
              }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: 280,
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;
