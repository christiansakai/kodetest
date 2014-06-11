'use strict';

describe('Service: pad', function () {

  // load the service's module
  beforeEach(module('codepadApp'));

  // instantiate service
  var pad;
  beforeEach(inject(function (_pad_) {
    pad = _pad_;
  }));

  it('should do something', function () {
    expect(!!pad).toBe(true);
  });

});
