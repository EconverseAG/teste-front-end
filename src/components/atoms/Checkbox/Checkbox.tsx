import { clsx } from "clsx"
import { forwardRef, useId, type InputHTMLAttributes, type ReactNode } from "react"
import styles from "./Checkbox.module.scss"

type CheckboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "id"> & {
  children: ReactNode
  error?: string
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(function Checkbox(
  { children, error, className, ...rest },
  ref,
) {
  const id = useId()
  const errorId = `${id}-error`

  return (
    <div className={clsx(styles.wrapper, className)}>
      <label htmlFor={id} className={styles.checkbox}>
        <input
          ref={ref}
          id={id}
          type="checkbox"
          className={styles.input}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? errorId : undefined}
          {...rest}
        />
        <span className={styles.box} aria-hidden="true">
          <svg viewBox="0 0 12 10" width="9" height="8">
            <path d="M1 5l3.2 3L11 1" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </span>
        <span className={styles.label}>{children}</span>
      </label>
      {error && (
        <span id={errorId} role="alert" className={styles.error}>
          {error}
        </span>
      )}
    </div>
  )
})
