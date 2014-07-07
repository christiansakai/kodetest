'use strict';

angular.module('codepadApp')
.controller('MainCtrl', function ($scope, $routeParams, $http, $firebase, exercisms, FIREBASEURI, $timeout) {

  $scope.thisPagePath = $routeParams.path_name;
  $scope.testTypes = ['jasmine', 'mocha'];
  $scope.menuOptions = exercisms.slice(0,2);
  $scope.defaultMenuOptions = exercisms.slice(0,2);
  $scope.exercisms = exercisms;
  // $scope.activeTestType = $firebase(new Firebase(FIREBASEURI + 'codepad/environment/' + $scope.thisPagePath).child('testType')) || $scope.testTypes[0];
  // $scope.showExercisms = $firebase(new Firebase(FIREBASEURI + 'codepad/environment/' + $scope.thisPagePath).child('showExercisms')) || false;

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

    pad1.on('ready', function(){
      pad2.on('ready', function(){

        // If pad1 hasn't been used, use the 'custom' exercism.
        if(pad1.isHistoryEmpty()){
          $http.get('/getExercism/custom').success(function(customtest){
            pad1.setText('');
            $http.get('/getExercism/custom-javascript').success(function(customtestjs){
              pad2.setText(customtestjs);
            });
          });
        }

        $scope.$watch('currentExercism', function(newVal, oldVal){
          // If the user selects instructions as the exercism, populate pad 2 with the appropriate text.
          if(newVal === 'instructions'){
            $http.get('/getExercism/instructions-javascript').success(function(instructionsjs){
              pad2.setText(instructionsjs);
            });
          }
          // After selecting instructions, when the user chooses a different exercism, clear pad 2.
          if(oldVal === 'instructions'){
            pad2.setText('');
          }
          // Make an api call to get the exercism data that the user selected.
          $http.get('/getExercism/' + newVal).success(function(exercism_data){
            // If the user clicks the Exercism logo, the new & old exercism will be the same.
            // If they are, just return, don't wipe out their data.
            if(newVal === oldVal){
              return;
            }
            pad1Ref.child('fullcode').set(exercism_data, function(){
              // Set currentExercism in Firebase to equal the selected Exercism.
              roomRef.child('currentExercism').set($scope.currentExercism, function(){
                // Set pad1 text equal the output of the exercism file.
                pad1.setText(exercism_data);
              });
            });
          });
        });
      });
    });

    $scope.$watch('activeTestType', function(newVal, oldVal){
          // When first initialized, the activeTestType val is the Firebase object since I set it equal
          // to that above, so check to make sure I'm not dealing with the object first
      if(newVal === 'jasmine' || newVal === 'mocha'){
        roomRef.child('testType').set(newVal);
      }
    });

    $scope.$watch('showExercisms', function(newVal){
            // When first initialized, the showExercisms val is the Firebase object, so check to make
            // sure I'm not dealing with the object first
            if(newVal === true || newVal === false){
              roomRef.child('showExercisms').set(newVal);
            }
          });

    roomRef.child('iframeUrl').on('value', function(newUrl) {
      $timeout(function(){
        console.log(newUrl);
        $scope.iframeUrl = newUrl.val();
      }, 0);
    });

    roomRef.child('currentExercism').on('value', function(newExercism) {
      $timeout(function(){
        $scope.currentExercism = newExercism.val() || $scope.exercisms[0];
      }, 0);
    });

    roomRef.child('testType').on('value', function(newTestType) {
      $timeout(function(){
        $scope.activeTestType = newTestType.val() || $scope.testTypes[0];
      }, 0);
    });

    roomRef.child('showExercisms').on('value', function(showExercism) {
      $timeout(function(){
        $scope.showExercisms = showExercism.val() || false;
        if(showExercism.val() === true){
          $scope.menuOptions = $scope.exercisms;
        } else {
          $scope.menuOptions = $scope.defaultMenuOptions;
        }
      }, 0);
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

});
