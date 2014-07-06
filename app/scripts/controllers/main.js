'use strict';

angular.module('codepadApp')
  .controller('MainCtrl', function ($scope, $routeParams, $http, $firebase, exercisms, FIREBASEURI) {

    $scope.thisPagePath = $routeParams.path_name;
    $scope.testTypes = ['jasmine', 'mocha'];
    $scope.menuOptions = exercisms.slice(0,2);
    $scope.defaultMenuOptions = exercisms.slice(0,2);
    $scope.exercisms = exercisms;
    $scope.activeTestType = $firebase(new Firebase(FIREBASEURI + 'codepad/environment/' + $scope.thisPagePath).child('testType')) || $scope.testTypes[0];
    $scope.showExercisms = $firebase(new Firebase(FIREBASEURI + 'codepad/environment/' + $scope.thisPagePath).child('showExercisms')) || false;

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

    pad1.on('ready', function(){

      if(pad1.isHistoryEmpty()){
        $http.get('/getExercism/custom').success(function(customtest){
          pad1.setText(customtest);
          $http.get('/getExercism/custom-javascript').success(function(customtestjs){
            pad2.setText(customtestjs);
          })
        })
      };

      $scope.$watch('currentExercism', function(newVal, oldVal){
        if(newVal === 'instructions'){
          $http.get('/getExercism/instructions-javascript').success(function(instructionsjs){
            pad2.setText(instructionsjs);
          });
        }
        if(oldVal === 'instructions'){
          pad2.setText('');
        }
        $http.get('/getExercism/' + newVal).success(function(exercism_data){
          pad1Ref.child('fullcode').set(exercism_data, function(){
            roomRef.child('currentExercism').set($scope.currentExercism, function(){
              pad1.setText(exercism_data);
            });
          });
        });
      });

      $scope.$watch('activeTestType', function(newVal, oldVal){
        roomRef.child('testType').set(newVal, function(){});
      });

      $scope.$watch('showExercisms', function(newVal, oldVal){
        roomRef.child('showExercisms').set(newVal, function(){});
    });

    roomRef.child('iframeUrl').on('value', function(newUrl) {
      console.log(newUrl);
      $scope.iframeUrl = newUrl.val();
      $scope.$apply();
    });

    roomRef.child('currentExercism').on('value', function(newExercism) {
      $scope.currentExercism = newExercism.val() || $scope.exercisms[0];
      $scope.$apply();
    });

    roomRef.child('testType').on('value', function(newTestType) {
      $scope.activeTestType = newTestType.val() || $scope.testTypes[0];
      $scope.$apply();
    });

    roomRef.child('showExercisms').on('value', function(showExercism) {
      $scope.showExercisms = showExercism.val() || false;
      if(showExercism.val() === true){
        $scope.menuOptions = $scope.exercisms;
      } else {
        $scope.menuOptions = $scope.defaultMenuOptions;
      }
      $scope.$apply();
    });

  });
});