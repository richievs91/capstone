"use strict";


app.controller("MyTabsCtrl", function ($scope, TabStorage, AuthFactory) {

	// TabStorage.getTabs(AuthFactory.getUser())
	// 	.then(function(tabCollection) {
	// 		$scope.tabs = tabCollection;
	// 		$scope.$apply();
	// 	});


		$scope.searchTabs = function(){
			TabStorage.searchForTabs($scope.guitarTabs)
			.then(function(data) {
				data.forEach(function(item, index) {
					console.log("item", item);
					console.log("index", index);
				});
				$scope.tabs = data; 
				console.log("data", data);
				$scope.$apply();
			});
			console.log("guitarTabs", $scope.guitarTabs);
		};

});