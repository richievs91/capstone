"use strict";

var app = angular.module("gTab", ["ngRoute"]);

app.config( function($routeProvider) {
	$routeProvider
	.when('/', { 
		templateUrl: '/partials/login.html',
		controller: 'loginCtrl'

	})
	.when('/MyTabs', {
		templateUrl: '/partials/MyTabs.html',
		controller: 'MyTabsCtrl'
	})	
	.when('/MasteredTabs', {
		templateUrl: '/partials/MasteredTabs.html',
		controller: 'MasteredTabsCtrl'
	})
	.otherwise('/');

});