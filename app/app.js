"use strict";

var app = angular.module("gTab", ["ngRoute"]);

app.config( function($routeProvider, $locationProvider) {
	$routeProvider
	.when('/', { 
		templateUrl: 'partials/login.html',
		controller: 'LoginCtrl'

	})
	.when('/MyTabs', {
		templateUrl: 'partials/MyTabs.html',
		controller: 'MyTabsCtrl'
	})	
	.when('/MasteredTabs', {
		templateUrl: 'partials/MasteredTabs.html',
		controller: 'MasteredTabsCtrl'
	})
	.otherwise('/');
	$locationProvider.html5Mode(true);
});


app.run(($location, FBCreds) => {
	let creds = FBCreds;
	let authConfig = {
		apiKey: creds.key,
		authDomain: creds.authDomain
	};
	firebase.initializeApp(authConfig);
});






