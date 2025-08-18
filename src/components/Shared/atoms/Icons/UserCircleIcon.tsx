import React from 'react';

interface UserCircleIconProps {
  className?: string;
  color?: string;
  size?: number;
  strokeWidth?: number;
}

const UserCircleIcon: React.FC<UserCircleIconProps> = ({ 
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
        d="M16 16C19.3137 16 22 13.3137 22 10C22 6.68629 19.3137 4 16 4C12.6863 4 10 6.68629 10 10C10 13.3137 12.6863 16 16 16Z" 
        stroke={color} 
        strokeWidth={strokeWidth} 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="M24 28C24 24.6863 20.4183 22 16 22C11.5817 22 8 24.6863 8 28" 
        stroke={color} 
        strokeWidth={strokeWidth} 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default UserCircleIcon;
