import { useState, useEffect } from 'react';
import { Box, Container, Typography, Paper, CircularProgress } from '@mui/material';
import { FormatQuote } from '@mui/icons-material';
import { getSambutan, getImageUrl } from '../services/api';

const WelcomeSection = () => {
  const [sambutan, setSambutan] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSambutan();
  }, []);

  const fetchSambutan = async () => {
    try {
      setLoading(true);
      const response = await getSambutan();
      setSambutan(response.data.data);
    } catch (error) {
      console.error('Error fetching sambutan:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <Box sx={{ padding: '60px 0', display: 'flex', justifyContent: 'center', backgroundColor: '#f8f9fa' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (!sambutan) {
    return null; // Don't show section if no data
  }

  return (
    <Box
      sx={{
        padding: { xs: '60px 0', md: '80px 0' },
        backgroundColor: '#f8f9fa',
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
            position: 'relative',
            paddingBottom: '15px',
            padding: { xs: '0 16px 15px', md: '0 0 15px' },
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: 0,
              left: '50%',
              transform: 'translateX(-50%)',
              width: '80px',
              height: '4px',
              backgroundColor: '#34495e',
            },
          }}
        >
          Sambutan Kepala Sekolah
        </Typography>
        
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 4,
            alignItems: { xs: 'center', md: 'flex-start' },
          }}
        >
          {/* Foto dan Nama Kepala Sekolah */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              minWidth: { xs: '100%', md: '280px' },
              maxWidth: { xs: '280px', md: 'none' },
              margin: { xs: '0 auto', md: '0' },
            }}
          >
            <Paper
              elevation={3}
              sx={{
                width: { xs: '240px', sm: '280px' },
                height: { xs: '300px', sm: '350px' },
                overflow: 'hidden',
                borderRadius: '12px',
                boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                position: 'relative',
                backgroundColor: '#e0e0e0',
                backgroundImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                marginBottom: '20px',
              }}
            >
              {sambutan.foto && (
                <Box
                  component="img"
                  src={getImageUrl(sambutan.foto)}
                  alt={sambutan.nama}
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              )}
            </Paper>
            
            <Box
              sx={{
                textAlign: 'center',
                paddingTop: '12px',
                borderTop: '2px solid #34495e',
                width: '100%',
              }}
            >
              <Typography 
                variant="h3"
                sx={{
                  fontSize: { xs: '1.1rem', sm: '1.4rem' },
                  fontWeight: 700,
                  color: '#2c3e50',
                  marginBottom: '4px',
                }}
              >
                {sambutan.nama}
              </Typography>
              <Typography 
                variant="subtitle1"
                sx={{
                  fontSize: { xs: '0.9rem', sm: '1rem' },
                  color: '#7f8c8d',
                  fontStyle: 'italic',
                }}
              >
                {sambutan.jabatan}
              </Typography>
            </Box>
          </Box>

          {/* Teks Sambutan */}
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <FormatQuote 
              sx={{
                fontSize: '48px',
                color: '#34495e',
                opacity: 0.3,
                marginBottom: '16px',
              }}
            />
            <Typography 
              variant="body1"
              sx={{
                fontSize: { xs: '0.95rem', sm: '1rem', md: '1.1rem' },
                lineHeight: 1.8,
                color: '#555',
                textAlign: 'justify',
                padding: { xs: '0 16px', md: '0' },
                whiteSpace: 'pre-line',
              }}
            >
              {sambutan.sambutan}
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default WelcomeSection;
