import { Box, Container, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import smansabaImage from '../assets/image/smansaba.jpg';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${smansabaImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        padding: { xs: '0 16px', md: '0' },
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            textAlign: 'center',
            color: '#ffffff',
            zIndex: 1,
            padding: { xs: '20px', md: '40px' },
          }}
        >
          <Typography 
            variant="h1"
            sx={{
              fontSize: { xs: '2rem', sm: '2.75rem', md: '4rem' },
              fontWeight: 800,
              marginBottom: { xs: '24px', md: '32px' },
              textShadow: '3px 3px 6px rgba(0,0,0,0.4)',
              lineHeight: 1.2,
              letterSpacing: { xs: '-0.5px', md: '-1px' },
              fontFamily: '"Inter", "Segoe UI", "Roboto", sans-serif',
            }}
          >
            Selamat Datang di SMANSABA
          </Typography>
          
          <Box
            sx={{
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(3px)',
              borderRadius: '16px',
              padding: { xs: '20px', sm: '28px', md: '36px' },
              maxWidth: '900px',
              margin: '0 auto 40px',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
            }}
          >
            <Typography 
              variant="body1"
              sx={{
                fontSize: { xs: '0.95rem', sm: '1.05rem', md: '1.15rem' },
                fontWeight: 500,
                lineHeight: { xs: 1.8, md: 2 },
                letterSpacing: '0.3px',
                textAlign: 'center',
                textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                fontFamily: '"Inter", "Segoe UI", "Roboto", sans-serif',
                color: '#ffffff',
              }}
            >
              TERWUJUDNYA LULUSAN YANG SANTUN, BERIMAN, BERTAQWA, BERAKHLAK MULIA. MANDIRI, BERTANGGUNG JAWAB, PARTISIPATIF, BERGOTONG ROYONG, TOLERANSI, BERKEBHINEKAAN GLOBAL, INTELEK, BERNALAR KRITIS, KREATIF, DAN BERWAWASAN LINGKUNGAN
            </Typography>
          </Box>

          <Button 
            variant="contained"
            onClick={() => navigate('/tentang')}
            sx={{
              backgroundColor: '#ffffff',
              color: '#1a1a1a',
              padding: { xs: '12px 32px', md: '14px 48px' },
              fontSize: { xs: '14px', md: '16px' },
              fontWeight: 700,
              borderRadius: '50px',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.3)',
              transition: 'all 0.3s ease',
              '&:hover': {
                backgroundColor: '#f0f0f0',
                transform: 'translateY(-2px)',
                boxShadow: '0 6px 20px rgba(0, 0, 0, 0.4)',
              },
            }}
          >
            Lihat Selengkapnya
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
