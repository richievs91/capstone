"use strict";


app.controller("MasteredTabsCtrl", function($scope, TabStorage) {
	TabStorage.getTabs()
	.then( (tabArray) => {
		$scope.tabs = tabArray;
		$scope.$apply();
	});
});

