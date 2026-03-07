import { Box, Container, Typography, Card, CardContent, Grid, CircularProgress } from '@mui/material';
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import smansabaImage from '../assets/image/smansaba.jpg';
import { EmojiEvents } from '@mui/icons-material';
import { getPrestasiList } from '../services/api';

const PrestasiPage = () => {
  const [prestasiList, setPrestasiList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPrestasi();
  }, []);

  const fetchPrestasi = async () => {
    try {
      const response = await getPrestasiList();
      setPrestasiList(response.data.data || []);
    } catch (error) {
      console.error('Error fetching prestasi:', error);
    } finally {
      setLoading(false);
    }
  };

  // Function to get color based on tingkat
  const getTingkatColor = (tingkat) => {
    switch (tingkat.toLowerCase()) {
      case 'nasional':
        return '#d32f2f'; // Red
      case 'provinsi':
        return '#1976d2'; // Blue
      case 'kabupaten':
        return '#2e7d32'; // Green
      default:
        return '#757575'; // Gray
    }
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
              PRESTASI SMANSABA
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Prestasi Content Section */}
      <Box
        sx={{
          padding: { xs: '40px 16px 60px', md: '60px 0 80px' },
          backgroundColor: '#fafafa',
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '1.75rem', sm: '2rem', md: '2.25rem' },
              fontWeight: 700,
              textAlign: 'center',
              marginBottom: { xs: '40px', md: '50px' },
              color: '#333',
            }}
          >
            Daftar Prestasi
          </Typography>

          {loading ? (
            <Box sx={{ display: 'flex', justifyContent: 'center', py: 8 }}>
              <CircularProgress />
            </Box>
          ) : prestasiList.length === 0 ? (
            <Typography sx={{ textAlign: 'center', py: 8, color: '#666' }}>
              Belum ada data prestasi
            </Typography>
          ) : (
          <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} justifyContent="center">
            {prestasiList.map((prestasi) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={prestasi.id}>
                <Card
                  sx={{
                    height: '100%',
                    minHeight: { xs: '360px', sm: '380px' },
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: '12px',
                    boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
                    transition: 'box-shadow 0.3s ease, transform 0.3s ease',
                    overflow: 'hidden',
                    borderTop: `4px solid ${getTingkatColor(prestasi.tingkat)}`,
                    '&:hover': {
                      transform: 'scale(1.02)',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.12)',
                      '& .trophy-icon': {
                        transform: 'scale(1.15) rotate(10deg)',
                      },
                    },
                  }}
                >
                  <CardContent
                    sx={{
                      padding: { xs: '24px 20px', md: '28px 24px' },
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                    }}
                  >
                    {/* Icon Piala */}
                    <Box
                      sx={{
                        width: 80,
                        height: 80,
                        borderRadius: '50%',
                        backgroundColor: `${getTingkatColor(prestasi.tingkat)}15`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '20px',
                      }}
                    >
                      <EmojiEvents 
                        className="trophy-icon"
                        sx={{ 
                          fontSize: 48, 
                          color: getTingkatColor(prestasi.tingkat),
                          transition: 'transform 0.3s ease',
                        }} 
                      />
                    </Box>

                    {/* Badge Tingkat */}
                    <Box
                      sx={{
                        backgroundColor: getTingkatColor(prestasi.tingkat),
                        color: '#fff',
                        padding: '6px 16px',
                        borderRadius: '20px',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        marginBottom: '16px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                      }}
                    >
                      {prestasi.tingkat}
                    </Box>

                    {/* Judul Prestasi */}
                    <Typography
                      variant="h6"
                      sx={{
                        fontSize: { xs: '1.1rem', md: '1.2rem' },
                        fontWeight: 700,
                        color: '#333',
                        marginBottom: '12px',
                        lineHeight: 1.4,
                        minHeight: { xs: '60px', md: '68px' },
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                      }}
                    >
                      {prestasi.judul}
                    </Typography>

                    {/* Kategori */}
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: { xs: '0.9rem', md: '0.95rem' },
                        color: '#666',
                        marginBottom: '8px',
                        minHeight: '24px',
                        display: '-webkit-box',
                        WebkitLineClamp: 1,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                      }}
                    >
                      {prestasi.kategori}
                    </Typography>

                    {/* Tahun */}
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: { xs: '0.85rem', md: '0.9rem' },
                        color: '#999',
                        fontStyle: 'italic',
                      }}
                    >
                      Tahun {prestasi.tahun}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          )}
        </Container>
      </Box>

      <Footer />
    </Box>
  );
};

export default PrestasiPage;
