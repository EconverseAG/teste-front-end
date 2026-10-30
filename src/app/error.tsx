"use client";

import styles from "./route-state.module.scss";

interface ErrorPageProps {
  error: Error & {
    digest?: string;
  };
  reset: () => void;
}

export default function ErrorPage({ reset }: ErrorPageProps) {
  return (
    <main className={styles.routeState}>
      <div className={styles.content}>
        <p className={styles.eyebrow}>Erro de carregamento</p>

        <h1 className={styles.title}>Não foi possível carregar os produtos.</h1>

        <p className={styles.description}>
          O serviço pode estar temporariamente indisponível. Tente novamente em
          alguns instantes.
        </p>

        <button type="button" className={styles.retryButton} onClick={reset}>
          Tentar novamente
        </button>
      </div>
    </main>
  );
}
