import { useEffect, useState } from 'react';

interface Heart {
  id: number;
  left: number;
  delay: number;
  size: number;
}

const FloatingHearts = () => {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    const heartSymbols = ['💕', '💖', '💗', '💘', '❤️', '💝', '🌸', '🌹'];
    
    const generateHearts = () => {
      const newHearts: Heart[] = [];
      for (let i = 0; i < 8; i++) {
        newHearts.push({
          id: i,
          left: Math.random() * 100,
          delay: Math.random() * 8,
          size: 0.8 + Math.random() * 0.4,
        });
      }
      setHearts(newHearts);
    };

    generateHearts();
    const interval = setInterval(generateHearts, 8000);
    
    return () => clearInterval(interval);
  }, []);

  const heartSymbols = ['💕', '💖', '💗', '💘', '❤️', '💝', '🌸', '🌹'];

  return (
    <div className="floating-hearts">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="heart-float"
          style={{
            left: `${heart.left}%`,
            animationDelay: `${heart.delay}s`,
            fontSize: `${heart.size}rem`,
          }}
        >
          {heartSymbols[heart.id % heartSymbols.length]}
        </div>
      ))}
    </div>
  );
};

export default FloatingHearts;