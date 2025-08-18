import React from 'react';

interface HeartIconProps {
  className?: string;
  color?: string;
  size?: number;
  strokeWidth?: number;
}

const HeartIcon: React.FC<HeartIconProps> = ({ 
  className = '', 
  color = '#9F9F9F',
  size = 32,
  strokeWidth = 2
}) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 32 32" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path 
        d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" 
        stroke={color} 
        strokeWidth={strokeWidth} 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default HeartIcon;
