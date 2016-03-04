angular.module('personalApiApp', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/')

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'views/home.html',
      controller: 'homeCtrl',
      resolve: {
        info: function(profileService) {
          return profileService.getBasicInfo()
        }
      }
    })
})
