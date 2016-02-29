export default class CoffeeShopCtrl {
  constructor(CoffeeShopService, $stateParams) {
    CoffeeShopService.getShop($stateParams.id).then(shop => this.shop = shop)
    // 41.498249, -81.688216, downtown cleveland
    this.map = { center: { latitude: 41.4998912, longitude: -81.657942 }, zoom: 12 };
  }
}
