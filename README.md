# Teste Econverse - Desenvolvedor Front-End

Este projeto é o resultado do desafio técnico para a vaga de Desenvolvedor Front-End na **Econverse**. A aplicação consiste em uma **Landing Page de e-commerce** totalmente responsiva, consumindo dados de uma API externa e apresentando interações avançadas como modais e vitrines dinâmicas.

---

## Tecnologias Utilizadas

- **React** com **TypeScript** (Vite)
- **Sass (SCSS)** — Pré-processador para estilização modular
- **Context API / Hooks** — Para gerenciamento de estado (Modais e Produtos)
- **Fetch API** — Para consumo do JSON de produtos

---

## Organização do Projeto

O projeto foi reestruturado para seguir padrões de escalabilidade e **Clean Code**:

- `src/pages` — Separação da lógica de rotas e telas (ex: Home)
- `src/components` — Componentes reutilizáveis e independentes
- `src/assets` — Organização centralizada de ícones e imagens
- **Encapsulamento** — Cada componente gerencia seu próprio arquivo de estilo `.scss`

---

## Como rodar o projeto

Siga os passos abaixo para executar o projeto localmente:

### 1. Clonar o repositório

```bash
git clone https://github.com/SEU_USUARIO/NOME_DO_REPO.git
```

### 2. Entrar na pasta do projeto

```bash
cd NOME_DO_REPO
```

### 3. Instalar as dependências

```bash
npm install
# ou
yarn install
```

### 4. Executar o projeto em modo de desenvolvimento

```bash
npm run dev
# ou
yarn dev
```

### 5. Acessar no navegador

O projeto estará disponível em `http://localhost:5173` (ou a porta indicada no terminal).

---
