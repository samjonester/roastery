routes.inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
    .state('coffee-shop', {
      url: '/:id',
      template: require('./coffee-shop.html'),
      controller: 'CoffeeShopCtrl',
      controllerAs: 'coffeeShop'
    })
}
