import { Box, Container, Typography, Card, CardContent, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import smansabaImage from '../assets/image/smansaba.jpg';
import { Sports, MusicNote, Palette, Science, MenuBook, Group, EmojiEvents, Language } from '@mui/icons-material';

// Dummy data untuk ekstrakurikuler
const ekstrakurikulerList = [
  {
    id: 1,
    nama: 'Nama Ekstrakurikuler',
    kategori: 'Olahraga',
    deskripsi: 'Deskripsi singkat ekstrakurikuler',
    icon: 'Sports',
  },
  {
    id: 2,
    nama: 'Nama Ekstrakurikuler',
    kategori: 'Seni',
    deskripsi: 'Deskripsi singkat ekstrakurikuler',
    icon: 'MusicNote',
  },
  {
    id: 3,
    nama: 'Nama Ekstrakurikuler',
    kategori: 'Seni',
    deskripsi: 'Deskripsi singkat ekstrakurikuler',
    icon: 'Palette',
  },
  {
    id: 4,
    nama: 'Nama Ekstrakurikuler',
    kategori: 'Akademik',
    deskripsi: 'Deskripsi singkat ekstrakurikuler',
    icon: 'Science',
  },
  {
    id: 5,
    nama: 'Nama Ekstrakurikuler',
    kategori: 'Akademik',
    deskripsi: 'Deskripsi singkat ekstrakurikuler',
    icon: 'MenuBook',
  },
  {
    id: 6,
    nama: 'Nama Ekstrakurikuler',
    kategori: 'Organisasi',
    deskripsi: 'Deskripsi singkat ekstrakurikuler',
    icon: 'Group',
  },
  {
    id: 7,
    nama: 'Nama Ekstrakurikuler',
    kategori: 'Olahraga',
    deskripsi: 'Deskripsi singkat ekstrakurikuler',
    icon: 'EmojiEvents',
  },
  {
    id: 8,
    nama: 'Nama Ekstrakurikuler',
    kategori: 'Akademik',
    deskripsi: 'Deskripsi singkat ekstrakurikuler',
    icon: 'Language',
  },
];

const EkstrakurikulerPage = () => {
  const navigate = useNavigate();

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

          <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} justifyContent="center">
            {ekstrakurikulerList.map((ekskul) => {
              const IconComponent = getIcon(ekskul.icon);
              
              return (
                <Grid item xs={12} sm={6} md={4} lg={3} key={ekskul.id}>
                  <Card
                    onClick={() => navigate(`/ekstrakurikuler/detail-ekstrakurikuler/${ekskul.id}`)}
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      borderRadius: '12px',
                      boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
                      transition: 'box-shadow 0.3s ease, transform 0.3s ease',
                      overflow: 'hidden',
                      borderTop: '4px solid #1976d2',
                      cursor: 'pointer',
                      '&:hover': {
                        transform: 'scale(1.02)',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.12)',
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
                        flexGrow: 1,
                      }}
                    >
                      {/* Icon/Logo Ekstrakurikuler */}
                      <Box
                        sx={{
                          width: 80,
                          height: 80,
                          borderRadius: '50%',
                          backgroundColor: '#f5f5f5',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginBottom: '20px',
                        }}
                      >
                        <IconComponent 
                          sx={{ 
                            fontSize: 48, 
                            color: '#757575',
                          }} 
                        />
                      </Box>

                      {/* Badge Kategori */}
                      <Box
                        sx={{
                          backgroundColor: '#e0e0e0',
                          color: '#555',
                          padding: '6px 16px',
                          borderRadius: '20px',
                          fontSize: '0.85rem',
                          fontWeight: 600,
                          marginBottom: '16px',
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
                          fontSize: { xs: '1.1rem', md: '1.2rem' },
                          fontWeight: 700,
                          color: '#333',
                          marginBottom: '12px',
                          lineHeight: 1.4,
                        }}
                      >
                        {ekskul.nama}
                      </Typography>

                      {/* Deskripsi */}
                      <Typography
                        variant="body2"
                        sx={{
                          fontSize: { xs: '0.9rem', md: '0.95rem' },
                          color: '#666',
                          lineHeight: 1.6,
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
        </Container>
      </Box>

      <Footer />
    </Box>
  );
};

export default EkstrakurikulerPage;
