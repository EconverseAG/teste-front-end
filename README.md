# 🛒 Teste Front-End - Econverse

Este projeto foi desenvolvido como parte do **processo seletivo da Econverse**.  
A aplicação foi construída em **React com TypeScript** e **Sass**, com foco em componentização, organização do código, boas práticas de SEO e experiência do usuário.

---

## 🚀 Tecnologias utilizadas
- ⚛️ **React + TypeScript**  
- 🎨 **Sass** (estilos modulares por componente)  
- 🔍 **Boas práticas de SEO**  
- 📦 **Splide.js** para carrosséis  
- 🌐 **Proxy para consumo de API** (resolvendo CORS em ambiente local)  

---

## 📂 Estrutura do projeto

O projeto foi totalmente **componentizado**, cada parte da interface possui seu próprio diretório e arquivo de estilos.  
Nos estilos, utilizei **variáveis** para padronizar cores e breakpoints, além de **mixins** para evitar repetição de código, como por exemplo:

- `@mixin container` → garante que todos os containers sigam o mesmo padrão de largura máxima, alinhamento e espaçamento.  
- `@mixin button` → centraliza estilos comuns de botões, permitindo criar variantes (`btn--primary`, `btn--secondary`) de forma consistente.  

Isso torna os estilos **mais reutilizáveis, fáceis de manter e escaláveis**.

---

## 🎯 Funcionalidades e Destaques
- ✅ **Header fixo (HeaderFIXED):** facilita navegação sem necessidade de rolar até o topo.  
- ✅ **Componentização:** cada componente isolado, com seu próprio Sass.  
- ✅ **Boas práticas de SEO:** HTML semântico, atributos alternativos em imagens e estrutura clara.  
- ✅ **Carrosséis responsivos** implementados com Splide.js.  
- ✅ **Consumo de API via proxy**, garantindo funcionamento local mesmo com restrições de CORS.  

---

## ⚙️ Como rodar o projeto localmente

1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/teste-front-end.git

2. Entre na pasta do projeto:
   ```bash
   cd teste-front-end
   
3. Instale as dependências:
   ```bash
   npm install
   
4. Execute o projeto:
   ```bash
   npm run dev

## 📝 Conclusão

Este projeto foi uma ótima oportunidade para aplicar conhecimentos em **React, TypeScript e Sass**, reforçando boas práticas de **componentização, organização de código e SEO**.  
O código está estruturado de forma clara e escalável, servindo como base para projetos futuros.
