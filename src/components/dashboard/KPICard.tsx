'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface KPICardProps {
  title: string;
  value: string;
  subtitle?: string;
  icon: LucideIcon;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  colorScheme?: 'blue' | 'emerald' | 'teal' | 'purple' | 'amber';
}

const colorSchemes = {
  blue: {
    bg: 'bg-blue-50',
    iconBg: 'bg-blue-100',
    icon: 'text-blue-600',
    trend: 'text-blue-600',
  },
  emerald: {
    bg: 'bg-emerald-50',
    iconBg: 'bg-emerald-100',
    icon: 'text-emerald-600',
    trend: 'text-emerald-600',
  },
  teal: {
    bg: 'bg-teal-50',
    iconBg: 'bg-teal-100',
    icon: 'text-teal-600',
    trend: 'text-teal-600',
  },
  purple: {
    bg: 'bg-purple-50',
    iconBg: 'bg-purple-100',
    icon: 'text-purple-600',
    trend: 'text-purple-600',
  },
  amber: {
    bg: 'bg-amber-50',
    iconBg: 'bg-amber-100',
    icon: 'text-amber-600',
    trend: 'text-amber-600',
  },
};

// Animated counter hook
const useAnimatedCounter = (endValue: number, duration: number = 1000) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * endValue));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [endValue, duration]);

  return count;
};

const KPICard = ({ 
  title, 
  value, 
  subtitle, 
  icon: Icon, 
  trend, 
  colorScheme = 'blue' 
}: KPICardProps) => {
  const colors = colorSchemes[colorScheme];
  
  // Extract number from value for animation
  const numericValue = parseFloat(value.replace(/[^0-9.]/g, ''));
  const animatedValue = useAnimatedCounter(numericValue, 1200);
  
  // Format the animated value back to display format
  const formatAnimatedValue = () => {
    if (value.includes('RM')) {
      return `RM ${animatedValue.toLocaleString()}`;
    }
    if (value.includes('%')) {
      return `${animatedValue}%`;
    }
    if (value.includes(',') || numericValue >= 1000) {
      return animatedValue.toLocaleString();
    }
    return animatedValue.toString();
  };

  return (
    <div className="bg-white rounded-xl border border-gray-100 p-5 hover:shadow-md transition-all duration-300 group">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-500 mb-1">{title}</p>
          <p className="text-2xl font-bold text-gray-900 tabular-nums">{formatAnimatedValue()}</p>
          {subtitle && (
            <p className="text-sm text-gray-500 mt-1">{subtitle}</p>
          )}
          {trend && (
            <div className={cn(
              'flex items-center gap-1 mt-2 text-sm font-medium',
              trend.isPositive ? 'text-emerald-600' : 'text-red-600'
            )}>
              <span>{trend.isPositive ? '↑' : '↓'}</span>
              <span>{Math.abs(trend.value)}%</span>
              <span className="text-gray-400 font-normal">vs last month</span>
            </div>
          )}
        </div>
        <div className={cn(
          'w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110',
          colors.iconBg
        )}>
          <Icon className={cn('h-6 w-6', colors.icon)} />
        </div>
      </div>
    </div>
  );
};

export { KPICard };
