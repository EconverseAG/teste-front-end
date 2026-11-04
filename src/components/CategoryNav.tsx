const categories = [
  { name: 'Tecnologia', icon: 'technology', active: true },
  { name: 'Supermercado', icon: 'market' },
  { name: 'Bebidas', icon: 'drink' },
  { name: 'Ferramentas', icon: 'tools' },
  { name: 'Saúde', icon: 'health' },
  { name: 'Esportes e Fitness', icon: 'sport' },
  { name: 'Moda', icon: 'fashion' },
];

function CategoryIcon({ icon }: { icon: string }) {
  const common = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };
  const paths: Record<string, ReactNode> = {
    technology: <><rect x="7" y="8" width="27" height="22" rx="2" /><path d="M13 35h15M20.5 30v5M29 14h9v20h-9z" /></>,
    market: <><path d="M5 17h34l-3-9H8zM7 17v21h30V17M5 17c0 5 8 5 8 0 0 5 8 5 8 0 0 5 8 5 8 0 0 5 8 5 8 0" /><path d="M13 25h8v8h-8zM27 25h5v13" /></>,
    drink: <><path d="M17 5h10v6l3 4v23H14V15l3-4zM17 11h10M14 18h16M19 22h6M34 22h5v16h-5zM34 27h5" /></>,
    tools: <><path d="M7 8a9 9 0 0 0 11 11L35 36a4 4 0 0 0 6-6L24 13A9 9 0 0 0 13 2l6 6-6 6z" /><path d="m9 34 15-15M6 37l5-5M31 9l5-5 6 6-5 5" /></>,
    health: <><path d="M22 36S6 27 6 16a8 8 0 0 1 15-4 8 8 0 0 1 15 4c0 11-14 20-14 20z" /><path d="M4 35h12l5-4 5 3 13-6 2 3-15 9-11-2H4z" /></>,
    sport: <><path d="M5 37h35M10 34V9h4l3 7 7 1 5-8 5 2-3 12 4 6H17l-3-7" /><circle cx="25" cy="6" r="3" /><path d="m24 13 6 4-5 7M20 18l-5 6" /></>,
    fashion: <><path d="M14 7c1 5 4 7 9 7s8-2 9-7l5 3-4 9-4-2 3 20H14l3-20-4 2-4-9z" /><path d="M21 14 16 21M26 14l5 7" /><path d="m35 10 6 6-6 6-6-6z" /></>,
  };
  return <svg viewBox="0 0 46 46" aria-hidden="true" {...common}>{paths[icon]}</svg>;
}

export function CategoryNav() {
  return (
    <nav className="categories page-width" aria-label="Categorias de produtos" id="categorias">
      {categories.map(({ name, icon, active }) => (
        <a className={`category${active ? ' category--active' : ''}`} href="#produtos" key={name}>
          <span className="category__icon"><CategoryIcon icon={icon} /></span><span>{name}</span>
        </a>
      ))}
    </nav>
  );
}
import type { ReactNode } from 'react';
