import _ from 'lodash'

export default class CoffeeShopService {
  constructor($q) {
    this.$q = $q
    this.shops =  [
      {
        id: 'pour',
        name: 'Pour Cleveland',
        logo: 'pour-logo.png',
        atmosphere: 'Modern Industrial',
        coffee: 'Sourced from the best roasters around the globe.',
        website: 'http://www.pourcleveland.com/',
        locations: [
          {
            id: 'downtown',
            coords: {latitude: 41.499774, longitude: -81.689105},
            title: 'Downtown',
            address: '530 Euclid Ave, Cleveland, OH 44115'
          }
        ]
      },
      {
        id: 'rising-star',
        name: 'Rising Star Coffee Roasters',
        logo: 'rising-star-logo.jpg',
        atmosphere: 'Bohemian',
        coffee: 'Roasted in house.',
        website: 'http://risingstarcoffee.com/',
        locations: [
          {
            id: 'downtown',
            coords: {latitude: 41.50043, longitude: -81.69056},
            title: 'Downtown',
            address: '412 Superior Ave, Cleveland, OH 44114'
          },
          {
            id: 'hingetown',
            coords: {latitude: 41.48923, longitude: -81.71025},
            title: 'Hingetown',
            address: '1455 W 29th St, Cleveland, OH 44113'
          },
          {
            id: 'little-italy',
            coords: {latitude: 41.50386, longitude: -81.60035},
            title: 'Little Italy',
            address: '2187 Murray Hill Rd, Cleveland, OH 44106'
          },
          {
            id: 'roastery',
            coords: {latitude: 41.47095, longitude: -81.70942},
            title: 'Roastery',
            address: '3617 Walton Ave, Cleveland, OH 44113'
          }
        ]
      },
      {
        id: 'phoenix',
        name: 'Phoenix Coffee',
        logo: 'phoenix-logo.png',
        atmosphere: 'Eclectic Comfortable',
        coffee: 'Roasted in house.',
        website: 'http://phoenixcoffee.com/',
        locations: [
          {
            id: 'downtown',
            coords: {latitude: 41.50131, longitude: -81.68837},
            title: 'Downtown',
            address: '1700 E 9th St, Cleveland, OH 44114'
          },
          {
            id: 'ohio-city',
            coords: {latitude: 41.48433, longitude: -81.70885},
            title: 'Ohio City',
            address: '3000 Bridge Ave, Cleveland, OH 44113'
          },
          {
            id: 'coventry',
            coords: {latitude: 41.51076, longitude: -81.57977},
            title: 'Coventry',
            address: '1793 Coventry Rd, Cleveland Heights, OH 44118'
          },
          {
            id: 'lee-road',
            coords: {latitude: 41.49741, longitude: -81.56493},
            title: 'Lee Rd',
            address: '2287 Lee Rd, Cleveland Heights, OH 44118'
          },
          {
            id: 'roastery',
            coords: {latitude: 41.50744, longitude: -81.68245},
            title: 'Roastery',
            address: '1728 St. Clair Ave, Cleveland, OH 44114'
          }

        ]
      }
    ]
  }

  // Promise to simulate web request
  getShops() {
    return this.$q.when(this.shops)
  }

  // Promise to simulate web request
  getShop(id) {
    return this.$q.when(_.find(this.shops, o => o.id===id))
  }
}

