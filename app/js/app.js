// INITILIZE APP
// ============================================================
angular.module("eventApp", ['ngSanitize', 'ui.router'])
.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/event');
	$stateProvider
	.state('event', {
    url: '/event',
		controller: 'EventCtrl',
    templateUrl: './views/eventDetails.html'
   })
  .state('newEvent', {
    url: '/newEvent',
		controller: 'NewEventCtrl',
    templateUrl: './views/newEvent.html'
   })
   .state('editProfile', {
    url: '/editProfile',
    templateUrl: './views/editProfile.html',
		// controller: 'userCtrl'
   })
}])
