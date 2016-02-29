import angular from 'angular'
import ngMaterial from 'angular-material'
import ngRouter from 'angular-ui-router'

// Google Maps
import 'angular-simple-logger'
import 'angular-google-maps'
import 'lodash'

import './coffee.css'
import routing from './coffee.routes'
import CoffeeShopCtrl from './CoffeeShopCtrl'
import CoffeeShopService from './CoffeeShopService'

export default angular.module('app.coffee', [ngRouter, ngMaterial, 'nemLogging', 'uiGmapgoogle-maps'])
  .config(routing)
  .controller('CoffeeShopCtrl', CoffeeShopCtrl)
  .service('CoffeeShopService', CoffeeShopService)
  .name
