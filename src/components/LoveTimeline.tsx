import { motion } from 'framer-motion';
import { Heart, Church, Plane, Calendar } from 'lucide-react';
import timelineWedding from '@/assets/timelinewedding.jpg';
import timelinetravel from '@/assets/timelinetravel.jpg';``
import gallery01 from '@/assets/gallery01.jpg';
import gallery02 from '@/assets/gallery02.jpg';

interface TimelineEvent {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  date: string;
}

const LoveTimeline = () => {
  const timelineEvents: TimelineEvent[] = [
    {
      id: 1,
      title: "Engagement Day 💍",
      description: "The beautiful beginning of our forever journey. The day we decided to walk hand in hand through life's adventures.",
      icon: <Heart className="w-6 h-6" />,
      image: gallery01,
      date: "The Day We Said Yes"
    },
    {
      id: 2,
      title: "Wedding Day 💒",
      description: "Our dream wedding day, filled with love, joy, and unforgettable memories.",
      icon: <Church className="w-6 h-6" />,
      image: timelineWedding,
      date: "Creating Our Dream"
    },
    {
      id: 3,
      title: "Adventures Together ✈",
      description: "Exploring the world hand in hand, creating beautiful memories in every destination we visit.",
      icon: <Plane className="w-6 h-6" />,
      image: timelinetravel,
      date: "Discovering the World"
    },
    {
      id: 4,
      title: "Today & Forever ❤",
      description: "Celebrating our first engagement anniversary and looking forward to a lifetime of love and happiness.",
      icon: <Calendar className="w-6 h-6" />,
      image: gallery02,
      date: "Our Anniversary"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-romantic relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="font-romantic text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 drop-shadow-lg px-4">
            Our Love Story Timeline 📜
          </h2>
          <p className="text-lg sm:text-xl text-pink-100 max-w-2xl mx-auto px-4">
            Every chapter of our story is filled with love, laughter, and beautiful moments
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line - hidden on mobile, visible on larger screens */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-white/30 rounded-full" />

          {timelineEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative mb-8 sm:mb-12 md:mb-16 ${
                // Mobile: stack vertically, Desktop: alternate sides
                'md:flex md:items-center ' + (index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse')
              }`}
            >
              {/* Content Card */}
              <div className={`w-full md:w-5/12 px-4 ${
                index % 2 === 0 ? 'md:text-right md:pr-8 md:pl-0' : 'md:text-left md:pl-8 md:pr-0'
              }`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-white/95 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-romantic hover:shadow-glow transition-all duration-300"
                >
                  <div className="mb-4">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-40 sm:h-48 object-cover rounded-xl sm:rounded-2xl shadow-heart"
                    />
                  </div>
                  <h3 className="font-romantic text-xl sm:text-2xl font-bold text-primary mb-2">
                    {event.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-primary/70 font-medium mb-3">
                    {event.date}
                  </p>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {event.description}
                  </p>
                </motion.div>
              </div>

              {/* Timeline Icon - positioned differently on mobile vs desktop */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-12 sm:w-16 h-12 sm:h-16 bg-white rounded-full shadow-glow flex items-center justify-center text-primary z-10">
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="text-sm sm:text-base"
                >
                  {event.icon}
                </motion.div>
              </div>

              {/* Mobile Timeline Icon */}
              <div className="md:hidden flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-glow text-primary mx-auto mb-4">
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {event.icon}
                </motion.div>
              </div>

              {/* Empty space for opposite side on desktop */}
              <div className="hidden md:block w-5/12" />
            </motion.div>
          ))}
        </div>

        {/* Decorative Elements */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-10 text-4xl text-white/30"
        >
          
        </motion.div>
        
        <motion.div
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-40 right-16 text-3xl text-pink-200/50"
        >
          
        </motion.div>
      </div>
    </section>
  );
};

export default LoveTimeline;