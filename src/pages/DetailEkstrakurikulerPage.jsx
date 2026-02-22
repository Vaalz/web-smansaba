import { Box, Container, Typography, Paper, Grid, Card, CardMedia } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowBack, Person, EmojiEvents } from '@mui/icons-material';
import { IconButton } from '@mui/material';

const DetailEkstrakurikulerPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Dummy data - nanti akan diambil dari API berdasarkan ID
  const ekstrakurikuler = {
    id: id,
    nama: 'Nama Ekstrakurikuler',
    logo: '', // Path logo ekstrakurikuler
    pembina: 'Nama Pembina',
    tentang: 'Deskripsi lengkap tentang ekstrakurikuler ini. Konten akan dikelola melalui sistem admin.',
    sejarah: 'Sejarah dan perkembangan ekstrakurikuler ini dari awal berdiri hingga sekarang. Konten akan dikelola melalui sistem admin.',
    kegiatan: [
      'Kegiatan 1 - Deskripsi kegiatan',
      'Kegiatan 2 - Deskripsi kegiatan',
      'Kegiatan 3 - Deskripsi kegiatan',
    ],
    galeri: [
      { id: 1, image: '', caption: 'Foto Kegiatan 1' },
      { id: 2, image: '', caption: 'Foto Kegiatan 2' },
      { id: 3, image: '', caption: 'Foto Kegiatan 3' },
      { id: 4, image: '', caption: 'Foto Kegiatan 4' },
    ],
    prestasi: [
      { id: 1, judul: 'Judul Prestasi', tingkat: 'Nasional', tahun: '2024' },
      { id: 2, judul: 'Judul Prestasi', tingkat: 'Provinsi', tahun: '2024' },
      { id: 3, judul: 'Judul Prestasi', tingkat: 'Kabupaten', tahun: '2023' },
    ],
  };

  return (
    <Box>
      <Navbar />
      
      {/* Header Section with Logo and Back Button */}
      <Box
        sx={{
          backgroundColor: '#1976d2',
          color: '#fff',
          padding: { xs: '100px 16px 40px', md: '120px 0 60px' },
          position: 'relative',
        }}
      >
        <Container maxWidth="lg">
          <IconButton
            onClick={() => navigate('/ekstrakurikuler')}
            sx={{
              position: 'absolute',
              top: { xs: '80px', md: '100px' },
              left: { xs: '16px', md: '24px' },
              color: '#fff',
              backgroundColor: 'rgba(255,255,255,0.1)',
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.2)',
              },
            }}
          >
            <ArrowBack />
          </IconButton>

          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: 'center',
              gap: 4,
            }}
          >
            {/* Logo */}
            <Box
              sx={{
                width: { xs: 120, md: 150 },
                height: { xs: 120, md: 150 },
                borderRadius: '50%',
                backgroundColor: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
                flexShrink: 0,
              }}
            >
              {ekstrakurikuler.logo ? (
                <Box
                  component="img"
                  src={ekstrakurikuler.logo}
                  alt={ekstrakurikuler.nama}
                  sx={{
                    width: '80%',
                    height: '80%',
                    objectFit: 'contain',
                  }}
                />
              ) : (
                <Typography
                  sx={{
                    fontSize: '3rem',
                    color: '#1976d2',
                    fontWeight: 700,
                  }}
                >
                  {ekstrakurikuler.nama.charAt(0)}
                </Typography>
              )}
            </Box>

            {/* Title and Pembina */}
            <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '1.75rem', sm: '2.25rem', md: '2.75rem' },
                  fontWeight: 700,
                  marginBottom: '12px',
                }}
              >
                {ekstrakurikuler.nama}
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  justifyContent: { xs: 'center', md: 'flex-start' },
                  backgroundColor: 'rgba(255,255,255,0.15)',
                  padding: '8px 16px',
                  borderRadius: '8px',
                  display: 'inline-flex',
                }}
              >
                <Person />
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: { xs: '1rem', md: '1.1rem' },
                    fontWeight: 500,
                  }}
                >
                  Pembina: {ekstrakurikuler.pembina}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Content Sections */}
      <Box sx={{ backgroundColor: '#fafafa', padding: { xs: '40px 16px', md: '60px 0' } }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {/* Tentang */}
            <Grid item xs={12}>
              <Paper
                elevation={0}
                sx={{
                  padding: { xs: '24px 20px', md: '32px 40px' },
                  backgroundColor: '#ffffff',
                  borderRadius: '12px',
                  borderLeft: '4px solid #1976d2',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: { xs: '1.25rem', md: '1.5rem' },
                    fontWeight: 700,
                    marginBottom: '16px',
                    color: '#1976d2',
                  }}
                >
                  Tentang
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: '0.95rem', md: '1rem' },
                    lineHeight: 1.8,
                    color: '#555',
                    textAlign: 'justify',
                  }}
                >
                  {ekstrakurikuler.tentang}
                </Typography>
              </Paper>
            </Grid>

            {/* Sejarah */}
            <Grid item xs={12}>
              <Paper
                elevation={0}
                sx={{
                  padding: { xs: '24px 20px', md: '32px 40px' },
                  backgroundColor: '#ffffff',
                  borderRadius: '12px',
                  borderLeft: '4px solid #2e7d32',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: { xs: '1.25rem', md: '1.5rem' },
                    fontWeight: 700,
                    marginBottom: '16px',
                    color: '#2e7d32',
                  }}
                >
                  Sejarah
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: '0.95rem', md: '1rem' },
                    lineHeight: 1.8,
                    color: '#555',
                    textAlign: 'justify',
                  }}
                >
                  {ekstrakurikuler.sejarah}
                </Typography>
              </Paper>
            </Grid>

            {/* Kegiatan */}
            <Grid item xs={12}>
              <Paper
                elevation={0}
                sx={{
                  padding: { xs: '24px 20px', md: '32px 40px' },
                  backgroundColor: '#ffffff',
                  borderRadius: '12px',
                  borderLeft: '4px solid #ed6c02',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: { xs: '1.25rem', md: '1.5rem' },
                    fontWeight: 700,
                    marginBottom: '16px',
                    color: '#ed6c02',
                  }}
                >
                  Kegiatan
                </Typography>
                <Box component="ul" sx={{ paddingLeft: '24px', margin: 0 }}>
                  {ekstrakurikuler.kegiatan.map((kegiatan, index) => (
                    <Typography
                      key={index}
                      component="li"
                      sx={{
                        fontSize: { xs: '0.95rem', md: '1rem' },
                        lineHeight: 1.8,
                        marginBottom: '12px',
                        color: '#555',
                      }}
                    >
                      {kegiatan}
                    </Typography>
                  ))}
                </Box>
              </Paper>
            </Grid>

            {/* Galeri */}
            <Grid item xs={12}>
              <Paper
                elevation={0}
                sx={{
                  padding: { xs: '24px 20px', md: '32px 40px' },
                  backgroundColor: '#ffffff',
                  borderRadius: '12px',
                  borderLeft: '4px solid #9c27b0',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: { xs: '1.25rem', md: '1.5rem' },
                    fontWeight: 700,
                    marginBottom: '24px',
                    color: '#9c27b0',
                  }}
                >
                  Galeri
                </Typography>
                <Grid container spacing={2}>
                  {ekstrakurikuler.galeri.map((foto) => (
                    <Grid item xs={12} sm={6} md={3} key={foto.id}>
                      <Card
                        sx={{
                          borderRadius: '12px',
                          overflow: 'hidden',
                          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                          '&:hover': {
                            transform: 'scale(1.05)',
                            boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
                          },
                        }}
                      >
                        <CardMedia
                          component="div"
                          sx={{
                            height: 200,
                            backgroundColor: '#e0e0e0',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          {foto.image ? (
                            <Box
                              component="img"
                              src={foto.image}
                              alt={foto.caption}
                              sx={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                              }}
                            />
                          ) : (
                            <Typography sx={{ color: '#999' }}>{foto.caption}</Typography>
                          )}
                        </CardMedia>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Paper>
            </Grid>

            {/* Prestasi */}
            <Grid item xs={12}>
              <Paper
                elevation={0}
                sx={{
                  padding: { xs: '24px 20px', md: '32px 40px' },
                  backgroundColor: '#ffffff',
                  borderRadius: '12px',
                  borderLeft: '4px solid #d32f2f',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: { xs: '1.25rem', md: '1.5rem' },
                    fontWeight: 700,
                    marginBottom: '24px',
                    color: '#d32f2f',
                  }}
                >
                  Prestasi
                </Typography>
                <Grid container spacing={2}>
                  {ekstrakurikuler.prestasi.map((prestasi) => (
                    <Grid item xs={12} sm={6} md={4} key={prestasi.id}>
                      <Box
                        sx={{
                          padding: '16px',
                          backgroundColor: '#fafafa',
                          borderRadius: '8px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: 2,
                        }}
                      >
                        <EmojiEvents sx={{ fontSize: 40, color: '#d32f2f' }} />
                        <Box>
                          <Typography
                            sx={{
                              fontSize: '0.95rem',
                              fontWeight: 700,
                              color: '#333',
                              marginBottom: '4px',
                            }}
                          >
                            {prestasi.judul}
                          </Typography>
                          <Typography sx={{ fontSize: '0.85rem', color: '#666' }}>
                            {prestasi.tingkat} • {prestasi.tahun}
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
};

export default DetailEkstrakurikulerPage;
