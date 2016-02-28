export default class CoffeeShopCtrl {
  constructor() {
    this.shops = [
      {
        'id': 'pour',
        'name': 'Pour'
      },
      {
        'id': 'rising-star',
        'name': 'Rising Star'
      }
    ]
  }

  view(id) {
    angular.element(document.getElementById('coffeesop-info')).html(id)
  }
}
