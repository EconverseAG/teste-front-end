# Teste Front-End Jr - Econverse

Página de e-commerce desenvolvida a partir de um layout do Figma, com vitrine de produtos em carrossel e um modal (popup) de compra rápida.

## Tecnologias

- [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) (bundler e servidor de desenvolvimento)
- [Sass (SCSS)](https://sass-lang.com/) para estilização
- [ESLint](https://eslint.org/) para padronização do código

## Funcionalidades

- Header com barra de benefícios, busca, ícones de usuário/carrinho e menu de navegação
- Banner principal
- Categorias com ícones
- Vitrine "Produtos relacionados" com abas e carrossel (setas de navegação e scroll horizontal)
- Cards de produto com preço, preço antigo, parcelamento e frete grátis
- Modal de produto aberto ao clicar em "Comprar":
  - imagem, nome, preço e descrição do produto
  - seletor de quantidade (mínimo 1)
  - fecha pelo botão "X", clicando fora ou pressionando `Esc`
  - bloqueia o scroll da página enquanto está aberto

## Como rodar

### Pré-requisitos

- [Node.js](https://nodejs.org/) 18 ou superior
- npm (já vem com o Node.js)

### Passo a passo

```bash
# 1. Clone o repositório
git clone <uhttps://github.com/giotrzz/teste-front-end.git>
cd teste-front-end

# 2. Instale as dependências
npm install

# 3. Inicie o servidor de desenvolvimento
npm run dev
```

Depois, abra no navegador o endereço exibido no terminal (por padrão, `http://localhost:5173`).

### Outros comandos

| Comando           | Descrição                                      |
| ----------------- | ---------------------------------------------- |
| `npm run dev`     | Inicia o servidor de desenvolvimento           |
| `npm run build`   | Gera a versão de produção na pasta `dist`      |
| `npm run preview` | Serve localmente a versão gerada pelo build    |
| `npm run lint`    | Executa o ESLint em todo o projeto             |

## Estrutura do projeto

```
teste-front-end/
├── public/                  # Arquivos estáticos servidos como estão
├── src/
│   ├── assets/
│   │   ├── icons/           # Ícones SVG (carrinho, coração, escudo, etc.)
│   │   │   └── categories/  # Ícones das categorias (tecnologia, moda, saúde...)
│   │   ├── images/          # Imagens (ex.: banner da Black Friday)
│   │   └── logo-econverse.png
│   ├── components/
│   │   ├── Banner/          # Banner principal
│   │   ├── Categories/      # Lista de categorias
│   │   ├── Header/          # Cabeçalho e navegação
│   │   ├── ProductCard/     # Card individual de produto
│   │   ├── ProductShowcase/ # Vitrine com abas e carrossel de produtos
│   │   └── ProductModal/    # Modal (popup) de compra rápida
│   ├── hooks/
│   │   └── useProducts.ts   # Hook que carrega a lista de produtos
│   ├── services/
│   │   └── productservice.ts # Acesso aos dados dos produtos
│   ├── styles/
│   │   ├── _variables.scss  # Cores, fontes e demais variáveis globais
│   │   └── global.scss      # Estilos globais
│   ├── types/
│   │   └── product.ts       # Tipagem do produto (`Product`)
│   ├── utils/
│   │   └── formatPrice.ts   # Formata valores em reais (R$)
│   ├── App.tsx              # Composição da página
│   └── main.tsx             # Ponto de entrada da aplicação
├── eslint.config.js
├── index.html
├── package.json
├── tsconfig.json            # Configurações do TypeScript
├── tsconfig.app.json
├── tsconfig.node.json
└── vite.config.ts
```