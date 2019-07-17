# Monorepo Playground

This is a playground application demonstrating advanced [Metro and Babel configuration][link:metro-babel-gist] to test modules of monorepo-structured projects. This app is built on top of <a href="https://github.com/akveo/react-native-ui-kitten" target="_blank">UI Kitten</a> as it has similar structure.

## Run

- Clone <a href="https://github.com/akveo/react-native-ui-kitten" target="_blank">UI Kitten</a>
- Clone this repo to the same dir
- Go to this project
- `npm i && npm start`

## Structure

- [structure.json][link:babel-config] - UI Kitten structure
- [babel.config.js][link:babel-config] - Babel configuration example
- [metro.config.js][link:babel-config] - Metro configuration example

[link:babel-config]: ./babel.config.js
[link:metro-config]: ./metro.config.js
[link:structure]: ./structure.json
[link:metro-babel-gist]: https://gist.github.com/artyorsh/6be25e4724173843d4baef1b284b91bc
[link:ui-kitten]: https://github.com/akveo/react-native-ui-kitten
