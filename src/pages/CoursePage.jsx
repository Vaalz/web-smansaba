import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Chip, Button, Avatar, CircularProgress } from '@mui/material';
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import smansabaImage from '../assets/image/smansaba.jpg';
import { Book, Person, Schedule, ArrowForward } from '@mui/icons-material';
import { getCourseList, getImageUrl } from '../services/api';

const CoursePage = () => {
  const [selectedSubject, setSelectedSubject] = useState('ALL');
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await getCourseList();
      setCourses(response.data.data || []);
    } catch (error) {
      console.error('Error fetching courses:', error);
    } finally {
      setLoading(false);
    }
  };

  // Get unique subjects from courses
  const subjects = ['ALL', ...new Set(courses.map(course => course.mapel).filter(Boolean))];

  const filteredCourses = selectedSubject === 'ALL' 
    ? courses 
    : courses.filter(course => course.mapel === selectedSubject);

  return (
    <Box>
      <Navbar />
      
      {/* Hero Section */}
      <Box
        sx={{
          minHeight: { xs: '50vh', sm: '60vh', md: '70vh' },
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
              padding: { xs: '0 20px', md: '0' },
            }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '1.75rem', sm: '2.5rem', md: '3.5rem' },
                fontWeight: 700,
                textShadow: '2px 2px 8px rgba(0,0,0,0.5)',
                letterSpacing: { xs: '1px', md: '2px' },
                marginBottom: { xs: '12px', md: '16px' },
                lineHeight: 1.2,
              }}
            >
              MATERI PEMBELAJARAN
            </Typography>
            <Typography
              variant="h5"
              sx={{
                fontSize: { xs: '0.9rem', sm: '1.15rem', md: '1.5rem' },
                textShadow: '1px 1px 4px rgba(0,0,0,0.5)',
                fontWeight: 400,
                lineHeight: 1.5,
                maxWidth: { xs: '100%', sm: '80%', md: '70%' },
                margin: '0 auto',
              }}
            >
              Akses seluruh materi pembelajaran dari guru-guru terbaik kami
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Course Content Section */}
      <Box
        sx={{
          padding: { xs: '30px 0 50px', sm: '40px 0 60px', md: '60px 0 80px' },
          backgroundColor: '#fafafa',
          minHeight: '50vh',
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '1.5rem', sm: '1.85rem', md: '2.25rem' },
              fontWeight: 700,
              textAlign: 'center',
              marginBottom: { xs: '24px', sm: '28px', md: '30px' },
              color: '#333',
              padding: { xs: '0 16px', sm: '0' },
            }}
          >
            Materi Pelajaran
          </Typography>

          {/* Subject Filter Chips */}
          <Box 
            sx={{ 
              marginBottom: { xs: '24px', sm: '30px', md: '40px' },
              padding: { xs: '0 16px', sm: '0' },
            }}
          >
            <Box
              sx={{
                display: 'flex',
                overflowX: { xs: 'auto', sm: 'auto', md: 'auto' },
                overflowY: 'hidden',
                gap: { xs: 1, sm: 1.5 },
                justifyContent: { xs: 'flex-start', md: 'center' },
                flexWrap: { xs: 'nowrap', md: 'wrap' },
                paddingBottom: { xs: '8px', sm: '0' },
                '&::-webkit-scrollbar': {
                  height: '6px',
                },
                '&::-webkit-scrollbar-track': {
                  backgroundColor: '#f0f0f0',
                  borderRadius: '3px',
                },
                '&::-webkit-scrollbar-thumb': {
                  backgroundColor: '#34495e',
                  borderRadius: '3px',
                },
              }}
            >
              {subjects.map((subject) => (
                <Chip
                  key={subject}
                  label={subject}
                  onClick={() => setSelectedSubject(subject)}
                  sx={{
                    fontSize: { xs: '0.8rem', sm: '0.85rem', md: '0.9rem' },
                    fontWeight: 600,
                    padding: { xs: '6px 4px', sm: '8px 6px', md: '10px 8px' },
                    height: { xs: '32px', sm: '36px' },
                    backgroundColor: selectedSubject === subject ? '#34495e' : '#ffffff',
                    color: selectedSubject === subject ? '#ffffff' : '#333',
                    border: selectedSubject === subject ? 'none' : '1px solid #ddd',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    flexShrink: 0,
                    '&:hover': {
                      backgroundColor: selectedSubject === subject ? '#2c3e50' : '#f5f5f5',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                    },
                  }}
                />
              ))}
            </Box>
          </Box>

          {/* Course Grid */}
          <Box sx={{ padding: { xs: '0 16px', sm: '0' } }}>
            <Grid 
              container 
              spacing={{ xs: 2, sm: 2.5, md: 3 }}
              justifyContent="center"
            >
              {filteredCourses.map((course) => (
                <Grid item xs={12} sm={6} md={4} key={course.id}>
                  <Card
                    sx={{
                      height: { xs: 'auto', sm: '420px' },
                      minHeight: { xs: '380px', sm: '420px' },
                      display: 'flex',
                      flexDirection: 'column',
                      borderRadius: { xs: '10px', md: '12px' },
                      boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                      '&:hover': {
                        transform: { xs: 'translateY(-4px)', md: 'translateY(-8px)' },
                        boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                      },
                    }}
                  >
                  {/* Course Thumbnail */}
                  <CardMedia
                    sx={{
                      height: { xs: 160, sm: 170, md: 180 },
                      backgroundColor: course.thumbnail ? 'transparent' : '#667eea',
                      backgroundImage: course.thumbnail 
                        ? `url(${course.thumbnail})` 
                        : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative',
                      flexShrink: 0,
                    }}
                  >
                    {!course.thumbnail && (
                      <Book sx={{ fontSize: { xs: 50, md: 60 }, color: 'rgba(255,255,255,0.3)' }} />
                    )}
                    <Chip 
                      label={course.level}
                      size="small"
                      sx={{
                        position: 'absolute',
                        top: { xs: 8, md: 12 },
                        right: { xs: 8, md: 12 },
                        backgroundColor: 'rgba(255,255,255,0.9)',
                        fontWeight: 600,
                        fontSize: { xs: '0.7rem', md: '0.75rem' },
                        height: { xs: '22px', md: '24px' },
                      }}
                    />
                  </CardMedia>

                  <CardContent 
                    sx={{ 
                      height: { xs: 'auto', sm: '240px' },
                      minHeight: { xs: '220px', sm: '240px' },
                      display: 'flex', 
                      flexDirection: 'column',
                      padding: { xs: '16px', sm: '18px', md: '20px' },
                      overflow: 'hidden',
                      flexGrow: 1,
                    }}
                  >
                    {/* Subject Badge */}
                    <Chip 
                      label={course.subject}
                      size="small"
                      sx={{
                        alignSelf: 'flex-start',
                        marginBottom: { xs: '10px', md: '12px' },
                        backgroundColor: '#e3f2fd',
                        color: '#1976d2',
                        fontWeight: 600,
                        fontSize: { xs: '0.7rem', md: '0.75rem' },
                        height: { xs: '22px', md: '24px' },
                      }}
                    />

                    {/* Title */}
                    <Typography 
                      variant="h3"
                      sx={{
                        fontSize: { xs: '1rem', sm: '1.05rem', md: '1.1rem' },
                        fontWeight: 700,
                        color: '#333',
                        marginBottom: { xs: '12px', md: '16px' },
                        lineHeight: 1.3,
                        height: { xs: '52px', md: '56px' },
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                      }}
                    >
                      {course.title || 'Judul Materi'}
                    </Typography>

                    {/* Description Placeholder */}
                    <Typography 
                      variant="body2"
                      sx={{
                        color: course.description ? '#666' : '#ccc',
                        marginBottom: { xs: '14px', md: '16px' },
                        lineHeight: 1.5,
                        height: { xs: '40px', md: '42px' },
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        fontSize: { xs: '0.8rem', sm: '0.85rem', md: '0.875rem' },
                      }}
                    >
                      {course.description || 'Deskripsi materi akan ditampilkan di sini'}
                    </Typography>

                    {/* Action Button */}
                    <Button
                      variant="contained"
                      endIcon={<ArrowForward sx={{ fontSize: { xs: 18, md: 20 } }} />}
                      fullWidth
                      sx={{
                        backgroundColor: '#34495e',
                        color: '#ffffff',
                        textTransform: 'none',
                        fontWeight: 600,
                        padding: { xs: '9px 14px', md: '10px 16px' },
                        borderRadius: { xs: '6px', md: '8px' },
                        height: { xs: '38px', md: '40px' },
                        fontSize: { xs: '0.85rem', md: '0.9rem' },
                        marginTop: 'auto',
                        '&:hover': {
                          backgroundColor: '#2c3e50',
                        },
                      }}
                    >
                      Lihat Materi
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
            </Grid>
          </Box>

          {/* Empty State */}
          {filteredCourses.length === 0 && (
            <Box
              sx={{
                textAlign: 'center',
                padding: { xs: '30px 16px', sm: '40px 20px', md: '60px 40px' },
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontSize: { xs: '1rem', sm: '1.1rem', md: '1.3rem' },
                  color: '#999',
                  fontWeight: 500,
                }}
              >
                Belum ada materi untuk mata pelajaran ini
              </Typography>
            </Box>
          )}
        </Container>
      </Box>

      <Footer />
    </Box>
  );
};

export default CoursePage;
