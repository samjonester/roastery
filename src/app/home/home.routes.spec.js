import './index'

describe('home url routing', ()=> {
  beforeEach(()=> {
    angular.mock.module('app.home')
  })
  it('should route a request to home', inject(($state)=> {
    expect($state.href('home')).toEqual('#/')
  }))
})
