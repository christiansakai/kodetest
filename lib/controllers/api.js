'use strict';

var mongoose = require('mongoose'),
    Thing = mongoose.model('Thing'),
    Firebase = require('firebase'),
    assert = require('assert'),
    config = require('../config/config.js'),
    fs = require('fs');

/**
 * Get awesome things
 */
exports.awesomeThings = function(req, res) {
  return Thing.find(function (err, things) {
    if (!err) {
      return res.json(things);
    } else {
      return res.send(err);
    }
  });
};

exports.showPage = function(req, res) {
  var pageName = req.params.page_name;
  var testType = req.params.test_type;
  //TODO: Add Firebase URL to config file & remove from here & from Angular
  var pad1Content = new Firebase(config.firebase_uri + '/codepad/environment/' + pageName + '/pad1/fullcode');
  var pad2Content = new Firebase(config.firebase_uri + '/codepad/environment/' + pageName + '/pad2/fullcode');

  pad1Content.on('value', function(pad1Snapshot){
    var pad1Content = pad1Snapshot.val();
    pad2Content.on('value', function(pad2Snapshot){
      var pad2Content = pad2Snapshot.val();
      res.render(testType + "_runner", {pageName: pageName, pad1Content: pad1Content, pad2Content: pad2Content});
    });
  });
};

exports.getExercism = function(req, res) {
  var exercism_name = req.params.exercism_name;
  fs.readFile('lib/javascript_exercisms/' + exercism_name + '/' + exercism_name + '_test.spec.js', function(err, test_spec){
    res.send(test_spec.toString());
  });
};

