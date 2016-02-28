import angular from 'angular'
import ngRouter from 'angular-ui-router'

import routing from './home.routes'

export default angular.module('app.home', [ngRouter])
  .config(routing)
  .name
