export default class CoffeeShopCtrl {
  constructor(CoffeeShopService, $stateParams) {
    CoffeeShopService.getShop($stateParams.id).then(shop => this.shop = shop)
  }
}
