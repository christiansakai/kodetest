'use strict';

describe('Service: exercisms', function () {

  // load the service's module
  beforeEach(module('codepadApp'));

  // instantiate service
  var exercisms;
  beforeEach(inject(function (_exercisms_) {
    exercisms = _exercisms_;
  }));

  it('should do something', function () {
    expect(!!exercisms).toBe(true);
  });

});
