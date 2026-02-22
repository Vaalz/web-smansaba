import { Box, Container, Typography, Card, CardMedia, CardContent, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import smansabaImage from '../assets/image/smansaba.jpg';
import { Person, CalendarToday } from '@mui/icons-material';

// Dummy data untuk berita
const beritaList = [
  {
    id: 1,
    judul: 'Judul Berita 1',
    slug: 'judul-berita-1',
    foto: '',
    penulis: 'Nama Penulis',
    tanggal: '22 Februari 2026',
  },
  {
    id: 2,
    judul: 'Judul Berita 2',
    slug: 'judul-berita-2',
    foto: '',
    penulis: 'Nama Penulis',
    tanggal: '21 Februari 2026',
  },
  {
    id: 3,
    judul: 'Judul Berita 3',
    slug: 'judul-berita-3',
    foto: '',
    penulis: 'Nama Penulis',
    tanggal: '20 Februari 2026',
  },
  {
    id: 4,
    judul: 'Judul Berita 4',
    slug: 'judul-berita-4',
    foto: '',
    penulis: 'Nama Penulis',
    tanggal: '19 Februari 2026',
  },
  {
    id: 5,
    judul: 'Judul Berita 5',
    slug: 'judul-berita-5',
    foto: '',
    penulis: 'Nama Penulis',
    tanggal: '18 Februari 2026',
  },
  {
    id: 6,
    judul: 'Judul Berita 6',
    slug: 'judul-berita-6',
    foto: '',
    penulis: 'Nama Penulis',
    tanggal: '17 Februari 2026',
  },
  {
    id: 7,
    judul: 'Judul Berita 7',
    slug: 'judul-berita-7',
    foto: '',
    penulis: 'Nama Penulis',
    tanggal: '16 Februari 2026',
  },
  {
    id: 8,
    judul: 'Judul Berita 8',
    slug: 'judul-berita-8',
    foto: '',
    penulis: 'Nama Penulis',
    tanggal: '15 Februari 2026',
  },
  {
    id: 9,
    judul: 'Judul Berita 9',
    slug: 'judul-berita-9',
    foto: '',
    penulis: 'Nama Penulis',
    tanggal: '14 Februari 2026',
  },
  {
    id: 10,
    judul: 'Judul Berita 10',
    slug: 'judul-berita-10',
    foto: '',
    penulis: 'Nama Penulis',
    tanggal: '13 Februari 2026',
  },
];

const BeritaPage = () => {
  const navigate = useNavigate();

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
              <Grid item xs={12} sm={6} md={4} key={berita.id}>
                <Card
                  onClick={() => navigate(`/detail-berita/${berita.slug}`)}
                  sx={{
                    height: '100%',
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
                        src={berita.foto}
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
                      flexGrow: 1,
                      display: 'flex',
                      flexDirection: 'column',
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
                    <Box sx={{ marginTop: 'auto' }}>
                      {/* Penulis */}
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1,
                          marginBottom: '8px',
                        }}
                      >
                        <Person sx={{ fontSize: 18, color: '#666' }} />
                        <Typography
                          variant="body2"
                          sx={{
                            fontSize: '0.9rem',
                            color: '#666',
                          }}
                        >
                          {berita.penulis}
                        </Typography>
                      </Box>

                      {/* Tanggal */}
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1,
                        }}
                      >
                        <CalendarToday sx={{ fontSize: 18, color: '#666' }} />
                        <Typography
                          variant="body2"
                          sx={{
                            fontSize: '0.9rem',
                            color: '#666',
                          }}
                        >
                          {berita.tanggal}
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
};

export default BeritaPage;
