import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Chip, Button, Avatar } from '@mui/material';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import smansabaImage from '../assets/image/smansaba.jpg';
import { Book, Person, Schedule, ArrowForward } from '@mui/icons-material';

const CoursePage = () => {
  const [selectedSubject, setSelectedSubject] = useState('ALL');

  // Dummy data untuk mata pelajaran
  const subjects = [
    'ALL', 
    'Matematika', 
    'Fisika', 
    'Kimia', 
    'Biologi', 
    'Bahasa Indonesia', 
    'Bahasa Inggris', 
    'Sejarah', 
    'Geografi', 
    'Ekonomi', 
    'Sosiologi',
    'Pendidikan Agama',
    'PPKn',
    'PJOK',
    'Seni Budaya',
    'Informatika',
    'Bahasa Jawa'
  ];

  // Dummy data untuk course/materi - Data Kosong untuk CRUD (6 card per mata pelajaran)
  const courses = [
    // Matematika (6 cards)
    { id: 1, title: 'Materi Matematika 1', subject: 'Matematika', description: '', teacher: '', teacherAvatar: '', level: 'Kelas X', totalMaterial: 0, lastUpdated: '', thumbnail: '' },
    { id: 2, title: 'Materi Matematika 2', subject: 'Matematika', description: '', teacher: '', teacherAvatar: '', level: 'Kelas X', totalMaterial: 0, lastUpdated: '', thumbnail: '' },
    { id: 3, title: 'Materi Matematika 3', subject: 'Matematika', description: '', teacher: '', teacherAvatar: '', level: 'Kelas X', totalMaterial: 0, lastUpdated: '', thumbnail: '' },
    { id: 4, title: 'Materi Matematika 4', subject: 'Matematika', description: '', teacher: '', teacherAvatar: '', level: 'Kelas X', totalMaterial: 0, lastUpdated: '', thumbnail: '' },
    { id: 5, title: 'Materi Matematika 5', subject: 'Matematika', description: '', teacher: '', teacherAvatar: '', level: 'Kelas X', totalMaterial: 0, lastUpdated: '', thumbnail: '' },
    { id: 6, title: 'Materi Matematika 6', subject: 'Matematika', description: '', teacher: '', teacherAvatar: '', level: 'Kelas X', totalMaterial: 0, lastUpdated: '', thumbnail: '' },
    // Fisika (6 cards)
    { id: 7, title: 'Materi Fisika 1', subject: 'Fisika', description: '', teacher: '', teacherAvatar: '', level: 'Kelas X', totalMaterial: 0, lastUpdated: '', thumbnail: '' },
    { id: 8, title: 'Materi Fisika 2', subject: 'Fisika', description: '', teacher: '', teacherAvatar: '', level: 'Kelas X', totalMaterial: 0, lastUpdated: '', thumbnail: '' },
    { id: 9, title: 'Materi Fisika 3', subject: 'Fisika', description: '', teacher: '', teacherAvatar: '', level: 'Kelas X', totalMaterial: 0, lastUpdated: '', thumbnail: '' },
    { id: 10, title: 'Materi Fisika 4', subject: 'Fisika', description: '', teacher: '', teacherAvatar: '', level: 'Kelas X', totalMaterial: 0, lastUpdated: '', thumbnail: '' },
    { id: 11, title: 'Materi Fisika 5', subject: 'Fisika', description: '', teacher: '', teacherAvatar: '', level: 'Kelas X', totalMaterial: 0, lastUpdated: '', thumbnail: '' },
    { id: 12, title: 'Materi Fisika 6', subject: 'Fisika', description: '', teacher: '', teacherAvatar: '', level: 'Kelas X', totalMaterial: 0, lastUpdated: '', thumbnail: '' },
    // Kimia (6 cards)
    { id: 13, title: 'Materi Kimia 1', subject: 'Kimia', description: '', teacher: '', teacherAvatar: '', level: 'Kelas X', totalMaterial: 0, lastUpdated: '', thumbnail: '' },
    { id: 14, title: 'Materi Kimia 2', subject: 'Kimia', description: '', teacher: '', teacherAvatar: '', level: 'Kelas X', totalMaterial: 0, lastUpdated: '', thumbnail: '' },
    { id: 15, title: 'Materi Kimia 3', subject: 'Kimia', description: '', teacher: '', teacherAvatar: '', level: 'Kelas X', totalMaterial: 0, lastUpdated: '', thumbnail: '' },
    { id: 16, title: 'Materi Kimia 4', subject: 'Kimia', description: '', teacher: '', teacherAvatar: '', level: 'Kelas X', totalMaterial: 0, lastUpdated: '', thumbnail: '' },
    { id: 17, title: 'Materi Kimia 5', subject: 'Kimia', description: '', teacher: '', teacherAvatar: '', level: 'Kelas X', totalMaterial: 0, lastUpdated: '', thumbnail: '' },
    { id: 18, title: 'Materi Kimia 6', subject: 'Kimia', description: '', teacher: '', teacherAvatar: '', level: 'Kelas X', totalMaterial: 0, lastUpdated: '', thumbnail: '' },
    // Biologi (6 cards)
    { id: 19, title: 'Materi Biologi 1', subject: 'Biologi', description: '', teacher: '', teacherAvatar: '', level: 'Kelas X', totalMaterial: 0, lastUpdated: '', thumbnail: '' },
    { id: 20, title: 'Materi Biologi 2', subject: 'Biologi', description: '', teacher: '', teacherAvatar: '', level: 'Kelas X', totalMaterial: 0, lastUpdated: '', thumbnail: '' },
    { id: 21, title: 'Materi Biologi 3', subject: 'Biologi', description: '', teacher: '', teacherAvatar: '', level: 'Kelas X', totalMaterial: 0, lastUpdated: '', thumbnail: '' },
    { id: 22, title: 'Materi Biologi 4', subject: 'Biologi', description: '', teacher: '', teacherAvatar: '', level: 'Kelas X', totalMaterial: 0, lastUpdated: '', thumbnail: '' },
    { id: 23, title: 'Materi Biologi 5', subject: 'Biologi', description: '', teacher: '', teacherAvatar: '', level: 'Kelas X', totalMaterial: 0, lastUpdated: '', thumbnail: '' },
    { id: 24, title: 'Materi Biologi 6', subject: 'Biologi', description: '', teacher: '', teacherAvatar: '', level: 'Kelas X', totalMaterial: 0, lastUpdated: '', thumbnail: '' },
    // Bahasa Indonesia (6 cards)
    { id: 25, title: 'Materi Bahasa Indonesia 1', subject: 'Bahasa Indonesia', description: '', teacher: '', teacherAvatar: '', level: 'Kelas X', totalMaterial: 0, lastUpdated: '', thumbnail: '' },
    { id: 26, title: 'Materi Bahasa Indonesia 2', subject: 'Bahasa Indonesia', description: '', teacher: '', teacherAvatar: '', level: 'Kelas X', totalMaterial: 0, lastUpdated: '', thumbnail: '' },
    { id: 27, title: 'Materi Bahasa Indonesia 3', subject: 'Bahasa Indonesia', description: '', teacher: '', teacherAvatar: '', level: 'Kelas X', totalMaterial: 0, lastUpdated: '', thumbnail: '' },
    { id: 28, title: 'Materi Bahasa Indonesia 4', subject: 'Bahasa Indonesia', description: '', teacher: '', teacherAvatar: '', level: 'Kelas X', totalMaterial: 0, lastUpdated: '', thumbnail: '' },
    { id: 29, title: 'Materi Bahasa Indonesia 5', subject: 'Bahasa Indonesia', description: '', teacher: '', teacherAvatar: '', level: 'Kelas X', totalMaterial: 0, lastUpdated: '', thumbnail: '' },
    { id: 30, title: 'Materi Bahasa Indonesia 6', subject: 'Bahasa Indonesia', description: '', teacher: '', teacherAvatar: '', level: 'Kelas X', totalMaterial: 0, lastUpdated: '', thumbnail: '' },
    // Bahasa Inggris (6 cards)
    { id: 31, title: 'Materi Bahasa Inggris 1', subject: 'Bahasa Inggris', description: '', teacher: '', teacherAvatar: '', level: 'Kelas X', totalMaterial: 0, lastUpdated: '', thumbnail: '' },
    { id: 32, title: 'Materi Bahasa Inggris 2', subject: 'Bahasa Inggris', description: '', teacher: '', teacherAvatar: '', level: 'Kelas X', totalMaterial: 0, lastUpdated: '', thumbnail: '' },
    { id: 33, title: 'Materi Bahasa Inggris 3', subject: 'Bahasa Inggris', description: '', teacher: '', teacherAvatar: '', level: 'Kelas X', totalMaterial: 0, lastUpdated: '', thumbnail: '' },
    { id: 34, title: 'Materi Bahasa Inggris 4', subject: 'Bahasa Inggris', description: '', teacher: '', teacherAvatar: '', level: 'Kelas X', totalMaterial: 0, lastUpdated: '', thumbnail: '' },
    { id: 35, title: 'Materi Bahasa Inggris 5', subject: 'Bahasa Inggris', description: '', teacher: '', teacherAvatar: '', level: 'Kelas X', totalMaterial: 0, lastUpdated: '', thumbnail: '' },
    { id: 36, title: 'Materi Bahasa Inggris 6', subject: 'Bahasa Inggris', description: '', teacher: '', teacherAvatar: '', level: 'Kelas X', totalMaterial: 0, lastUpdated: '', thumbnail: '' },
    // Sejarah (6 cards)
    { id: 37, title: 'Materi Sejarah 1', subject: 'Sejarah', description: '', teacher: '', teacherAvatar: '', level: 'Kelas X', totalMaterial: 0, lastUpdated: '', thumbnail: '' },
    { id: 38, title: 'Materi Sejarah 2', subject: 'Sejarah', description: '', teacher: '', teacherAvatar: '', level: 'Kelas X', totalMaterial: 0, lastUpdated: '', thumbnail: '' },
    { id: 39, title: 'Materi Sejarah 3', subject: 'Sejarah', description: '', teacher: '', teacherAvatar: '', level: 'Kelas X', totalMaterial: 0, lastUpdated: '', thumbnail: '' },
    { id: 40, title: 'Materi Sejarah 4', subject: 'Sejarah', description: '', teacher: '', teacherAvatar: '', level: 'Kelas X', totalMaterial: 0, lastUpdated: '', thumbnail: '' },
    { id: 41, title: 'Materi Sejarah 5', subject: 'Sejarah', description: '', teacher: '', teacherAvatar: '', level: 'Kelas X', totalMaterial: 0, lastUpdated: '', thumbnail: '' },
    { id: 42, title: 'Materi Sejarah 6', subject: 'Sejarah', description: '', teacher: '', teacherAvatar: '', level: 'Kelas X', totalMaterial: 0, lastUpdated: '', thumbnail: '' },
    // Geografi (6 cards)
    { id: 43, title: 'Materi Geografi 1', subject: 'Geografi', description: '', teacher: '', teacherAvatar: '', level: 'Kelas X', totalMaterial: 0, lastUpdated: '', thumbnail: '' },
    { id: 44, title: 'Materi Geografi 2', subject: 'Geografi', description: '', teacher: '', teacherAvatar: '', level: 'Kelas X', totalMaterial: 0, lastUpdated: '', thumbnail: '' },
    { id: 45, title: 'Materi Geografi 3', subject: 'Geografi', description: '', teacher: '', teacherAvatar: '', level: 'Kelas X', totalMaterial: 0, lastUpdated: '', thumbnail: '' },
    { id: 46, title: 'Materi Geografi 4', subject: 'Geografi', description: '', teacher: '', teacherAvatar: '', level: 'Kelas X', totalMaterial: 0, lastUpdated: '', thumbnail: '' },
    { id: 47, title: 'Materi Geografi 5', subject: 'Geografi', description: '', teacher: '', teacherAvatar: '', level: 'Kelas X', totalMaterial: 0, lastUpdated: '', thumbnail: '' },
    { id: 48, title: 'Materi Geografi 6', subject: 'Geografi', description: '', teacher: '', teacherAvatar: '', level: 'Kelas X', totalMaterial: 0, lastUpdated: '', thumbnail: '' },
    // Ekonomi (6 cards)
    { id: 49, title: 'Materi Ekonomi 1', subject: 'Ekonomi', description: '', teacher: '', teacherAvatar: '', level: 'Kelas X', totalMaterial: 0, lastUpdated: '', thumbnail: '' },
    { id: 50, title: 'Materi Ekonomi 2', subject: 'Ekonomi', description: '', teacher: '', teacherAvatar: '', level: 'Kelas X', totalMaterial: 0, lastUpdated: '', thumbnail: '' },
    { id: 51, title: 'Materi Ekonomi 3', subject: 'Ekonomi', description: '', teacher: '', teacherAvatar: '', level: 'Kelas X', totalMaterial: 0, lastUpdated: '', thumbnail: '' },
    { id: 52, title: 'Materi Ekonomi 4', subject: 'Ekonomi', description: '', teacher: '', teacherAvatar: '', level: 'Kelas X', totalMaterial: 0, lastUpdated: '', thumbnail: '' },
    { id: 53, title: 'Materi Ekonomi 5', subject: 'Ekonomi', description: '', teacher: '', teacherAvatar: '', level: 'Kelas X', totalMaterial: 0, lastUpdated: '', thumbnail: '' },
    { id: 54, title: 'Materi Ekonomi 6', subject: 'Ekonomi', description: '', teacher: '', teacherAvatar: '', level: 'Kelas X', totalMaterial: 0, lastUpdated: '', thumbnail: '' },
    // Sosiologi (6 cards)
    { id: 55, title: 'Materi Sosiologi 1', subject: 'Sosiologi', description: '', teacher: '', teacherAvatar: '', level: 'Kelas X', totalMaterial: 0, lastUpdated: '', thumbnail: '' },
    { id: 56, title: 'Materi Sosiologi 2', subject: 'Sosiologi', description: '', teacher: '', teacherAvatar: '', level: 'Kelas X', totalMaterial: 0, lastUpdated: '', thumbnail: '' },
    { id: 57, title: 'Materi Sosiologi 3', subject: 'Sosiologi', description: '', teacher: '', teacherAvatar: '', level: 'Kelas X', totalMaterial: 0, lastUpdated: '', thumbnail: '' },
    { id: 58, title: 'Materi Sosiologi 4', subject: 'Sosiologi', description: '', teacher: '', teacherAvatar: '', level: 'Kelas X', totalMaterial: 0, lastUpdated: '', thumbnail: '' },
    { id: 59, title: 'Materi Sosiologi 5', subject: 'Sosiologi', description: '', teacher: '', teacherAvatar: '', level: 'Kelas X', totalMaterial: 0, lastUpdated: '', thumbnail: '' },
    { id: 60, title: 'Materi Sosiologi 6', subject: 'Sosiologi', description: '', teacher: '', teacherAvatar: '', level: 'Kelas X', totalMaterial: 0, lastUpdated: '', thumbnail: '' },
    // Pendidikan Agama (6 cards)
    { id: 61, title: 'Materi Pendidikan Agama 1', subject: 'Pendidikan Agama', description: '', teacher: '', teacherAvatar: '', level: 'Kelas X', totalMaterial: 0, lastUpdated: '', thumbnail: '' },
    { id: 62, title: 'Materi Pendidikan Agama 2', subject: 'Pendidikan Agama', description: '', teacher: '', teacherAvatar: '', level: 'Kelas X', totalMaterial: 0, lastUpdated: '', thumbnail: '' },
    { id: 63, title: 'Materi Pendidikan Agama 3', subject: 'Pendidikan Agama', description: '', teacher: '', teacherAvatar: '', level: 'Kelas X', totalMaterial: 0, lastUpdated: '', thumbnail: '' },
    { id: 64, title: 'Materi Pendidikan Agama 4', subject: 'Pendidikan Agama', description: '', teacher: '', teacherAvatar: '', level: 'Kelas X', totalMaterial: 0, lastUpdated: '', thumbnail: '' },
    { id: 65, title: 'Materi Pendidikan Agama 5', subject: 'Pendidikan Agama', description: '', teacher: '', teacherAvatar: '', level: 'Kelas X', totalMaterial: 0, lastUpdated: '', thumbnail: '' },
    { id: 66, title: 'Materi Pendidikan Agama 6', subject: 'Pendidikan Agama', description: '', teacher: '', teacherAvatar: '', level: 'Kelas X', totalMaterial: 0, lastUpdated: '', thumbnail: '' },
    // PPKn (6 cards)
    { id: 67, title: 'Materi PPKn 1', subject: 'PPKn', description: '', teacher: '', teacherAvatar: '', level: 'Kelas X', totalMaterial: 0, lastUpdated: '', thumbnail: '' },
    { id: 68, title: 'Materi PPKn 2', subject: 'PPKn', description: '', teacher: '', teacherAvatar: '', level: 'Kelas X', totalMaterial: 0, lastUpdated: '', thumbnail: '' },
    { id: 69, title: 'Materi PPKn 3', subject: 'PPKn', description: '', teacher: '', teacherAvatar: '', level: 'Kelas X', totalMaterial: 0, lastUpdated: '', thumbnail: '' },
    { id: 70, title: 'Materi PPKn 4', subject: 'PPKn', description: '', teacher: '', teacherAvatar: '', level: 'Kelas X', totalMaterial: 0, lastUpdated: '', thumbnail: '' },
    { id: 71, title: 'Materi PPKn 5', subject: 'PPKn', description: '', teacher: '', teacherAvatar: '', level: 'Kelas X', totalMaterial: 0, lastUpdated: '', thumbnail: '' },
    { id: 72, title: 'Materi PPKn 6', subject: 'PPKn', description: '', teacher: '', teacherAvatar: '', level: 'Kelas X', totalMaterial: 0, lastUpdated: '', thumbnail: '' },
    // PJOK (6 cards)
    { id: 73, title: 'Materi PJOK 1', subject: 'PJOK', description: '', teacher: '', teacherAvatar: '', level: 'Kelas X', totalMaterial: 0, lastUpdated: '', thumbnail: '' },
    { id: 74, title: 'Materi PJOK 2', subject: 'PJOK', description: '', teacher: '', teacherAvatar: '', level: 'Kelas X', totalMaterial: 0, lastUpdated: '', thumbnail: '' },
    { id: 75, title: 'Materi PJOK 3', subject: 'PJOK', description: '', teacher: '', teacherAvatar: '', level: 'Kelas X', totalMaterial: 0, lastUpdated: '', thumbnail: '' },
    { id: 76, title: 'Materi PJOK 4', subject: 'PJOK', description: '', teacher: '', teacherAvatar: '', level: 'Kelas X', totalMaterial: 0, lastUpdated: '', thumbnail: '' },
    { id: 77, title: 'Materi PJOK 5', subject: 'PJOK', description: '', teacher: '', teacherAvatar: '', level: 'Kelas X', totalMaterial: 0, lastUpdated: '', thumbnail: '' },
    { id: 78, title: 'Materi PJOK 6', subject: 'PJOK', description: '', teacher: '', teacherAvatar: '', level: 'Kelas X', totalMaterial: 0, lastUpdated: '', thumbnail: '' },
    // Seni Budaya (6 cards)
    { id: 79, title: 'Materi Seni Budaya 1', subject: 'Seni Budaya', description: '', teacher: '', teacherAvatar: '', level: 'Kelas X', totalMaterial: 0, lastUpdated: '', thumbnail: '' },
    { id: 80, title: 'Materi Seni Budaya 2', subject: 'Seni Budaya', description: '', teacher: '', teacherAvatar: '', level: 'Kelas X', totalMaterial: 0, lastUpdated: '', thumbnail: '' },
    { id: 81, title: 'Materi Seni Budaya 3', subject: 'Seni Budaya', description: '', teacher: '', teacherAvatar: '', level: 'Kelas X', totalMaterial: 0, lastUpdated: '', thumbnail: '' },
    { id: 82, title: 'Materi Seni Budaya 4', subject: 'Seni Budaya', description: '', teacher: '', teacherAvatar: '', level: 'Kelas X', totalMaterial: 0, lastUpdated: '', thumbnail: '' },
    { id: 83, title: 'Materi Seni Budaya 5', subject: 'Seni Budaya', description: '', teacher: '', teacherAvatar: '', level: 'Kelas X', totalMaterial: 0, lastUpdated: '', thumbnail: '' },
    { id: 84, title: 'Materi Seni Budaya 6', subject: 'Seni Budaya', description: '', teacher: '', teacherAvatar: '', level: 'Kelas X', totalMaterial: 0, lastUpdated: '', thumbnail: '' },
    // Informatika (6 cards)
    { id: 85, title: 'Materi Informatika 1', subject: 'Informatika', description: '', teacher: '', teacherAvatar: '', level: 'Kelas X', totalMaterial: 0, lastUpdated: '', thumbnail: '' },
    { id: 86, title: 'Materi Informatika 2', subject: 'Informatika', description: '', teacher: '', teacherAvatar: '', level: 'Kelas X', totalMaterial: 0, lastUpdated: '', thumbnail: '' },
    { id: 87, title: 'Materi Informatika 3', subject: 'Informatika', description: '', teacher: '', teacherAvatar: '', level: 'Kelas X', totalMaterial: 0, lastUpdated: '', thumbnail: '' },
    { id: 88, title: 'Materi Informatika 4', subject: 'Informatika', description: '', teacher: '', teacherAvatar: '', level: 'Kelas X', totalMaterial: 0, lastUpdated: '', thumbnail: '' },
    { id: 89, title: 'Materi Informatika 5', subject: 'Informatika', description: '', teacher: '', teacherAvatar: '', level: 'Kelas X', totalMaterial: 0, lastUpdated: '', thumbnail: '' },
    { id: 90, title: 'Materi Informatika 6', subject: 'Informatika', description: '', teacher: '', teacherAvatar: '', level: 'Kelas X', totalMaterial: 0, lastUpdated: '', thumbnail: '' },
    // Bahasa Jawa (6 cards)
    { id: 91, title: 'Materi Bahasa Jawa 1', subject: 'Bahasa Jawa', description: '', teacher: '', teacherAvatar: '', level: 'Kelas X', totalMaterial: 0, lastUpdated: '', thumbnail: '' },
    { id: 92, title: 'Materi Bahasa Jawa 2', subject: 'Bahasa Jawa', description: '', teacher: '', teacherAvatar: '', level: 'Kelas X', totalMaterial: 0, lastUpdated: '', thumbnail: '' },
    { id: 93, title: 'Materi Bahasa Jawa 3', subject: 'Bahasa Jawa', description: '', teacher: '', teacherAvatar: '', level: 'Kelas X', totalMaterial: 0, lastUpdated: '', thumbnail: '' },
    { id: 94, title: 'Materi Bahasa Jawa 4', subject: 'Bahasa Jawa', description: '', teacher: '', teacherAvatar: '', level: 'Kelas X', totalMaterial: 0, lastUpdated: '', thumbnail: '' },
    { id: 95, title: 'Materi Bahasa Jawa 5', subject: 'Bahasa Jawa', description: '', teacher: '', teacherAvatar: '', level: 'Kelas X', totalMaterial: 0, lastUpdated: '', thumbnail: '' },
    { id: 96, title: 'Materi Bahasa Jawa 6', subject: 'Bahasa Jawa', description: '', teacher: '', teacherAvatar: '', level: 'Kelas X', totalMaterial: 0, lastUpdated: '', thumbnail: '' },
  ];

  const filteredCourses = selectedSubject === 'ALL' 
    ? courses 
    : courses.filter(course => course.subject === selectedSubject);

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
