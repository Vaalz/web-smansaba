import { Box, Container, Typography, Paper, Grid, Card, CardMedia, CircularProgress, Avatar, Chip } from '@mui/material';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowBack, Person, EmojiEvents } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { getEkstrakurikulerBySlug, getJadwalByEkskul, getStrukturByEkskul, getPrestasiByEkskul, getImageUrl } from '../services/api';

const DetailEkstrakurikulerPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [ekstrakurikuler, setEkstrakurikuler] = useState(null);
  const [jadwal, setJadwal] = useState([]);
  const [struktur, setStruktur] = useState([]);
  const [prestasi, setPrestasi] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAllData();
  }, [id]);

  const fetchAllData = async () => {
    try {
      setLoading(true);
      // Fetch ekstrakurikuler detail
      const ekskulResponse = await getEkstrakurikulerBySlug(id);
      const ekskulData = ekskulResponse.data.data;
      setEkstrakurikuler(ekskulData);
      
      // Fetch related data using ekstrakurikuler_id
      const [jadwalRes, strukturRes, prestasiRes] = await Promise.all([
        getJadwalByEkskul(ekskulData.id).catch(() => ({ data: { data: [] } })),
        getStrukturByEkskul(ekskulData.id).catch(() => ({ data: { data: [] } })),
        getPrestasiByEkskul(ekskulData.id).catch(() => ({ data: { data: [] } }))
      ]);
      
      setJadwal(jadwalRes.data.data || []);
      setStruktur(strukturRes.data.data || []);
      setPrestasi(prestasiRes.data.data || []);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <Box>
        <Navbar />
        <Box sx={{ display: 'flex', justifyContent: 'center', py: 20 }}>
          <CircularProgress />
        </Box>
        <Footer />
      </Box>
    );
  }

  if (!ekstrakurikuler) {
    return (
      <Box>
        <Navbar />
        <Container maxWidth="lg" sx={{ py: 10, textAlign: 'center' }}>
          <Typography variant="h4" sx={{ mb: 2 }}>Ekstrakurikuler tidak ditemukan</Typography>
          <IconButton onClick={() => navigate('/ekstrakurikuler')}>
            <ArrowBack /> Kembali
          </IconButton>
        </Container>
        <Footer />
      </Box>
    );
  }

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
                width: { xs: 140, md: 180 },
                height: { xs: 140, md: 180 },
                borderRadius: '50%',
                backgroundColor: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
                flexShrink: 0,
                border: '5px solid rgba(255,255,255,0.3)',
                overflow: 'hidden',
              }}
            >
              {ekstrakurikuler.logo ? (
                <Box
                  component="img"
                  src={getImageUrl(ekstrakurikuler.logo)}
                  alt={ekstrakurikuler.nama}
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              ) : (
                <Typography
                  sx={{
                    fontSize: '4rem',
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
        <Container maxWidth="md">
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {/* Deskripsi */}
            {ekstrakurikuler.deskripsi && (
              <Box sx={{ mb: { xs: 5, md: 6 } }}>
                <Paper
                  elevation={0}
                  sx={{
                    padding: { xs: '24px 20px', md: '40px 48px' },
                    backgroundColor: '#ffffff',
                    borderRadius: '12px',
                    margin: '0 auto',
                    borderLeft: '4px solid #1976d2',
                    boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
                    transition: 'border-left-width 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                      borderLeft: '6px solid #1976d2',
                      boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
                    },
                  }}
                >
                  <Typography
                    variant="h2"
                    sx={{
                      fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' },
                      fontWeight: 700,
                      marginBottom: '24px',
                      color: '#1976d2',
                      letterSpacing: '-0.5px',
                    }}
                  >
                    Deskripsi
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: { xs: '0.95rem', sm: '1rem', md: '1.1rem' },
                      lineHeight: 1.8,
                      color: '#555',
                      textAlign: 'justify',
                    }}
                  >
                    {ekstrakurikuler.deskripsi}
                  </Typography>
                </Paper>
              </Box>
            )}

            {/* Jadwal */}
            {jadwal.length > 0 && (
              <Box sx={{ mb: { xs: 5, md: 6 } }}>
                <Paper
                  elevation={0}
                  sx={{
                    padding: { xs: '24px 20px', md: '40px 48px' },
                    backgroundColor: '#ffffff',
                    borderRadius: '12px',
                    margin: '0 auto',
                    borderLeft: '4px solid #2e7d32',
                    boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
                    transition: 'border-left-width 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                      borderLeft: '6px solid #2e7d32',
                      boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
                    },
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: { xs: '1.3rem', sm: '1.5rem', md: '1.75rem' },
                      fontWeight: 700,
                      marginBottom: '24px',
                      color: '#2e7d32',
                      letterSpacing: '-0.5px',
                    }}
                  >
                    Jadwal Kegiatan
                  </Typography>
                  <Grid container spacing={3}>
                    {jadwal.map((item) => (
                      <Grid item xs={12} sm={6} key={item.id}>
                        <Box
                          sx={{
                            padding: '20px',
                            backgroundColor: '#f5f9f5',
                            borderRadius: '12px',
                            border: '1px solid #c8e6c9',
                            height: '100%',
                            minHeight: '140px',
                            display: 'flex',
                            flexDirection: 'column',
                            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                            '&:hover': {
                              transform: 'translateY(-4px)',
                              boxShadow: '0 4px 12px rgba(46, 125, 50, 0.15)',
                            },
                          }}
                        >
                          <Chip 
                            label={item.hari} 
                            size="small" 
                            sx={{ 
                              mb: 1.5, 
                              backgroundColor: '#2e7d32', 
                              color: '#fff', 
                              fontWeight: 600,
                              alignSelf: 'flex-start'
                            }}
                          />
                          <Typography sx={{ fontSize: '1rem', fontWeight: 600, color: '#333', mb: 1 }}>
                            ⏰ {item.waktu_mulai} - {item.waktu_selesai}
                          </Typography>
                          <Typography sx={{ fontSize: '0.9rem', color: '#666', mb: 1.5 }}>
                            📍 {item.tempat}
                          </Typography>
                          {item.keterangan && (
                            <Typography sx={{ 
                              fontSize: '0.85rem', 
                              color: '#777', 
                              fontStyle: 'italic',
                              mt: 'auto',
                              borderTop: '1px solid #e0e0e0',
                              pt: 1
                            }}>
                              {item.keterangan}
                            </Typography>
                          )}
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Paper>
              </Box>
            )}

            {/* Struktur Organisasi */}
            {struktur.length > 0 && (
              <Box sx={{ mb: { xs: 5, md: 6 } }}>
                <Paper
                  elevation={0}
                  sx={{
                    padding: { xs: '24px 20px', md: '40px 48px' },
                    backgroundColor: '#ffffff',
                    borderRadius: '12px',
                    margin: '0 auto',
                    borderLeft: '4px solid #ed6c02',
                    boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
                    transition: 'border-left-width 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                      borderLeft: '6px solid #ed6c02',
                      boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
                    },
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: { xs: '1.3rem', sm: '1.5rem', md: '1.75rem' },
                      fontWeight: 700,
                      marginBottom: '24px',
                      color: '#ed6c02',
                      letterSpacing: '-0.5px',
                    }}
                  >
                    Struktur Organisasi
                  </Typography>
                  <Grid container spacing={3}>
                    {struktur.map((member) => (
                      <Grid item xs={6} sm={4} md={3} key={member.id}>
                        <Card
                          sx={{
                            borderRadius: '12px',
                            textAlign: 'center',
                            padding: '24px 16px',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                            height: '100%',
                            minHeight: '280px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            '&:hover': {
                              transform: 'translateY(-8px)',
                              boxShadow: '0 8px 20px rgba(237, 108, 2, 0.2)',
                            },
                          }}
                        >
                          <Avatar
                            src={member.foto ? getImageUrl(member.foto) : ''}
                            sx={{
                              width: 100,
                              height: 100,
                              margin: '0 auto 16px',
                              border: '4px solid #ed6c02',
                              fontSize: '2rem',
                              fontWeight: 700,
                              backgroundColor: '#fff3e0',
                              color: '#ed6c02',
                            }}
                          >
                            {!member.foto && member.nama.charAt(0)}
                          </Avatar>
                          <Typography
                            sx={{
                              fontSize: '1rem',
                              fontWeight: 700,
                              color: '#333',
                              mb: 1,
                              lineHeight: 1.3,
                            }}
                          >
                            {member.nama}
                          </Typography>
                          <Chip 
                            label={member.jabatan} 
                            size="small" 
                            sx={{ 
                              mb: 1.5, 
                              backgroundColor: '#ed6c02', 
                              color: '#fff',
                              fontWeight: 600,
                              fontSize: '0.75rem'
                            }}
                          />
                          {member.kelas && (
                            <Typography sx={{ 
                              fontSize: '0.85rem', 
                              color: '#666',
                              backgroundColor: '#f5f5f5',
                              padding: '4px 12px',
                              borderRadius: '12px'
                            }}>
                              Kelas {member.kelas}
                            </Typography>
                          )}
                        </Card>
                      </Grid>
                    ))}
                  </Grid>
                </Paper>
              </Box>
            )}

            {/* Prestasi */}
            {prestasi.length > 0 && (
              <Box>
                <Paper
                  elevation={0}
                  sx={{
                    padding: { xs: '24px 20px', md: '40px 48px' },
                    backgroundColor: '#ffffff',
                    borderRadius: '12px',
                    margin: '0 auto',
                    borderLeft: '4px solid #d32f2f',
                    boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
                    transition: 'border-left-width 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                      borderLeft: '6px solid #d32f2f',
                      boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
                    },
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: { xs: '1.3rem', sm: '1.5rem', md: '1.75rem' },
                      fontWeight: 700,
                      marginBottom: '24px',
                      color: '#d32f2f',
                      letterSpacing: '-0.5px',
                    }}
                  >
                    Prestasi
                  </Typography>
                  <Grid container spacing={3}>
                    {prestasi.map((item) => (
                      <Grid item xs={12} sm={6} key={item.id}>
                        <Card
                          sx={{
                            borderRadius: '12px',
                            overflow: 'hidden',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                            height: '100%',
                            minHeight: '320px',
                            display: 'flex',
                            flexDirection: 'column',
                            '&:hover': {
                              transform: 'translateY(-5px)',
                              boxShadow: '0 8px 20px rgba(211, 47, 47, 0.2)',
                            },
                          }}
                        >
                          {item.foto ? (
                            <Box
                              component="img"
                              src={getImageUrl(item.foto)}
                              alt={item.nama_prestasi}
                              sx={{
                                width: '100%',
                                height: 160,
                                objectFit: 'cover',
                              }}
                            />
                          ) : (
                            <Box
                              sx={{
                                width: '100%',
                                height: 160,
                                backgroundColor: '#ffebee',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}
                            >
                              <EmojiEvents sx={{ fontSize: 60, color: '#d32f2f', opacity: 0.3 }} />
                            </Box>
                          )}
                          <Box sx={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                            <Typography
                              sx={{
                                fontSize: '1.05rem',
                                fontWeight: 700,
                                color: '#333',
                                mb: 1.5,
                                lineHeight: 1.3,
                                minHeight: '50px',
                                display: '-webkit-box',
                                WebkitLineClamp: 2,
                                WebkitBoxOrient: 'vertical',
                                overflow: 'hidden',
                              }}
                            >
                              {item.nama_prestasi}
                            </Typography>
                            {item.juara && (
                              <Chip 
                                label={item.juara} 
                                size="small" 
                                icon={<EmojiEvents sx={{ fontSize: '1rem !important' }} />}
                                sx={{ 
                                  mb: 1.5, 
                                  backgroundColor: '#d32f2f', 
                                  color: '#fff', 
                                  fontWeight: 600,
                                  alignSelf: 'flex-start'
                                }}
                              />
                            )}
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5, mb: 1 }}>
                              <Typography sx={{ fontSize: '0.9rem', color: '#666', display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                🏆 {item.tingkat}
                              </Typography>
                              <Typography sx={{ fontSize: '0.9rem', color: '#666', display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                📅 Tahun {item.tahun}
                              </Typography>
                            </Box>
                            {item.deskripsi && (
                              <Typography sx={{ 
                                fontSize: '0.85rem', 
                                color: '#777', 
                                lineHeight: 1.5,
                                mt: 'auto',
                                pt: 1.5,
                                borderTop: '1px solid #f0f0f0',
                                display: '-webkit-box',
                                WebkitLineClamp: 3,
                                WebkitBoxOrient: 'vertical',
                                overflow: 'hidden',
                              }}>
                                {item.deskripsi}
                              </Typography>
                            )}
                          </Box>
                        </Card>
                      </Grid>
                    ))}
                  </Grid>
                </Paper>
              </Box>
            )}
          </Box>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
};

export default DetailEkstrakurikulerPage;
