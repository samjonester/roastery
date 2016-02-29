import angular from 'angular';
import ngMaterial from 'angular-material'
import ngRouter from 'angular-ui-router'
import 'angular-material/angular-material.css'

import './app.css'
import routing from './app.config'

import ShopListCtrl from './coffee/ShopListCtrl'
import CoffeeShopService from './coffee/CoffeeShopService'

import home from './home'
import coffee from './coffee'

angular.module('app', [ngMaterial, ngRouter, home, coffee])
  .config(routing)
  .controller('ShopListCtrl', ShopListCtrl)
  .service('CoffeeShopService', CoffeeShopService)
