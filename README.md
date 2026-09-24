# Econverse | Vitrine de tecnologia

Vitrine responsiva desenvolvida em React + TypeScript para o teste front-end da Econverse. Os produtos são carregados do JSON disponibilizado pela Econverse e podem ser pesquisados, ordenados e abertos em um modal de detalhes.

## Stack

- React 19 e TypeScript
- Vite
- Sass (`.scss`)
- Oxlint
- HTML semântico e metadados básicos de SEO

## Requisitos

- Node.js 20 ou superior
- npm 10 ou superior

## Instalação

```bash
npm install
```

## Desenvolvimento

```bash
npm run dev
```

Depois, abra a URL mostrada pelo Vite (normalmente `http://localhost:5173`).

## Build de produção

```bash
npm run build
```

Para visualizar o build localmente:

```bash
npm run preview
```

## Testes e qualidade

O projeto possui as verificações disponíveis no scaffold atual:

```bash
npm run lint
npm run build
```

O build executa a checagem TypeScript antes de gerar os arquivos em `dist/`. A interação principal pode ser validada manualmente abrindo um card, fechando o modal com o botão ou `Escape`, pesquisando e alterando a ordenação.

## Estrutura

- `src/App.tsx`: componentes da página, busca do JSON, filtros e modal.
- `src/App.scss`: tokens visuais, grid responsivo, estados e modal.
- `src/index.css`: reset mínimo e tipografia global.
- `index.html`: idioma, título e metadados SEO.

## Fonte dos dados

O endpoint usado pela aplicação é:

`https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json`

As imagens dos cards são entregues pelo campo `photo` de cada produto.

Em navegadores, o endpoint remoto pode bloquear chamadas por CORS. Por isso, a aplicação tenta primeiro a URL oficial e usa `public/products.json` como fallback local quando o navegador não permite a requisição. O arquivo local replica o contrato e os dados fornecidos pelo teste.
