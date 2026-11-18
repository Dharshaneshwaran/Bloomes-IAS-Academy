'use client';

import React from 'react';
import { FiAward, FiStar, FiTrendingUp, FiUsers, FiCheckCircle, FiBriefcase, FiDollarSign } from 'react-icons/fi';
import { Card } from '@/components/ui';
import { Achievement } from '@/types';

interface AchievementsGridProps {
  achievements: Achievement[];
  showAll?: boolean;
}

  const iconMap: { [key: string]: React.ReactNode } = {
  'award': <FiAward size={24} />,
  'trophy': <FiAward size={24} />,
  'star': <FiStar size={24} />,
  'trending-up': <FiTrendingUp size={24} />,
  'users': <FiUsers size={24} />,
  'check-circle': <FiCheckCircle size={24} />,
  'briefcase': <FiBriefcase size={24} />,
  'dollar-sign': <FiDollarSign size={24} />,
};

export default function AchievementsGrid({ achievements, showAll = true }: AchievementsGridProps) {
  const displayedAchievements = showAll ? achievements : achievements.slice(0, 4);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {displayedAchievements.map((achievement, index) => (
        <Card
          key={achievement.id}
          className="text-center group relative overflow-hidden"
          hover={true}
        >
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          <div className="relative z-10">
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] text-white mb-3 group-hover:scale-110 transition-transform duration-300">
              {achievement.icon && iconMap[achievement.icon]}
            </div>
            
            {/* Count */}
            <div className="text-2xl md:text-3xl font-bold text-[var(--primary)] mb-1.5 group-hover:scale-105 transition-transform">
              {achievement.count >= 1000 
                ? `${Math.floor(achievement.count / 1000)}k+` 
                : `${achievement.count}+`}
            </div>
            
            {/* Title */}
            <h3 className="text-base font-bold text-[var(--dark)] mb-1.5">
              {achievement.title}
            </h3>
            
            {/* Description */}
            <p className="text-xs text-gray-600 leading-relaxed">
              {achievement.description}
            </p>
          </div>
        </Card>
      ))}
    </div>
  );
}
