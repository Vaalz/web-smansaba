import { Box } from '@mui/material';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import WelcomeSection from '../components/WelcomeSection';
import ArticleSection from '../components/ArticleSection';
import ExtracurricularSection from '../components/ExtracurricularSection';
import PTNAcceptanceSection from '../components/PTNAcceptanceSection';
import AchievementSection from '../components/AchievementSection';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <Box>
      <Navbar />
      <Hero />
      <WelcomeSection />
      <ArticleSection />
      <ExtracurricularSection />
      <PTNAcceptanceSection />
      <AchievementSection />
      <Footer />
    </Box>
  );
};

export default LandingPage;
