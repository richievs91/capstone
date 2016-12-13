"use strict"; 

app.controller('loginCtrl', function($scope, AuthFactory, $window){
	$scope.account = {
		email: "", 
		password: "" //could also be null
	};


	$scope.login = (user) => {
		// currentUser = user.uid;
		AuthFactory.loginUser($scope.account)
		.then( (user) => {
			$window.location.href = "#/myTabs"; 
					console.log('user logged in', user.uid);


		});
	};
		$scope.logout = () => {
		AuthFactory.logoutUser($scope.account)
		.then( (user) => {
			$window.location.href = "#/login"; 
					console.log('user logged out');
				});
			};

	}); 