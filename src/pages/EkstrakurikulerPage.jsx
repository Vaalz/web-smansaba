import { Box, Container, Typography, Card, CardContent, Grid, CircularProgress, Skeleton } from '@mui/material';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import smansabaImage from '../assets/image/smansaba.jpg';
import { Sports, MusicNote, Palette, Science, MenuBook, Group, EmojiEvents, Language } from '@mui/icons-material';
import { getEkstrakurikulerList } from '../services/api';

const EkstrakurikulerPage = () => {
  const navigate = useNavigate();
  const [ekstrakurikulerList, setEkstrakurikulerList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEkstrakurikuler();
  }, []);

  const fetchEkstrakurikuler = async () => {
    try {
      const response = await getEkstrakurikulerList();
      console.log('API Response:', response);
      console.log('Ekstrakurikuler Data:', response.data.data);
      setEkstrakurikulerList(response.data.data || []);
    } catch (error) {
      console.error('Error fetching ekstrakurikuler:', error);
      console.error('Error details:', error.response || error.message);
    } finally {
      setLoading(false);
    }
  };

  // Function to get icon component based on icon name
  const getIcon = (iconName) => {
    const icons = {
      Sports: Sports,
      MusicNote: MusicNote,
      Palette: Palette,
      Science: Science,
      MenuBook: MenuBook,
      Group: Group,
      EmojiEvents: EmojiEvents,
      Language: Language,
    };
    return icons[iconName] || Sports;
  };

  // Skeleton Loading Component
  const SkeletonCard = () => (
    <Grid item xs={12} sm={6} md={4}>
      <Card
        sx={{
          height: '220px',
          width: '200px',
          borderRadius: '12px',
          borderTop: '4px solid #1976d2',
          overflow: 'hidden',
        }}
      >
        <CardContent
          sx={{
            padding: '20px 16px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            height: '100%',
          }}
        >
          <Skeleton variant="circular" width={70} height={70} sx={{ mb: 1.5 }} />
          <Skeleton variant="rectangular" width="60%" height={24} sx={{ mb: 1.25, borderRadius: '20px' }} />
          <Skeleton variant="text" width="90%" height={28} sx={{ mb: 1 }} />
          <Skeleton variant="text" width="100%" height={20} sx={{ mb: 0.5 }} />
          <Skeleton variant="text" width="95%" height={20} sx={{ mb: 0.5 }} />
          <Skeleton variant="text" width="85%" height={20} />
        </CardContent>
      </Card>
    </Grid>
  );

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
              EKSTRAKURIKULER SMANSABA
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Ekstrakurikuler Content Section */}
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
            Daftar Ekstrakurikuler
          </Typography>

          {loading ? (
            <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} justifyContent="center">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <SkeletonCard key={item} />
              ))}
            </Grid>
          ) : ekstrakurikulerList.length === 0 ? (
            <Typography sx={{ textAlign: 'center', py: 8, color: '#666' }}>
              Belum ada data ekstrakurikuler
            </Typography>
          ) : (
          <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} justifyContent="center">
            {ekstrakurikulerList.map((ekskul) => {
              const IconComponent = getIcon(ekskul.icon);
              
              return (
                <Grid item xs={12} sm={6} md={4} key={ekskul.id}>
                  <Card
                    onClick={() => navigate(`/ekstrakurikuler/detail-ekstrakurikuler/${ekskul.id}`)}
                    sx={{
                      height: '220px',
                      width: '200px',
                      display: 'flex',
                      flexDirection: 'column',
                      borderRadius: '12px',
                      boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
                      transition: 'box-shadow 0.3s ease, transform 0.3s ease',
                      overflow: 'hidden',
                      borderTop: '4px solid #1976d2',
                      cursor: 'pointer',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
                      },
                    }}
                  >
                    <CardContent
                      sx={{
                        padding: '20px 16px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center',
                        height: '100%',
                      }}
                    >
                      {/* Icon/Logo Ekstrakurikuler */}
                      <Box
                        sx={{
                          width: 50,
                          height: 70,
                          borderRadius: '50%',
                          backgroundColor: '#f5f5f5',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginBottom: '12px',
                        }}
                      >
                        <IconComponent 
                          sx={{ 
                            fontSize: 35, 
                            color: '#757575',
                          }} 
                        />
                      </Box>

                      {/* Badge Kategori */}
                      <Box
                        sx={{
                          backgroundColor: '#e0e0e0',
                          color: '#555',
                          padding: '4px 12px',
                          borderRadius: '20px',
                          fontSize: '0.75rem',
                          fontWeight: 600,
                          marginBottom: '10px',
                          textTransform: 'uppercase',
                          letterSpacing: '0.5px',
                        }}
                      >
                        {ekskul.kategori}
                      </Box>

                      {/* Nama Ekstrakurikuler */}
                      <Typography
                        variant="h6"
                        sx={{
                          fontSize: '1.1rem',
                          fontWeight: 700,
                          color: '#333',
                          marginBottom: '8px',
                          lineHeight: 1.3,
                          height: '55px',
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                        }}
                      >
                        {ekskul.nama}
                      </Typography>

                      {/* Deskripsi */}
                      <Typography
                        variant="body2"
                        sx={{
                          fontSize: '0.9rem',
                          color: '#666',
                          lineHeight: 1.5,
                          height: '81px',
                          display: '-webkit-box',
                          WebkitLineClamp: 4,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                        }}
                      >
                        {ekskul.deskripsi}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
          )}
        </Container>
      </Box>

      <Footer />
    </Box>
  );
};

export default EkstrakurikulerPage;
