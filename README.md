# React basic setup

The project has the basic folder structure for react, ES6 syntax, webpack v2, react router v4 and use SASS for styling.

## Getting Started

1. Clone repo
2. npm install
3. npm start
4. npm run build for build

### How to create setup from start

1. install node for windows https://nodejs.org/en/
2. npm init
3. "npm install" for install packages
  Some of packages use:
    1. react, react-dom for react
    2. babel pakages
        babel-preset-env: Use via package.json and use to set env
        babel-cli: Babel comes with a built-in CLI which can be used to compile files from the command line.
    3. Create ".babelrc" file to spacify presets https://babeljs.io/docs/usage/babelrc/
    4. css-loader, sass-loader, style-loader and node-sass for css and sass compile
    5. babel-register By default babel-node and babel-register will save to a json cache in your temporary directory.
    This will heavily improve with the startup and compilation of your files. There are however scenarios where you want to change this behaviour and there are environment variables exposed to allow you to do this.
    6. react-router-dom version 4 for routing
    7. webpack for build and webpack-dev-server for local server
    8. html-webpack-plugin use for html file, copy-webpack-plugin use for copy (fonts, images) static files as it is to build folder
    9. extract-text-webpack-plugin for build fetch css and sass styles from js file and create css file then import this on html. Genraly for local development we do not saprate css from js file so we do not use this package for dev env
    (https://github.com/webpack-contrib/extract-text-webpack-plugin)
4. Create webpack config file for buid and local serves
    default plugins spacify new webpack.ProvidePlugin({ React: 'react',}),
5. npm start start server on 3000 port spacify in webpack.dev.config file
6. npm run build for creating build
