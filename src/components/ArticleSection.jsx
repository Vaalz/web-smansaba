import { useState, useEffect } from 'react';
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
  CircularProgress,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Person, CalendarToday } from '@mui/icons-material';
import { getBeritaList, getImageUrl } from '../services/api';

const ArticleSection = () => {
  const navigate = useNavigate();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);
        const response = await getBeritaList();
        // Ambil 3 berita terbaru untuk ditampilkan dalam 1 baris
        const latestArticles = (response.data.data || []).slice(0, 3);
        setArticles(latestArticles);
      } catch (error) {
        console.error('Error fetching articles:', error);
        setArticles([]);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('id-ID', { 
      day: 'numeric', 
      month: 'long', 
      year: 'numeric' 
    });
  };

  const truncateText = (text, maxLength) => {
    if (!text) return '';
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  };

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

        {loading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', py: 8 }}>
            <CircularProgress />
          </Box>
        ) : articles.length === 0 ? (
          <Typography sx={{ textAlign: 'center', py: 8, color: '#666' }}>
            Belum ada berita
          </Typography>
        ) : (
          <Grid container spacing={4} justifyContent="center" sx={{ maxWidth: '1049px', margin: '0 auto' }}>
            {articles.map((article) => (
              <Grid item xs={12} key={article.id} sx={{ display: 'flex' }}>
                <Card
                  onClick={() => navigate(`/berita/detail-berita/${article.slug || article.id}`)}
                  sx={{
                    width: '100%',
                    height: '640px',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: '12px',
                    boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    cursor: 'pointer',
                    overflow: 'hidden',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 8px 16px rgba(0,0,0,0.15)',
                    },
                  }}
                >
                  <Box sx={{ position: 'relative', flexShrink: 0 }}>
                    <CardMedia
                      image={getImageUrl(article.foto)}
                      title={article.judul}
                      sx={{
                        height: 350,
                        width: '100%',
                        backgroundColor: '#ddd',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundImage: article.foto 
                          ? `url(${getImageUrl(article.foto)})` 
                          : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      }}
                    />
                    <Chip 
                      label={article.kategori || 'BERITA'}
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
                      display: 'flex', 
                      flexDirection: 'column',
                      padding: '24px',
                      flexGrow: 1,
                      '&:last-child': {
                        paddingBottom: '24px',
                      },
                    }}
                  >
                    <Box sx={{ flex: '1 1 auto' }}>
                      <Typography 
                        variant="h6"
                        sx={{
                          fontSize: '1.3rem',
                          fontWeight: 700,
                          color: '#333',
                          marginBottom: '12px',
                          lineHeight: 1.4,
                          height: '72px',
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                        }}
                      >
                        {article.judul}
                      </Typography>
                      <Typography 
                        variant="body2"
                        sx={{
                          fontSize: '0.95rem',
                          color: '#666',
                          marginBottom: '16px',
                          lineHeight: 1.7,
                          display: '-webkit-box',
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                        }}
                      >
                        {truncateText(article.konten, 250)}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        paddingTop: '16px',
                        marginTop: 'auto',
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
                        <Person sx={{ fontSize: 18, color: '#999', flexShrink: 0 }} />
                        <Typography 
                          variant="body2"
                          sx={{
                            fontSize: '0.9rem',
                            color: '#555',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '4px',
                          }}
                        >
                          {article.penulis}
                        </Typography>
                      </Box>
                      <Typography 
                        variant="body2"
                        sx={{
                          fontSize: '0.9rem',
                          color: '#999',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '4px',
                          flexShrink: 0,
                        }}
                      >
                        <CalendarToday sx={{ fontSize: 16 }} />
                        {formatDate(article.tanggal)}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
        
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
