# Teste Front-end

Aplicação de vitrine de produtos desenvolvida com React, TypeScript e Vite.

## Layout

O layout original do projeto foi planejado para uma tela com largura de `1440px`, que é sua resolução de referência.

## Pré-requisitos

- Git
- Node.js `20.19+` ou `22.12+`
- npm (instalado junto com o Node.js)

Confira as versões instaladas:

```
node --version
npm --version
```

## Clonar e instalar

Clone o repositório usando HTTPS:

```
git clone https://github.com/Wilian-Pereira-W/teste-front-end.git
cd teste-front-end
```

Ou, se sua chave SSH estiver configurada no GitHub, use SSH:

```
git clone git@github.com:Wilian-Pereira-W/teste-front-end.git
cd teste-front-end
```

Instale as dependências usando o arquivo de lock:

```
npm ci
```

## Configurar a API de produtos

Crie o arquivo `.env` a partir do exemplo:

```
cp .env.example .env
```

O arquivo `.env.example` já contém o endpoint utilizado pelo projeto. A configuração deve ser:

```
VITE_PRODUCTS_API_URL=/api/teste-front-end/junior/tecnologia/lista-produtos/produtos.json
```

O prefixo `/api` é configurado em `vite.config.ts` para encaminhar as requisições ao domínio [https://app.econverse.com.br](https://app.econverse.com.br/), permitindo contornar a restrição de CORS durante o desenvolvimento local.

O endpoint deve retornar um JSON neste formato:

```
{
  "success": true,
  "products": [
    {
      "productName": "Nome do produto",
      "descriptionShort": "Descrição breve",
      "photo": "https://endereco-da-imagem/imagem.jpg",
      "price": 1999
    }
  ]
}
```

O arquivo `.env` não é versionado e deve permanecer apenas na sua máquina.

**Observação:** o proxy do Vite funciona apenas durante o desenvolvimento local. Para utilizar a aplicação em produção, será necessário configurar um proxy equivalente no servidor de hospedagem ou disponibilizar a API por meio de um backend.

## Executar em desenvolvimento

```
npm run dev
```

Abra no navegador o endereço mostrado pelo Vite no terminal (por padrão, `http://localhost:5173`).

## Verificações e build

Para executar o linter:

```
npm run lint
```

Para executar os testes:

```
npm test
```
