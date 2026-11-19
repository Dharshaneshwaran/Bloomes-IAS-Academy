'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiBookOpen, FiAward, FiUsers, FiCheckCircle } from 'react-icons/fi';

interface AnimatedBackgroundProps {
  density?: 'light' | 'medium' | 'heavy';
  theme?: 'blue' | 'orange' | 'mixed';
}

export default function AnimatedBackground({ 
  density = 'medium',
  theme = 'mixed'
}: AnimatedBackgroundProps) {
  const cloudCount = density === 'light' ? 2 : density === 'heavy' ? 4 : 3;
  const iconCount = density === 'light' ? 4 : density === 'heavy' ? 8 : 6;
  const particleCount = density === 'light' ? 5 : density === 'heavy' ? 12 : 8;

  const getThemeColors = () => {
    switch (theme) {
      case 'blue':
        return { primary: 'blue', secondary: 'indigo' };
      case 'orange':
        return { primary: 'orange', secondary: 'red' };
      default:
        return { primary: 'blue', secondary: 'red' };
    }
  };

  const colors = getThemeColors();

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated Clouds */}
      <div className="absolute inset-0">
        {[...Array(cloudCount)].map((_, i) => (
          <motion.div
            key={`cloud-${i}`}
            className="absolute"
            style={{
              top: `${10 + i * 30}%`,
              left: i % 2 === 0 ? 0 : 'auto',
              right: i % 2 === 1 ? 0 : 'auto',
            }}
            animate={{ 
              x: i % 2 === 0 ? [0, 100, 0] : [0, -80, 0]
            }}
            transition={{ 
              duration: 40 + i * 10, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          >
            <svg width={200 - i * 20} height={80 - i * 10} viewBox="0 0 200 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="50" cy="40" rx="40" ry="25" fill="white" opacity={0.3 - i * 0.05}/>
              <ellipse cx="80" cy="35" rx="45" ry="28" fill="white" opacity={0.3 - i * 0.05}/>
              <ellipse cx="120" cy="40" rx="50" ry="30" fill="white" opacity={0.3 - i * 0.05}/>
              <ellipse cx="160" cy="45" rx="35" ry="25" fill="white" opacity={0.3 - i * 0.05}/>
            </svg>
          </motion.div>
        ))}
      </div>

      {/* Floating Icons - Books, Awards, Lotus */}
      <div className="absolute inset-0">
        {/* Floating Books */}
        <motion.div
          className="absolute top-1/4 left-10"
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <FiBookOpen className={`text-${colors.primary}-300/30`} size={40} />
        </motion.div>

        {iconCount > 1 && (
          <motion.div
            className="absolute bottom-1/3 right-40"
            animate={{ 
              y: [0, -15, 0],
              rotate: [0, 8, 0]
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          >
            <FiBookOpen className={`text-${colors.secondary}-300/30`} size={35} />
          </motion.div>
        )}

        {/* Floating Awards */}
        <motion.div
          className="absolute top-1/3 right-20"
          animate={{ 
            y: [0, -25, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <FiAward className={`text-${colors.secondary}-300/30`} size={45} />
        </motion.div>

        {iconCount > 3 && (
          <motion.div
            className="absolute bottom-1/4 left-1/4"
            animate={{ 
              y: [0, -18, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          >
            <FiAward className="text-yellow-400/30" size={38} />
          </motion.div>
        )}

        {/* Floating Lotus Icon */}
        {iconCount > 2 && (
          <motion.div
            className="absolute top-1/2 left-1/3"
            animate={{ 
              y: [0, -22, 0],
              rotate: [0, 360]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <svg width="40" height="40" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" opacity="0.2">
              <path d="M16 8L18 14L22 10L20 16L26 14L22 18L28 20L22 22L24 28L18 24L20 30L16 26L12 30L14 24L8 28L10 22L4 20L10 18L6 14L12 16L10 10L14 14L16 8Z" fill="#ec4899"/>
              <rect x="12" y="20" width="8" height="4" rx="1" fill="#ec4899"/>
            </svg>
          </motion.div>
        )}

        {/* Floating Users Icon */}
        {iconCount > 4 && (
          <motion.div
            className="absolute top-2/3 right-1/3"
            animate={{ 
              y: [0, -20, 0],
              x: [0, 10, 0]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          >
            <FiUsers className={`text-${colors.primary}-400/25`} size={42} />
          </motion.div>
        )}

        {/* Floating Check Icons */}
        {iconCount > 5 && (
          <motion.div
            className="absolute top-1/2 right-10"
            animate={{ 
              y: [0, -15, 0],
              rotate: [0, -8, 0]
            }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
          >
            <FiCheckCircle className="text-green-400/30" size={36} />
          </motion.div>
        )}
      </div>

      {/* Small floating particles */}
      <div className="absolute inset-0">
        {[...Array(particleCount)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className={`absolute w-2 h-2 bg-gradient-to-br from-${colors.primary}-400/20 to-${colors.secondary}-400/20 rounded-full`}
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          />
        ))}
      </div>
    </div>
  );
}
