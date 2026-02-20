import { Box } from '@mui/material';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import WelcomeSection from '../components/WelcomeSection';
import ArticleSection from '../components/ArticleSection';
import ExtracurricularSection from '../components/ExtracurricularSection';

const LandingPage = () => {
  return (
    <Box>
      <Navbar />
      <Hero />
      <WelcomeSection />
      <ArticleSection />
      <ExtracurricularSection />
    </Box>
  );
};

export default LandingPage;
