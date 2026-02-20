import {
  Box,
  Container,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Chip,
  Grid,
  Button,
} from '@mui/material';
import { Person, CalendarToday } from '@mui/icons-material';

// Dummy data untuk artikel
const articles = [
  {
    id: 1,
    category: 'ARTIKEL',
    title: 'FOSIS Jepara Sukses Gelar Grand Final Duta OSIS 5 Anti 2026 di Gedung Wanita',
    excerpt: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco.',
    image: '/article1.jpg',
    author: 'Tim Jurnalis SMANSABA',
    date: '15 Feb 2026',
  },
  {
    id: 2,
    category: 'ARTIKEL',
    title: 'Pelaksanaan UKK Teknik Otomotif SMAN 1 Bangsri Tahun 2026',
    excerpt: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus mi quis viverra ornare eros dolor interdum nulla.',
    image: '/article2.jpg',
    author: 'Tim Jurnalis SMANSABA',
    date: '12 Feb 2026',
  },
  {
    id: 3,
    category: 'ARTIKEL',
    title: 'Sosialisasi Investasi Skill dan Visi Masa Depan bagi Siswa Kelas X SMAN 1 Bangsri',
    excerpt: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Nulla vitae elit libero a pharetra augue. Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna vel.',
    image: '/article3.jpg',
    author: 'Tim Jurnalis SMANSABA',
    date: '08 Feb 2026',
  },
];

const ArticleSection = () => {
  return (
    <Box
      sx={{
        padding: '80px 0',
        backgroundColor: '#ffffff',
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
          Postingan Terbaru
        </Typography>
        <Grid container spacing={4}>
          {articles.map((article) => (
            <Grid item xs={12} sm={6} md={4} key={article.id}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: '8px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 8px 16px rgba(0,0,0,0.15)',
                  },
                }}
              >
                <Box sx={{ position: 'relative' }}>
                  <CardMedia
                    image={article.image}
                    title={article.title}
                    sx={{
                      height: 240,
                      position: 'relative',
                      backgroundColor: '#ddd',
                      backgroundImage: article.image.startsWith('http') 
                        ? `url(${article.image})` 
                        : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    }}
                  />
                  <Chip 
                    label={article.category}
                    sx={{
                      position: 'absolute',
                      top: 15,
                      left: 15,
                      backgroundColor: '#e74c3c',
                      color: '#ffffff',
                      fontWeight: 600,
                      fontSize: '12px',
                      height: '28px',
                    }}
                  />
                </Box>
                <CardContent 
                  sx={{ 
                    flexGrow: 1, 
                    display: 'flex', 
                    flexDirection: 'column' 
                  }}
                >
                  <Typography 
                    variant="h3"
                    sx={{
                      fontSize: '1.25rem',
                      fontWeight: 600,
                      color: '#333',
                      marginBottom: '12px',
                      lineHeight: 1.4,
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}
                  >
                    {article.title}
                  </Typography>
                  <Typography 
                    variant="body2"
                    sx={{
                      fontSize: '0.95rem',
                      color: '#666',
                      marginBottom: '16px',
                      lineHeight: 1.6,
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}
                  >
                    {article.excerpt}
                  </Typography>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginTop: 'auto',
                      paddingTop: '12px',
                      borderTop: '1px solid #eee',
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                      }}
                    >
                      <Person sx={{ fontSize: 18, color: '#999' }} />
                      <Typography 
                        variant="body2"
                        sx={{
                          fontSize: '0.85rem',
                          color: '#555',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '4px',
                        }}
                      >
                        {article.author}
                        <Chip 
                          label="guru" 
                          size="small"
                          sx={{
                            backgroundColor: '#2c3e50',
                            color: '#ffffff',
                            height: '20px',
                            fontSize: '11px',
                            fontWeight: 600,
                            '& .MuiChip-label': {
                              padding: '0 8px',
                            },
                          }}
                        />
                      </Typography>
                    </Box>
                    <Typography 
                      variant="body2"
                      sx={{
                        fontSize: '0.85rem',
                        color: '#999',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                      }}
                    >
                      <CalendarToday sx={{ fontSize: 16 }} />
                      {article.date}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '50px',
          }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#34495e',
              color: '#ffffff',
              padding: '12px 40px',
              fontSize: '16px',
              fontWeight: 600,
              borderRadius: '4px',
              textTransform: 'none',
              '&:hover': {
                backgroundColor: '#2c3e50',
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

export default ArticleSection;
