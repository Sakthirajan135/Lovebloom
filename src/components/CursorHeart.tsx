import { useEffect, useState } from 'react';

const CursorHeart = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hearts, setHearts] = useState<Array<{ id: number; x: number; y: number }>>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Add heart trail occasionally
      if (Math.random() < 0.1) {
        const newHeart = {
          id: Date.now(),
          x: e.clientX,
          y: e.clientY,
        };
        
        setHearts(prev => [...prev, newHeart]);
        
        // Remove heart after animation
        setTimeout(() => {
          setHearts(prev => prev.filter(heart => heart.id !== newHeart.id));
        }, 1000);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* Main cursor glow */}
      <div
        className="cursor-heart w-8 h-8 bg-gradient-glow rounded-full opacity-30"
        style={{
          left: position.x - 16,
          top: position.y - 16,
        }}
      />
      
      {/* Heart trail */}
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="cursor-heart text-pink-400 text-sm animate-bounce-heart"
          style={{
            left: heart.x - 8,
            top: heart.y - 8,
            animation: 'bounce-heart 1s ease-out forwards',
          }}
        >
          💕
        </div>
      ))}
    </>
  );
};

export default CursorHeart;