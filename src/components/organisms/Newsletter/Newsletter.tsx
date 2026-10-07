"use client"

import { AnimatePresence, motion } from "framer-motion"
import { Checkbox, TextField } from "@/components/atoms"
import { useNewsletterForm } from "@/hooks/useNewsletterForm"
import type { NewsletterValues } from "@/lib/validation"
import styles from "./Newsletter.module.scss"

type NewsletterProps = {
  /** Integração real (API/CRM). O padrão simula a latência de rede. */
  subscribe?: (values: NewsletterValues) => Promise<void>
}

const fakeSubscribe = () => new Promise<void>((resolve) => setTimeout(resolve, 600))

export function Newsletter({ subscribe = fakeSubscribe }: NewsletterProps) {
  const { values, errors, status, handleChange, handleSubmit, reset } = useNewsletterForm(subscribe)
  const submitting = status === "submitting"

  return (
    <section className={styles.newsletter} aria-labelledby="newsletter-title">
      <div className={styles.inner}>
        <div className={styles.copy}>
          <h2 id="newsletter-title" className={styles.title}>
            Inscreva-se na nossa newsletter
          </h2>
          <p className={styles.description}>
            Assine a nossa newsletter e receba as novidades e conteúdos exclusivos da Econverse.
          </p>
        </div>

        <AnimatePresence mode="wait" initial={false}>
          {status === "success" ? (
            <motion.div
              key="success"
              className={styles.success}
              role="status"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
            >
              <p>Inscrição confirmada! Em breve você recebe nossas novidades.</p>
              <button type="button" className={styles.again} onClick={reset}>
                Inscrever outro e-mail
              </button>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              className={styles.form}
              onSubmit={handleSubmit}
              noValidate
              aria-describedby="newsletter-title"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
            >
              <div className={styles.row}>
                <TextField
                  name="name"
                  label="Nome"
                  placeholder="Digite seu nome"
                  autoComplete="name"
                  required
                  value={values.name}
                  onChange={handleChange}
                  error={errors.name}
                  className={styles.field}
                />
                <TextField
                  name="email"
                  type="email"
                  label="E-mail"
                  placeholder="Digite seu e-mail"
                  autoComplete="email"
                  inputMode="email"
                  required
                  value={values.email}
                  onChange={handleChange}
                  error={errors.email}
                  className={styles.field}
                />
                <button type="submit" className={styles.submit} disabled={submitting} aria-busy={submitting}>
                  {submitting ? "Enviando..." : "Inscrever"}
                </button>
              </div>
              <Checkbox
                name="acceptedTerms"
                checked={values.acceptedTerms}
                onChange={handleChange}
                error={errors.acceptedTerms}
                className={styles.terms}
              >
                Aceito os termos e condições
              </Checkbox>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
