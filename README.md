# Monorepo Playground

This is a playground application demonstrating advanced Metro and Babel configuration to test modules of monorepo-structured projects. This app is built on top of <a href="https://github.com/akveo/react-native-ui-kitten" target="_blank">UI Kitten</a> as it has similar structure.

**<a href="https://gist.github.com/artyorsh/6be25e4724173843d4baef1b284b91bc" target="_blank">See a Gist</a>**

## Why

- `npm link` not works for React Native projects
- I've spent about 2 hours to deal with it, so I decided to share this project to help you with it.

## Run

- Clone this repo `git clone https://github.com/artyorsh/react-native-monorepo-playground`
- Clone UI Kitten `git clone https://github.com/akveo/react-native-ui-kitten`
- Go to UI Kitten and install it's dependencies with `npm i`
- Go to this project and install it's dependencies with `npm i`
- `npm start`
- `react-native run-ios` or `react-native run-android`

## Structure

- [structure.json][link:structure] - UI Kitten structure (actual [this revision][link:ui-kitten-revision])
- [babel.config.js][link:babel-config] - Babel configuration example
- [metro.config.js][link:babel-config] - Metro configuration example
- [babel.resolver.js][link:babel-resolver] - Babel resolver utility
- [metro.resolver.js][link:metro-resolver] - Metro resolver utility

[link:babel-config]: ./babel.config.js
[link:metro-config]: ./metro.config.js
[link:babel-resolver]: ./babel.resolver.js
[link:metro-resolver]: ./metro.resolver.js
[link:structure]: ./structure.json
[link:metro-babel-gist]: https://gist.github.com/artyorsh/6be25e4724173843d4baef1b284b91bc
[link:ui-kitten-revision]: https://github.com/akveo/react-native-ui-kitten/tree/5b7cdeb7f438cfc82e63246d6beda4b85f031fe2
[link:ui-kitten]: https://github.com/akveo/react-native-ui-kitten

<hr>

## Useful links:
- [Configuring metro.config.js](https://facebook.github.io/metro/docs/en/configuration)
- [Configuring babel.config.js](https://babeljs.io/docs/en/configuration#babelconfigjs)
