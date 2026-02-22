import { Box, Container, Typography, Card, CardContent, Grid, Avatar } from '@mui/material';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import smansabaImage from '../assets/image/smansaba.jpg';
import { Person } from '@mui/icons-material';

// Dummy data untuk guru
const guruList = [
  {
    id: 1,
    nama: 'Nama Guru',
    jabatan: 'Kepala Sekolah',
    mapel: '',
    foto: '',
  },
  {
    id: 2,
    nama: 'Nama Guru',
    jabatan: 'Guru',
    mapel: 'Matematika',
    foto: '',
  },
  {
    id: 3,
    nama: 'Nama Guru',
    jabatan: 'Guru',
    mapel: 'Bahasa Indonesia',
    foto: '',
  },
  {
    id: 4,
    nama: 'Nama Guru',
    jabatan: 'Guru',
    mapel: 'Bahasa Inggris',
    foto: '',
  },
  {
    id: 5,
    nama: 'Nama Guru',
    jabatan: 'Guru',
    mapel: 'Fisika',
    foto: '',
  },
  {
    id: 6,
    nama: 'Nama Guru',
    jabatan: 'Guru',
    mapel: 'Kimia',
    foto: '',
  },
  {
    id: 7,
    nama: 'Nama Guru',
    jabatan: 'Guru',
    mapel: 'Biologi',
    foto: '',
  },
  {
    id: 8,
    nama: 'Nama Guru',
    jabatan: 'Guru',
    mapel: 'Sejarah',
    foto: '',
  },
  {
    id: 9,
    nama: 'Nama Guru',
    jabatan: 'Guru',
    mapel: 'Geografi',
    foto: '',
  },
  {
    id: 10,
    nama: 'Nama Guru',
    jabatan: 'Guru',
    mapel: 'Ekonomi',
    foto: '',
  },
  {
    id: 11,
    nama: 'Nama Guru',
    jabatan: 'Guru',
    mapel: 'Sosiologi',
    foto: '',
  },
  {
    id: 12,
    nama: 'Nama Guru',
    jabatan: 'Guru',
    mapel: 'Seni Budaya',
    foto: '',
  },
];

const GuruPage = () => {
  return (
    <Box>
      <Navbar />
      
      {/* Hero Section */}
      <Box
        sx={{
          minHeight: { xs: '50vh', md: '60vh' },
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
              GURU & TENAGA KEPENDIDIKAN
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Guru Cards Section */}
      <Box
        sx={{
          padding: { xs: '60px 16px', md: '80px 32px' },
          backgroundColor: '#ffffff',
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '1.75rem', sm: '2rem', md: '2.5rem' },
              fontWeight: 700,
              textAlign: 'center',
              marginBottom: { xs: '40px', md: '50px' },
              color: '#333',
            }}
          >
            Daftar Guru
          </Typography>

          <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} justifyContent="center">
            {guruList.map((guru) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={guru.id} sx={{ display: 'flex' }}>
                <Card
                  sx={{
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: { xs: '24px 16px', md: '32px 20px' },
                    borderRadius: '12px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    transition: 'box-shadow 0.3s ease, transform 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.02)',
                      boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
                    },
                  }}
                >
                  {/* Foto Guru */}
                  <Avatar
                    src={guru.foto}
                    sx={{
                      width: { xs: 120, md: 140 },
                      height: { xs: 120, md: 140 },
                      marginBottom: '20px',
                      backgroundColor: '#e0e0e0',
                      border: '4px solid #f5f5f5',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                    }}
                  >
                    <Person sx={{ fontSize: { xs: 60, md: 70 }, color: '#999' }} />
                  </Avatar>

                  <CardContent
                    sx={{
                      padding: 0,
                      textAlign: 'center',
                      width: '100%',
                      '&:last-child': {
                        paddingBottom: 0,
                      },
                    }}
                  >
                    {/* Nama Guru */}
                    <Typography
                      variant="h6"
                      sx={{
                        fontSize: { xs: '1.1rem', md: '1.2rem' },
                        fontWeight: 700,
                        color: '#333',
                        marginBottom: '8px',
                        lineHeight: 1.3,
                      }}
                    >
                      {guru.nama}
                    </Typography>

                    {/* Jabatan */}
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: { xs: '0.9rem', md: '0.95rem' },
                        color: '#666',
                        fontWeight: 600,
                        marginBottom: '4px',
                      }}
                    >
                      {guru.jabatan}
                    </Typography>

                    {/* Mapel */}
                    {guru.mapel && (
                      <Typography
                        variant="body2"
                        sx={{
                          fontSize: { xs: '0.85rem', md: '0.9rem' },
                          color: '#888',
                          fontStyle: 'italic',
                        }}
                      >
                        {guru.mapel}
                      </Typography>
                    )}
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

export default GuruPage;
