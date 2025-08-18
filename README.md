# 🚀 Econverse - Teste Front-End Jr

Este projeto foi desenvolvido como parte do processo seletivo para a vaga de **Desenvolvedor Front-End Jr** na Econverse. É uma vitrine de produtos moderna e responsiva, construída com React, TypeScript e Sass, seguindo as melhores práticas de desenvolvimento web.

## 📋 Especificações Técnicas

### Requisitos Obrigatórios ✅
- **Framework**: React + TypeScript
- **Layout**: Conforme design do Figma ([Link do Layout](https://www.figma.com/file/rWnzPeoxgynuNPsJjV0VmV/Teste-Front-End-Jr?node-id=0%3A1))
- **Vitrine**: Consumo de API JSON ([Link da API](https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json))
- **Modal Interativo**: Abertura ao clicar em produtos com informações detalhadas
- **Pré-processador**: Sass (SCSS)
- **Fidelidade**: Layout pixel a pixel, fontes, cores e botões exatos

### Pontos Extras Implementados ✅
- **SEO**: Meta tags, Open Graph, Schema.org, robots.txt
- **HTML Semântico**: Estrutura semântica completa com ARIA
- **Acessibilidade**: WCAG 2.1 AA, navegação por teclado, leitores de tela

## 🛠️ Tecnologias Utilizadas

- **React 18** - Biblioteca para interfaces de usuário
- **TypeScript** - Tipagem estática para JavaScript
- **Vite** - Build tool e dev server
- **Sass/SCSS** - Pré-processador CSS
- **ESLint** - Linting de código
- **Atomic Design** - Metodologia de componentização

## 🏗️ Arquitetura do Projeto

### Estrutura de Pastas
```
src/
├── components/
│   └── Shared/
│       ├── atoms/           # Componentes atômicos
│       ├── molecules/       # Componentes moleculares
│       └── organisms/       # Componentes orgânicos
├── hooks/                   # Custom hooks React
├── services/                # Serviços e APIs
├── styles/                  # Arquivos SCSS globais
├── types/                   # Definições TypeScript
└── assets/                  # Imagens e recursos
```

### Atomic Design Implementado
- **Atoms**: Button, Icons, PartnerCard
- **Molecules**: SearchBar, CategoryCard
- **Organisms**: Header, Footer, HomeSection, CategoryCards, PartnersSection

## 🎯 Funcionalidades Implementadas

### 1. Header Completo
- Logo Econverse responsivo
- Barra de busca funcional
- Menu de navegação com categorias
- Barra de confiança (TrustBar)
- Navegação do usuário com ícones

### 2. Banner Principal
- Imagem de fundo responsiva
- Texto sobreposto com CTA
- Botão "Ver Produtos" com scroll suave

### 3. Categorias Interativas
- 7 categorias principais (Tecnologia, Supermercado, Bebidas, etc.)
- Ícones SVG customizados para cada categoria
- Seleção ativa com mudança de cor
- Navegação por teclado

### 4. Vitrine de Produtos
- Carrossel responsivo com 4 produtos visíveis
- Navegação por botões laterais
- Modal detalhado ao clicar em produtos
- Paginação inteligente

### 5. Seção de Parceiros
- Cards de parceiros com imagem de fundo
- Design moderno com overlay e texto
- Botões CTA "CONFIRA"
- Layout responsivo

### 6. Newsletter e Footer
- Formulário de inscrição
- Links de navegação
- Informações da empresa
- Redes sociais

## 🔧 Instalação e Execução

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### 1. Clone o repositório
```bash
git clone [URL_DO_REPOSITORIO]
cd teste-front-end
```

### 2. Instale as dependências
```bash
npm install
```

### 3. Execute o projeto
```bash
# Desenvolvimento
npm run dev

# Build de produção
npm run build

# Preview da build
npm run preview

# Linting
npm run lint
```

### 4. Acesse a aplicação
- **Desenvolvimento**: http://localhost:5176/
- **Produção**: Abra o arquivo `dist/index.html`

## 🎨 Sistema de Design

### Paleta de Cores
- **Primária**: #3019B2 (Azul Econverse)
- **Secundária**: #F7CA11 (Amarelo)
- **Neutra**: #9F9F9F (Cinza)
- **Fundo**: #F8F9FA (Cinza claro)

### Tipografia
- **Família**: Poppins, Work Sans
- **Pesos**: 300, 400, 500, 600, 700
- **Tamanhos**: Responsivos (rem)

### Componentes Base
- **Botões**: Bordas arredondadas, estados hover
- **Cards**: Sombras, bordas arredondadas
- **Inputs**: Focus visível, validação visual

## 🔍 SEO e Acessibilidade

### Meta Tags Implementadas
- Title otimizado com palavras-chave
- Meta description atrativa
- Open Graph para redes sociais
- Twitter Cards
- Schema.org structured data

### HTML Semântico
- `<header>`, `<main>`, `<section>`, `<article>`, `<footer>`
- Roles ARIA específicos (banner, main, tablist, etc.)
- Labels descritivos para leitores de tela
- Navegação por teclado funcional

### Acessibilidade (WCAG 2.1 AA)
- Focus visível em todos os elementos interativos
- Tamanho mínimo de botões (44x44px)
- Contraste adequado de cores
- Textos alternativos para imagens
- Estados ARIA (selected, expanded, etc.)

## 🎣 Hooks Customizados

### useProducts
```typescript
const { products, loading, error } = useProducts();
```
- Gerenciamento de estado dos produtos
- Tratamento de erros
- Estados de loading

## 🌐 Serviços e APIs

### products.ts
- Fetch de produtos da API JSON
- Tratamento de CORS com proxy Vite
- Tipagem TypeScript para produtos
- Tratamento de erros

### Estrutura da API
```json
{
  "products": [
    {
      "id": "string",
      "name": "string",
      "price": "number",
      "image": "string",
      "description": "string"
    }
  ]
}
```

## 🎨 Sistema de Ícones

### Ícones SVG Customizados
- **Categorias**: Tecnologia, Supermercado, Bebidas, Ferramentas, Saúde, Esportes, Moda
- **Interface**: LogoEconverse, MagnifyingGlass, UserIcons
- **Props**: size, color, strokeWidth, className
- **Exportação**: Centralizada via index.ts

### Exemplo de Uso
```typescript
import { TecnologiaIcon } from '../atoms/Icons';

<TecnologiaIcon 
  size={48} 
  color={isActive ? '#3019B2' : '#9F9F9F'} 
/>
```

## 📱 Responsividade

### Breakpoints
- **Desktop**: > 1024px
- **Tablet**: 768px - 1024px
- **Mobile**: < 768px
- **Small Mobile**: < 480px

### Estratégias
- Flexbox para layouts
- Grid para estruturas complexas
- Media queries para adaptações
- Unidades relativas (rem, %, vw)

## 🚀 Performance e Build

### Otimizações Vite
- Code splitting automático
- Minificação com Terser
- Source maps desabilitados em produção
- Otimização de assets (4KB inline limit)

### Bundle Analysis
```bash
npm run build -- --analyze
```

## 🧪 Testes e Qualidade

### Linting
- ESLint configurado
- Regras TypeScript
- Regras React
- Formatação consistente

### Validação
- TypeScript strict mode
- Props validation
- Error boundaries
- Loading states

## 📊 Métricas de Qualidade

### Core Web Vitals
- **LCP**: Otimizado com lazy loading
- **FID**: Interações responsivas
- **CLS**: Layout estável

### Acessibilidade
- **WCAG 2.1 AA**: Conformidade completa
- **Navegação por teclado**: 100% funcional
- **Leitores de tela**: Compatível

## 🔗 Links Importantes

- **Layout Figma**: [https://www.figma.com/file/rWnzPeoxgynuNPsJjV0VmV/Teste-Front-End-Jr](https://www.figma.com/file/rWnzPeoxgynuNPsJjV0VmV/Teste-Front-End-Jr)
- **Vitrine de Produtos**: [https://app.econverse.com.br/teste-front-end/junior/tecnologia/layout/vitrine-produtos.png](https://app.econverse.com.br/teste-front-end/junior/tecnologia/layout/vitrine-produtos.png)
- **API JSON**: [https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json](https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json)

## 🎯 Objetivos Alcançados

### ✅ Organização do Projeto
- Estrutura clara e escalável
- Separação de responsabilidades
- Padrões de nomenclatura consistentes

### ✅ Lógica do Código
- TypeScript para type safety
- Hooks customizados reutilizáveis
- Tratamento de estados e erros
- Performance otimizada

### ✅ Componentização
- Atomic Design implementado
- Componentes reutilizáveis
- Props tipadas
- Estilos modulares

### ✅ Alcance dos Objetivos
- Layout fiel ao design
- Funcionalidades completas
- SEO e acessibilidade implementados
- Código limpo e profissional

## 🚀 Próximos Passos

### Melhorias Futuras
- [ ] Testes unitários com Jest
- [ ] Testes E2E com Cypress
- [ ] PWA capabilities
- [ ] Internacionalização (i18n)
- [ ] Analytics e tracking

### Deploy
- [ ] Configuração de CI/CD
- [ ] Deploy automático
- [ ] Monitoramento de performance
- [ ] A/B testing

## 👨‍💻 Desenvolvedor

**Nome**: [Jhonatan Serafim]  
**Data**: Dezembro 2025  

## 📝 Licença

Este projeto foi desenvolvido especificamente para o processo seletivo da Econverse.

---

Para dúvidas ou sugestões, entre em contato através do jhonatan.serafim@gmail.com.
