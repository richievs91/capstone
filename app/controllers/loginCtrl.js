"use strict";

app.controller("LoginCtrl", function($scope, AuthFactory, $window, $location) {

  $scope.login = () => {
  	AuthFactory.loginUser()
    	.then((user) => {
    		console.log("hello");
      	$window.location.href = "#/SearchTabs";
      	$scope.$apply();
        	console.log("You are now logged in");
        });
    };


$scope.logout = (user) => {
	AuthFactory.logoutUser()
		.then((user) => {
			$window.location.url = "#/";
				console.log("You have logged out");
		});
	};
});