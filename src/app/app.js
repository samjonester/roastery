import angular from 'angular';
import ngMaterial from 'angular-material'
import ngRouter from 'angular-ui-router'
import 'angular-material/angular-material.css'

import './app.css'
import routing from './app.config'

import CoffeeShopCtrl from './CoffeeShopCtrl'
import home from './home'

angular.module('app', [ngMaterial, ngRouter, home])
  .config(routing)
  .controller('CoffeeShopCtrl', CoffeeShopCtrl)
