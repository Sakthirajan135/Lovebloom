import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-primary/90 backdrop-blur-sm py-8 px-4 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex items-center justify-center space-x-3 mb-4"
        >
          <span className="text-white text-lg font-medium">
            Made with
          </span>
          
         
          
          <span className="text-white text-lg font-medium">
            for G ❤️ S
          </span>
        </motion.div>
        
        <motion.h3
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="font-romantic text-2xl md:text-3xl text-pink-100 font-bold mb-6"
        >
          Engagement Anniversary
        </motion.h3>

        <motion.div
          animate={{ y: [-5, 5, -5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-4xl mb-4"
        >
          
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-pink-100/80 text-sm leading-relaxed max-w-2xl mx-auto mb-6"
        >
          May your love continue to bloom and flourish with each passing year.
          <br />
          Here's to many more beautiful anniversaries filled with joy, laughter, and endless love.
        </motion.p>

        {/* Creator Attribution */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-pink-200/30 pt-4"
        >
          <motion.div
            animate={{ 
              scale: [1, 1.05, 1],
              filter: ["brightness(1)", "brightness(1.2)", "brightness(1)"]
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-pink-200/30 mb-4"
          >
            <span className="text-pink-100 text-sm font-medium">Created with love</span>
            <motion.span
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="text-pink-200"
            >
              💝
            </motion.span>
            <span className="text-white font-semibold text-sm">by Sakthi</span>
          </motion.div>
          
          <div className="text-pink-100/60 text-xs">
            © 2025 Gowtham & Sangeetha • All Secrets Reserved
          </div>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute top-4 left-8 text-2xl text-pink-200/30"></div>
        <div className="absolute top-8 right-12 text-xl text-pink-300/40"></div>
        <div className="absolute bottom-4 left-16 text-lg text-pink-200/30"></div>
        <div className="absolute bottom-6 right-8 text-2xl text-pink-300/30"></div>
      </div>
    </footer>
  );
};

export default Footer;