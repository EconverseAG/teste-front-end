import { MinusIcon, PlusIcon } from '../Icons/Icons';
import './QuantitySelector.scss';

interface QuantitySelectorProps {
  quantity: number;
  onChange: (quantity: number) => void;
  min?: number;
  max?: number;
}

export function QuantitySelector({ quantity, onChange, min = 1, max = 99 }: QuantitySelectorProps) {
  return (
    <div className="quantity-selector" role="group" aria-label="Quantidade">
      <button
        type="button"
        className="quantity-selector__button"
        aria-label="Diminuir quantidade"
        disabled={quantity <= min}
        onClick={() => onChange(quantity - 1)}
      >
        <MinusIcon size={18} />
      </button>
      <output className="quantity-selector__value" aria-live="polite">
        {String(quantity).padStart(2, '0')}
      </output>
      <button
        type="button"
        className="quantity-selector__button"
        aria-label="Aumentar quantidade"
        disabled={quantity >= max}
        onClick={() => onChange(quantity + 1)}
      >
        <PlusIcon size={18} />
      </button>
    </div>
  );
}
