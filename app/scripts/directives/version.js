'use strict';

angular.module('app.directives', [])
	.directive('version', function(){
		return {
			template: '<span>version</span>',
			restrict: 'EA',
			controller: function(){

			}
		}
	})