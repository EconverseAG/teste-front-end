# Econverse Test

Projeto de teste técnico para a Econverse: uma landing page e-commerce responsiva com vitrine de produtos, consumo de JSON externo, modal de detalhes, favoritos e carrinho persistido no navegador.

## Tecnologias

- Next.js 16 com App Router
- React 19
- TypeScript
- Sass/SCSS Modules
- ESLint
- Prettier

## Decisões de arquitetura

A estrutura segue uma organização feature-first leve. A feature `products` concentra tipos, service, hook e componentes da vitrine, enquanto elementos reutilizáveis ficam em `shared/components`. Os estilos globais foram separados em tokens, mixins e animações para manter consistência visual sem acoplar componentes.

O service normaliza respostas em diferentes formatos comuns de JSON (`products`, `items`, `data`, `results`) e evita `any`, recebendo dados externos como `unknown` antes de mapear para o tipo `Product`.

As ações de e-commerce ficam em um provider compartilhado (`shared/store`), mantendo carrinho, favoritos, contadores do header, toast de feedback e mini carrinho lateral com persistência em `localStorage`.

## Como instalar

```bash
npm install
```

## Como rodar localmente

```bash
npm run dev
```

Acesse `http://localhost:3000`.

## Como gerar build

```bash
npm run build
```

## Como rodar lint

```bash
npm run lint
```

## Como formatar

```bash
npm run format
```

## API de produtos

Por padrão o projeto consome o endpoint externo por meio da rota interna `/api/products`, evitando problemas de CORS no navegador:

```txt
https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json
```

Se o endpoint externo estiver indisponível durante o desenvolvimento, a rota retorna um fallback local tipado para manter a vitrine navegável. Para usar outro endpoint externo, crie um `.env.local`:

```bash
NEXT_PUBLIC_PRODUCTS_API_URL=https://seu-endpoint.com/produtos.json
```

Também é possível apontar o cliente diretamente para outro JSON:

```bash
NEXT_PUBLIC_PRODUCTS_API_URL_CLIENT=https://seu-endpoint.com/produtos.json
```

## Responsividade, SEO e acessibilidade

- Layout mobile first com breakpoints em SCSS para tablet, desktop e telas largas.
- Metadata configurada no `layout.tsx` com title, description e Open Graph.
- HTML semântico com `header`, `main`, `section`, `article` e `footer`.
- Modal com `role="dialog"`, `aria-modal`, fechamento por ESC, overlay e botão acessível.
- Mini carrinho com `role="dialog"`, fechamento por ESC, overlay, total, alteração de quantidade, remoção e limpeza.
- Scroll da página bloqueado enquanto o modal está aberto.
- Foco visível e suporte a `prefers-reduced-motion`.
- Imagens com `alt` e cards operáveis por botões reais.
