'use strict';

angular.module('codepadApp')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });
