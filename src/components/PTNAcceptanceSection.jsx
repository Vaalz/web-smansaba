import { Box, Container, Typography, Paper, Card, CardContent, CardMedia, Chip } from '@mui/material';
import { keyframes } from '@mui/system';
import SchoolIcon from '@mui/icons-material/School';

// Animasi scroll horizontal
const scroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

// Dummy data untuk siswa diterima PTN
const ptnStudents = [
  {
    id: 1,
    photo: '',
    university: 'PTN',
    program: 'Jurusan',
    name: '',
    class: 'XII.6',
  },
  {
    id: 2,
    photo: '',
    university: 'PTN',
    program: 'Jurusan',
    name: '',
    class: 'XII.5',
  },
  {
    id: 3,
    photo: '',
    university: 'PTN',
    program: 'Jurusan',
    name: '',
    class: 'XII.5',
  },
  {
    id: 4,
    photo: '',
    university: 'PTN',
    program: 'Jurusan',
    name: '',
    class: 'XII.4',
  },
  {
    id: 5,
    photo: '',
    university: 'PTN',
    program: 'Jurusan',
    name: '',
    class: 'XII.3',
  },
  {
    id: 6,
    photo: '',
    university: 'PTN',
    program: 'Jurusan',
    name: '',
    class: 'XII.2',
  },
  {
    id: 7,
    photo: '',
    university: 'PTN',
    program: 'Jurusan',
    name: '',
    class: 'XII.1',
  },
  {
    id: 8,
    photo: '',
    university: 'PTN',
    program: 'Jurusan',
    name: '',
    class: 'XII.4',
  },
];

const PTNAcceptanceSection = () => {
  // Duplikasi data untuk seamless loop
  const duplicatedStudents = [...ptnStudents, ...ptnStudents];

  return (
    <Box
      sx={{
        padding: { xs: '60px 0', md: '80px 0' },
        backgroundColor: '#fff',
        overflow: 'hidden',
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
              backgroundColor: '#f39c12',
            },
          }}
        >
          Daftar Siswa diterima Di PTN
        </Typography>
      </Container>

      {/* Container untuk scrolling */}
      <Box
        sx={{
          width: '100%',
          overflow: 'hidden',
          position: 'relative',
          '&:hover .scroll-container': {
            animationPlayState: 'paused',
          },
        }}
      >
        <Box
          className="scroll-container"
          sx={{
            display: 'flex',
            gap: 4,
            animation: `${scroll} 25s linear infinite`,
            width: 'fit-content',
            paddingLeft: '20px',
          }}
        >
          {duplicatedStudents.map((student, index) => (
            <Card
              key={`${student.id}-${index}`}
              sx={{
                minWidth: '300px',
                width: '300px',
                borderRadius: '16px',
                overflow: 'hidden',
                position: 'relative',
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                '&:hover': {
                  '& .university-badge': {
                    top: '16px',
                    left: '16px',
                    transform: 'translate(0, 0)',
                    textAlign: 'left',
                    textShadow: '3px 3px 8px rgba(0,0,0,0.5)',
                  },
                },
              }}
            >
              {/* Foto Siswa dengan Overlay */}
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  height: '380px',
                  overflow: 'hidden',
                }}
              >
                <Box
                  className="student-photo"
                  sx={{
                    width: '100%',
                    height: '100%',
                    backgroundColor: '#c5b8a5',
                    backgroundImage: student.photo
                      ? `url(${student.photo})`
                      : 'linear-gradient(135deg, #a8b5a0 0%, #8b9d83 100%)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
                
                {/* Dark Overlay */}
                <Box
                  className="overlay"
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.4) 100%)',
                    opacity: 0.5,
                  }}
                />

                {/* University Badge */}
                <Box
                  className="university-badge"
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    textAlign: 'center',
                    color: '#fff',
                    zIndex: 2,
                    transition: 'all 0.4s ease',
                  }}
                >
                  <SchoolIcon
                    sx={{
                      fontSize: '2.5rem',
                      marginBottom: '8px',
                      filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.3))',
                    }}
                  />
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: '2.2rem',
                      fontWeight: 700,
                      marginBottom: '8px',
                      textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                    }}
                  >
                    {student.university}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: '1rem',
                      fontWeight: 500,
                      textShadow: '1px 1px 3px rgba(0,0,0,0.3)',
                    }}
                  >
                    {student.program}
                  </Typography>
                </Box>

                {/* Class Badge - Top Right */}
                <Chip
                  label={student.class}
                  sx={{
                    position: 'absolute',
                    top: '16px',
                    right: '16px',
                    backgroundColor: 'rgba(255,255,255,0.95)',
                    color: '#667eea',
                    fontWeight: 700,
                    fontSize: '0.9rem',
                    zIndex: 3,
                    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                  }}
                />
              </Box>

              {/* Info Siswa */}
              <CardContent
                className="info-section"
                sx={{
                  padding: '24px',
                  textAlign: 'center',
                  backgroundColor: '#fff',
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: '1.15rem',
                    fontWeight: 600,
                    color: '#2c3e50',
                    marginBottom: '8px',
                    minHeight: '28px',
                  }}
                >
                  {student.name || '[Nama Siswa]'}
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 1,
                  }}
                >
                  <Box
                    sx={{
                      width: '30px',
                      height: '2px',
                      backgroundColor: '#f39c12',
                    }}
                  />
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: '0.85rem',
                      color: '#7f8c8d',
                      fontWeight: 500,
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                    }}
                  >
                    Class {student.class}
                  </Typography>
                  <Box
                    sx={{
                      width: '30px',
                      height: '2px',
                      backgroundColor: '#f39c12',
                    }}
                  />
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default PTNAcceptanceSection;
