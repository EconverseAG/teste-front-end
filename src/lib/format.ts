const currency = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" })

/** Formata um valor em reais no padrão brasileiro ("R$ 1.499,90"). */
export function formatCurrency(value: number): string {
  // Intl separa "R$" do número com NBSP; o layout usa espaço comum.
  return currency.format(value).replace(/\u00a0/g, " ")
}

/** Valor de cada parcela, arredondado para baixo no centavo (nunca cobra a mais). */
export function installmentValue(total: number, installments: number): number {
  if (installments < 1) throw new RangeError("installments must be >= 1")
  return Math.floor((total / installments) * 100) / 100
}

/** "01", "02"... como no seletor de quantidade do layout. */
export function padQuantity(value: number): string {
  return String(value).padStart(2, "0")
}

export function slugify(text: string): string {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
}
