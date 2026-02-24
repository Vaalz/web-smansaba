import { Box, Container, Typography, Grid, Paper, Tabs, Tab, Modal, IconButton } from '@mui/material';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import smansabaImage from '../assets/image/smansaba.jpg';
import { Close as CloseIcon } from '@mui/icons-material';

const GaleriPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [openModal, setOpenModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // Dummy data untuk galeri - nanti akan diambil dari API
  const galeriList = [
    {
      id: 1,
      judul: 'Foto Galeri 1',
      foto: '', // Path foto
      kategori: 'SCHOOL',
    },
    {
      id: 2,
      judul: 'Foto Galeri 2',
      foto: '',
      kategori: 'TEACHERS',
    },
    {
      id: 3,
      judul: 'Foto Galeri 3',
      foto: '',
      kategori: 'STUDENTS',
    },
    {
      id: 4,
      judul: 'Foto Galeri 4',
      foto: '',
      kategori: 'CEREMONY',
    },
    {
      id: 5,
      judul: 'Foto Galeri 5',
      foto: '',
      kategori: 'UNIVERSITY CORNER',
    },
    {
      id: 6,
      judul: 'Foto Galeri 6',
      foto: '',
      kategori: 'SCHOOL',
    },
    {
      id: 7,
      judul: 'Foto Galeri 7',
      foto: '',
      kategori: 'TEACHERS',
    },
    {
      id: 8,
      judul: 'Foto Galeri 8',
      foto: '',
      kategori: 'STUDENTS',
    },
  ];

  const categories = ['ALL', 'SCHOOL', 'TEACHERS', 'STUDENTS', 'CEREMONY', 'UNIVERSITY CORNER'];

  const filteredGaleri = selectedCategory === 'ALL' 
    ? galeriList 
    : galeriList.filter(item => item.kategori === selectedCategory);

  const handleCategoryChange = (event, newValue) => {
    setSelectedCategory(newValue);
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedImage(null);
  };

  return (
    <Box>
      <Navbar />
      
      {/* Hero Section */}
      <Box
        sx={{
          minHeight: { xs: '60vh', md: '70vh' },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${smansabaImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          position: 'relative',
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              textAlign: 'center',
              color: '#ffffff',
              padding: { xs: '0 16px', md: '0' },
            }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2rem', sm: '2.75rem', md: '3.5rem' },
                fontWeight: 700,
                textShadow: '2px 2px 8px rgba(0,0,0,0.5)',
                letterSpacing: '2px',
              }}
            >
              GALERI SMANSABA
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Galeri Content Section */}
      <Box
        sx={{
          padding: { xs: '40px 16px 60px', md: '60px 0 80px' },
          backgroundColor: '#fafafa',
          minHeight: '50vh',
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '1.75rem', sm: '2rem', md: '2.25rem' },
              fontWeight: 700,
              textAlign: 'center',
              marginBottom: { xs: '30px', md: '40px' },
              color: '#333',
            }}
          >
            Galeri Foto
          </Typography>

          {/* Category Tabs */}
          <Box sx={{ marginBottom: { xs: '30px', md: '40px' }, display: 'flex', justifyContent: 'center' }}>
            <Paper
              elevation={0}
              sx={{
                backgroundColor: '#ffffff',
                borderRadius: '12px',
                padding: '8px',
                boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
              }}
            >
              <Tabs
                value={selectedCategory}
                onChange={handleCategoryChange}
                variant="scrollable"
                scrollButtons="auto"
                sx={{
                  '& .MuiTab-root': {
                    minHeight: '48px',
                    fontSize: { xs: '0.85rem', sm: '0.9rem', md: '0.95rem' },
                    fontWeight: 600,
                    textTransform: 'none',
                    color: '#666',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      color: '#1976d2',
                    },
                  },
                  '& .Mui-selected': {
                    color: '#1976d2 !important',
                  },
                  '& .MuiTabs-indicator': {
                    backgroundColor: '#1976d2',
                    height: '3px',
                    borderRadius: '3px 3px 0 0',
                  },
                }}
              >
                {categories.map((category) => (
                  <Tab key={category} label={category} value={category} />
                ))}
              </Tabs>
            </Paper>
          </Box>

          {/* Gallery Grid */}
          <Grid 
            container 
            spacing={{ xs: 2, sm: 3, md: 3 }}
            justifyContent="center"
          >
            {filteredGaleri.map((item) => (
              <Grid item xs={6} sm={4} md={3} key={item.id}>
                <Paper
                  onClick={() => handleImageClick(item)}
                  sx={{
                    borderRadius: '12px',
                    overflow: 'hidden',
                    boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    cursor: 'pointer',
                    backgroundColor: '#ffffff',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: '100%',
                      paddingTop: '100%', // 1:1 aspect ratio
                      position: 'relative',
                      backgroundColor: '#e0e0e0',
                    }}
                  >
                    {item.foto ? (
                      <Box
                        component="img"
                        src={item.foto}
                        alt={item.judul}
                        sx={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                        }}
                      />
                    ) : (
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <Typography sx={{ color: '#999', fontSize: '0.85rem' }}>
                          {item.judul}
                        </Typography>
                      </Box>
                    )}
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>

          {/* Empty State */}
          {filteredGaleri.length === 0 && (
            <Box
              sx={{
                textAlign: 'center',
                padding: { xs: '40px 20px', md: '60px 40px' },
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontSize: { xs: '1.1rem', md: '1.3rem' },
                  color: '#999',
                  fontWeight: 500,
                }}
              >
                Belum ada foto di kategori ini
              </Typography>
            </Box>
          )}
        </Container>
      </Box>

      {/* Modal untuk Full Image */}
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            position: 'relative',
            maxWidth: '90vw',
            maxHeight: '90vh',
            outline: 'none',
          }}
        >
          <IconButton
            onClick={handleCloseModal}
            sx={{
              position: 'absolute',
              top: { xs: -40, md: -50 },
              right: { xs: 0, md: 0 },
              color: '#ffffff',
              backgroundColor: 'rgba(0,0,0,0.5)',
              '&:hover': {
                backgroundColor: 'rgba(0,0,0,0.7)',
              },
              zIndex: 1,
            }}
          >
            <CloseIcon />
          </IconButton>
          {selectedImage?.foto ? (
            <Box
              component="img"
              src={selectedImage.foto}
              alt={selectedImage.judul}
              sx={{
                maxWidth: '100%',
                maxHeight: '90vh',
                objectFit: 'contain',
                borderRadius: '8px',
              }}
            />
          ) : (
            <Paper
              sx={{
                padding: { xs: '40px 30px', md: '60px 80px' },
                textAlign: 'center',
                borderRadius: '12px',
              }}
            >
              <Typography sx={{ color: '#666', fontSize: '1rem' }}>
                {selectedImage?.judul}
              </Typography>
              <Typography sx={{ color: '#999', fontSize: '0.9rem', marginTop: '8px' }}>
                Preview foto akan ditampilkan di sini
              </Typography>
            </Paper>
          )}
        </Box>
      </Modal>

      <Footer />
    </Box>
  );
};

export default GaleriPage;
