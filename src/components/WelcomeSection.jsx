import { Box, Container, Typography, Paper } from '@mui/material';
import { FormatQuote } from '@mui/icons-material';

const WelcomeSection = () => {
  return (
    <Box
      sx={{
        padding: '80px 0',
        backgroundColor: '#f8f9fa',
      }}
    >
      <Container maxWidth="lg">
        <Typography 
          variant="h2"
          sx={{
            fontSize: '2.5rem',
            fontWeight: 700,
            textAlign: 'center',
            marginBottom: '50px',
            color: '#333',
            position: 'relative',
            paddingBottom: '15px',
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
              minWidth: '280px',
            }}
          >
            <Paper
              elevation={3}
              sx={{
                width: '280px',
                height: '350px',
                overflow: 'hidden',
                borderRadius: '12px',
                boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                position: 'relative',
                backgroundColor: '#e0e0e0',
                backgroundImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                marginBottom: '20px',
              }}
            >
              <Box
                component="img"
                src="/principal.jpg"
                alt="Kepala Sekolah"
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
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
                  fontSize: '1.4rem',
                  fontWeight: 700,
                  color: '#2c3e50',
                  marginBottom: '4px',
                }}
              >
                Drs. [Nama Kepala Sekolah]
              </Typography>
              <Typography 
                variant="subtitle1"
                sx={{
                  fontSize: '1rem',
                  color: '#7f8c8d',
                  fontStyle: 'italic',
                }}
              >
                Kepala SMAN 1 Bangsri
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
                fontSize: '1.1rem',
                lineHeight: 1.8,
                color: '#555',
                marginBottom: '24px',
                textAlign: 'justify',
              }}
            >
              Assalamu'alaikum Warahmatullahi Wabarakatuh. Puji syukur kehadirat Allah SWT 
              yang telah melimpahkan rahmat dan karunia-Nya. Lorem ipsum dolor sit amet 
              consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et 
              dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco 
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </Typography>
            <Typography 
              variant="body1"
              sx={{
                fontSize: '1.1rem',
                lineHeight: 1.8,
                color: '#555',
                textAlign: 'justify',
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud 
              exercitation ullamco laboris nisi aliquip commodo consequat duis aute irure.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default WelcomeSection;
