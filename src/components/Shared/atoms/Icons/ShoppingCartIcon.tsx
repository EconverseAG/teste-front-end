import React from 'react';

interface ShoppingCartIconProps {
  className?: string;
  color?: string;
  size?: number;
  strokeWidth?: number;
}

const ShoppingCartIcon: React.FC<ShoppingCartIconProps> = ({ 
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
        d="M9 22C7.89543 22 7 22.8954 7 24C7 25.1046 7.89543 26 9 26C10.1046 26 11 25.1046 11 24C11 22.8954 10.1046 22 9 22Z" 
        stroke={color} 
        strokeWidth={strokeWidth} 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="M20 22C18.8954 22 18 22.8954 18 24C18 25.1046 18.8954 26 20 26C21.1046 26 22 25.1046 22 24C22 22.8954 21.1046 22 20 22Z" 
        stroke={color} 
        strokeWidth={strokeWidth} 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6" 
        stroke={color} 
        strokeWidth={strokeWidth} 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ShoppingCartIcon;
