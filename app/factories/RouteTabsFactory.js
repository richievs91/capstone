"use strict";

app.factory("TabStorage", function($http, FBCreds) {

	let getTabs = () => {
	let tabs = [];
		return new Promise( (resolve, reject) => {
			$http.get(`${FBCreds.databaseURL}/tabs.json`)
			.success( (tabObject) => {
				let tabCollection = tabObject;
				// gets an array of all the keys on the item object 
				Object.keys(tabCollection).forEach( (key) => {
					tabCollection[key].id = key;
					tabs.push(tabCollection[key]);
				});
				resolve(tabs);
			})
			.error((error) => {
				reject(error);
			});
		});
	};

	let getMasteredTabs = () => {
	let tabs = [];
		return new Promise( (resolve, reject) => {
			$http.get(`${FBCreds.databaseURL}/masteredtabs.json`)
			.success( (tabObject) => {
				let tabCollection = tabObject;
				// gets an array of all the keys on the item object 
				Object.keys(tabCollection).forEach( (key) => {
					tabCollection[key].id = key;
					tabs.push(tabCollection[key]);
				});
				resolve(tabs);
			})
			.error((error) => {
				reject(error);
			});
		});
	};

	let postNewTab = (newTab) => {
		console.log(postNewTab);
		return new Promise( (resolve, reject) => {
			$http.post(`${FBCreds.databaseURL}/tabs.json`,
				angular.toJson(newTab))
			.success( (obj) => {
				resolve(obj);
			})
			.error( (error) => {
				reject(error);
			});
		});
	};

	let postNewMasteredTab = (newTab) => {
		console.log(postNewTab);
		return new Promise( (resolve, reject) => {
			$http.post(`${FBCreds.databaseURL}/masteredtabs.json`,
				angular.toJson(newTab))
			.success( (obj) => {
				resolve(obj);
			})
			.error( (error) => {
				reject(error);
			});
		});
	};

	let searchForTabs = (guitarTabs) => {
		return new Promise( (resolve, reject) => {
		$http.get(`http://www.songsterr.com/a/ra/songs/byartists.json?artists="${guitarTabs}"`)
		.success((guitarData) => {
			console.log("guitarData", guitarData);
			resolve(guitarData);
		}).error((error) => {
			reject(error);
		});
	});
	};

	let deleteTab = function removeFromFirebase(deleteID) {
		// console.log(`${FBCreds.databaseURL}/tab/${deleteID}.json`);
    return new Promise( (resolve, reject) => {
			$http.delete(`${FBCreds.databaseURL}/tabs/${deleteID}.json`)
			// firebase.database().ref('/tab/' + deleteID).remove()
			.success( (obj) => {
				// console.log("success", success);
				resolve(obj);
			})
			.error( (error) => {
				// console.log("error", error);
				reject(error);
			});
		});
	};

	let deleteMasterTab = function removeFromFirebase(deleteID) {
		// console.log(`${FBCreds.databaseURL}/tab/${deleteID}.json`);
    return new Promise( (resolve, reject) => {
			$http.delete(`${FBCreds.databaseURL}/masteredtabs/${deleteID}.json`)
			// firebase.database().ref('/tab/' + deleteID).remove()
			.success( (obj) => {
				// console.log("success", success);
				resolve(obj);
			})
			.error( (error) => {
				// console.log("error", error);
				reject(error);
			});
		});
	};


	return {getTabs, postNewTab, searchForTabs, deleteTab, getMasteredTabs, postNewMasteredTab, deleteMasterTab};
});

























