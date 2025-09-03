import { motion } from 'framer-motion';

const CelebrationSection = () => {

  // Firework animation data
  const fireworks = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    delay: Math.random() * 2,
    x: 10 + Math.random() * 80,
    y: 20 + Math.random() * 60,
  }));

  return (
    <section className="py-12 px-4 bg-gradient-hero relative overflow-hidden min-h-[60vh] flex items-center justify-center">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Fireworks */}
        {fireworks.map((firework) => (
          <motion.div
            key={firework.id}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: [0, 1.5, 0], 
              opacity: [0, 1, 0],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 3,
              delay: firework.delay,
              repeat: Infinity,
              repeatDelay: 2,
              ease: "easeOut"
            }}
            className="absolute w-8 h-8 text-4xl"
            style={{ 
              left: `${firework.x}%`, 
              top: `${firework.y}%`,
            }}
          >
            
          </motion.div>
        ))}

        {/* Glowing Hearts - responsive positioning and sizing */}
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 10, -10, 0],
            filter: ["brightness(1)", "brightness(1.5)", "brightness(1)"]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 sm:top-20 left-4 sm:left-20 text-3xl sm:text-4xl md:text-6xl text-pink-300/70"
        >
        
        </motion.div>

        <motion.div
          animate={{ 
            scale: [1, 1.3, 1],
            y: [-20, 20, -20]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-16 sm:top-32 right-4 sm:right-24 text-2xl sm:text-3xl md:text-5xl text-pink-200/60"
        >
          
        </motion.div>

        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 sm:bottom-40 left-4 sm:left-16 text-2xl sm:text-3xl md:text-4xl text-pink-300/50"
        >
          
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-3 sm:mb-4"
        >
          <motion.h2
            animate={{ 
              textShadow: [
                "0 0 20px hsl(340, 90%, 75%)",
                "0 0 40px hsl(340, 90%, 75%)",
                "0 0 20px hsl(340, 90%, 75%)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="font-romantic text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-2 sm:mb-3 leading-tight"
          >
            Forever Begins
            <br />
            <span className="text-pink-200">with Love ❤</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-pink-100 mb-3 sm:mb-4 leading-relaxed max-w-2xl mx-auto"
          >
            Here's to a lifetime of shared dreams, endless laughter, and a love that grows stronger with each passing day
          </motion.p>
        </motion.div>

        {/* Heart Burst Animation - responsive sizing */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="relative mb-3 sm:mb-4"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="relative w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 mx-auto"
          >
            {Array.from({ length: 8 }, (_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1.2, 1] }}
                transition={{ 
                  duration: 2, 
                  delay: i * 0.1 + 0.5,
                  repeat: Infinity,
                  repeatDelay: 3
                }}
                className="absolute text-lg sm:text-xl md:text-2xl text-pink-200"
                style={{
                  transform: `rotate(${i * 45}deg) translateY(-40px)`,
                  transformOrigin: 'center 40px'
                }}
              >
                
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Decorative Quote - responsive text and padding */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: true }}
          className="mt-3 sm:mt-4 p-3 sm:p-4 md:p-6 bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-white/20"
        >
          <p className="font-romantic text-base sm:text-lg md:text-xl lg:text-2xl text-pink-100 italic leading-relaxed">
            "Being deeply loved by someone gives you strength,
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            while loving someone deeply gives you courage."
          </p>
          
        </motion.div>
      </div>
    </section>
  );
};

export default CelebrationSection;
