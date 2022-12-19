# Bem vindo ao Github Explorer

## Proposta

É um projeto que tem como finalidade a busca de informações sobre usuários cadastrados no Github, para poder ver seus detalhes.

## Instalando o React na aplicação

**Você deve ter o [NodeJS](https://nodejs.org/) (>= 10.13.0) e [Yarn](https://yarnpkg.com/) previamente instalados, então:**

* yarn init -y
* yarn add react
* yarn add react-dom

## Estrutura de pastas aplicação

* `src`: onde fica todo o código JS criado
* `public`: onde fica os assets, itens públicos, favicons, arquivos robots (qualquer arquivo que precise ser acessado externamente)

## Configurar a biblioteca babel

O Babel converte o código para que os navegadores mais mordenos reconheçam o código, e você consegue baixar através do [site oficial do Babel](https://www.babeljs.io).

### Instalando o Babel

* yarn add @babel/core @babel/cli @babel/preset-env -D
* yarn add @babel/preset-react -D

* `@babel/cli`: yarn babel -h exibe as funções disponiveis pelo babel;
* `@babel/core`: armazena cerca de 99% das funcionalidades do babel;
* `@babel/preset-env`: exibe qual o ambiente e o que o babel precisa converter para o código;
* `@babel/preset-react`: permite reconhecer os arquivos React;
* yarn babel src/index.jsx --out-file dist/bundle.js  converte os arquivos de index.js para a dist em bundle.js.

## Configurando o webpack

Você consegue baixar através do [site oficial do WebPack](https://webpack.js.org).

* yarn add webpack webpack-cli -D
* yarn add babel-loader -D
* `@babel-loader` (integração entre o webpacker e o babel loader)
* yarn webpack 
* yarn add html-webpack-plugin -D
* yarn add webpack-dev-server -D (automatiza as alterações do arquivo)
* yarn webpack serve (executa a aplicação em localhost)

## Configurando Sourcemap

* Sourcemap serve para que possamos entender possiveis erros mesmo com a conversão do babel;
* Adicionar devtool: 'eval-source-map', no module.exports in webpackconfig.

## Diferenciando ambiente de produção de homologação 

* no linux você pode utilizar NODE_ENV=production yarn webpack para definir as variaveis ambiente;
* no windows yarn add cross-env -D;
* yarn dev para executar aplicação no ambiente de desenvolvimento;
* yarn build para executar o projeto no ambiente de produção.

## Importando arquivos CSS

* `yarn add style-loader css-loader -D`

### Utilizando Sass CSS

* `yarn add sass-loader -D`
* `yarn add node-sass -D`

## React Fast Refresh

Quando rodamos nossa aplicação com o webpack dev server toda vez que atualizamos o código os estados da aplicação são resetados, como por exemplo um carrinho de compras da aplicação é zerado após realizar alguma alteração no código, para evitar isso utilizaremos o React Fast Refresh.

* yarn add -D @pmmmwh/react-refresh-webpack-plugin react-refresh

## Instalando TypeScript

* `yarn add typescript -D`
* `yarn tsc --init`
* `yarn add @babel/preset-typescript -D `
* `yarn add @types/react-dom -D`
* `yarn add @types/react -D`
