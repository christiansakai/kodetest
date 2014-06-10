'use strict';

angular.module('codepadApp')
  .controller('MainCtrl', function ($scope, $http) {
    // var ref = new Firebase("https://shining-fire-1443.firebaseio.com/");
    // $scope.pads = $firebase.ref;

    // var pad1 = document.getElementById('pad1');
    // var padRef = new Firebase('')
    var firepadRef = new Firebase('https://shining-fire-1443.firebaseio.com/');
    var codeMirror = CodeMirror(document.getElementById('firepad'), { lineWrapping: true });
    var firepad = Firepad.fromCodeMirror(firepadRef, codeMirror,
        { richTextShortcuts: true, richTextToolbar: true });

  });
