# Roastery
[![Build Status](https://travis-ci.org/samjonester/roastery.svg?branch=master)](https://travis-ci.org/samjonester/roastery)

## Goal
This application is a simple Proof of Concept using the google maps directives within AngularJS.

View the solution at http://roastery.herokuapp.com/

## Usage
### Dependencies
`node` and `npm` (Use NVM https://github.com/creationix/nvm)
#### Clone
``` sh
git clone git@github.com:samlawrencejones/roastery.git
```
### Install node modules
``` sh
npm install
```
### Run Development Server
``` sh
npm run server
```
### Enjoy
Navigate to `http://localhost:8080/`

### Build and Deploy production
``` sh
npm run build
npm start
```

## Notes
- Angular MD was used for rough styling: https://material.angularjs.org/latest/
- Angular Google Maps was used for integrating with Google Maps: http://angular-ui.github.io/angular-google-maps/#!/
- Angular UI Router was used to modularize code within the POC: https://github.com/angular-ui/ui-router
- Webpack dev starter was provided by https://github.com/preboot/angular-webpack
