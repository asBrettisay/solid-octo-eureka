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
    .state('me', {
      url: '/me',
      templateUrl: 'views/me.html',
      controller: function($scope, hobbies, occupations) {
        $scope.hobbies = hobbies;
        $scope.jobs = occupations;
      },


      resolve: {
        hobbies: function(profileService) {
          return profileService.getHobbies();
        },

        occupations: function(profileService) {
          return profileService.getOccupations();
        }
      }
    })
    .state('skillz', {
      url: '/skillz',
      templateUrl: 'views/skillz.html',
      resolve: {
        skills: function(profileService) {
          return profileService.getSkills();
        }
      },
      controller: 'skillCtrl'
    })
})
