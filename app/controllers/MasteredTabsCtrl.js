"use strict";


app.controller("MasteredTabsCtrl", function($scope, TabStorage) {
	TabStorage.getMasteredTabs()
	.then( (tabArray) => {
		$scope.tabs = tabArray;
		$scope.$apply();
	});

	$scope.deleteTab = (tab) => {
		console.log(tab);
		TabStorage.deleteMasterTab(tab)
	.then((tab) => {
		console.log(tab);
	});


	};
});

