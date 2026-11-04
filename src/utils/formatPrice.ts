const currency = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

// Recebe o valor em centavos (formato do JSON) e devolve "R$ 1.499,90"
export const formatPrice = (cents: number) => currency.format(cents / 100);