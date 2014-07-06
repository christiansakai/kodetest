'use strict';

angular.module('codepadApp')
  .controller('AboutCtrl', function ($scope, $http, $routeParams) {
    $scope.path_back_to_home = $routeParams.path_back_to_home;
  });
