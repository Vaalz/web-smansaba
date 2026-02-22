import { Box, Container, Typography, Card, CardContent, Button, Chip } from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

// Dummy data untuk prestasi - 3 Terbaik
const achievements = [
  {
    id: 1,
    rank: 'JUARA 1',
    title: 'Juara 1',
    category: 'Kategori Lomba',
    description: 'Deskripsi lomba lengkap',
    studentName: 'Nama Siswa',
    year: '2025',
    medalColor: '#FFD700', // Gold
  },
  {
    id: 2,
    rank: 'JUARA 2',
    title: 'Juara 2',
    category: 'Kategori Lomba',
    description: 'Deskripsi lomba lengkap',
    studentName: 'Nama Siswa',
    year: '2025',
    medalColor: '#C0C0C0', // Silver
  },
  {
    id: 3,
    rank: 'JUARA 3',
    title: 'Juara 3',
    category: 'Kategori Lomba',
    description: 'Deskripsi lomba lengkap',
    studentName: 'Nama Siswa',
    year: '2025',
    medalColor: '#CD7F32', // Bronze
  },
];

const AchievementSection = () => {
  return (
    <Box
      sx={{
        padding: { xs: '60px 0', md: '80px 0' },
        backgroundColor: '#1a2332',
        color: '#fff',
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: '1.75rem', sm: '2rem', md: '2.5rem' },
            fontWeight: 700,
            textAlign: 'center',
            marginBottom: '12px',
            color: '#fff',
            padding: { xs: '0 16px', md: '0' },
          }}
        >
          Prestasi
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            fontSize: { xs: '0.95rem', sm: '1rem', md: '1.1rem' },
            textAlign: 'center',
            marginBottom: { xs: '40px', md: '50px' },
            color: '#b8c5d6',
            padding: { xs: '0 16px', md: '0' },
          }}
        >
          Prestasi Siswa SMA Negeri 1 Bangsri terbaru di bawah ini
        </Typography>
      </Container>

      {/* Achievement Cards Container */}
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'stretch',
            gap: { xs: 2, md: 3 },
            flexWrap: 'wrap',
            padding: { xs: '0 16px', md: '0' },
          }}
        >
          {achievements.map((achievement) => (
            <Card
              key={achievement.id}
              sx={{
                minWidth: { xs: '280px', sm: '320px' },
                width: { xs: '100%', sm: '320px' },
                maxWidth: { xs: '320px', sm: 'none' },
                backgroundColor: 'transparent',
                border: '2px solid rgba(255,255,255,0.2)',
                borderRadius: '16px',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  borderColor: 'rgba(255,255,255,0.4)',
                  boxShadow: '0 12px 32px rgba(0,0,0,0.3)',
                  '& .medal-icon': {
                    transform: 'scale(1.15) rotate(10deg)',
                  },
                },
              }}
            >
              <CardContent
                sx={{
                  padding: '32px 24px',
                  color: '#fff',
                }}
              >
                {/* Medal Icon with Rank */}
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: '24px',
                  }}
                >
                  <Box
                    sx={{
                      position: 'relative',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Box
                      sx={{
                        width: '70px',
                        height: '70px',
                        borderRadius: '50%',
                        backgroundColor: achievement.medalColor,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: `0 4px 16px ${achievement.medalColor}40`,
                      }}
                    >
                      <EmojiEventsIcon
                        className="medal-icon"
                        sx={{
                          fontSize: '2.5rem',
                          color: '#1a2332',
                          transition: 'transform 0.3s ease',
                        }}
                      />
                    </Box>
                  </Box>
                </Box>

                {/* Rank Badge */}
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: '1.3rem',
                    fontWeight: 700,
                    textAlign: 'center',
                    marginBottom: '16px',
                    color: '#fff',
                  }}
                >
                  {achievement.rank}
                </Typography>

                {/* Title */}
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    marginBottom: '8px',
                    color: '#fff',
                    textTransform: 'uppercase',
                  }}
                >
                  {achievement.title}
                </Typography>

                {/* Category */}
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: '1rem',
                    marginBottom: '12px',
                    color: '#e8eef5',
                    fontWeight: 500,
                  }}
                >
                  {achievement.category}
                </Typography>

                {/* Description */}
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: '0.95rem',
                    marginBottom: '16px',
                    color: '#b8c5d6',
                    lineHeight: 1.6,
                  }}
                >
                  {achievement.description}
                </Typography>

                {/* Divider */}
                <Box
                  sx={{
                    width: '100%',
                    height: '1px',
                    backgroundColor: 'rgba(255,255,255,0.2)',
                    marginY: '16px',
                  }}
                />

                {/* Student Name */}
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: '#fff',
                    textAlign: 'center',
                  }}
                >
                  {achievement.studentName}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>

      {/* Button Lihat Prestasi Lainnya */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '40px',
        }}
      >
        <Button
          variant="outlined"
          sx={{
            color: '#fff',
            borderColor: 'rgba(255,255,255,0.3)',
            borderWidth: '2px',
            padding: '12px 40px',
            fontSize: '1rem',
            fontWeight: 600,
            borderRadius: '8px',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            transition: 'all 0.3s ease',
            '&:hover': {
              borderColor: '#fff',
              backgroundColor: 'rgba(255,255,255,0.1)',
              borderWidth: '2px',
              transform: 'translateY(-2px)',
            },
          }}
        >
          LIHAT PRESTASI LAINNYA
        </Button>
      </Box>
    </Box>
  );
};

export default AchievementSection;
