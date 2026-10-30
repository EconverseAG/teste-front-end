'use client'

import { type FormEvent, useState } from 'react'
import styles from './newsletter.module.scss'

export function Newsletter() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
    event.currentTarget.reset()
  }

  return (
    <section aria-labelledby="newsletter-title" className={styles.newsletter}>
      <div className={styles.content}>
        <div className={styles.copy}>
          <h2 id="newsletter-title" className={styles.title}>
            Inscreva-se na nossa newsletter
          </h2>
          <p className={styles.description}>
            Assine a nossa newsletter e receba as novidades e conteúdos exclusivos da Econverse.
          </p>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.fields}>
            <label className="sr-only" htmlFor="newsletter-name">
              Nome
            </label>
            <input
              id="newsletter-name"
              name="name"
              required
              autoComplete="name"
              placeholder="Digite seu nome"
              className={styles.input}
            />
            <label className="sr-only" htmlFor="newsletter-email">
              E-mail
            </label>
            <input
              id="newsletter-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="Digite seu e-mail"
              className={styles.input}
            />
            <button
              type="submit"
              className={styles.submitButton}
            >
              INSCREVER
            </button>
          </div>
          <label className={styles.terms}>
            <input type="checkbox" name="terms" required className={styles.checkbox} />
            Aceito os termos e condições
          </label>
          <p aria-live="polite" className={styles.status}>
            {submitted ? 'Inscrição realizada com sucesso!' : ''}
          </p>
        </form>
      </div>
    </section>
  )
}
