import { motion } from 'framer-motion';
import { Heart, Baby, Sparkles } from 'lucide-react';
import gallery03 from '@/assets/gallery03.jpg';

const WishesSection = () => {

  return (
    <section className="py-12 px-4 bg-gradient-to-br from-pink-50 via-white to-blue-50 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Pregnancy Announcement Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-6xl mb-2"
          >
            👶
          </motion.div>
          <h2 className="font-romantic text-4xl md:text-5xl font-bold text-primary mb-2">
            Exciting News! 
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our family is growing with love and joy
          </p>
        </motion.div>

        {/* Pregnancy Announcement Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-romantic mb-6"
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            {/* Pregnancy Image */}
            <div className="flex-shrink-0">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative"
              >
                <img
                  src={gallery03}
                  alt="Pregnancy announcement"
                  className="w-64 h-64 object-cover rounded-2xl shadow-heart"
                />
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-4 -right-4 bg-pink-500 text-white rounded-full p-3 shadow-lg"
                >
                  <Baby className="w-6 h-6" />
                </motion.div>
              </motion.div>
            </div>

            {/* Announcement Content */}
            <div className="flex-1 text-center md:text-left">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="font-romantic text-3xl md:text-4xl font-bold text-primary mb-3">
                  Sangeetha is Pregnant! 🤰
                </h3>
                <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                  We're overjoyed to share this beautiful news with all of you. 
                  Our family is blessed with a little miracle on the way, and we 
                  can't wait to welcome this precious little one into our hearts.
                </p>
                
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-r from-pink-100 to-blue-100 rounded-2xl p-4 border-2 border-pink-200"
                >
                  <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    >
                      <Sparkles className="w-6 h-6 text-pink-500" />
                    </motion.div>
                    <h4 className="font-romantic text-2xl font-bold text-primary">
                      Papa Coming Soon! 👨‍👧‍👦
                    </h4>
                  </div>
                  <p className="text-muted-foreground">
                    The countdown has begun for the most amazing journey of parenthood. 
                    We're sending all our love and prayers for a healthy pregnancy and 
                    a beautiful, healthy baby! 💕
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Family Wishes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid gap-4 md:grid-cols-2"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-romantic hover:shadow-glow transition-all duration-300"
          >
            <div className="flex items-start space-x-3">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="text-primary mt-1"
              >
                <Heart className="w-5 h-5" />
              </motion.div>
              <div className="flex-1">
                <h4 className="font-semibold text-primary mb-2">Family Love 💕</h4>
                <p className="text-muted-foreground leading-relaxed">
                  "We're so excited to welcome our little bundle of joy! 
                  This pregnancy brings so much happiness to our family. 
                  Can't wait to meet our precious little one! 👶✨"
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-romantic hover:shadow-glow transition-all duration-300"
          >
            <div className="flex items-start space-x-3">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="text-primary mt-1"
              >
                <Baby className="w-5 h-5" />
              </motion.div>
              <div className="flex-1">
                <h4 className="font-semibold text-primary mb-2">Blessings & Prayers 🙏</h4>
                <p className="text-muted-foreground leading-relaxed">
                  "Sending all our love and prayers for a healthy pregnancy and 
                  a beautiful, healthy baby. You're going to be amazing parents! 
                  This little one is so lucky to have you!"
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 left-10 text-3xl text-primary/30"
        >
          
        </motion.div>
        
        <motion.div
          animate={{ y: [10, -10, 10] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-16 text-2xl text-primary/40"
        >
          
        </motion.div>

        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-4 text-2xl text-pink-300/50"
        >
          
        </motion.div>
      </div>
    </section>
  );
};

export default WishesSection;