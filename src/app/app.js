import angular from 'angular';
import ngMaterial from 'angular-material'
import 'angular-material/angular-material.css'

import './app.css'
import CoffeeShopCtrl from './CoffeeShopCtrl'

angular.module('app', [ngMaterial])
  .controller('CoffeeShopCtrl', CoffeeShopCtrl)
