describe('Main App Test', function(){

  beforeEach(module('app'));

  it('Should Provide The Version', inject(function(version) {
	 expect(version).toEqual('1.0.0');
  }));

});