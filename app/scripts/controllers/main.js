'use strict';

angular.module('codepadApp')
  .controller('MainCtrl', function ($scope, $routeParams, $http, $firebase, exercisms, FIREBASEURI) {

    $scope.thisPagePath = $routeParams.path_name;
    $scope.testTypes = ['jasmine', 'mocha'];
    $scope.exercisms = exercisms;
    $scope.activeTestType = $firebase(new Firebase(FIREBASEURI + 'codepad/environment/' + $scope.thisPagePath + '/testType'));

    var roomRef = new Firebase(FIREBASEURI + 'codepad/environment/' + $scope.thisPagePath);
    var pad1Ref = new Firebase(FIREBASEURI + 'codepad/environment/' + $scope.thisPagePath+'/pad1');
    var pad2Ref = new Firebase(FIREBASEURI + 'codepad/environment/' + $scope.thisPagePath+'/pad2');

    // Pad 1 Code
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

    // TODO: Change these callbacks to promises using $q
    $scope.run = function() {
      pad1Ref.child('fullcode').set(pad1.getText(), function(){
        pad2Ref.child('fullcode').set(pad2.getText(), function(){
          roomRef.child('iframeUrl').set('/runner/' + $scope.activeTestType + '/' + $scope.thisPagePath + '/' + (new Date()).getTime(), function(){
            $scope.pad1Text = pad1.getText();
            $scope.pad2Text = pad2.getText();
          });
        });
      });
    };

    roomRef.child('iframeUrl').on('value', function(newUrl) {
      console.log(newUrl);
      $scope.iframeUrl = newUrl.val();
      $scope.$apply();
    });

    pad1.on('ready', function(){
      console.log('pad1 is ready');
      $scope.$watch('currentExercism', function(newVal, oldVal){
        $http.get('/getExercism/' + newVal).success(function(exercism_data){
          pad1Ref.child('fullcode').set(exercism_data, function(){
            roomRef.child('currentExercism').set($scope.currentExercism, function(){
              pad1.setText(exercism_data);
            });
          });
        });
      });
    })

    roomRef.child('currentExercism').on('value', function(newExercism) {
      $scope.currentExercism = newExercism.val();
      $scope.$apply();
    });

    roomRef.child('testType').on('value', function(newTestType) {
      $scope.activeTestType = newTestType.val();
      $scope.$apply();
    });

    $scope.$watch('activeTestType', function(newVal, oldVal){
      if(newVal !== oldVal){
        roomRef.child('testType').set($scope.activeTestType);
      };
    });

  });