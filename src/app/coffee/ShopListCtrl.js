export default class ShopListCtrl {
  constructor(CoffeeShopService) {
    CoffeeShopService.getShops().then(shops => this.shops = shops)
  }
}
