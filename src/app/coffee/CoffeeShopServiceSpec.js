import CoffeeShopService from './CoffeeShopService'
import _ from 'lodash'

describe('Service: CoffeeShopService', ()=> {
  it('should have valid shops', inject(($q, $rootScope)=> {
    let subject = new CoffeeShopService($q)

    let shops;
    subject.getShops().then(actualShops => shops = actualShops)
    // resolve promise
    $rootScope.$apply()

    _.each(shops, shop => {
        expect(shop.id).not.toBeEmptyString()
        expect(shop.name).not.toBeEmptyString()
        expect(shop.logo).not.toBeEmptyString()
        expect(shop.coffee).not.toBeEmptyString()
        expect(shop.website).not.toBeEmptyString()

        expect(shop.locations).not.toBeEmptyArray()
        _.each(shop.locations, location => {
          expect(location.id).not.toBeEmptyString()
          expect(location.title).not.toBeEmptyString()
          expect(location.address).not.toBeEmptyString()
          expect(location.coords).not.toBeNull()
          expect(location.coords.latitude).toBeNumber()
          expect(location.coords.longitude).toBeNumber()
        })
      })

  }))

  it('should retrieve shop', inject(($q, $rootScope)=> {
    let subject = new CoffeeShopService($q)

    let shop;
    subject.getShop('pour').then(actualShop => shop = actualShop)
    // resolve promise
    $rootScope.$apply()

    expect(shop).not.toBeNull()
  }))
})
