describe('Home Controller Test', function(){

  beforeEach(module('app.controllers'));

  it('Message Must Be Defined', inject(function($controller) {
    var scope = {},
        ctrl = $controller('homeCtrl', {$scope:scope});
    expect(scope.message).toBeDefined();
  }));

});