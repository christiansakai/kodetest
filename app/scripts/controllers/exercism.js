'use strict';

angular.module('codepadApp')
  .controller('ExercismCtrl', function ($scope, $http, $firebase, FIREBASEURI) {
    $scope.exercismname = '';
    $scope.readMeText = '';
    $scope.specText = '';

    // var exercismRef = new Firebase(FIREBASEURI + 'codepad/').child('exercisms');
    // console.log(exercismRef);

    // var addexercism = function(){
    //   exercismRef.child($scope.exercismname).set({
    //         readMe: $scope.readMeText,
    //         spec: $scope.specText
    //       })
    // }

  });
