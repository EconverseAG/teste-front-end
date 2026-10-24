import logoEconverse from '../../assets/images/logo.svg';
import './Logo.scss';

interface LogoProps {
  /** Altura da logo em px (a largura acompanha a proporção). */
  height?: number;
}

export function Logo({ height = 44 }: LogoProps) {
  return <img className="logo" src={logoEconverse} alt="Econverse" height={height} />;
}
