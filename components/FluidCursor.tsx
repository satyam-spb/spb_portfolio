import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const FluidCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, [isVisible]);

  // Hide on mobile/touch devices
  if (typeof navigator !== 'undefined' && /Mobi|Android/i.test(navigator.userAgent)) {
    return null;
  }

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 border-2 border-indigo-500 rounded-full pointer-events-none z-[9999] mix-blend-difference"
      animate={{
        x: mousePosition.x - 16,
        y: mousePosition.y - 16,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 28,
        mass: 0.5
      }}
      style={{ opacity: isVisible ? 1 : 0 }}
    />
  );
};