"use strict";

app.controller("MyTabsCtrl", function($scope, TabStorage) {
	TabStorage.getTabs()
	.then( (tabArray) => {
		$scope.tabs = tabArray;
		$scope.$apply();
	});

	$scope.addMasteredTab = (tab) => {
		console.log("add mastered tabs", tab);
		TabStorage.postNewMasteredTab(tab);
	};

	$scope.deleteTab = (tab) => {
		console.log(tab);
		TabStorage.deleteTab(tab)
	.then((tab) => {
		console.log(tab);
	});
		$(".tab").remove();

	};

});