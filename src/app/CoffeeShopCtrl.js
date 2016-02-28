import CoffeeShopService from './CoffeeShopService'

export default class CoffeeShopCtrl {
  constructor(args = {}) {
    this.coffeeShopService = args.coffeeShotService || new CoffeeShopService()

    this.coffeeShopService.getShops().then((shops) => {
      this.shops = shops
    });
  }

  view(id) {
    angular.element(document.getElementById('coffeesop-info')).html(id)
  }
}
