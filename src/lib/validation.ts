export type NewsletterValues = { name: string; email: string; acceptedTerms: boolean }

export type NewsletterErrors = Partial<Record<keyof NewsletterValues, string>>

// Suficiente para UX; a validação definitiva é sempre do servidor.
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

export function validateNewsletter(values: NewsletterValues): NewsletterErrors {
  const errors: NewsletterErrors = {}
  const name = values.name.trim()

  if (!name) errors.name = "Informe seu nome."
  else if (name.length < 2) errors.name = "Nome muito curto."

  if (!values.email.trim()) errors.email = "Informe seu e-mail."
  else if (!EMAIL_PATTERN.test(values.email.trim())) errors.email = "E-mail inválido."

  if (!values.acceptedTerms) errors.acceptedTerms = "Aceite os termos para continuar."

  return errors
}
