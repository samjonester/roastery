import './index'

describe('coffee shop url routing', ()=> {
  beforeEach(()=> {
    angular.mock.module('app.coffee')
  })
  it('should route a request to a coffee shop', inject(($state)=> {
    expect($state.href('coffeeShop', {id: '123'})).toEqual('#/123')
    expect($state.get('coffeeShop').controllerAs).toEqual('coffeeShop')
  }))
})
