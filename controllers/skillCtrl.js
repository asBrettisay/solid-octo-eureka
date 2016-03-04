angular.module('personalApiApp')
.controller('skillCtrl', function($scope, skills, profileService) {
  $scope.skills = skills;

  $scope.skillCollection = {
    expert: [],
    intermediate: [],
    beginner: []
  }

  function skillMapper(skill) {
    var e = skill.experience;
    var s = $scope.skillCollection;

    if (e === 'beginner') s.beginner.push(skill);
    if (e === 'intermediate') s.intermediate.push(skill);
    if (e === 'expert') s.expert.push(skill);
  }

  $scope.options = {
    "Expert": "expert",
    "Intermediate": "Intermediate",
    "Beginner": "beginner"
  };
  $scope.newSkill = function(skill) {
    console.log(skill);
    profileService.newSkill(skill).then(function(res) {
      $scope.skills = res;
    });
  }
})
