export interface Category {
  label: string;
  icon: string;
}

export const categories: Category[] = [
  { label: "Tecnologia", icon: "/figma/cat-tecnologia.png" },
  { label: "Supermercado", icon: "/figma/cat-supermercado.png" },
  { label: "Bebidas", icon: "/figma/cat-bebidas.png" },
  { label: "Ferramentas", icon: "/figma/cat-ferramentas.png" },
  { label: "Saúde", icon: "/figma/cat-saude.png" },
  { label: "Esportes e Fitness", icon: "/figma/cat-esportes.png" },
  { label: "Moda", icon: "/figma/cat-moda.png" },
];

export const showcaseTabs = [
  "celular",
  "acessórios",
  "tablets",
  "NOTEBOOKS",
  "TVs",
  "Ver todos",
];

export const mainNav = [
  "Todas Categorias",
  "Supermercado",
  "Livros",
  "Moda",
  "Lançamentos",
  "Ofertas do dia",
];

export const benefits = [
  {
    label: "Compra 100% segura",
    emphasis: "100% segura",
    icon: "/figma/shield-check.svg",
    iconFirst: true,
  },
  {
    label: "Frete grátis acima de R$ 200",
    emphasis: "Frete grátis",
    icon: "/figma/truck.svg",
    iconFirst: true,
  },
  {
    label: "Parcele suas compras",
    emphasis: "Parcele",
    icon: "/figma/credit-card.svg",
    iconFirst: true,
  },
];

export const footerColumns = [
  {
    title: "Institucional",
    links: ["Sobre Nós", "Movimento", "Trabalhe conosco"],
  },
  {
    title: "Ajuda",
    links: ["Suporte", "Fale Conosco", "Perguntas Frequentes"],
  },
  {
    title: "Termos",
    links: [
      "Termos e Condições",
      "Política de Privacidade",
      "Troca e Devolução",
    ],
  },
];
