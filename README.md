# React + TypeScript + Vite

Teste Econverse: Vaga Desenvolvedor Front-End

Este projeto é uma vitrine de produtos desenvolvida com React, TypeScript e Vite. Ele consome dados de produtos em formato JSON e exibe as informações de forma interativa. Ao clicar em um produto, um modal é aberto exibindo as principais informações do produto, conforme o layout fornecido.

Tecnologias Utilizadas

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

Após clonar o repositório, navegue até a pasta do projeto usando o comando:

cd nome-do-projeto

Agora, instale todas as dependências necessárias para rodar o projeto com o comando:

npm install

Compilar e Rodar o Projeto
Para rodar o projeto em modo de desenvolvimento, execute o seguinte comando:

npm run dev

O projeto estará disponível em http://localhost:3000.


Estrutura de Pastas
A estrutura de pastas foi organizada da seguinte forma:

src/: Contém o código-fonte do projeto.
components/: Contém os componentes reutilizáveis do projeto.
    Cada componente possui um arquivo index.tsx para a lógica e um arquivo style.scss para o estilo.

containers/: Contém as páginas ou seções do projeto.
    Cada container também possui um arquivo index.tsx e um arquivo style.scss para o estilo.

Essa organização visa tornar o código mais modular e fácil de manter, com componentes e containers separados de acordo com suas responsabilidades.

Como Usar
Ao acessar a página, você verá uma lista de produtos exibidos na vitrine.
Clique em um produto para abrir um modal com as principais informações extraídas do arquivo JSON.

Desenvolvimento
O layout foi desenvolvido conforme o design fornecido no Figma. 
