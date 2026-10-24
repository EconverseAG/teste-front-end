import './SectionTitle.scss';

interface SectionTitleProps {
  id: string;
  title: string;
  showViewAll?: boolean;
  withLines?: boolean;
}

export function SectionTitle({ id, title, showViewAll = false, withLines = true }: SectionTitleProps) {
  return (
    <header className="section-title">
      <h2
        id={id}
        className={`section-title__heading ${withLines ? 'section-title__heading--with-lines' : ''}`}
      >
        {title}
      </h2>
      {showViewAll && (
        <a className="section-title__view-all" href="#produtos">
          Ver todos
        </a>
      )}
    </header>
  );
}
