import CoffeeShopService from './CoffeeShopService'

export default class CoffeeShopCtrl {
  constructor(args = {}) {
    this.coffeeShopService = args.coffeeShotService || new CoffeeShopService()

    this.coffeeShopService.getShops().then((shops) => {
      this.shops = shops
    });
  }
}
