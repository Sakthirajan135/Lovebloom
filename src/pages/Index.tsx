import FloatingHearts from '@/components/FloatingHearts';
import FallingPetals from '@/components/FallingPetals';
import CursorHeart from '@/components/CursorHeart';
import HeroSection from '@/components/HeroSection';
import PhotoGallery from '@/components/PhotoGallery';
import LoveTimeline from '@/components/LoveTimeline';
import WishesSection from '@/components/WishesSection';
import CelebrationSection from '@/components/CelebrationSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen relative">
      {/* Animated Background Elements */}
      <CursorHeart />
      
      {/* Main Content Sections */}
      <HeroSection />
      <PhotoGallery />
      <LoveTimeline />
      <WishesSection />
      <CelebrationSection />
      <Footer />
    </div>
  );
};

export default Index;
