# Roastery

## Goal
This application is a simple Proof of Concept using the google maps directives within AngularJS.

View the solution at http://roastery.herokuapp.com/

Travis Status: [![Build Status](https://travis-ci.org/samlawrencejones/roastery.svg?branch=master)](https://travis-ci.org/samlawrencejones/roastery)

## Usage
### Dependencies
`node` and `npm` (Use NVM https://github.com/creationix/nvm)
#### Clone
`git clone git@github.com:samlawrencejones/roastery.git`
### Install node modules
`npm install`
### Run Development Server
`npm run devServer`
### Enjoy
Navigate to `http://localhost:8080/`

### Build and Deploy production
`npm run build`
`npm start`


## Notes / Limitations
- I did not include a webpack production build / run script for npm.
- Angular MD was used for rough styling: https://material.angularjs.org/latest/
- Angular Google Maps was used for integrating with Google Maps: http://angular-ui.github.io/angular-google-maps/#!/
- Angular UI Router was used to modularize code within the POC: https://github.com/angular-ui/ui-router
- Webpack dev starter was provided by https://github.com/preboot/angular-webpack
