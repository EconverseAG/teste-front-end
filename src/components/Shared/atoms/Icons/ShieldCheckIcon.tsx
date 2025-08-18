import React from 'react';

interface ShieldCheckIconProps {
  className?: string;
  color?: string;
  size?: number;
  strokeWidth?: number;
}

const ShieldCheckIcon: React.FC<ShieldCheckIconProps> = ({ 
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
        d="M16 2L28 8V16C28 22.6274 22.6274 28 16 28C9.37258 28 4 22.6274 4 16V8L16 2Z" 
        stroke={color} 
        strokeWidth={strokeWidth} 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="M12 16L15 19L20 14" 
        stroke={color} 
        strokeWidth={strokeWidth} 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ShieldCheckIcon;
