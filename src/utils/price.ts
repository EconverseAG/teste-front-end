export const applyDiscount = (price: number) => {
  const discountPercentage = 6.47;
  const discountedPrice = price * (1 - discountPercentage / 100);

  return discountedPrice;
};

export const formatPrice = (price: number) => {
  const priceInReais = price / 100;

  const formattedPrice = priceInReais
    .toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    })
    .replace(/\u00A0/g, ' ');

  return formattedPrice;
};

export const formatInstallments = (price: number, installments = 2) => {
  const installmentValue = price / installments;
  const formattedValue = formatPrice(installmentValue);
  const installmentDescription = `ou ${installments}x de ${formattedValue} sem juros`;

  return installmentDescription;
};
