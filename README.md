# Teste Front-end Econverse

Implementação de uma página de e-commerce inspirada nas referências visuais fornecidas para o desafio Econverse. A aplicação usa React e TypeScript, carrega o catálogo oficial de produtos e apresenta detalhes em um modal acessível.

## Tecnologias

- React 18 e TypeScript
- Vite
- Sass (SCSS)
- HTML semântico e CSS responsivo

## Pré-requisitos

- Node.js 18 ou superior
- npm 9 ou superior

## Instalação e execução

```bash
npm install
npm run dev
```

O Vite mostra no terminal o endereço local da aplicação.

## Build de produção

```bash
npm run build
npm run preview
```

O build é gerado na pasta `dist/`.

## Funcionalidades

- Página responsiva com cabeçalho, destaque promocional, categorias, prateleiras de produtos, parceiros, marcas e rodapé.
- Catálogo baseado no JSON oficial da Econverse, com estados de carregamento e erro.
- Cards de produto com imagem, descrição e preço formatado em reais.
- Modal com informações do produto selecionado, ajuste de quantidade, fechamento pelo botão, pelo backdrop ou por `Escape`.
- Contagem local de itens no carrinho ao usar o botão de compra. Não há integração de checkout.
- Formulário visual de newsletter com validação no navegador; não envia dados para um serviço externo.
- Navegação por teclado, rótulos acessíveis, textos alternativos, foco visível e metadados básicos para SEO.

## Organização

```text
src/
  components/   Componentes de cabeçalho, seções, cards e modal
  data/         Carregamento, validação e formatação dos produtos
  styles/       Estilos globais e responsivos em SCSS
  types/        Tipos TypeScript do catálogo
public/
  assets/       Imagem oficial de produto
  data/         Cópia do JSON oficial usado pela aplicação
```

## Decisões e limitações

- O endpoint público de produtos não envia cabeçalho CORS. Para manter o site funcional também em hospedagem estática, o JSON recebido da Econverse foi salvo em `public/data/products.json`; a validação de resposta e os estados de erro permanecem no carregador. Para atualizar o catálogo, substitua esse arquivo pelo JSON oficial mais recente.
- As imagens de produto usam o asset oficial baixado do campo `photo` do JSON. O catálogo não fornece preço promocional, parcelas ou frete, então esses valores não são inventados.
- O Figma não ficou acessível pelo ambiente. O layout foi montado a partir das capturas `Home.png` e `Popup.png` fornecidas; banners decorativos são aproximações em CSS, pois as imagens originais desses banners não foram fornecidas como assets separados.
- Carrinho, newsletter e busca são demonstrações visuais locais, sem integração com serviços externos.
