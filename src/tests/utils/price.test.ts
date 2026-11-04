import { describe, expect, it } from '@jest/globals';
import { applyDiscount, formatInstallments, formatPrice } from '@/utils/price';

describe('ApplyDiscount', () => {
  it('should apply a 6.47% discount to the price', () => {
    expect(applyDiscount(10000)).toBe(9353);
  });

  it('should return zero when the price is zero', () => {
    expect(applyDiscount(0)).toBe(0);
  });

  it('should handle decimal prices', () => {
    expect(applyDiscount(15000)).toBeCloseTo(14029.5);
  });

  it('should handle small prices', () => {
    expect(applyDiscount(100)).toBeCloseTo(93.53);
  });
});

describe('FormatPrice', () => {
  it('should format cents as Brazilian currency', () => {
    expect(formatPrice(123456)).toBe('R$ 1.234,56');
  });

  it('should format zero as Brazilian currency', () => {
    expect(formatPrice(0)).toBe('R$ 0,00');
  });

  it('should format whole prices with decimal zeros', () => {
    expect(formatPrice(10000)).toBe('R$ 100,00');
  });

  it('should format large prices correctly', () => {
    expect(formatPrice(123456789)).toBe('R$ 1.234.567,89');
  });

  it('should format prices with one cent', () => {
    expect(formatPrice(1)).toBe('R$ 0,01');
  });
});

describe('FormatInstallments', () => {
  it('should use two installments by default', () => {
    expect(formatInstallments(10000)).toBe('ou 2x de R$ 50,00 sem juros');
  });

  it('should use the specified number of installments', () => {
    expect(formatInstallments(12000, 3)).toBe('ou 3x de R$ 40,00 sem juros');
  });

  it('should handle a single installment', () => {
    expect(formatInstallments(10000, 1)).toBe('ou 1x de R$ 100,00 sem juros');
  });

  it('should format zero as the installment value', () => {
    expect(formatInstallments(0)).toBe('ou 2x de R$ 0,00 sem juros');
  });
});
