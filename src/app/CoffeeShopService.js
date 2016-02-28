export default class CoffeeShopService {
  constructor() {
    this.shops =  [
      {
        id: 'pour',
        name: 'Pour'
      },
      {
        id: 'rising-star',
        name: 'Rising Star'
      },
      {
        id: 'pheonix',
        name: 'Pheonix'
      }
    ]
  }

  // Promise to resemble web request
  getShops() {
    var me = this;
    return new Promise(function(resolve, reject) {
      resolve(me.shops);
    });
  }
}

