import { Box, Container, Typography, Grid, Paper, TextField, Button } from '@mui/material';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import smansabaImage from '../assets/image/smansaba.jpg';
import { LocationOn, Phone, Email, AccessTime } from '@mui/icons-material';

const KontakPage = () => {
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    subjek: '',
    pesan: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Nanti akan dihubungkan dengan API
    console.log('Form submitted:', formData);
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
              KONTAK KAMI
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Content Section */}
      <Box
        sx={{
          padding: { xs: '40px 16px 60px', md: '60px 0 80px' },
          backgroundColor: '#fafafa',
        }}
      >
        <Container maxWidth="lg">
          {/* Section Title */}
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
            Hubungi Kami
          </Typography>

          {/* Informasi Kontak Card */}
          <Paper
            elevation={0}
            sx={{
              maxWidth: '1000px',
              marginLeft: 'auto',
              marginRight: 'auto',
              marginBottom: { xs: '40px', md: '60px' },
              padding: { xs: '28px 20px', sm: '36px 28px', md: '48px 40px' },
              borderRadius: { xs: '12px', md: '16px' },
              backgroundColor: '#ffffff',
              boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
            }}
          >
            <Grid 
              container 
              spacing={{ xs: 3, sm: 4, md: 5 }}
              justifyContent="center"
            >
              {/* Alamat */}
              <Grid item xs={12} sm={6}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                  <Box
                    sx={{
                      width: { xs: '56px', md: '60px' },
                      height: { xs: '56px', md: '60px' },
                      borderRadius: '50%',
                      backgroundColor: '#e3f2fd',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: { xs: '12px', md: '16px' },
                    }}
                  >
                    <LocationOn sx={{ fontSize: { xs: 28, md: 32 }, color: '#1976d2' }} />
                  </Box>
                  <Typography
                    sx={{
                      fontSize: { xs: '1.05rem', md: '1.15rem' },
                      fontWeight: 700,
                      color: '#333',
                      marginBottom: { xs: '10px', md: '12px' },
                    }}
                  >
                    Alamat
                  </Typography>
                  <Typography sx={{ fontSize: { xs: '0.9rem', md: '0.95rem' }, color: '#666', lineHeight: 1.7 }}>
                    Jl. Jerukwangi, Bangsri, Krajan, Jerukwangi,<br/> Kec. Jepara, Jawa Tengah, 59453
                  </Typography>
                </Box>
              </Grid>

              {/* Telepon */}
              <Grid item xs={12} sm={6}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                  <Box
                    sx={{
                      width: { xs: '56px', md: '60px' },
                      height: { xs: '56px', md: '60px' },
                      borderRadius: '50%',
                      backgroundColor: '#e3f2fd',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: { xs: '12px', md: '16px' },
                    }}
                  >
                    <Phone sx={{ fontSize: { xs: 28, md: 32 }, color: '#1976d2' }} />
                  </Box>
                  <Typography
                    sx={{
                      fontSize: { xs: '1.05rem', md: '1.15rem' },
                      fontWeight: 700,
                      color: '#333',
                      marginBottom: { xs: '10px', md: '12px' },
                    }}
                  >
                    Telepon
                  </Typography>
                  <Typography sx={{ fontSize: { xs: '0.9rem', md: '0.95rem' }, color: '#666', lineHeight: 1.7 }}>
                    (0291) 771186
                  </Typography>
                </Box>
              </Grid>

              {/* Email */}
              <Grid item xs={12} sm={6}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                  <Box
                    sx={{
                      width: { xs: '56px', md: '60px' },
                      height: { xs: '56px', md: '60px' },
                      borderRadius: '50%',
                      backgroundColor: '#e3f2fd',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: { xs: '12px', md: '16px' },
                    }}
                  >
                    <Email sx={{ fontSize: { xs: 28, md: 32 }, color: '#1976d2' }} />
                  </Box>
                  <Typography
                    sx={{
                      fontSize: { xs: '1.05rem', md: '1.15rem' },
                      fontWeight: 700,
                      color: '#333',
                      marginBottom: { xs: '10px', md: '12px' },
                    }}
                  >
                    Email
                  </Typography>
                  <Typography sx={{ fontSize: { xs: '0.9rem', md: '0.95rem' }, color: '#666', lineHeight: 1.7 }}>
                    Konten akan dikelola melalui sistem admin
                  </Typography>
                </Box>
              </Grid>

              {/* Jam Operasional */}
              <Grid item xs={12} sm={6}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                  <Box
                    sx={{
                      width: { xs: '56px', md: '60px' },
                      height: { xs: '56px', md: '60px' },
                      borderRadius: '50%',
                      backgroundColor: '#e3f2fd',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: { xs: '12px', md: '16px' },
                    }}
                  >
                    <AccessTime sx={{ fontSize: { xs: 28, md: 32 }, color: '#1976d2' }} />
                  </Box>
                  <Typography
                    sx={{
                      fontSize: { xs: '1.05rem', md: '1.15rem' },
                      fontWeight: 700,
                      color: '#333',
                      marginBottom: { xs: '10px', md: '12px' },
                    }}
                  >
                    Jam Operasional
                  </Typography>
                  <Typography sx={{ fontSize: { xs: '0.9rem', md: '0.95rem' }, color: '#666', lineHeight: 1.7 }}>
                    Senin - Jumat: 07.00 - 15.00 WIB<br/>
                    Sabtu: 07.00 - 12.00 WIB
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Paper>

          {/* Form Kontak */}
          <Box 
            sx={{ 
              maxWidth: '700px', 
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
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
              Kirim Pesan
            </Typography>

            <Paper
              elevation={0}
              sx={{
                padding: { xs: '24px', sm: '28px', md: '40px' },
                borderRadius: { xs: '12px', md: '16px' },
                backgroundColor: '#ffffff',
                boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
              }}
            >
              <Box component="form" onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  label="Nama Lengkap"
                  name="nama"
                  value={formData.nama}
                  onChange={handleChange}
                  required
                  sx={{
                    marginBottom: '20px',
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '10px',
                    },
                  }}
                />

                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  sx={{
                    marginBottom: '20px',
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '10px',
                    },
                  }}
                />

                <TextField
                  fullWidth
                  label="Subjek"
                  name="subjek"
                  value={formData.subjek}
                  onChange={handleChange}
                  required
                  sx={{
                    marginBottom: '20px',
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '10px',
                    },
                  }}
                />

                <TextField
                  fullWidth
                  label="Pesan"
                  name="pesan"
                  value={formData.pesan}
                  onChange={handleChange}
                  required
                  multiline
                  rows={6}
                  sx={{
                    marginBottom: '28px',
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '10px',
                    },
                  }}
                />

                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  sx={{
                    padding: { xs: '14px', md: '16px' },
                    fontSize: { xs: '1rem', md: '1.05rem' },
                    fontWeight: 600,
                    borderRadius: { xs: '8px', md: '10px' },
                    backgroundColor: '#1976d2',
                    textTransform: 'none',
                    boxShadow: '0 4px 12px rgba(25,118,210,0.3)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      backgroundColor: '#1565c0',
                      boxShadow: '0 6px 20px rgba(25,118,210,0.4)',
                      transform: 'translateY(-2px)',
                    },
                  }}
                >
                  Kirim Pesan
                </Button>
              </Box>
            </Paper>
          </Box>

          {/* Google Maps Embed */}
          <Box 
            sx={{ 
              maxWidth: '1000px',
              marginLeft: 'auto',
              marginRight: 'auto',
              marginTop: { xs: '50px', md: '70px' },
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '1.75rem', sm: '2rem', md: '2.25rem' },
                fontWeight: 700,
                marginBottom: { xs: '30px', md: '40px' },
                color: '#333',
                textAlign: 'center',
              }}
            >
              Lokasi Kami
            </Typography>

            <Paper
              elevation={0}
              sx={{
                borderRadius: { xs: '12px', md: '16px' },
                overflow: 'hidden',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                height: { xs: '300px', sm: '350px', md: '500px' },
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.1899876543!2d110.75476931477444!3d-6.513164095315428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e711e9b1b1b1b1b%3A0x1b1b1b1b1b1b1b1b!2sSMA%20Negeri%201%20Bangsri!5e0!3m2!1sid!2sid!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Location"
              />
            </Paper>
          </Box>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
};

export default KontakPage;
