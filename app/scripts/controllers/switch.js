'use strict';

angular.module('codepadApp')
  .controller('SwitchCtrl', function ($scope, $http, path, $location) {
    $scope.newPath = path.generateRandomPath();
    $location.path($scope.newPath);
  });
