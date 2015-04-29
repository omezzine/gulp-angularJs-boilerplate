'use strict';

// Declare top-level module which depend
var app = angular.module('app',
    [ 
    'ui.router', // angular ui-router
    'app.controllers', // my controllers
    'app.directives', // custom directives
    'app.filters' // custom filters
    ]);

// Init my modules
var controllers = angular.module('app.controllers', []);
var filters = angular.module('app.filters', []);
var directives = angular.module('app.directives', []);

// bootstrap angular
app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider' , function($stateProvider, $urlRouterProvider, $locationProvider){

    // TODO use html5 *no hash) where possible
    // $locationProvider.html5Mode(true);

    $stateProvider
        // setup my layout
        .state('root', {
            url: '',
            abstract: true,     
            views: {
                '@': {
                    templateUrl: 'scripts/templates/layout.tpl.html'
                    // feel free to add a controller to layout
                },
                'header@root': {
                    templateUrl: 'scripts/templates/shared/header.tpl.html'
                    // feel free to add a controller to header
                },
                'footer@root': {
                    templateUrl: 'scripts/templates/shared/footer.tpl.html'
                    // feel free to add a controller to footer
                }
            }
        })
        // my home page
        .state('root.home', {
            url: '/',
            views: {
                'content@root': {
                    templateUrl: 'scripts/templates/home.tpl.html',
                    controller: 'homeCtrl'
                }
            }
        });

    $urlRouterProvider.otherwise('/');
}]);

// Setup the version
app.value('version', '1.0.0')