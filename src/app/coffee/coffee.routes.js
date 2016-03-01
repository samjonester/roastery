routes.inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
    .state('coffeeShop', {
      url: '/:id',
      template: require('./coffee-shop.html'),
      controller: 'CoffeeShopCtrl',
      controllerAs: 'coffeeShop'
    })
}
