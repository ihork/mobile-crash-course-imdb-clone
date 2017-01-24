describe('Example', function () {

  beforeEach(function (done) {
    simulator.reloadReactNativeApp(done);
  });

  it('should have Moana in list', function () {
    expect(element(by.label('Moana'))).toBeVisible();
  });
});
