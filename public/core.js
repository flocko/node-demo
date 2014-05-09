// public/core.js
var jiraApp = angular.module('jiraApp', []);
 
function mainController($scope, $http) {
	$scope.formData = {};

	$scope.getProject = function() {

		//Call node method / pass project name
		$http.post('/api/jira', $scope.formData)
				.success(function(data) {
					try {

						//Parse response to json.. twice.. because fuck you, thats why
					  	var transformed = JSON.parse(data);
			 		   	obj = JSON.parse(transformed);
						$scope.jira = obj;

						//Loop through response object, increment priority. 
						//TODO: change to switch, looks like shit
						var arrayLength = obj.issues.length;
						var trivial =0;						
						var minor =0;
						var major =0;
						var critical =0;						
						var blocker =0;						
						for (var i = 0; i < arrayLength; i++){
							if(obj.issues[i].fields.priority.id == 5){
								trivial++;
							}
							if(obj.issues[i].fields.priority.id == 4){
								minor++;
							}
							if(obj.issues[i].fields.priority.id == 3){
								major++;
							}
							if(obj.issues[i].fields.priority.id == 2){
								critical++;
							}
							if(obj.issues[i].fields.priority.id == 1){
								blocker++;
							}
						}
						
					//create google charts		
        			data = google.visualization.arrayToDataTable([
			          ['Task', 'Hours per Day'],
			          ['Blocker',       blocker],
			          ['Critical',      critical],
			          ['Major',			major],			          
			          ['Minor',			minor],
			          ['Trivial',       trivial]
			        ]);
			      
			        // Create and draw the visualization.
			        new google.visualization.PieChart(document.getElementById('visualization')).
			            draw(data,  {title:"List of bugs by priority"});

					} catch (e) {
					//TODO: some fancy error reporting		
				  console.log("Parsing error:", e); 
				}
				})
		.error(function(data) {
			//TODO: some fancy error reporting		
			console.log('Error: ' + data);
		});

	};
}