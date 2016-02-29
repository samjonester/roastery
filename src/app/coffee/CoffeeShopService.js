import _ from 'lodash'

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
        id: 'phoenix',
        name: 'Phoenix'
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

