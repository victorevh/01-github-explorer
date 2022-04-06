<h1>Instalando o React na aplicação</h1>

* yarn init -y
* yarn add react
* yarn add react-dom

<h1> Estrutura de pastas aplicação </h1>

* `src`: onde fica todo o código JS criado
* `public`: onde fica os assets, itens públicos, favicons, arquivos robots (qualquer arquivo que precise ser acessado externamente)

<h1>Configurar a biblioteca babel</h1>

<p>O Babel converte o código para que os navegadores mais mordenos reconheçam o código</p>

<a href="https://www.babeljs.io">Site Babel</a>

<h3>Instalando o Babel</h3>

* yarn add @babel/core @babel/cli @babel/preset-env -D
* yarn add @babel/preset-react -D

* `@babel/cli`: yarn babel -h consigo ver as funções disponiveis pelo babel.
* `@babel/core`: basicamente 99% das funcionalidades do babel estão ai.
* `@babel/preset-env`: vai entender qual o ambiente e o que o babel precisa converter para o código.
* `@babel/preset-react`: permite reconhecer os arquivos react

* yarn babel src/index.jsx --out-file dist/bundle.js pega os arquivos de index.js e converte para a dist em bundle.js

<h1>Configurando o webpack</h1>

<a href="https://webpack.js.org">Site WebPack</a>

* yarn add webpack webpack-cli -D

* yarn add babel-loader -D
* `@babel-loader`: é a integração entre o webpacker e o babel loader

* yarn webpack 

* yarn add html-webpack-plugin -D

* yarn add webpack-dev-server -D (Automatiza as alterações do arquivo).

* yarn webpack serve (executa a aplicação em localhost)