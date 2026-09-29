import { useState } from 'react';
import { CATEGORIES } from '../../data/content';
import './CategoryNav.scss';

export default function CategoryNav() {
  const [ativa, setAtiva] = useState<string>(CATEGORIES[0]?.label ?? '');

  return (
    <nav className="container categories-container" aria-label="Categorias">
      {CATEGORIES.map((categoria) => {
        const isAtiva = categoria.label === ativa;

        return (
          <button
            key={categoria.label}
            type="button"
            className={`category-box${isAtiva ? ' active' : ''}`}
            aria-current={isAtiva ? 'true' : undefined}
            onClick={() => setAtiva(categoria.label)}
          >
            <span className="icon-card">
              <img src={categoria.image} alt="" />
            </span>
            <span>{categoria.label}</span>
          </button>
        );
      })}
    </nav>
  );
}
