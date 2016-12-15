"use strict";


app.controller("SearchTabsCtrl", function ($scope, TabStorage, AuthFactory) {

	// TabStorage.getTabs(AuthFactory.getUser())
	// 	.then(function(tabCollection) {
	// 		$scope.tabs = tabCollection;
	// 		$scope.$apply();
	// 	});

	$scope.addTab = function(tab) {
		TabStorage.postNewTab(tab);
	};

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