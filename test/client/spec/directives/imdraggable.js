'use strict';

describe('Directive: imDraggable', function () {

  // load the directive's module
  beforeEach(module('codepadApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<im-draggable></im-draggable>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the imDraggable directive');
  }));
});
