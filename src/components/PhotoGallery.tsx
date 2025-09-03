import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import gallery1 from '@/assets/gallery-1.jpg';
import gallery2 from '@/assets/gallery-2.jpg';
import gallery3 from '@/assets/gallery-3.jpg';
import gallery4 from '@/assets/gallery-4.jpg';
import gallery5 from '@/assets/gallery-5.jpg';
import gallery6 from '@/assets/gallery-6.jpg';
import gallery7 from '@/assets/gallery-7.jpg';
import gallery8 from '@/assets/gallery-8.jpg';
import gallery9 from '@/assets/gallery-9.jpg';
import gallery10 from '@/assets/gallery-10.jpg';
import gallery11 from '@/assets/gallery-11.jpg';
import gallery12 from '@/assets/gallery-12.jpg';
import gallery13 from '@/assets/gallery-13.jpg';
import gallery14 from '@/assets/gallery-14.jpg';
import gallery15 from '@/assets/gallery-15.jpg';
import gallery16 from '@/assets/gallery-16.jpg';
import gallery17 from '@/assets/gallery-17.jpg';
import gallery18 from '@/assets/gallery-18.jpg';
import gallery19 from '@/assets/gallery-19.jpg';
import gallery20 from '@/assets/gallery-20.jpg';
import gallery21 from '@/assets/gallery-21.jpg';
import gallery22 from '@/assets/gallery-22.jpg';
import gallery23 from '@/assets/gallery-23.jpg';
import gallery24 from '@/assets/gallery-24.jpg';
import gallery25 from '@/assets/gallery-25.jpg';
import gallery26 from '@/assets/gallery-26.jpg';
import gallery27 from '@/assets/gallery-27.jpg';
import gallery28 from '@/assets/gallery-28.jpg';
import gallery29 from '@/assets/gallery-29.jpg';
import gallery30 from '@/assets/gallery-30.jpg';

interface Photo {
  id: number;
  src: string;
  quote: string;
  alt: string;
}

const PhotoGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  const photos: Photo[] = [
    {
      id: 1,
      src: gallery1,
      quote: "Every love story is beautiful, but ours is my favorite 💕",
      alt: "Beautiful romantic moment"
    },
    {
      id: 2,
      src: gallery2,
      quote: "Two souls, one heart 💍",
      alt: "Engagement ring close-up"
    },
    {
      id: 3,
      src: gallery3,
      quote: "You are my today and all of my tomorrows 🌹",
      alt: "Dancing together"
    },
    {
      id: 4,
      src: gallery4,
      quote: "Together is a wonderful place to be 💖",
      alt: "Beautiful memory 4"
    },
    {
      id: 5,
      src: gallery5,
      quote: "Love is not just looking at each other, it's looking in the same direction ✨",
      alt: "Beautiful memory 5"
    },
    {
      id: 6,
      src:gallery6,
      quote: "You are my sunshine on cloudy days 🌅",
      alt: "Beautiful memory 6"
    },
    {
      id: 7,
      src: gallery7,
      quote: "In your arms, I found my home 🏡",
      alt: "Beautiful memory 7"
    },
    {
      id: 8,
      src: gallery8,
      quote: "Love is friendship set on fire 🔥",
      alt: "Beautiful memory 8"
    },
    {
      id: 9,
      src: gallery9,
      quote: "You make my heart skip a beat 💓",
      alt: "Beautiful memory 9"
    },
    {
      id: 10,
      src: gallery10,
      quote: "Forever begins with you 💫",
      alt: "Beautiful memory 10"
    },
    {
      id: 11,
      src: gallery11,
      quote: "You are my happily ever after 📖",
      alt: "Beautiful memory 11"
    },
    {
      id: 12,
      src: gallery12,
      quote: "Love you to the moon and back 🌙",
      alt: "Beautiful memory 12"
    },
    {
      id: 13,
      src: gallery13,
      quote: "You complete me 🧩",
      alt: "Beautiful memory 13"
    },
    {
      id: 14,
      src: gallery14,
      quote: "My heart is yours forever 💝",
      alt: "Beautiful memory 14"
    },
    {
      id: 15,
      src: gallery15,
      quote: "You are my greatest adventure 🗺️",
      alt: "Beautiful memory 15"
    },
    {
      id: 16,
      src: gallery16,
      quote: "Together we can conquer the world 🌍",
      alt: "Beautiful memory 16"
    },
    {
      id: 17,
      src: gallery17,
      quote: "You are my reason to smile 😊",
      alt: "Beautiful memory 17"
    },
    {
      id: 18,
      src: gallery18,
      quote: "Love is our superpower 💪",
      alt: "Beautiful memory 18"
    },
    {
      id: 19,
      src: gallery19,
      quote: "You are my favorite notification 📱",
      alt: "Beautiful memory 19"
    },
    {
      id: 20,
      src: gallery20,
      quote: "You make ordinary moments extraordinary ✨",
      alt: "Beautiful memory 20"
    },
    {
      id: 21,
      src: gallery21,
      quote: "You are my cup of tea ☕",
      alt: "Beautiful memory 21"
    },
    {
      id: 22,
      src: gallery22,
      quote: "Love is in the air 🎈",
      alt: "Beautiful memory 22"
    },
    {
      id: 23,
      src: gallery23,
      quote: "You are my lucky charm 🍀",
      alt: "Beautiful memory 23"
    },
    {
      id: 24,
      src: gallery24,
      quote: "You make my world colorful 🌈",
      alt: "Beautiful memory 24"
    },
    {
      id: 25,
      src:gallery25,
      quote: "You are my perfect match 🧩",
      alt: "Beautiful memory 25"
    },
    {
      id: 26,
      src: gallery26,
      quote: "Love is our language 💬",
      alt: "Beautiful memory 26"
    },
    {
      id: 27,
      src: gallery27,
      quote: "You are my treasure 💎",
      alt: "Beautiful memory 27"
    },
    {
      id: 28,
      src: gallery28,
      quote: "Together we shine brighter ⭐",
      alt: "Beautiful memory 28"
    },
    {
      id: 29,
      src: gallery29,
      quote: "You are my everything 🌟",
      alt: "Beautiful memory 29"
    },
    {
      id: 30,
      src: gallery30,
      quote: "Love never fails ❤️",
      alt: "Beautiful memory 30"
    }
  ];

  return (
    <section id="gallery" className="py-20 px-4 bg-gradient-card relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 px-4"
        >
          <h2 className="font-romantic text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Our Beautiful Memories 🖼
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Every picture tells a story of love, joy, and the beautiful journey we've shared together
          </p>
        </motion.div>

        {/* Carousel Display */}
        <div className="relative max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl shadow-romantic"
          >
            <img
              src={photos[currentIndex].src}
              alt={photos[currentIndex].alt}
              className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] object-cover cursor-pointer"
              onClick={() => setSelectedPhoto(photos[currentIndex])}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            
            {/* Navigation Buttons - responsive sizing */}
            <Button
              onClick={() => setCurrentIndex(prev => prev === 0 ? photos.length - 1 : prev - 1)}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/30 hover:border-white/50 rounded-full p-2 sm:p-3 shadow-heart hover:shadow-glow transition-all duration-300"
              size="icon"
            >
              <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
            </Button>
            
            <Button
              onClick={() => setCurrentIndex(prev => prev === photos.length - 1 ? 0 : prev + 1)}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/30 hover:border-white/50 rounded-full p-2 sm:p-3 shadow-heart hover:shadow-glow transition-all duration-300"
              size="icon"
            >
              <ChevronRight size={20} className="sm:w-6 sm:h-6" />
            </Button>
            

            
            {/* Quote Preview - responsive text and positioning */}
            <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4 text-center">
              <p className="text-white text-sm sm:text-base md:text-lg font-romantic drop-shadow-lg line-clamp-2 sm:line-clamp-none">
                {photos[currentIndex].quote}
              </p>
            </div>
          </motion.div>
          
          {/* Thumbnail Navigation */}
          <div className="flex justify-center mt-6 space-x-2 overflow-x-auto pb-2">
            {photos.slice(0, 10).map((photo, index) => (
              <button
                key={photo.id}
                onClick={() => setCurrentIndex(index)}
                className={`flex-shrink-0 w-16 h-16 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                  currentIndex === index 
                    ? 'border-primary shadow-glow scale-110' 
                    : 'border-white/30 opacity-70 hover:opacity-100'
                }`}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
            {photos.length > 10 && (
              <div className="flex items-center px-3 text-muted-foreground text-sm">
                +{photos.length - 10} more
              </div>
            )}
          </div>
        </div>

        {/* Lightbox Modal */}
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-[90vh] bg-white rounded-3xl overflow-hidden shadow-glow"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 z-10 bg-white/20 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/30 transition-colors"
              >
                <X size={24} />
              </button>
              
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.alt}
                className="w-full h-auto max-h-[70vh] object-contain"
              />
              
              <div className="p-6 bg-gradient-card">
                <p className="font-romantic text-xl md:text-2xl text-primary text-center leading-relaxed">
                  {selectedPhoto.quote}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default PhotoGallery;