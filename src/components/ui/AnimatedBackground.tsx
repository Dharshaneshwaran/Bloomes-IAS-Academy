'use client';

import React, { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { FiBookOpen, FiAward, FiUsers, FiCheckCircle } from 'react-icons/fi';

interface AnimatedBackgroundProps {
  density?: 'light' | 'medium' | 'heavy';
  theme?: 'blue' | 'orange' | 'mixed';
}

export default function AnimatedBackground({ 
  density = 'medium',
  theme = 'mixed'
}: AnimatedBackgroundProps) {
  const [mounted, setMounted] = useState(false);
  const [quantumNodes, setQuantumNodes] = useState<any[]>([]);
  const [neuralConnections, setNeuralConnections] = useState<any[]>([]);
  const shouldReduceMotion = useReducedMotion();

  const cloudCount = density === 'light' ? 2 : density === 'heavy' ? 4 : 3;
  const iconCount = density === 'light' ? 4 : density === 'heavy' ? 8 : 6;
  const particleCount = density === 'light' ? 5 : density === 'heavy' ? 12 : 8;

  const getThemeColors = () => {
    switch (theme) {
      case 'blue':
        return { primary: 'blue', secondary: 'indigo', hex: '#3b82f6' };
      case 'orange':
        return { primary: 'orange', secondary: 'red', hex: '#f97316' };
      default:
        return { primary: 'blue', secondary: 'red', hex: '#3b82f6' };
    }
  };

  const colors = getThemeColors();

  useEffect(() => {
    setMounted(true);
    
    // Generate Quantum Nodes for constellation
    const nodes = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: 15 + (i % 4) * 25,
      y: 15 + Math.floor(i / 4) * 60,
      size: 3 + Math.random() * 4,
      pulseDelay: i * 0.3,
      orbitRadius: 40 + Math.random() * 60,
      orbitSpeed: 15 + Math.random() * 10,
    }));
    setQuantumNodes(nodes);

    // Generate Neural Network Connections
    const connections: any[] = [];
    for (let i = 0; i < nodes.length - 1; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const distance = Math.sqrt(
          Math.pow(nodes[j].x - nodes[i].x, 2) + 
          Math.pow(nodes[j].y - nodes[i].y, 2)
        );
        if (distance < 50 && Math.random() > 0.4) {
          connections.push({
            id: `${i}-${j}`,
            x1: nodes[i].x,
            y1: nodes[i].y,
            x2: nodes[j].x,
            y2: nodes[j].y,
            delay: Math.random() * 2,
          });
        }
      }
    }
    setNeuralConnections(connections);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      
      {/* 🌟 REVOLUTIONARY EFFECT 1: Quantum Constellation Field */}
      {!shouldReduceMotion && (
        <svg className="absolute inset-0 w-full h-full" style={{ mixBlendMode: 'screen' }}>
          {/* Neural Network Connection Lines */}
          {neuralConnections.map((conn) => (
            <motion.line
              key={conn.id}
              x1={`${conn.x1}%`}
              y1={`${conn.y1}%`}
              x2={`${conn.x2}%`}
              y2={`${conn.y2}%`}
              stroke={colors.hex}
              strokeWidth="1"
              initial={{ opacity: 0, pathLength: 0 }}
              animate={{ 
                opacity: [0, 0.4, 0],
                pathLength: [0, 1, 0],
              }}
              transition={{
                duration: 4,
                delay: conn.delay,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
          
          {/* Quantum Nodes */}
          {quantumNodes.map((node) => (
            <g key={node.id}>
              {/* Orbital Ring */}
              <motion.circle
                cx={`${node.x}%`}
                cy={`${node.y}%`}
                r={node.orbitRadius}
                fill="none"
                stroke={colors.hex}
                strokeWidth="0.5"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: [0, 0.2, 0],
                  scale: [0.8, 1.2, 0.8]
                }}
                transition={{
                  duration: node.orbitSpeed,
                  delay: node.pulseDelay,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Pulsing Core Node */}
              <motion.circle
                cx={`${node.x}%`}
                cy={`${node.y}%`}
                r={node.size}
                fill={colors.hex}
                initial={{ opacity: 0.3 }}
                animate={{ 
                  opacity: [0.3, 1, 0.3],
                  r: [node.size, node.size * 1.5, node.size],
                }}
                transition={{
                  duration: 3,
                  delay: node.pulseDelay,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Orbiting Electron */}
              <motion.circle
                cx={`${node.x}%`}
                cy={`${node.y}%`}
                r="2"
                fill="#fff"
                initial={{ opacity: 0.6 }}
                animate={{ 
                  cx: `${node.x + Math.cos(0) * node.orbitRadius / 5}%`,
                  cy: `${node.y + Math.sin(0) * node.orbitRadius / 5}%`,
                }}
                transition={{
                  duration: node.orbitSpeed / 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  offsetPath: `path('M ${node.x},${node.y} m ${node.orbitRadius / 5},0 a ${node.orbitRadius / 5},${node.orbitRadius / 5} 0 1,0 -${node.orbitRadius * 2 / 5},0 a ${node.orbitRadius / 5},${node.orbitRadius / 5} 0 1,0 ${node.orbitRadius * 2 / 5},0')`,
                  offsetDistance: '0%'
                }}
              />
            </g>
          ))}
        </svg>
      )}

      {/* 🌊 REVOLUTIONARY EFFECT 2: Liquid Crystal Flow Waves */}
      {!shouldReduceMotion && (
        <div className="absolute inset-0">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={`wave-${i}`}
              className="absolute inset-0"
              style={{
                background: `radial-gradient(ellipse at ${20 + i * 20}% ${30 + i * 15}%, ${colors.hex}15 0%, transparent 50%)`,
              }}
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.6, 0.3],
                x: [0, 30, 0],
                y: [0, -20, 0],
              }}
              transition={{
                duration: 12 + i * 2,
                delay: i * 0.8,
                repeat: Infinity,
                ease: [0.45, 0.05, 0.55, 0.95]
              }}
            />
          ))}
        </div>
      )}

      {/* 🧬 REVOLUTIONARY EFFECT 3: DNA Helix Spirals */}
      {!shouldReduceMotion && (
        <svg className="absolute right-10 top-20 w-32 h-96 opacity-20" viewBox="0 0 100 400">
          {/* Left Strand */}
          <motion.path
            d="M 30 0 Q 10 50 30 100 Q 50 150 30 200 Q 10 250 30 300 Q 50 350 30 400"
            stroke={colors.hex}
            strokeWidth="3"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: 1,
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          
          {/* Right Strand */}
          <motion.path
            d="M 70 0 Q 90 50 70 100 Q 50 150 70 200 Q 90 250 70 300 Q 50 350 70 400"
            stroke={colors.hex}
            strokeWidth="3"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: 1,
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          
          {/* Cross Bridges */}
          {[...Array(15)].map((_, i) => (
            <motion.line
              key={`bridge-${i}`}
              x1="30"
              y1={i * 27}
              x2="70"
              y2={i * 27}
              stroke="#fff"
              strokeWidth="2"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: [0, 0.5, 0],
                scaleX: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 2,
                delay: i * 0.15,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </svg>
      )}

      {/* 🔮 REVOLUTIONARY EFFECT 4: Holographic Depth Layers */}
      {!shouldReduceMotion && (
        <>
          {[...Array(4)].map((_, layer) => (
            <motion.div
              key={`holo-layer-${layer}`}
              className="absolute inset-0"
              style={{
                background: `linear-gradient(${45 + layer * 30}deg, ${colors.hex}08 0%, transparent 40%, ${colors.hex}08 100%)`,
                backdropFilter: 'blur(1px)',
              }}
              animate={{
                x: [(layer % 2 ? -20 : 20), (layer % 2 ? 20 : -20)],
                y: [layer * 5, -layer * 5],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 15 + layer * 3,
                delay: layer * 0.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </>
      )}

      {/* 🌀 REVOLUTIONARY EFFECT 5: Morphing Geometric Vortex */}
      {!shouldReduceMotion && (
        <div className="absolute left-1/4 bottom-20 w-64 h-64">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={`vortex-${i}`}
              className="absolute inset-0"
              style={{
                border: `2px solid ${colors.hex}`,
                borderRadius: `${30 + i * 10}%`,
                opacity: 0.15 - i * 0.02,
              }}
              animate={{
                rotate: [0, 360],
                scale: [1 + i * 0.1, 1.3 + i * 0.1, 1 + i * 0.1],
                borderRadius: [`${30 + i * 10}%`, `${50 - i * 5}%`, `${30 + i * 10}%`],
              }}
              transition={{
                duration: 20 - i * 2,
                delay: i * 0.3,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}
        </div>
      )}

      {/* ⚡ REVOLUTIONARY EFFECT 6: Magnetic Field Distortion Grid */}
      {!shouldReduceMotion && (
        <svg className="absolute inset-0 w-full h-full opacity-10">
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <motion.path
                d="M 50 0 L 0 0 0 50"
                fill="none"
                stroke={colors.hex}
                strokeWidth="0.5"
                animate={{
                  d: [
                    "M 50 0 L 0 0 0 50",
                    "M 50 0 Q 25 25 0 0 Q 25 25 0 50",
                    "M 50 0 L 0 0 0 50"
                  ],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      )}

      {/* 🌌 REVOLUTIONARY EFFECT 7: Cosmic Energy Bursts */}
      {!shouldReduceMotion && (
        <>
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={`burst-${i}`}
              className="absolute"
              style={{
                top: `${20 + i * 30}%`,
                left: `${15 + i * 35}%`,
                width: '150px',
                height: '150px',
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: [0, 2, 0],
                opacity: [0, 0.4, 0],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 6,
                delay: i * 2,
                repeat: Infinity,
                ease: "easeOut"
              }}
            >
              <div 
                className="w-full h-full rounded-full"
                style={{
                  background: `conic-gradient(from 0deg, transparent 0deg, ${colors.hex}40 60deg, transparent 120deg, ${colors.hex}40 180deg, transparent 240deg, ${colors.hex}40 300deg, transparent 360deg)`,
                }}
              />
            </motion.div>
          ))}
        </>
      )}
      
      {/* 🎭 REVOLUTIONARY EFFECT 8: Prism Light Refraction */}
      {!shouldReduceMotion && (
        <div className="absolute top-1/3 right-1/4 w-48 h-48">
          {[...Array(7)].map((_, i) => {
            const hue = i * 51; // Rainbow spectrum
            return (
              <motion.div
                key={`prism-${i}`}
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(${90 + i * 20}deg, transparent 40%, hsl(${hue}, 70%, 60%, 0.15) 50%, transparent 60%)`,
                  transformOrigin: 'center',
                }}
                animate={{
                  rotate: [0 + i * 15, 360 + i * 15],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 25,
                  delay: i * 0.4,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            );
          })}
        </div>
      )}

      {/* ORIGINAL EFFECTS - Animated Clouds */}
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
