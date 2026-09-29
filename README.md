# Econverse — Vitrine de Produtos

Teste front-end: página de vitrine de produtos da **Econverse**, desenvolvida em
**React + TypeScript** com **Vite** e **Sass**, seguindo o layout do Figma e
consumindo o catálogo de produtos em JSON.

A página exibe as vitrines de produtos (carrossel paginado) e, ao clicar em um
produto, abre um **modal** com as informações principais do item.

---

## Índice

- [Stack](#stack)
- [Pré-requisitos](#pré-requisitos)
- [Como rodar](#como-rodar)
- [Como compilar (build)](#como-compilar-build)
- [Como testar (lint)](#como-testar-lint)
- [Scripts disponíveis](#scripts-disponíveis)
- [Estrutura do projeto](#estrutura-do-projeto)
- [Decisões de arquitetura](#decisões-de-arquitetura)
- [Acessibilidade](#acessibilidade)
- [SEO](#seo)
- [Requisitos atendidos](#requisitos-atendidos)
- [Pontos de melhoria](#pontos-de-melhoria)

---

## Stack

| Tecnologia | Versão | Papel |
|---|---|---|
| React | 19.2 | Biblioteca de UI |
| TypeScript | ~6.0 | Tipagem estática |
| Vite | 8 | Bundler e dev server |
| Sass | 1.105 | Pré-processador CSS |
| lucide-react | 1.48 | Ícones (SVG inline) |
| ESLint | 10 | Lint (flat config) |

Sem bibliotecas de UI (Bootstrap, Foundation, MUI, etc.) — todo o CSS é
autoral em Sass.

---

## Pré-requisitos

- **Node.js 20.19+** (testado em `v20.19.2`)
- **npm 9+**

```bash
node --version   # v20.19.2 ou superior
npm --version    # 9.x
```

---

## Como rodar

```bash
# 1. instalar as dependências
npm install

# 2. subir o servidor de desenvolvimento
npm run dev
```

O Vite exibe o endereço local no terminal, por padrão:

```
➜  Local:   http://localhost:5173/
➜  press h + enter to show help
```

O servidor já sobe com **HMR** (hot reload): alterações em `.tsx` e `.scss`
são aplicadas no navegador sem recarregar a página.

> Os produtos são carregados via `fetch` dentro do hook `useProducts`. Por
> padrão o endpoint é `/products.json` (a cópia local em `public/`, servida na
> raiz tanto em dev quanto em produção). Para apontar para a API real, defina:
>
> ```bash
> # .env.local
> VITE_PRODUCTS_API_URL=https://app.econverse.com.br/.../products.json
> ```

Para escolher outra porta:

```bash
npm run dev -- --port 3000
```

---

## Como compilar (build)

```bash
npm run build
```

O comando executa duas etapas:

1. `tsc -b` — checagem de tipos (TypeScript project references)
2. `vite build` — gera o bundle de produção

Saída em `dist/`:

```
dist/
├── index.html
├── assets/
│   ├── index-<hash>.js
│   └── index-<hash>.css
├── fonts/          (Poppins 400/600/700)
├── image/          (logos, banners, categorias)
└── products.json   (catálogo)
```

Para **testar o build de produção localmente** (simula o servidor real):

```bash
npm run preview
```

Acesse o endereço exibido (por padrão `http://localhost:4173/`).

> ⚠️ `dist/` está no `.gitignore` e não deve ser versionado.

---

## Como testar (lint)

```bash
npm run lint
```

Valida `**/*.{ts,tsx}` com ESLint (flat config) usando as regras de
`@eslint/js`, `typescript-eslint`, `react-hooks` e `react-refresh`.

O comando deve encerrar **sem saída** e com código de saída `0` para passar.

> O projeto **não possui testes automatizados** (Vitest/Jest) nem cobertura.
> A verificação disponível hoje é o lint + a checagem de tipos do `npm run build`.

---

## Scripts disponíveis

| Script | Comando | Descrição |
|---|---|---|
| `npm run dev` | `vite` | Servidor de desenvolvimento com HMR |
| `npm run build` | `tsc -b && vite build` | Checagem de tipos + build de produção |
| `npm run lint` | `eslint .` | Lint de todo o código TypeScript/TSX |
| `npm run preview` | `vite preview` | Serve o `dist/` localmente |

---

## Estrutura do projeto

```
.
├── index.html                  # Documento base: metadados SEO, OG, JSON-LD
├── vite.config.ts
├── eslint.config.js
├── .nvmrc                      # Node 20.19.0
├── public/
│   ├── products.json           # Catálogo consumido pela vitrine
│   ├── fonts/                  # Poppins 400/600/700 (self-hosted)
│   ├── favicon.svg
│   └── image/                  # Logos, banners, ícones, categorias
└── src/
    ├── main.tsx                # Entry point (ReactDOM.createRoot) + estilos globais
    ├── App.tsx                 # Compõe a home e controla o modal
    ├── components/
    │   ├── Header/             # Topo, busca, atalhos e menu principal
    │   ├── HeroBanner/         # Banner principal com CTA
    │   ├── CategoryNav/        # Navegação por categorias (7 itens)
    │   ├── ProductShowcase/    # Vitrine: título, abas, estados e carrossel
    │   ├── ProductCarousel/    # Carrossel paginado (setas, teclado, ARIA)
    │   ├── ProductCard/        # Card da vitrine (imagem, preços, comprar)
    │   ├── ProductModal/       # Modal de detalhes do produto
    │   ├── PartnersSection/    # Banners de parceiros
    │   ├── BrandsSection/      # Círculos de marcas
    │   ├── Newsletter/         # Formulário de inscrição
    │   └── Footer/             # Rodapé + colunas + redes sociais
    ├── hooks/
    │   └── useProducts.ts      # Carrega o catálogo e expõe loading/success/error
    ├── data/
    │   └── content.ts          # Conteúdo estático (menus, categorias, rodapé)
    ├── styles/
    │   ├── _fonts.scss         # @font-face da Poppins
    │   ├── _variables.scss     # Tokens de design (cores, tipografia, medidas)
    │   └── global.scss         # Reset, .container, .sr-only, .section-title
    ├── types/
    │   └── product.ts          # Interfaces Product e ApiResponse
    └── utils/
        └── format.ts           # formatCurrency (pt-BR / BRL)
```

**Padrão de componentização:** um diretório por componente, com o `.tsx` e o
`.scss` de mesmo nome juntos. Cada componente é autocontido e recebe somente o
que precisa via props. O `App.tsx` fica com ~60 linhas: apenas compõe as
seções e controla o modal.

Cada componente tem o seu próprio `.scss` (nada de CSS de seção no global).
Os estilos globais ficam restritos ao reset, `.container`, `.sr-only` e
`.section-title` (compartilhado entre vitrines e marcas). O `main.tsx` importa
`global.scss` **antes** do `App`, garantindo que os tokens base entrem no bundle
antes das regras específicas de cada componente.

### Camadas

| Pasta | Responsabilidade |
|---|---|
| `components/` | Apresentação + interação. Um componente = um diretório. |
| `hooks/` | Estado derivado e efeitos (acesso a dados, timers, etc.) |
| `data/` | Conteúdo estático da página, separado do JSX |
| `types/` | Contratos de dados compartilhados |
| `utils/` | Funções puras e sem dependência de React |
| `styles/` | Tokens de design e estilos transversais |

---

## Decisões de arquitetura

### Estado e fluxo de dados

O `App.tsx` só orquestra; o acesso a dados mora no hook `useProducts`:

```tsx
// src/hooks/useProducts.ts
export function useProducts(): ProductsState {
  // { products, status: 'loading' | 'success' | 'error' }
}
```

O `App.tsx` mantém apenas o estado que é dele — o produto selecionado:

```tsx
const { products, status } = useProducts()
const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
```

- `status` distingue **carregando**, **sucesso** e **erro**, então a tela nunca
  confunde "carregando" com "sem produtos".
- O request usa `AbortController` e ignora a resposta se o componente
  desmontar no meio do fetch.
- A resposta é validada em runtime (`isValidResponse`) antes de virar estado,
  então um JSON fora do formato não quebra a renderização.
- Em caso de falha, o detalhe técnico vai para o `console.error` e a vitrine
  exibe uma mensagem amigável com `role="alert"`.

O fluxo é **unidirecional**: clique no card → `onOpenModal(product)` →
`setSelectedProduct(product)` → `<ProductModal product={...} onClose={...} />`
→ `onClose` volta para `null`. O `ProductModal` é desmontado ao fechar, então
quantidade e confirmação zeram automaticamente para o próximo produto.

### Repetição evitada

As três vitrines compartilham título, estado de carregamento, erro e carrossel.
Essa lógica ficou em **um** componente, `<ProductShowcase>`, parametrizado por
`variant` (`default` | `after-partners` | `last`), que reproduz o espaçamento
de cada posição da home sem repetir JSX.


### Tipagem

`src/types/product.ts` espelha 1:1 o formato do JSON, então o compilador
valida a resposta da API:

```ts
export interface Product {
  productName: string
  descriptionShort: string
  photo: string
  price: number
}

export interface ApiResponse {
  success: boolean
  products: Product[]
}
```

### Estilos (Sass)

- `_variables.scss` centraliza os tokens do design (cores, família tipográfica,
  largura máxima, altura do header) **sem emitir CSS** — por isso pode ser
  importado por todos os componentes via `@use ... as *`.
- `_fonts.scss` concentra os `@font-face` da Poppins em um único lugar, para que
  sejam emitidos uma vez só (se estivessem junto das variáveis, seriam
  duplicados a cada `@use`).
- `global.scss` faz o reset e define só o que é transversal: `.container`,
  `.sr-only` e `.section-title`.
- Cada componente tem o seu próprio `.scss`, com escopo por classe. O
  `global.scss` saiu de 1042 linhas e nenhuma regra de seção ficou nele.
- Usa-se `@use`/`as *`, e não `@import` (API depreciada e removida no Dart Sass 3).
- Medidas do Figma (larguras, alturas, gaps) estão anotadas em comentários ao
  lado de cada regra para facilitar a conferência pixel a pixel.
- Breakpoints: `1420px`, `1340px`, `1200px`, `1100px`, `820px` e `640px`.

### Valores calculados

O JSON traz apenas `price`. A vitrine deriva os demais valores em tela:

| Valor | Cálculo | Onde |
|---|---|---|
| Preço "de" (riscado) | `price * 1.07` | `ProductCard.tsx` |
| Parcelas (`10x de`) | `round(price / 10)`, mínimo 1 | `ProductCard.tsx` |
| Valor formatado | `formatCurrency()` (pt-BR/BRL) | `utils/format.ts` |

---

## Acessibilidade

Cuidados que já estão implementados:

- HTML semântico: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`,
  `<footer>`, `<form>`, `<button>`.
- Imagens com `alt` descritivo e `loading="lazy"` nas vitrines.
- Modal com `role="dialog"`, `aria-modal="true"` e `aria-labelledby` no título.
- Foco movido para o botão de fechar ao abrir o modal; clique no overlay ou
  tecla `Esc` fecham o modal.
- **Focus trap** no modal: `Tab` e `Shift+Tab` ciclam entre os controles do
  diálogo sem escapar para a página atrás.
- `document.body.style.overflow` travado enquanto o modal está aberto e
  restaurado ao fechar.
- Abas da vitrine com `role="tab"` e `aria-selected`; categoria ativa com
  `aria-current`; newsletter e busca com `<label>` (inclusive `.sr-only`).
- Mensagem de erro da vitrine com `role="alert"` e confirmação de compra com
  `role="status"`, para leitores de tela anunciarem a mudança.
- Carrossel com `aria-roledescription="página"`, `aria-hidden` nas páginas
  inativas, `aria-controls` ligando setas e track, e `aria-live` no status.
- Botões desabilitados (`disabled`) quando não há página anterior/seguinte.
- Utilitário `.sr-only` para rótulos apenas para leitores de tela.
- `lang="pt-BR"` e `<noscript>` com mensagem de fallback.

---

## SEO

Implementado no `index.html`:

- `<title>` e `<meta name="description">` otimizados com palavras-chave.
- `canonical` apontando para a URL de produção.
- Open Graph completo (`og:type`, `og:locale`, `og:site_name`, `og:url`,
  `og:title`, `og:description`, `og:image`).
- Twitter Card `summary_large_image`.
- `theme-color` e ícones (`favicon.svg`).
- JSON-LD `WebSite` com `SearchAction` (dados estruturados para buscadores).

---

## Requisitos atendidos

| Requisito | Status |
|---|---|
| React + TypeScript conforme o layout | ✅ |
| Vitrine consumindo produtos via JSON | ✅ `useProducts` + `fetch` (endpoint configurável) |
| Modal com informações do produto ao clicar | ✅ `ProductModal` |
| Pré-processador Sass | ✅ `.scss` em todas as camadas |
| Layout, fontes, cores e botões do Figma | ✅ tokens em `_variables.scss` |
| Sem bibliotecas de UI | ✅ apenas `lucide-react` (ícones SVG) |
| Boas práticas de SEO | ✅ meta tags, OG, JSON-LD |
| HTML semântico | ✅ tags semânticas + ARIA |
| Componentização | ✅ 10 componentes isolados + `hooks`/`data`/`utils`/`types`/`styles` |
| Organização do projeto | ✅ camadas (`components`/`hooks`/`data`/`types`/`utils`/`styles`) |
| Lint e checagem de tipos | ✅ `npm run lint` e `tsc -b` no build |

---

## Pontos de melhoria

Não implementados por estarem fora do escopo do teste, mas identificados:

- Testes automatizados (Vitest + Testing Library) e cobertura. Hoje a
  verificação é `npm run lint` + `tsc -b`.
- CI (GitHub Actions) e pre-commit hooks.
- Compressão das imagens de banner (`bannerHome.jpg` tem ~6 MB,
  `bannerParceiros.jpg` ~1,1 MB) — impacta diretamente o Core Web Vitals e o
  LCP. Sugestão: WebP/AVIF + `loading="lazy"`.
- Paginação / infinite scroll nas vitrines (hoje todos os produtos são
  carregados de uma vez).
- Cache do catálogo, para não refazer o request a cada visita.
- Roteamento (React Router) caso existam outras páginas além da home.
- Estado global de carrinho: o botão "Comprar" hoje só confirma localmente,
  sem persistir o item.
- Prettier, para padronizar a formatação entre os arquivos (hoje é manual).
- Os textos "Lorem ipsum" e as URLs `href="#"` do layout ainda são placeholders
  do Figma; a imagem de fundo dos parceiros passou a vir de `data/`
  (injetada no CSS pela custom property `--partner-image`).
