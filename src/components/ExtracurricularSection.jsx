import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
} from '@mui/material';
import { Speed } from '@mui/icons-material';

// Dummy data untuk ekstrakurikuler
const extracurriculars = [
  {
    id: 1,
    name: 'Ekstrakurikuler',
    logo: '/ekskul-paskibra.png',
  },
  {
    id: 2,
    name: 'Ekstrakurikuler',
    logo: '/ekskul-pramuka.png',
  },
  {
    id: 3,
    name: 'Ekstrakurikuler',
    logo: '/ekskul-pmr.png',
  },
  {
    id: 4,
    name: 'Ekstrakurikuler',
    logo: '/ekskul-futsal.png',
  },
  {
    id: 5,
    name: 'Ekstrakurikuler',
    logo: '/ekskul-basket.png',
  },
  {
    id: 6,
    name: 'Ekstrakurikuler',
    logo: '/ekskul-voli.png',
  },
  {
    id: 7,
    name: 'Ekstrakurikuler',
    logo: '/ekskul-badminton.png',
  },
  {
    id: 8,
    name: 'Ekstrakurikuler',
    logo: '/ekskul-musik.png',
  },
];

const ExtracurricularSection = () => {
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
          Ekstrakurikuler
        </Typography>
        
        <Box
          sx={{
            display: 'flex',
            gap: 3,
            overflowX: 'auto',
            overflowY: 'hidden',
            paddingBottom: '20px',
            '&::-webkit-scrollbar': {
              height: '8px',
            },
            '&::-webkit-scrollbar-track': {
              backgroundColor: '#f1f1f1',
              borderRadius: '10px',
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: '#888',
              borderRadius: '10px',
              '&:hover': {
                backgroundColor: '#555',
              },
            },
          }}
        >
          {extracurriculars.map((ekskul) => (
            <Card
              key={ekskul.id}
              sx={{
                minWidth: '220px',
                maxWidth: '220px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                borderRadius: '12px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 8px 16px rgba(0,0,0,0.15)',
                },
                padding: '24px',
              }}
            >
                <Box
                  sx={{
                    width: '120px',
                    height: '120px',
                    borderRadius: '50%',
                    backgroundColor: '#e0e0e0',
                    backgroundImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  <Box
                    component="img"
                    src={ekskul.logo}
                    alt={ekskul.name}
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                  <Speed 
                    sx={{
                      fontSize: '64px',
                      color: '#ffffff',
                      opacity: 0.5,
                      position: 'absolute',
                    }}
                  />
                </Box>
                
                <CardContent 
                  sx={{ 
                    textAlign: 'center',
                    padding: 0,
                    width: '100%',
                  }}
                >
                  <Typography 
                    variant="h4"
                    sx={{
                      fontSize: '1.25rem',
                      fontWeight: 600,
                      color: '#333',
                      marginBottom: '16px',
                    }}
                  >
                    {ekskul.name}
                  </Typography>
                  
                  <Button
                    variant="outlined"
                    sx={{
                      color: '#34495e',
                      borderColor: '#34495e',
                      padding: '8px 24px',
                      fontSize: '14px',
                      fontWeight: 600,
                      borderRadius: '4px',
                      textTransform: 'none',
                      '&:hover': {
                        backgroundColor: '#34495e',
                        borderColor: '#34495e',
                        color: '#ffffff',
                      },
                    }}
                  >
                    Lihat Selengkapnya
                  </Button>
                </CardContent>
              </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default ExtracurricularSection;
