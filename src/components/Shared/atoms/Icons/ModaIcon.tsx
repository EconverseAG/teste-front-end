import React from 'react';

interface ModaIconProps {
  className?: string;
  size?: number;
  color?: string;
}

const ModaIcon: React.FC<ModaIconProps> = ({
  className = '',
  size = 32,
  color = '#9F9F9F'
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 63"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className={className}
    >
      <rect width="64" height="63" fill={color} />
      <defs>
        <pattern id="pattern0_16_1025" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image0_16_1025" transform="matrix(0.01 0 0 0.015873 0 0)" />
        </pattern>
        <image id="image0_16_1025" width="100" height="63" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFHklEQVR4nO2cW2wUVRjHd1oVhYo8eHsw8cHLgw8+eHnwgpf4oLYkNRGNiRc0JnghYtKAaTchEjVGI5rYYCAQCbHB+GBiYmJMJCaafegL8dqkOz09Z2b++82Y2Z2dc873/b+/bFfSWC0t5//td86ZPedMFaupqampdOlIXR8wVreJlw6VZCgIHcHELKVVYOyRO1S45K7rQ4gQIcIjKqW1kGqL9n0IRIW0FjIgdLCCkOPRlIUgJKe1EEJCCCGEJyOAEJ6MEEKSEdIaFUKIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQ/g1eXVuYjkU/3DWtuIu87pT7bZL7T8bPgUWL8wr8kAW8W/7Zj7S1VLAsSgJeybE/lddPmF5vy/1f2n7/aLn9qCT3d8XPyf0cK9u/tOS+t7z/SfkjL31CjVCrCBEiRIgQIUKECBEiRIgQIUKECBEiRIgQIUKECBEiRIgQIUKECBEiRIgQIUKECBEiRIgQIUKECBEiRMhsb4Qf3W28VRwqsZhqSp8nTl0YFTIgPIqJWRAePV36NnIRdaQnlOd+J3GpJgOC/2wnggS8Y9iN9AaM/dM/AwhjhBBCCCGEEMLW8idCfRQh8k1hhFRT4Wq1ib2dF3zjKzxePDT7MgTEz9M16HZdYhLvN65FeJNhPCJkhwfkWTamKqJFhBBCbN5A3SgWgQ8oD4Nrph8+dOgKpA91BHQnFuNnI6RAV15aGhJC7LQPmZlBiSTfqBYRQgghtbsRdJkN9R1U/1I3k9xVkmHLXI5I4tcRoQVJPJ/o5UEfFyV8v9M5a8Kqaum5J7ZnHiYptJCuO3Vfqw3dP1hhRGgWPb48o6JoVzOqOdAQQRZlPyFOhOwLTFZaSOqFTSktILktJGkwg6eaWkhGd2ihBuwlI3xp2A0pNUEbwjj2kTZCC+kORLCj/QgJSNdNJ7YQhHx5oPuT6vR5nHuoRyKzkGJPYLJqeqGNnkn1nrYp+wlx7YuQhZJWmqXk/slyC4k9gckOhOzJGWaQElrItFfnK0kP9NAShxC1klPV83eF2YaQ1I9CXAkLaf/ZOJ+OJWcJSS3ESUIUu7UWKAit+wIl2uKxECFChAgRIkSIECFChAgRIkSIECFChAgRIkSIECFChAhJJKSooyeNs5KZQlLqkC6cq6dOUr9fJfUqpQ5VBBgT8Jtf5OQHZ/vr/yqpJySp+TpI7O1lQxhCSMEKkdS5ihAzaXpICEFCtgYmO1xC8oaQOITEJiTxwVGCCKkj2VcVYlrrTuUgtJB6CGGZrI8YOzBGCCGEEEIIIYQQQgghhBBCCCGEEEKIzxs4dvZDTMdCIaQ26rwKBOepKP4G5ztY7ekhcxaS3bEuNFl7IUgZEJpjJWQBQYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEFKPyc4cZPJGcWDEjU+FKHJxPRYhIiStXnrtqySGQuKQXLwKWAYn89GE0qCQ+VRdhJhOy8aSSFsKUUpLZHxqgxBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGE/J9K3dSqJ3W9aHSKz32Cv0GEkJZQMvIAAAAASUVORK5CYII=" />
      </defs>
    </svg>
  );
};

export default ModaIcon;