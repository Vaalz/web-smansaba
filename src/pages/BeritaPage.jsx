import { Box, Container, Typography, Card, CardMedia, CardContent, Grid, CircularProgress } from '@mui/material';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import smansabaImage from '../assets/image/smansaba.jpg';
import { Person, CalendarToday } from '@mui/icons-material';
import { getBeritaList, getImageUrl } from '../services/api';

const BeritaPage = () => {
  const navigate = useNavigate();
  const [beritaList, setBeritaList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBerita();
  }, []);

  const fetchBerita = async () => {
    try {
      const response = await getBeritaList();
      setBeritaList(response.data.data || []);
    } catch (error) {
      console.error('Error fetching berita:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('id-ID', options);
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
              BERITA SMANSABA
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Berita Content Section */}
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
            Berita Terbaru
          </Typography>

          {loading ? (
            <Box sx={{ display: 'flex', justifyContent: 'center', py: 8 }}>
              <CircularProgress />
            </Box>
          ) : beritaList.length === 0 ? (
            <Typography sx={{ textAlign: 'center', py: 8, color: '#666' }}>
              Belum ada berita
            </Typography>
          ) : (
            <Grid 
              container 
              spacing={{ xs: 3, sm: 3, md: 4 }}
              justifyContent="center"
              sx={{
                maxWidth: '1400px',
                margin: '0 auto',
              }}
            >
              {beritaList.map((berita) => (
              <Grid item xs={12} sm={6} md={4} key={berita.id} sx={{ display: 'flex' }}>
                <Card
                  onClick={() => navigate(`/detail-berita/${berita.slug}`)}
                  sx={{
                    height: '100%',
                    minHeight: { xs: '440px', sm: '460px' },
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: '12px',
                    boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
                    transition: 'box-shadow 0.3s ease, transform 0.3s ease',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                    },
                  }}
                >
                  {/* Foto Berita */}
                  <CardMedia
                    component="div"
                    sx={{
                      height: 200,
                      backgroundColor: '#e0e0e0',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative',
                    }}
                  >
                    {berita.foto ? (
                      <Box
                        component="img"
                        src={getImageUrl(berita.foto)}
                        alt={berita.judul}
                        sx={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                        }}
                      />
                    ) : (
                      <Typography sx={{ color: '#999', fontSize: '0.9rem' }}>
                        Foto Berita
                      </Typography>
                    )}
                  </CardMedia>

                  {/* Content */}
                  <CardContent
                    sx={{
                      padding: { xs: '20px', md: '24px' },
                      height: { xs: '220px', sm: '240px' },
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                    }}
                  >
                    {/* Judul */}
                    <Typography
                      variant="h6"
                      sx={{
                        fontSize: { xs: '1.1rem', md: '1.2rem' },
                        fontWeight: 700,
                        color: '#333',
                        marginBottom: '16px',
                        lineHeight: 1.4,
                        minHeight: { xs: '60px', md: '68px' },
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                      }}
                    >
                      {berita.judul}
                    </Typography>

                    {/* Meta Info */}
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        paddingTop: '12px',
                        borderTop: '1px solid #eee',
                        minHeight: '50px',
                      }}
                    >
                      {/* Penulis */}
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          maxWidth: '50%',
                        }}
                      >
                        <Person sx={{ fontSize: 18, color: '#999', flexShrink: 0 }} />
                        <Typography
                          variant="body2"
                          sx={{
                            fontSize: '0.85rem',
                            color: '#555',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                          }}
                        >
                          {berita.penulis}
                        </Typography>
                      </Box>

                      {/* Tanggal */}
                      <Typography
                        variant="body2"
                        sx={{
                          fontSize: '0.85rem',
                          color: '#999',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '4px',
                          flexShrink: 0,
                        }}
                      >
                        <CalendarToday sx={{ fontSize: 16 }} />
                        {formatDate(berita.tanggal)}
                      </Typography>
                    </Box>
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

export default BeritaPage;
