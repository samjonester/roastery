import ShopListCtrl from './ShopListCtrl'

describe('Controller: ShopListCtrl', ()=> {
  const shops = {double: 'shops'}

  const service = {
    getShops: ()=>{}
  }

  it('should add shops to view model', inject(($q, $rootScope)=> {
    spyOn(service, 'getShops').and.returnValue($q.when(shops))
    let subject = new ShopListCtrl(service)
    // resolve promise
    $rootScope.$apply()

    expect(service.getShops).toHaveBeenCalled()
    expect(subject.shops).toBe(shops)
  }))
})
