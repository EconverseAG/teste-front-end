import { clsx } from "clsx"
import { forwardRef, useId, type InputHTMLAttributes } from "react"
import styles from "./TextField.module.scss"

type TextFieldProps = Omit<InputHTMLAttributes<HTMLInputElement>, "id"> & {
  /** Rótulo acessível. O layout não mostra rótulo visível, então ele fica sr-only. */
  label: string
  error?: string
}

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(function TextField(
  { label, error, className, required, ...rest },
  ref,
) {
  const id = useId()
  const errorId = `${id}-error`

  return (
    <div className={clsx(styles.field, className)}>
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <input
        ref={ref}
        id={id}
        className={styles.input}
        aria-required={required || undefined}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        {...rest}
      />
      {error && (
        <span id={errorId} role="alert" className={styles.error}>
          {error}
        </span>
      )}
    </div>
  )
})
