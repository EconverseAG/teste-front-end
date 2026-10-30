import styles from "./route-state.module.scss";

export default function Loading() {
  return (
    <main className={styles.routeState} aria-busy="true">
      <div className={styles.content} role="status" aria-live="polite">
        <span className={styles.spinner} aria-hidden="true" />
        <p className={styles.title}>Carregando produtos</p>
        <p className={styles.description}>
          Aguarde enquanto preparamos as ofertas para você.
        </p>
      </div>
    </main>
  );
}
