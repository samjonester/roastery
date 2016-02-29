import _ from 'lodash'

export default class CoffeeShopService {
  constructor() {
    this.shops =  [
      {
        id: 'pour',
        name: 'Pour Cleveland',
        logo: 'pour-logo.png',
        atmosphere: 'Modern Industrial',
        coffee: 'Sourced from the best roasters around the globe.'
      },
      {
        id: 'rising-star',
        name: 'Rising Star Coffee Roasters',
        logo: 'rising-star-logo.jpg',
        atmosphere: 'Bohemian',
        coffee: 'Roasted in house'
      },
      {
        id: 'phoenix',
        name: 'Phoenix Coffee',
        logo: 'phoenix-logo.png',
        atmosphere: 'Eclectic Comfortable',
        coffee: 'Roasted in house'
      }
    ]
  }

  // Promise to simulate web request
  getShops() {
    var me = this;
    return new Promise(function(resolve, reject) {
      resolve(me.shops);
    })
  }

  // Promise to simulate web request
  getShop(id) {
    var me = this;
    return new Promise(function(resolve, reject) {
      let shop = _.find(me.shops, o => o.id===id)
      resolve(shop)
    })
  }
}

