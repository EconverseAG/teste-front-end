/** Conteúdo estático da home, separado da camada de apresentação. */

export interface LinkItem {
  label: string;
  href: string;
}

export interface CategoryItem {
  label: string;
  image: string;
  active?: boolean;
}

export interface PartnerItem {
  title: string;
  description: string;
  image: string;
}

export interface SocialItem {
  label: string;
  href: string;
  image: string;
}

export interface FooterColumn {
  id: string;
  title: string;
  links: LinkItem[];
}

export interface ShortcutItem {
  label: string;
  image: string;
  href: string;
}

export interface TopBarItem {
  image: string;
  before: string;
  highlight: string;
  after: string;
}

export interface VitrineTab {
  label: string;
  active?: boolean;
}

export const TOP_BAR: TopBarItem[] = [
  { image: '/image/ShieldCheck.png', before: 'Compra ', highlight: '100% segura', after: '' },
  { image: '/image/Truck.png', before: '', highlight: 'Frete grátis', after: ' acima de R$ 200' },
  { image: '/image/CreditCard.png', before: '', highlight: 'Parcele', after: ' suas compras' },
];

export const MAIN_NAV: LinkItem[] = [
  { label: 'Todas Categorias', href: '#' },
  { label: 'Supermercado', href: '#' },
  { label: 'Livros', href: '#' },
  { label: 'Moda', href: '#' },
  { label: 'Lançamentos', href: '#' },
  { label: 'Ofertas do dia', href: '#' },
];

export const SUBSCRIPTION_NAV = {
  label: 'Assinatura',
  href: '#',
  image: '/image/assunatura.png',
};

export const HEADER_SHORTCUTS: ShortcutItem[] = [
  { label: 'Ofertas e prêmios', image: '/image/Group.png', href: '#vitrine-1' },
  { label: 'Favoritos', image: '/image/Heart.png', href: '#vitrine-1' },
  { label: 'Minha conta', image: '/image/UserCircle.png', href: '#vitrine-1' },
  { label: 'Carrinho de compras', image: '/image/ShoppingCart.png', href: '#vitrine-1' },
];

export const CATEGORIES: CategoryItem[] = [
  { label: 'Tecnologia', image: '/image/tecnologia.png', active: true },
  { label: 'Supermercado', image: '/image/supermercado.png' },
  { label: 'Bebidas', image: '/image/bebidas.png' },
  { label: 'Ferramentas', image: '/image/ferramentas.png' },
  { label: 'Saúde', image: '/image/saude.png' },
  { label: 'Esportes e Fitness', image: '/image/esportes.png' },
  { label: 'Moda', image: '/image/moda.png' },
];

export const VITRINE_TABS: VitrineTab[] = [
  { label: 'Celular', active: true },
  { label: 'Acessórios' },
  { label: 'Tablets' },
  { label: 'Notebooks' },
  { label: 'TVs' },
  { label: 'Ver todos' },
];

export const PARTNERS: PartnerItem[] = [
  { title: 'Parceiros', description: 'Lorem ipsum dolor sit amet, consectetur', image: '/image/bannerParceiros.jpg' },
  { title: 'Parceiros', description: 'Lorem ipsum dolor sit amet, consectetur', image: '/image/bannerParceiros.jpg' },
];

export const BRANDS: string[] = ['/image/Logo.png', '/image/Logo.png', '/image/Logo.png', '/image/Logo.png', '/image/Logo.png'];

export const SOCIAL_LINKS: SocialItem[] = [
  { label: 'Instagram', href: 'https://instagram.com', image: '/image/instagram.png' },
  { label: 'Facebook', href: 'https://facebook.com', image: '/image/facebook.png' },
  { label: 'LinkedIn', href: 'https://linkedin.com', image: '/image/linkedin.png' },
];

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    id: 'footer-institucional',
    title: 'Institucional',
    links: [
      { label: 'Sobre Nós', href: '#' },
      { label: 'Movimento', href: '#' },
      { label: 'Trabalhe conosco', href: '#' },
    ],
  },
  {
    id: 'footer-ajuda',
    title: 'Ajuda',
    links: [
      { label: 'Suporte', href: '#' },
      { label: 'Fale Conosco', href: '#' },
      { label: 'Perguntas Frequentes', href: '#' },
    ],
  },
  {
    id: 'footer-termos',
    title: 'Termos',
    links: [
      { label: 'Termos e Condições', href: '#' },
      { label: 'Política de Privacidade', href: '#' },
      { label: 'Troca e Devolução', href: '#' },
    ],
  },
];
