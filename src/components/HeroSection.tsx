import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-engagement.jpg';

const HeroSection = () => {
  const scrollToGallery = () => {
    document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image (centered) */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={heroImage}
          alt=""
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-50" />
      </div>
      
      {/* Content */}
      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="font-romantic text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 text-white drop-shadow-2xl leading-tight"
        >
          Happy 1st Engagement
          <br />
          <span className="text-pink-200 glow-heart drop-shadow-2xl">Anniversary ❤</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white mb-8 sm:mb-12 font-semibold leading-relaxed drop-shadow-2xl"
        >
          Gowtham & Sangeetha
          <br />
          <span className="text-base sm:text-lg md:text-xl text-pink-100 font-medium drop-shadow-xl">Celebrating a journey of love, laughter, and togetherness</span>
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          <Button
            onClick={scrollToGallery}
            size="lg"
            className="bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/30 hover:border-white/50 rounded-2xl px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium shadow-heart transition-all duration-300 hover:scale-105 hover:shadow-glow"
          >
            View Our Memories 💕
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;