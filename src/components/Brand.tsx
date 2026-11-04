export function Brand({ light = false }: { light?: boolean }) {
  return (
    <a className={`brand${light ? ' brand--light' : ''}`} href="#inicio" aria-label="Econverse, início">
      <span className="brand__mark">e</span><span>converse</span>
    </a>
  );
}
