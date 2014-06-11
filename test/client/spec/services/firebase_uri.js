'use strict';

describe('Service: FIREBASEURI', function () {

  // load the service's module
  beforeEach(module('codepadApp'));

  // instantiate service
  var FIREBASEURI;
  beforeEach(inject(function (_FIREBASEURI_) {
    FIREBASEURI = _FIREBASEURI_;
  }));

  it('should do something', function () {
    expect(!!FIREBASEURI).toBe(true);
  });

});
