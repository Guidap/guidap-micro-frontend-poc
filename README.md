[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)

# POC: Microfrontend Architecture & monorepository

Proof of concept for micro-frontend architecture using [single-spa.js](https://single-spa.js.org/).

This project uses [Lerna](https://github.com/lerna/lerna) to manage the monorepository.


## Requirements
You must have yarn `^1.22` installed in your local environment.

## Getting started

1. Fork & clone this repository
2. Go into the project folder
3. Type `yarn && yarn bootstrap`
4. Run `yarn start:microfrontend` to start the microfrontend architecture in dev mode (with hot reload)

## Docs

### Projects

* wrapper: the micro-frontend wrapper which glue the different frontend together
* guidap-login
* guidap-404
* guidap-home
* guidap-nav : navigation links used to navigate between micro-frontend
