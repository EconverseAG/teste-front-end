import './Icon.scss';

import creditCard from '@/assets/icons/creditCard.svg';
import shieldCheck from '@/assets/icons/shieldCheck.svg';
import truck from '@/assets/icons/truck.svg';
import search from '@/assets/icons/search.svg';
import heart from '@/assets/icons/heart.svg';
import userCircle from '@/assets/icons/userCircle.svg';
import shoppingCart from '@/assets/icons/shoppingCart.svg';
import shippingBox from '@/assets/icons/shippingBox.svg';
import crownSimple from '@/assets/icons/crownSimple.svg';
import fashion from '@/assets/icons/fashion.svg';
import running from '@/assets/icons/running.svg';
import tools from '@/assets/icons/tools.svg';
import supermarket from '@/assets/icons/supermarket.svg';
import technology from '@/assets/icons/technology.svg';
import healthCare from '@/assets/icons/healthCare.svg';
import whiskey from '@/assets/icons/whiskey.svg';

const icons = {
  creditCard,
  shieldCheck,
  truck,
  search,
  heart,
  userCircle,
  shoppingCart,
  shippingBox,
  crownSimple,
  fashion,
  running,
  tools,
  supermarket,
  technology,
  healthCare,
  whiskey,
};

type IconProps = {
  name: keyof typeof icons;
  size?: number;
  className?: string;
  alt?: string;
};

export function Icon({
  name,
  size = 24,
  className = '',
  alt = '',
}: Readonly<IconProps>) {
  const iconClassName = className ? `icon ${className}` : 'icon';

  return (
    <img
      src={icons[name]}
      alt={alt}
      width={size}
      height={size}
      className={iconClassName}
    />
  );
}
