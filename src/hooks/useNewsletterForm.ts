"use client"

import { useState, type ChangeEvent, type FormEvent } from "react"
import { validateNewsletter, type NewsletterErrors, type NewsletterValues } from "@/lib/validation"

type Status = "idle" | "submitting" | "success"

const INITIAL: NewsletterValues = { name: "", email: "", acceptedTerms: false }

/**
 * Estado e regras do formulário de newsletter. `subscribe` é injetável para
 * plugar a API real (ou um mock no teste) sem mexer no componente.
 */
export function useNewsletterForm(subscribe: (values: NewsletterValues) => Promise<void>) {
  const [values, setValues] = useState(INITIAL)
  const [errors, setErrors] = useState<NewsletterErrors>({})
  const [status, setStatus] = useState<Status>("idle")

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, type, checked, value } = event.target
    const field = name as keyof NewsletterValues
    setValues((prev) => ({ ...prev, [field]: type === "checkbox" ? checked : value }))
    // Corrigiu o campo? O erro dele some na hora, sem esperar outro submit.
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }))
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const nextErrors = validateNewsletter(values)
    setErrors(nextErrors)

    const firstInvalid = (Object.keys(nextErrors) as (keyof NewsletterValues)[])[0]
    if (firstInvalid) {
      event.currentTarget.querySelector<HTMLInputElement>(`[name="${firstInvalid}"]`)?.focus()
      return
    }

    setStatus("submitting")
    await subscribe(values)
    setStatus("success")
    setValues(INITIAL)
  }

  return { values, errors, status, handleChange, handleSubmit, reset: () => setStatus("idle") }
}
