/** Formata um número no padrão brasileiro de moeda: 15000 -> "R$ 15.000,00". */
export function formatCurrency(value: number): string {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}
