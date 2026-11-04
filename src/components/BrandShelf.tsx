import { Brand } from './Brand';

export function BrandShelf() {
  return (
    <section className="brand-section" id="marcas">
      <h2>Navegue por marcas</h2>
      <div className="brand-list page-width">
        {[1, 2, 3, 4, 5].map((item) => <div className="brand-circle" key={item}><Brand /></div>)}
      </div>
    </section>
  );
}
