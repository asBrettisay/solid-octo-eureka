angular.module('personalApiApp')
.service('profileService', function($http, $q) {
  this.getBasicInfo = function() {
    var name = $http({
      method: 'GET',
      url: 'http://localhost:8001/name'
    })

    var location = $http({
      method: 'GET',
      url: 'http://localhost:8001/location'
    });

    return $q.all([name, location]).then(function(data) {
      return {
        name: data[0].data,
        location: data[1].data
      };
    });
  }
})
