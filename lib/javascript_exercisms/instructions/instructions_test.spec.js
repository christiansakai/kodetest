describe("Kodetest", function() {
  var kodetest = new Kodetest();

  it("should let you write tests", function() {
    var result = kodetest.writingTests();
    expect(result).toEqual("Switch between Jasmine or Mocha in the dropdown menu of the 'Test' section and write your tests there.");
  });

  it("should let you write code to pass tests", function() {
    var result = kodetest.writingCodeToPassTests();
    expect(result).toEqual("In the 'JavaScript' section, write your code to pass the tests.");
  });

  it("should let you run tests to see if your code passes", function() {
    var result = kodetest.runningTests();
    expect(result).toEqual("Click the 'Run Test' text in the final section to see your test output.");
  });


});
