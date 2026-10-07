import type { IconName } from "@/components/atoms/Icon/icons"

/** Conteúdo estático da home — fora dos componentes para mantê-los puros. */

export type Benefit = { icon: IconName; lead: string; highlight: string; trail: string }

export const FREE_SHIPPING_FROM = 200

/** Vitrine principal: recebe os resultados da busca do header. */
export const SEARCH_RESULTS_ID = "ofertas"

export const BENEFITS: readonly Benefit[] = [
  { icon: "shield", lead: "Compra ", highlight: "100% segura", trail: "" },
  { icon: "truck", lead: "", highlight: "Frete grátis", trail: " acima de R$ 200" },
  { icon: "card", lead: "", highlight: "Parcele", trail: " suas compras" },
]

export type NavLink = { label: string; href: string; highlight?: boolean; icon?: IconName }

export const MAIN_NAV: readonly NavLink[] = [
  { label: "Todas categorias", href: "#categorias" },
  { label: "Supermercado", href: "#" },
  { label: "Livros", href: "#" },
  { label: "Moda", href: "#" },
  { label: "Lançamentos", href: "#" },
  { label: "Ofertas do dia", href: "#ofertas", highlight: true },
  { label: "Assinatura", href: "#", icon: "crown" },
]

export type Category = { label: string; image: string; href: string }

export const CATEGORIES: readonly Category[] = [
  { label: "Tecnologia", image: "/images/cat-tecnologia.png", href: "#ofertas" },
  { label: "Supermercado", image: "/images/cat-supermercado.png", href: "#" },
  { label: "Bebidas", image: "/images/cat-bebidas.png", href: "#" },
  { label: "Ferramentas", image: "/images/cat-ferramentas.png", href: "#" },
  { label: "Saúde", image: "/images/cat-saude.png", href: "#" },
  { label: "Esportes e Fitness", image: "/images/cat-esportes.png", href: "#" },
  { label: "Moda", image: "/images/cat-moda.png", href: "#" },
]

export type Partner = { title: string; description: string; image: string; href: string }

export const PARTNERS: readonly Partner[] = [
  {
    title: "Parceiros",
    description: "Lorem ipsum dolor sit amet, consectetur",
    image: "/images/partner.jpg",
    href: "#",
  },
  {
    title: "Parceiros",
    description: "Lorem ipsum dolor sit amet, consectetur",
    image: "/images/partner.jpg",
    href: "#",
  },
]

export const BRANDS: readonly { name: string; logo: string }[] = Array.from({ length: 5 }, (_, index) => ({
  name: `Econverse ${index + 1}`,
  logo: "/images/logo.svg",
}))

export type FooterColumn = { title: string; links: readonly { label: string; href: string }[]; font?: "secondary" }

export const FOOTER_COLUMNS: readonly FooterColumn[] = [
  {
    title: "Institucional",
    font: "secondary",
    links: [
      { label: "Sobre Nós", href: "#" },
      { label: "Movimento", href: "#" },
      { label: "Trabalhe conosco", href: "#" },
    ],
  },
  {
    title: "Ajuda",
    font: "secondary",
    links: [
      { label: "Suporte", href: "#" },
      { label: "Fale Conosco", href: "#" },
      { label: "Perguntas Frequentes", href: "#" },
    ],
  },
  {
    title: "Termos",
    links: [
      { label: "Termos e Condições", href: "#" },
      { label: "Política de Privacidade", href: "#" },
      { label: "Troca e Devolução", href: "#" },
    ],
  },
]

export const SOCIAL_LINKS: readonly { label: string; href: string; icon: IconName }[] = [
  { label: "Instagram", href: "https://www.instagram.com/econverse.ag/", icon: "instagram" },
  { label: "Facebook", href: "https://www.facebook.com/econverse.ag", icon: "facebook" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/econverse", icon: "linkedin" },
]
