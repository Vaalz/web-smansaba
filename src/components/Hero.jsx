import { Box, Container, Typography, Button } from '@mui/material';
import smansabaImage from '../assets/image/smansaba.jpg';

const Hero = () => {
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
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            textAlign: 'center',
            color: '#ffffff',
            zIndex: 1,
          }}
        >
          <Typography 
            variant="h1"
            sx={{
              fontSize: { xs: '2rem', md: '3.5rem' },
              fontWeight: 700,
              marginBottom: '20px',
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
            }}
          >
            Selamat Datang di SMANSABA
          </Typography>
          <Typography 
            variant="body1"
            sx={{
              fontSize: { xs: '1rem', md: '1.25rem' },
              fontWeight: 400,
              marginBottom: '30px',
              lineHeight: 1.6,
              maxWidth: '800px',
              margin: '0 auto 30px',
              textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation
          </Typography>
          <Button 
            variant="contained"
            sx={{
              backgroundColor: 'rgba(52, 73, 94, 0.9)',
              color: '#ffffff',
              padding: '12px 40px',
              fontSize: '16px',
              fontWeight: 600,
              borderRadius: '4px',
              '&:hover': {
                backgroundColor: 'rgba(44, 62, 80, 1)',
              },
            }}
          >
            LIHAT SELENGKAPNYA
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
