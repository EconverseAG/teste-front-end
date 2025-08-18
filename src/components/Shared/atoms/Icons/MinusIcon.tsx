import React from 'react';

interface MinusIconProps {
  className?: string;
  color?: string;
  size?: number;
  strokeWidth?: number;
}

const MinusIcon: React.FC<MinusIconProps> = ({ 
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
        d="M8 16H24" 
        stroke={color} 
        strokeWidth={strokeWidth} 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default MinusIcon;
