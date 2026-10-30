# Econverse
<img width="849" height="654" alt="image" src="https://github.com/user-attachments/assets/3def3a5c-f0d9-457b-89bd-6976eec3ae09" />


Implementação de uma vitrine de e-commerce desenvolvida para um teste técnico de front-end. O projeto parte de um layout disponibilizado no Figma, consome a API fornecida no desafio e transforma essa referência em uma página responsiva, navegável e preparada para lidar com dados externos.

O objetivo não foi apenas reproduzir uma imagem estática. A entrega inclui validação do contrato da API, estados de carregamento e erro, interações, testes automatizados, semântica HTML, acessibilidade e uma organização que permite manter o código sem concentrar todas as responsabilidades em um único componente.




https://github.com/user-attachments/assets/95c2e57c-1d9d-48b2-baa4-43300c34d568











## Tecnologias

- Next.js 16 com App Router;
- React 19 e TypeScript;
- SCSS Modules e Sass;
- Zod para validar dados externos em tempo de execução;
- Vitest para testes automatizados;
- `next/image` e `next/font` para imagens e fontes;
- Vercel Analytics somente em produção.

## Como executar o projeto

### Pré-requisitos

- Node.js em uma versão compatível com o Next.js 16;
- pnpm.

O projeto registra no `package.json` a versão `pnpm@12.3.4`.

### Instalação

```bash
pnpm install
```

### Ambiente de desenvolvimento

```bash
pnpm dev
```

Depois, acesse `http://localhost:3000`.

### Build de produção

```bash
pnpm build
pnpm start
```

### Comandos disponíveis

| Comando | Finalidade |
| --- | --- |
| `pnpm dev` | Inicia o servidor de desenvolvimento do Next.js. |
| `pnpm build` | Gera a aplicação para produção. |
| `pnpm start` | Executa o build de produção. |
| `pnpm test` | Executa uma vez a suíte do Vitest. |
| `pnpm test:watch` | Mantém o Vitest observando alterações. |

## Testes

Os testes cobrem as partes em que uma regressão teria impacto direto na entrega: o contrato recebido da API, o tratamento de falhas, a transformação dos dados e a distribuição dos produtos entre as vitrines.

Para executar a suíte local:

```bash
pnpm test
```

Durante o desenvolvimento, também é possível usar o modo de observação:

```bash
pnpm test:watch
```

A suíte está dividida em quatro arquivos:

- `product.schema.test.ts` verifica o contrato do Zod e rejeita campos ausentes ou com tipos incorretos;
- `products.test.ts` simula o `fetch` e cobre sucesso, lista vazia, falha de rede, erro HTTP, JSON inválido e resposta incompatível com o contrato;
- `create-product-showcases.test.ts` protege a regra de distribuição dos produtos, inclusive o caso de dez itens ocupando 12 posições;
- `products.live.test.ts` verifica opcionalmente a API real.

O teste da API real não roda por padrão porque depende de rede e de um serviço externo. No PowerShell, ele pode ser habilitado assim:

```powershell
$env:RUN_LIVE_API_TESTS = "true"
pnpm test
```

Para remover a variável da sessão atual:

```powershell
Remove-Item Env:RUN_LIVE_API_TESTS
```

Essa separação mantém os testes comuns rápidos e determinísticos, mas ainda oferece uma forma de conferir se o contrato externo continua válido.

## Arquitetura

O código está organizado por responsabilidade e por domínio. Elementos globais ficam separados das regras relacionadas aos produtos e das seções institucionais da loja.

```text
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── loading.tsx
│   ├── error.tsx
│   └── globals.scss
├── components/
│   └── layout/
│       ├── site-header/
│       └── site-footer/
├── features/
│   ├── products/
│   │   ├── components/
│   │   ├── lib/
│   │   └── types/
│   └── store/
│       └── components/
├── lib/
│   └── store-content.ts
└── styles/
    └── _mixins.scss
```

O fluxo principal dos produtos é intencionalmente simples:

```text
API externa
    ↓
validação com Zod
    ↓
normalização para o modelo interno
    ↓
distribuição entre as vitrines
    ↓
cards e modal de produto
```

### Separação de responsabilidades

`src/app` concentra a composição das rotas, os metadados e os estados globais de carregamento e erro. O arquivo da página solicita os produtos no servidor e entrega dados já preparados para os componentes.

`features/products` reúne tudo o que pertence ao domínio de produtos: contrato da API, tipos internos, busca dos dados, formatação, regra das vitrines, cards e modal. Isso mantém a regra de negócio próxima dos componentes que a utilizam, sem misturá-la ao cabeçalho, ao rodapé ou às seções promocionais.

`features/store` contém as seções da experiência de loja, como categorias, banner, marcas, promoções e newsletter. Já `components/layout` guarda as estruturas compartilhadas da página.

Essa divisão torna cada arquivo menor, facilita localizar uma regra e permite testar as funções de dados sem renderizar a interface inteira. Também evita que uma mudança no contrato da API se espalhe por todos os componentes.

## Por que Next.js em vez de Vite puro

Vite seria suficiente para montar uma SPA e ofereceria uma experiência de desenvolvimento rápida. Neste projeto, porém, o Next.js trouxe recursos alinhados ao tipo de página entregue.

A busca dos produtos acontece no servidor. Com isso, a página não precisa aguardar um `useEffect` no navegador para iniciar a requisição e pode entregar conteúdo útil mais cedo. O `fetch` também utiliza `revalidate: 3600`, permitindo reaproveitar os dados por uma hora antes de solicitar uma nova versão da API.

O App Router oferece uma estrutura direta para os estados de rota. `loading.tsx` comunica o carregamento e `error.tsx` apresenta uma recuperação quando a consulta falha. O projeto também aproveita a API de metadados, `next/image` para as imagens e `next/font` para carregar as famílias tipográficas com integração ao framework.

Esses recursos ajudam na entrega inicial, no SEO e na experiência percebida pelo usuário. Em uma aplicação totalmente interna, sem necessidade de indexação e com todos os dados carregados apenas no cliente, Vite continuaria sendo uma escolha válida. A decisão por Next.js não significa que uma ferramenta seja sempre superior à outra; ela atende melhor aos requisitos desta vitrine.

## API, Zod e modelo interno

Dados vindos de uma API não são confiáveis apenas porque possuem uma tipagem TypeScript. Os tipos deixam de existir depois da compilação e não impedem que o servidor envie um preço como texto, omita um campo ou retorne uma URL inválida.

Por isso, a resposta entra na aplicação como `unknown` e passa por um schema Zod. O contrato exige:

- `success` com valor literal `true`;
- uma coleção `products`;
- nome e descrição como texto;
- foto como URL HTTP válida;
- preço numérico.

Somente depois dessa validação os dados são convertidos para o modelo `Product` usado pela interface. A transformação cria um identificador, adapta os nomes dos campos, define o parcelamento e calcula a informação de frete grátis para preços a partir de R$ 200.

A camada de acesso também diferencia falhas de rede, respostas HTTP sem sucesso, JSON inválido e estrutura incompatível. Isso produz erros com contexto e impede que dados inconsistentes cheguem silenciosamente aos cards.

## A limitação de dez produtos para 12 posições

O layout possui três vitrines com quatro cards cada, portanto são necessárias 12 posições. A API fornecida, no entanto, entrega apenas dez produtos.

Deixar os dois últimos espaços vazios prejudicaria a composição da terceira vitrine. Inventar produtos também seria incorreto, pois criaria dados que não pertencem à fonte do desafio. A solução foi reutilizar a própria coleção de maneira circular e determinística:

```text
Vitrine 1: produtos 0, 1, 2 e 3
Vitrine 2: produtos 4, 5, 6 e 7
Vitrine 3: produtos 8, 9, 0 e 1
```

Assim, apenas os dois produtos necessários são repetidos, a ordem recebida é preservada e nenhuma informação artificial é adicionada. A função também trata uma resposta vazia e coleções com menos de quatro itens, evitando repetir o mesmo produto dentro de uma única vitrine pequena. Essa regra está isolada e coberta por testes.

## SCSS Modules e design tokens

Os estilos de cada componente ficam em seu próprio SCSS Module. Isso reduz conflitos de nomes, deixa claro quais regras pertencem a cada parte da página e permite alterar um componente com menor risco de afetar outro.

As propriedades recorrentes não foram copiadas em todos os arquivos. Cores, fontes, sombras, bordas e raios estão centralizados como custom properties em `globals.scss`. Entre elas estão os tons da marca, superfícies, cores de texto, estados de destaque e sombras dos cards.

Essa camada de tokens facilitou três pontos da implementação:

1. manter consistência entre componentes diferentes;
2. ajustar uma decisão visual em um único lugar;
3. traduzir os valores observados no Figma sem espalhar números sem contexto pelo projeto.

Os mixins SCSS concentram os breakpoints usados na responsividade. Os tokens determinam o que é exibido, enquanto cada módulo continua responsável por como seu componente se organiza.

## Semântica e acessibilidade

Acessibilidade não foi tratada como um acabamento opcional. Ela influencia a marcação, as interações e a forma como os estados da interface são comunicados.

Entre os pontos aplicados no projeto estão:

- idioma da página definido como `pt-BR`;
- uso de `header`, `main`, `nav`, `section`, `article`, listas e títulos em vez de contêineres genéricos para toda a estrutura;
- regiões de navegação identificadas com nomes acessíveis;
- formulários associados ao seu propósito, incluindo a busca com `role="search"`;
- botões usados para ações e links usados para navegação;
- nomes acessíveis em controles representados apenas por ícones;
- imagens de produtos com texto alternativo e imagens decorativas com `alt=""`;
- indicação de seleção com `aria-pressed` nas categorias e filtros;
- conteúdo visual sem significado retirado da árvore acessível com `aria-hidden`;
- feedback da newsletter e da quantidade com `aria-live`;
- carregamento marcado com `aria-busy` e `role="status"`;
- estado vazio comunicado como status;
- campos com `label`, tipo adequado, preenchimento obrigatório e `autocomplete`;
- checkbox obrigatório para o aceite dos termos;
- estados visíveis de foco por teclado;
- modal implementado com o elemento nativo `dialog`, título associado e fechamento pelo botão, pela tecla Escape ou pelo clique fora do conteúdo;
- limites e estado desabilitado nos controles de quantidade.

Essas decisões beneficiam pessoas que usam leitores de tela, navegação por teclado, ampliação ou outras tecnologias assistivas. Também tornam o HTML mais previsível, reduzem ambiguidades nas interações e melhoram a manutenção. Acessibilidade, neste caso, faz parte do funcionamento do produto.

## SEO

O layout raiz define título, descrição, idioma, ícones, Open Graph, Twitter Card, tema e nome da aplicação por meio da API de metadados do Next.js.

Além dos metadados, o conteúdo inicial é composto no servidor e a página utiliza uma hierarquia semântica de títulos e seções. Imagens relevantes possuem texto alternativo, enquanto elementos puramente visuais não adicionam ruído. O carregamento integrado das fontes evita depender de uma configuração manual dispersa.

SEO não depende de uma única tag. Conteúdo disponível na resposta inicial, títulos compreensíveis, semântica e acessibilidade ajudam mecanismos de busca e usuários a entender a página com mais clareza.

## Interações implementadas

A referência visual foi transformada em uma interface com comportamento. O projeto inclui:

- campo de busca textual no cabeçalho;
- seleção visual de categorias;
- filtros apresentados como controles selecionáveis nas vitrines;
- abertura do produto em modal a partir do card;
- fechamento do modal por diferentes formas de interação;
- seletor de quantidade com mínimo de 1 e máximo de 10;
- formulário de newsletter com campos de nome e e-mail;
- checkbox obrigatório para aceite dos termos;
- mensagem de confirmação depois do envio válido;
- estados de carregamento, erro e ausência de produtos.

A busca e a newsletter representam a interação de front-end prevista para a entrega. Elas não simulam uma integração de catálogo ou cadastro que não foi fornecida pelo desafio.

<img width="1434" height="486" alt="image" src="https://github.com/user-attachments/assets/0e614533-ee2c-4803-a2dc-3710db6f9836" />


## Figma, MCP e validação humana

Utilizei um MCP como apoio para acessar o design do Figma e trazer informações e recursos necessários à implementação. Isso reduziu o trabalho mecânico de consultar a referência, mas não transformou o processo em uma conversão automática de design para código.

Cada decisão continuou passando por validação humana. Foi necessário conferir hierarquia, proporções, conteúdo, comportamento, semântica, responsividade e coerência entre os componentes. O MCP ajudou a aproximar a implementação do arquivo original; a responsabilidade de avaliar se o resultado funcionava como produto continuou sendo minha.

<img width="2559" height="1079" alt="image" src="https://github.com/user-attachments/assets/98d1a373-9f0f-40a6-a47d-952dc1cfcaab" />


## UI/UX antes de pixel perfect

Busquei deixar a interface o mais próxima possível do Figma, mas fidelidade visual não pode ser o único critério de qualidade. Um frame representa uma dimensão e um conjunto controlado de dados. O produto real precisa responder a diferentes larguras, textos, imagens, estados da API e formas de navegação.

Uma reprodução rigidamente pixel perfect pode levar a medidas fixas, quebras artificiais de texto e posicionamentos que funcionam apenas na tela usada como referência. Isso costuma gerar problemas em celulares, perda de conteúdo, áreas de clique inadequadas e mais custo para manter pequenas variações visuais. Também pode consumir o tempo da entrega em diferenças que não melhoram a tarefa do usuário.

Neste projeto, o Figma orientou cores, tipografia, espaçamentos, composição e identidade. Quando a escolha era entre manter uma coordenada exata ou preservar leitura, adaptação e interação, a experiência teve prioridade. O compromisso foi entregar uma página próxima da referência, mas que continuasse funcional fora dela.

Isso não elimina o cuidado visual. Significa equilibrar fidelidade, responsividade, prazo e demanda. O resultado mais útil para o usuário é um produto estável, compreensível e utilizável, não uma captura de tela que deixa de funcionar ao mudar o conteúdo ou o dispositivo.

## O caso do ícone de pedidos

O SVG de pedidos recebido com os recursos do Figma não segue a mesma construção dos demais ícones. Ele é desenhado com `stroke`, enquanto outros arquivos possuem uma estrutura visual diferente.

Forçar o mesmo tratamento aplicado aos outros ícones alteraria espessuras e proporções do desenho. Por esse motivo, mantive o SVG como foi fornecido e ajustei apenas sua apresentação no layout. A pequena diferença não é um descuido: é uma decisão para preservar a integridade do recurso original em vez de deformá-lo para simular uma uniformidade que os próprios arquivos não possuem.

## Responsividade

A página foi estruturada para se adaptar ao conteúdo e à largura disponível. Grids e flex layouts reorganizam as vitrines, categorias, banners, newsletter e rodapé em diferentes breakpoints. Os cards passam por uma, duas e quatro colunas conforme existe espaço, sem depender de uma largura única de tela.

No mobile, o foco passa a ser legibilidade, ordem do conteúdo e áreas de interação adequadas. Em telas maiores, a composição aproveita o espaço para se aproximar do frame de desktop. Essa abordagem mantém o mesmo conteúdo e evita criar duas implementações independentes da página.

<img width="357" height="781" alt="image" src="https://github.com/user-attachments/assets/5ca1ec01-16ca-497e-b915-b7a3596762f5" />


## Manutenção e evolução

### Alterar a identidade visual

Mudanças globais de cor, tipografia, sombra ou raio devem começar pelos tokens de `src/app/globals.scss`. Regras específicas continuam no módulo SCSS do componente correspondente.

### Atualizar o contrato da API

Uma alteração no serviço deve ser refletida primeiro em `product.schema.ts`. Depois, a função de normalização em `products.ts` pode adaptar o novo contrato ao modelo interno sem obrigar os componentes visuais a conhecerem o formato externo. Os testes do schema e da busca devem acompanhar a mudança.

### Adicionar uma regra de produto

Regras reutilizáveis devem permanecer em `features/products/lib`. Quando forem puras, podem ser testadas sem navegador ou renderização de React.

### Criar uma seção da loja

Uma nova seção ligada à experiência comercial pertence a `features/store/components`. Elementos realmente compartilhados entre rotas podem ir para `components`.

### Alterar o número de vitrines ou cards

A quantidade atual está definida na função `createProductShowcases`. Qualquer mudança deve considerar listas menores que a capacidade total e atualizar os testes que documentam a distribuição esperada.

## Considerações finais

A entrega procura demonstrar mais do que a montagem do layout. A arquitetura separa obtenção, validação, transformação e apresentação dos dados. Os testes protegem os pontos de maior risco. A semântica e a acessibilidade fazem parte das decisões de implementação, e não de uma revisão posterior.

O Figma permaneceu como referência visual, com o apoio do MCP para tornar a consulta mais eficiente. Ainda assim, a prioridade foi entregar uma experiência funcional, responsiva e sustentável. Onde a fonte de dados ou os recursos visuais apresentaram limitações, as soluções foram tomadas de forma explícita e documentada, sem esconder o comportamento real da aplicação.
