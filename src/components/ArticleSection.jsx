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
import { useNavigate } from 'react-router-dom';
import { Person, CalendarToday } from '@mui/icons-material';

// Dummy data untuk berita
const articles = [
  {
    id: 1,
    category: 'BERITA',
    title: 'Judul Berita Terbaru dari SMA Negeri 1 Bangsri',
    excerpt: 'Deskripsi singkat berita yang menjelaskan tentang kegiatan atau informasi penting seputar sekolah dan siswa. Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt.',
    image: '/article1.jpg',
    author: 'Nama Penulis',
    date: 'Tanggal',
  },
  {
    id: 2,
    category: 'BERITA',
    title: 'Judul Berita Terbaru dari SMA Negeri 1 Bangsri',
    excerpt: 'Deskripsi singkat berita yang menjelaskan tentang kegiatan atau informasi penting seputar sekolah dan siswa. Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt.',
    image: '/article2.jpg',
    author: 'Nama Penulis',
    date: 'Tanggal',
  },
  {
    id: 3,
    category: 'BERITA',
    title: 'Judul Berita Terbaru dari SMA Negeri 1 Bangsri',
    excerpt: 'Deskripsi singkat berita yang menjelaskan tentang kegiatan atau informasi penting seputar sekolah dan siswa. Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt.',
    image: '/article3.jpg',
    author: 'Nama Penulis',
    date: 'Tanggal',
  },
];

const ArticleSection = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        padding: { xs: '60px 0', md: '80px 0' },
        backgroundColor: '#ffffff',
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
          Postingan Terbaru
        </Typography>
        <Grid container spacing={4}>
          {articles.map((article) => (
            <Grid item xs={12} sm={6} md={6} key={article.id}>
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
            marginTop: { xs: '40px', md: '50px' },
          }}
        >
          <Button
            variant="contained"
            onClick={() => navigate('/berita')}
            sx={{
              backgroundColor: '#34495e',
              color: '#ffffff',
              padding: { xs: '10px 28px', md: '12px 40px' },
              fontSize: { xs: '14px', md: '16px' },
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
