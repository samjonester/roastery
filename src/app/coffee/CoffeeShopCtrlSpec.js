import CoffeeShopCtrl from './CoffeeShopCtrl'

describe('Controller: CoffeeShopCtrl', ()=> {
  const shopId = '123'
  const shop = {double: 'shop'}

  const stateParams = {
    id: shopId
  }
  const service = {
    getShop: ()=>{}
  }

  it('should set shop to view model', inject(($q, $rootScope)=> {
    spyOn(service, 'getShop').and.returnValue($q.when(shop))
    let subject = new CoffeeShopCtrl(service, stateParams)
    // resolve promise
    $rootScope.$apply()

    expect(service.getShop).toHaveBeenCalledWith(shopId)
    expect(subject.shop).toBe(shop)
    expect(subject.map).not.toBeNull()
    expect(subject.map.zoom).toBeNumber()
    expect(subject.map.center).not.toBeNull()
    expect(subject.map.center.latitude).toBeNumber()
    expect(subject.map.center.longitude).toBeNumber()
  }))
})
