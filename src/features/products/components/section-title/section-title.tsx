import styles from "./section-title.module.scss";

interface SectionTitleProps {
  id: string;
  title: string;
  linkLabel?: string;
  linkHref?: string;
}

export function SectionTitle({
  id,
  title,
  linkLabel = "Ver todos",
  linkHref = "#",
}: SectionTitleProps) {
  return (
    <div className={styles.sectionTitle}>
      <div className={styles.headingRow}>
        <span aria-hidden="true" className={styles.divider} />
        <h2 id={id} className={styles.title}>
          {title}
        </h2>
        <span aria-hidden="true" className={styles.divider} />
      </div>
      <a href={linkHref} className={styles.link}>
        {linkLabel}
      </a>
    </div>
  );
}
