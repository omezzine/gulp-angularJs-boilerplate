'use strict';

angular.module('app.controllers')
	.controller('homeCtrl', ['$scope', function($scope){
		$scope.message = 'Welcome to home page';
		$scope.user = {};
	}]);