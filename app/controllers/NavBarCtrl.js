"use strict";

app.controller("NavBarCtrl", function($scope, AuthFactory, $window, $location) {

$scope.logout = (user) => {
	AuthFactory.logoutUser()
		.then((user) => {
			$window.location.url = "#/";
				console.log("You have logged out");
		});
	};
});