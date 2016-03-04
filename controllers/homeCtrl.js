angular.module('personalApiApp')
.controller('homeCtrl', function($scope, profileService, info) {
  $scope.info = info;
})
