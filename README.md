
# Teste Front-End Jr. — Econverse

Aplicação web de vitrine de produtos desenvolvida como parte do teste técnico para a vaga de Front-End Júnior da Econverse.

## Tecnologias utilizadas

- React
- TypeScript
- Vite
- Sass (SCSS)
- HTML semântico
- CSS Grid e Flexbox

## Funcionalidades

- Carregamento de produtos por meio de uma API em JSON.
- Exibição dos produtos em cards com imagem, nome, descrição e preço.
- Modal com detalhes do produto selecionado.
- Fechamento do modal pelo botão, clicando fora do conteúdo ou pressionando `Esc`.
- Layout responsivo para diferentes tamanhos de tela.
- Formatação de preços em reais (BRL).
- Estados de carregamento e tratamento de erros na requisição.

## Requisitos

- Node.js
- npm

## Como executar o projeto

1. Clone ou baixe o repositório.
2. Abra o terminal na pasta do projeto.
3. Instale as dependências:

   ```bash
   npm install
   ```

4. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

5. Acesse o endereço indicado no terminal, geralmente `http://localhost:5173/`.

## Build de produção

Para gerar a versão de produção:

```bash
npm run build
```

Os arquivos gerados serão disponibilizados na pasta `dist`.

Para testar localmente a versão gerada, execute:

```bash
npm run preview
```

## Fonte dos dados

Os produtos são carregados da API disponibilizada no enunciado do teste técnico da Econverse.

Durante o desenvolvimento local, o Vite utiliza um proxy para encaminhar a requisição à API.

## Observações

Este projeto foi desenvolvido com foco nos requisitos do teste técnico, incluindo consumo de API, componentes React, tipagem com TypeScript, estilização com Sass e responsividade.