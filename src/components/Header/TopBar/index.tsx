import { Icon } from '@/components/Icon';
import './TopBar.scss';

type BenefitPart = {
  text: string;
  highlight?: boolean;
};

type Benefit = {
  id: string;
  icon: 'shieldCheck' | 'truck' | 'creditCard';
  parts: BenefitPart[];
};

const benefits: Benefit[] = [
  {
    id: 'secure',
    icon: 'shieldCheck',
    parts: [{ text: 'Compra ' }, { text: '100% segura', highlight: true }],
  },
  {
    id: 'shipping',
    icon: 'truck',
    parts: [
      { text: 'Frete grátis', highlight: true },
      { text: ' acima de R$ 200' },
    ],
  },
  {
    id: 'payment',
    icon: 'creditCard',
    parts: [{ text: 'Parcele', highlight: true }, { text: ' suas compras' }],
  },
];

function TopBar() {
  return (
    <section className="top-bar" aria-label="Benefícios da loja">
      <ul className="top-bar__list">
        {benefits.map((benefit) => (
          <li className="top-bar__item" key={benefit.id}>
            <Icon name={benefit.icon} size={20} />

            <span className="top-bar__text">
              {benefit.parts.map((part, index) => {
                const key = `${part.text}-${index}`;

                return part.highlight ? (
                  <strong key={key}>{part.text}</strong>
                ) : (
                  <span key={key}>{part.text}</span>
                );
              })}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default TopBar;
