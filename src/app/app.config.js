routing.$inject = ['$urlRouterProvider', '$locationProvider'];

export default function routing($urlRouterProvider, $locationProvider) {
  // Requires server redirect for refresh to function properly
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');
}
