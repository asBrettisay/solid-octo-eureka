angular.module('personalApiApp')
.service('profileService', function($http, $q) {


  var url = 'http://localhost:8001'

  this.getBasicInfo = function() {
    var name = $http({
      method: 'GET',
      url: 'http://localhost:8001/name'
    }).then(function(data) {
    return data.data;
  })

    var location = $http({
      method: 'GET',
      url: 'http://localhost:8001/location'
    }).then(function(data) {
    return data.data;
  });

    return $q.all([name, location]).then(function(data) {
      return {
        name: data[0],
        location: data[1]
      };
    });
  }



  this.getHobbies = function() {
    return $http({
      method: 'GET',
      url: url + '/hobbies'
    }).then(function(data) {
      return data.data;
    })
  }


  this.getOccupations = function() {
    return $http({
      method: 'GET',
      url: url + '/occupations'
    }).then(function(data) {
      return data.data;
    })
  }


  this.getSkills = function() {
    return $http({
      method: 'GET',
      url: url + '/skillz'
    }).then(function(data) {
      return data.data;
    })
  }

  this.newSkill = function(skill) {
    return $http({
      method: 'POST',
      url: url + '/skillz',
      data: {
        "name": skill.name,
        "experience": skill.experience
      }
    }).then(function(res) {
      return res.data;
    })
  }
})
