import { AppBar, Toolbar, Box, Button, Container, IconButton, Drawer, List, ListItem, ListItemText, Menu, MenuItem, Collapse } from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon, ExpandMore as ExpandMoreIcon, ExpandLess as ExpandLessIcon } from '@mui/icons-material';
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/image/logo.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

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
    { label: 'Beranda', path: '/beranda' },
    { label: 'Tentang', path: '/tentang' },
    { 
      label: 'Akademik', 
      path: '#',
      dropdown: [
        { label: 'Guru & Staff', path: '/guru' },
        { label: 'Materi Pembelajaran', path: '/course' },
      ]
    },
    { label: 'Prestasi', path: '/prestasi' },
    { label: 'Ekstrakurikuler', path: '/ekstrakurikuler' },
    { label: 'Berita', path: '/berita' },
    { label: 'Galeri', path: '/galeri' },
    { label: 'Kontak', path: '/kontak' },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
    if (mobileOpen) {
      setMobileSubmenuOpen(null); // Reset submenu saat drawer ditutup
    }
  };

  const handleMenuClick = (item) => {
    // Untuk menu biasa (non-dropdown), langsung navigate
    if (!item.dropdown && item.path !== '#') {
      navigate(item.path);
      setMobileOpen(false);
      handleCloseDropdown();
    }
  };

  const handleMobileMenuClick = (item) => {
    if (item.dropdown) {
      // Toggle submenu untuk mobile
      setMobileSubmenuOpen(mobileSubmenuOpen === item.label ? null : item.label);
    } else if (item.path !== '#') {
      navigate(item.path);
      setMobileOpen(false);
      setMobileSubmenuOpen(null);
    }
  };

  const handleMenuHover = (item, event) => {
    // Untuk menu dengan dropdown, buka saat hover
    if (item.dropdown) {
      setAnchorEl(event.currentTarget);
      setOpenDropdown(item.label);
    }
  };

  const handleMenuLeave = () => {
    // Delay penutupan agar user bisa pindah ke dropdown menu
    // Tidak langsung tutup agar smooth transition
  };

  const handleDropdownItemClick = (path) => {
    navigate(path);
    handleCloseDropdown();
    setMobileOpen(false);
  };

  const handleCloseDropdown = () => {
    setAnchorEl(null);
    setOpenDropdown(null);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  const isDropdownActive = (dropdown) => {
    if (!dropdown) return false;
    return dropdown.some(item => location.pathname === item.path);
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
          onClick={() => {
            navigate('/beranda');
            setMobileOpen(false);
          }}
          sx={{
            height: '40px',
            cursor: 'pointer',
          }}
        />
        <IconButton onClick={handleDrawerToggle} sx={{ color: '#333' }}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List sx={{ padding: 0 }}>
        {menuItems.map((item) => (
          <Box key={item.label}>
            <ListItem 
              button 
              onClick={() => handleMobileMenuClick(item)}
              sx={{
                padding: '16px 24px',
                borderLeft: isActive(item.path) || isDropdownActive(item.dropdown) ? '4px solid #34495e' : '4px solid transparent',
                backgroundColor: isActive(item.path) || isDropdownActive(item.dropdown) ? '#f5f5f5' : 'transparent',
                '&:hover': {
                  backgroundColor: '#f5f5f5',
                },
              }}
            >
              <ListItemText 
                primary={item.label}
                primaryTypographyProps={{
                  fontSize: '16px',
                  fontWeight: isActive(item.path) || isDropdownActive(item.dropdown) ? 700 : 500,
                  color: isActive(item.path) || isDropdownActive(item.dropdown) ? '#34495e' : '#333',
                }}
              />
              {item.dropdown && (
                mobileSubmenuOpen === item.label ? 
                  <ExpandLessIcon sx={{ color: '#34495e' }} /> : 
                  <ExpandMoreIcon sx={{ color: '#666' }} />
              )}
            </ListItem>
            {/* Dropdown items for mobile */}
            {item.dropdown && (
              <Collapse in={mobileSubmenuOpen === item.label} timeout="auto" unmountOnExit>
                <Box sx={{ backgroundColor: '#fafafa' }}>
                  {item.dropdown.map((subItem) => (
                    <ListItem
                      button
                      key={subItem.label}
                      onClick={() => handleDropdownItemClick(subItem.path)}
                      sx={{
                        padding: '12px 24px 12px 48px',
                        borderLeft: isActive(subItem.path) ? '4px solid #34495e' : '4px solid transparent',
                        backgroundColor: isActive(subItem.path) ? '#e8f4f8' : 'transparent',
                        '&:hover': {
                          backgroundColor: '#e8f4f8',
                        },
                      }}
                    >
                      <ListItemText
                        primary={subItem.label}
                        primaryTypographyProps={{
                          fontSize: '14px',
                          fontWeight: isActive(subItem.path) ? 600 : 400,
                          color: isActive(subItem.path) ? '#34495e' : '#666',
                        }}
                      />
                    </ListItem>
                  ))}
                </Box>
              </Collapse>
            )}
          </Box>
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
                onClick={() => navigate('/beranda')}
                sx={{
                  height: { xs: '40px', md: '50px' },
                  marginRight: { xs: '12px', md: '20px' },
                  cursor: 'pointer',
                }}
              />
            </Box>

            {/* Desktop Menu */}
            <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' }, gap: 1 }}>
              {menuItems.map((item) => (
                <Box 
                  key={item.label} 
                  sx={{ position: 'relative' }}
                  onMouseEnter={(e) => handleMenuHover(item, e)}
                  onMouseLeave={item.dropdown ? undefined : handleCloseDropdown}
                >
                  <Button 
                    onClick={() => handleMenuClick(item)}
                    endIcon={item.dropdown ? <ExpandMoreIcon /> : null}
                    sx={{
                      color: scrolled ? '#333' : '#ffffff',
                      textTransform: 'none',
                      fontSize: '15px',
                      fontWeight: isActive(item.path) || isDropdownActive(item.dropdown) ? 700 : 500,
                      padding: '15px 16px',
                      transition: 'all 0.3s ease',
                      position: 'relative',
                      borderBottom: isActive(item.path) || isDropdownActive(item.dropdown) ? '3px solid' : '3px solid transparent',
                      borderColor: (isActive(item.path) || isDropdownActive(item.dropdown)) ? (scrolled ? '#34495e' : '#ffffff') : 'transparent',
                      borderRadius: 0,
                      '&:hover': {
                        backgroundColor: scrolled ? '#f5f5f5' : 'rgba(255,255,255,0.1)',
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                  {/* Dropdown Menu */}
                  {item.dropdown && (
                    <Menu
                      anchorEl={anchorEl}
                      open={openDropdown === item.label}
                      onClose={handleCloseDropdown}
                      MenuListProps={{
                        onMouseLeave: handleCloseDropdown,
                      }}
                      disableScrollLock
                      disableAutoFocusItem
                      disableRestoreFocus
                      sx={{
                        pointerEvents: 'none',
                        '& .MuiPaper-root': {
                          pointerEvents: 'auto',
                          marginTop: '0px',
                          minWidth: '220px',
                          boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
                          borderRadius: '8px',
                        },
                        '& .MuiBackdrop-root': {
                          display: 'none',
                        },
                      }}
                      anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                      }}
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                      }}
                    >
                      {item.dropdown.map((subItem) => (
                        <MenuItem
                          key={subItem.label}
                          onClick={() => handleDropdownItemClick(subItem.path)}
                          sx={{
                            fontSize: '14px',
                            fontWeight: isActive(subItem.path) ? 600 : 400,
                            color: isActive(subItem.path) ? '#34495e' : '#333',
                            backgroundColor: isActive(subItem.path) ? '#f5f5f5' : 'transparent',
                            padding: '12px 20px',
                            '&:hover': {
                              backgroundColor: '#e8f4f8',
                              color: '#1976d2',
                            },
                          }}
                        >
                          {subItem.label}
                        </MenuItem>
                      ))}
                    </Menu>
                  )}
                </Box>
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
