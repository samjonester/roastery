import angular from 'angular'
import ngMaterial from 'angular-material'
import ngRouter from 'angular-ui-router'

import routing from './coffee.routes'
import CoffeeShopCtrl from './CoffeeShopCtrl'
import CoffeeShopService from './CoffeeShopService'

export default angular.module('app.coffee', [ngRouter, ngMaterial])
  .config(routing)
  .controller('CoffeeShopCtrl', CoffeeShopCtrl)
  .service('CoffeeShopService', CoffeeShopService)
  .name
