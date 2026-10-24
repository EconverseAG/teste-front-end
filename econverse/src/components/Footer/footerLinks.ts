export interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}

export const footerColumns: FooterColumn[] = [
  {
    title: 'Institucional',
    links: [
      { label: 'Sobre Nós', href: '#sobre' },
      { label: 'Movimento', href: '#movimento' },
      { label: 'Trabalhe conosco', href: '#carreiras' },
    ],
  },
  {
    title: 'Ajuda',
    links: [
      { label: 'Suporte', href: '#suporte' },
      { label: 'Fale Conosco', href: '#contato' },
      { label: 'Perguntas Frequentes', href: '#faq' },
    ],
  },
  {
    title: 'Termos',
    links: [
      { label: 'Termos e Condições', href: '#termos' },
      { label: 'Política de Privacidade', href: '#privacidade' },
      { label: 'Troca e Devolução', href: '#trocas' },
    ],
  },
];
