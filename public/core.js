// public/core.js
var jiraApp = angular.module('jiraApp', []);

function mainController($scope, $http) {
	$scope.formData = {};

	// when landing on the page, get all todos and show them
	$http.get('/api/jira')
		.success(function(data) {
			try {
			  	var transformed = JSON.parse(data);
			  // transformed is { p: 10 }
				$scope.jira = transformed;
				console.log(data);
			} catch (e) {
		  console.log("Parsing error:", e); 
		}

		})
		.error(function(data) {
			console.log('Error: ' + data);
		});
}
