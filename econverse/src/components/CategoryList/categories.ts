import technologyIcon from '../../assets/icons/categories/technology.svg';
import supermarketIcon from '../../assets/icons/categories/supermarket.svg';
import drinksIcon from '../../assets/icons/categories/drinks.svg';
import toolsIcon from '../../assets/icons/categories/tools.svg';
import healthIcon from '../../assets/icons/categories/health.svg';
import sportsIcon from '../../assets/icons/categories/sports.svg';
import fashionIcon from '../../assets/icons/categories/fashion.svg';

export interface Category {
  id: string;
  name: string;
  icon: string;
}

export const categories: Category[] = [
  { id: 'technology', name: 'Tecnologia', icon: technologyIcon },
  { id: 'supermarket', name: 'Supermercado', icon: supermarketIcon },
  { id: 'drinks', name: 'Bebidas', icon: drinksIcon },
  { id: 'tools', name: 'Ferramentas', icon: toolsIcon },
  { id: 'health', name: 'Saúde', icon: healthIcon },
  { id: 'sports', name: 'Esportes e Fitness', icon: sportsIcon },
  { id: 'fashion', name: 'Moda', icon: fashionIcon },
];
