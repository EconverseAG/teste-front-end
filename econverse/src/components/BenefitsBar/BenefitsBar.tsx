import { CardIcon, ShieldIcon, TruckIcon } from '../Icons/Icons';
import './BenefitsBar.scss';

const benefits = [
  { id: 'security', icon: <ShieldIcon size={20} />, before: 'Compra ', highlight: '100% segura', after: '' },
  { id: 'shipping', icon: <TruckIcon size={20} />, before: '', highlight: 'Frete grátis', after: ' acima de R$ 200' },
  { id: 'installments', icon: <CardIcon size={20} />, before: '', highlight: 'Parcele', after: ' suas compras' },
];

export function BenefitsBar() {
  return (
    <div className="benefits-bar">
      <ul className="benefits-bar__list container">
        {benefits.map(({ id, icon, before, highlight, after }) => (
          <li key={id} className="benefits-bar__item">
            {icon}
            <span>
              {before}
              <strong>{highlight}</strong>
              {after}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
