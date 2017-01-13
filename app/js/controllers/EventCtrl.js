// INITILIZE CONTROLLER
// ============================================================
angular.module("eventApp").controller("EventCtrl", function($scope, eventServ) {
    // VARIABLES
    // ============================================================
    $scope.snippet = '<span>ng-bind-html</span>'
    $scope.bullValue = true;
    $scope.myStyle = {color:"maroon"};
    $scope.sortOrder = "name"
    $scope.event = eventServ.event;

    // FUNCTIONS
    // ============================================================
    $scope.upVote = function(session){
      session.upVoteCount++
    }
    $scope.downVote = function(session){
      session.upVoteCount--
    }

});
