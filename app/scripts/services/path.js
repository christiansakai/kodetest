'use strict';

angular.module('codepadApp')
  .factory('path', function () {
    var pathLength = 6;
    var possibleChars = 'abcdefghijklmnopqrstuvwxyxABCDEFGHJIJKLMNOPQRSTUVWXYZ';
    var newPath = '';

    // TODO: Make sure that two users aren't taken to the same random path
    return {
      generateRandomPath: function () {
        for(var i = pathLength; i>=0; i--){
          var randomCharIndex = Math.floor(Math.random() * possibleChars.length);
          newPath += possibleChars[randomCharIndex];
        }
        return newPath;
      }
    };
  });