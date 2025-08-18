import React from 'react';

interface ArrowIconProps {
  className?: string;
  color?: string;
  size?: number;
  direction?: 'left' | 'right';
}

const ArrowIcon: React.FC<ArrowIconProps> = ({ 
  className = '', 
  color = '#3F3F40',
  size = 14,
  direction = 'left'
}) => {
  const transform = direction === 'right' ? 'scaleX(-1)' : '';
  
  return (
    <svg 
      width={size} 
      height={size * 1.75} 
      viewBox="0 0 8 14" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ transform }}
    >
      <path 
        d="M7.63333 1.74422L6.50086 0.599976L0.166668 6.99998L6.50086 13.4L7.63333 12.2557L2.43162 6.99998L7.63333 1.74422Z" 
        fill={color}
      />
    </svg>
  );
};

export default ArrowIcon;
