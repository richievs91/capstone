"use strict";

app.controller("MyTabsCtrl", function($scope, TabStorage) {
	TabStorage.getTabs()
	.then( (tabArray) => {
		$scope.tabs = tabArray;
		$scope.$apply();
	});

	$scope.deleteTab = (tab) => {
		console.log(tab);
		TabStorage.deleteTab(tab)
	.then((tab) => {
		$scope.deleteTab(tab);
	});


	};

});