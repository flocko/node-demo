// web.js
var express = require("express");
var logfmt = require("logfmt");
var app = express();

app.use(logfmt.requestLogger());

/*app.get('/', function(req, res) {
  res.send('Hello World! Manigga ');
});*/

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});

var Client = require('node-rest-client').Client;
var options_auth ={user:"martin.kropf", password:"26d4-j27"};
client = new Client(options_auth);



app.use(express.static(__dirname + '/public'));

// routes ======================================================================

// api ---------------------------------------------------------------------
// get all todos
app.get('/api/jira', function(req, res) {
	client.get("https://blanc-noir.atlassian.net/rest/api/latest/search?jql=project%20%3D%20MAN%20AND%20priority%20%3D%20Trivial%20AND%20resolution%20%3D%20Unresolved%20ORDER%20BY%20key%20DESC", 
        function(data, response){
        	res.json(data);
		});	    
});

	// application -------------------------------------------------------------
app.get('*', function(req, res) {
	res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
});