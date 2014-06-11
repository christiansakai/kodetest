'use strict';

angular.module('codepadApp')
  .controller('MainCtrl', function ($scope, $routeParams, $http, FIREBASEURI, $firebase) {

    $scope.thisPagePath = $routeParams.path_name;

    var roomRef = new Firebase(FIREBASEURI + 'codepad/environment/' + $scope.thisPagePath);
    // Pad 1 Code
    var pad1Ref = new Firebase(FIREBASEURI + 'codepad/environment/'+$scope.thisPagePath+'/pad1');

    var codeMirror = CodeMirror(document.getElementById('pad1'),
      { lineWrapping: true,
        lineNumbers: true,
        mode: 'javascript',
        theme: 'base16-light'
    });
    var pad1 = Firepad.fromCodeMirror(pad1Ref, codeMirror,
        { richTextShortcuts: false,
          richTextToolbar: false
        });


    // Pad 2 Code
    var pad2Ref = new Firebase(FIREBASEURI + 'codepad/environment/'+$scope.thisPagePath+'/pad2');
    var codeMirror = CodeMirror(document.getElementById('pad2'),
      { lineWrapping: true,
        lineNumbers: true,
        // TODO: Look into what htmlmixed is
        mode: 'javascript',
        theme: 'base16-light'
    });
    var pad2 = Firepad.fromCodeMirror(pad2Ref, codeMirror,
        { richTextShortcuts: false,
          richTextToolbar: false
        });
    $scope.run = function() {
      pad1Ref.child('fullcode').set(pad1.getText());
      pad2Ref.child('fullcode').set(pad2.getText());
      roomRef.child('iframeUrl').set("/runner/" + $scope.thisPagePath + "/" + (new Date()).getTime());
      // $http.post($scope.thisPagePath, {
      //   pad1: pad1.getText(),
      //   pad2: pad2.getText()
      // }).success(function(data) {
      //   $scope.iframeUrl = data.iframeUrl;
      // });
    };
    roomRef.child('iframeUrl').on('value', function(newUrl) {
      console.log(newUrl);
      $scope.iframeUrl = newUrl.val();
    });

  });
