# Teste Econverse - Vaga Desenvolvedor Front-End Jr

Uma vitrine de produtos desenvolvida em **React + TypeScript + Vite**, consumindo dados de uma API JSON e apresentando uma interface interativa com modal de detalhes do produto.

## 🎯 Requisitos Implementados

✅ React com TypeScript  
✅ Consumo de API (JSON externo)  
✅ Modal interativo ao clicar no produto  
✅ Pré-processador Sass  
✅ Layout pixel-perfect conforme Figma  
✅ Sem uso de bibliotecas UI (Bootstrap, Foundation)  
✅ HTML Semântico  
✅ Boas práticas de SEO  

## 🛠️ Tecnologias Utilizadas

React
TypeScript
Vite
Sass
JSON
Pré-requisitos
Antes de rodar o projeto, certifique-se de ter as seguintes dependências instaladas:

Node.js (versão 16 ou superior)
npm ou yarn
Instalação
Para instalar o projeto, siga os passos abaixo:

Clone o repositório em sua máquina local. Para isso, use o comando:

git clone https://github.com/lucasrq/teste-front-end.git

### 2. Instale as dependências

```bash
npm install
```

### 3. Execute em modo desenvolvimento

```bash
npm run dev
```

O projeto será aberto em `http://localhost:5173`

### 4. Build para produção

```bash
npm run build
```

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── Product/        # Card de produto
│   ├── Products/       # Grade de produtos
│   ├── Modal/          # Modal de detalhes
│   └── ...outros
├── containers/         # Containers/páginas
│   ├── Banner/
│   ├── Header/
│   ├── Footer/
│   └── ...outros
├── assets/            # Imagens e recursos
├── App.tsx
├── main.tsx
├── global.scss
└── vite-env.d.ts
```

## ✨ Funcionalidades

### Vitrine de Produtos
- Exibe lista de produtos consumidos de API JSON
- Cards com imagem, nome, preço e descrição
- Design responsivo e moderno

### Modal Interativo
- Clique em um produto abre modal com detalhes completos
- Exibe todas as informações do produto em JSON
- Close ao clicar fora ou no botão X
- Animação suave de entrada/saída

### Boas Práticas
- **Componentização** - Componentes pequenos e reutilizáveis
- **HTML Semântico** - Uso correto de tags semânticas
- **CSS Organizado** - Sass com estrutura clara
- **Performance** - Otimizado com React hooks
- **Acessibilidade** - Estrutura acessível

## 🔗 Referências

- **Layout Figma:** [Acesse aqui](https://www.figma.com/file/rWnzPeoxgynuNPsJjV0VmV/Teste-Front-End-Jr)
- **API JSON:** [https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json](https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json)

## 🧪 Testando o Projeto

1. Após rodar `npm run dev`, acesse `http://localhost:5173`
2. Visualize a lista de produtos
3. Clique em qualquer produto para abrir o modal
4. Verifique as informações exibidas
5. Feche o modal clicando fora ou no X

## 📊 Organização do Código

- **Componentes** estão em `src/components` com padrão: `component/index.tsx` e `component/style.scss`
- **Containers** estão em `src/containers` com a mesma estrutura
- **Assets** organizados por tipo: `assets/images`, `assets/brands`, etc
- **Estilos globais** em `src/global.scss`

## 🎨 Design

O projeto segue fielmente o design fornecido no Figma, respeitando:
- Paleta de cores exata
- Tamanhos de fonte especificados
- Espaçamento e proporções
- Efeitos visuais (hover, animações)

## 📝 Notas Técnicas

- Uso de **hooks** (useState, useEffect) para gerenciamento de estado
- **Consumo assíncrono** de dados com tratamento de erros
- **Tipagem TypeScript** em todos os componentes
- **Sass** com variáveis e mixins para CSS reutilizável

## 👨‍💻 Autor

Lucas Rodrigues  
[LinkedIn](https://linkedin.com/in/lucasrrq) | [GitHub](https://github.com/lucasrq)

---

**Data de Conclusão:** Abril de 2026