// INITILIZE CONTROLLER
// ============================================================
angular.module("eventApp").controller("NewEventCtrl", function($scope, $location) {
  // VARIABLES
  // ============================================================
  // FUNCTIONS
  // ============================================================
  $scope.saveEvent = function(event, newEventForm){
    if(newEventForm.$valid) window.alert(event.name);
  }
  
  $scope.cancelEvent = function(){
    $location.path("/event");
  }
});
