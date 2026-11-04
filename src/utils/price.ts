export function applyDiscount(price: number): number {
  const discountPercentage = 6.47;
  const discountedPrice = price * (1 - discountPercentage / 100);

  return discountedPrice;
}

export function formatPrice(price: number): string {
  const priceInReais = price / 100;

  const formattedPrice = priceInReais.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  return formattedPrice;
}

export function formatInstallments(price: number, installments = 2): string {
  const installmentValue = price / installments;
  const formattedValue = formatPrice(installmentValue);
  const installmentDescription = `ou ${installments}x de ${formattedValue} sem juros`;

  return installmentDescription;
}
