'use strict';

angular.module('app.directives')
	.directive('version', function(){
		return {
			template: '<span>Gulp-AngularJs Boilerplate V1.0.0</span>',
			restrict: 'EA',
			controller: function(){

			}
		};
	});