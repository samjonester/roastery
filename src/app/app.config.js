routing.$inject = ['$urlRouterProvider', '$locationProvider'];

export default function routing($urlRouterProvider, $locationProvider) {
  // Uncomment to get rid of # in url
  // Requires server redirect for refresh to function properly
  //$locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');
}
