'use strict';

describe('Service: exercismData', function () {

  // load the service's module
  beforeEach(module('codepadApp'));

  // instantiate service
  var exercismData;
  beforeEach(inject(function (_exercismData_) {
    exercismData = _exercismData_;
  }));

  it('should do something', function () {
    expect(!!exercismData).toBe(true);
  });

});
