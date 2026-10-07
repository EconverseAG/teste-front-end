import type { SVGProps } from "react"
import { icons, type IconName } from "./icons"

type IconProps = Omit<SVGProps<SVGSVGElement>, "children"> & {
  name: IconName
  size?: number | { width: number; height: number }
  /** Rótulo acessível. Sem ele o ícone é decorativo (aria-hidden). */
  label?: string
}

export function Icon({ name, size = 24, label, ...rest }: IconProps) {
  const { viewBox, body } = icons[name]
  const { width, height } = typeof size === "number" ? { width: size, height: size } : size

  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      focusable="false"
      {...(label ? { role: "img", "aria-label": label } : { "aria-hidden": true })}
      {...rest}
    >
      {body}
    </svg>
  )
}
