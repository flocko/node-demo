// web.js
var express = require("express");
var logfmt = require("logfmt");
var app = express();

app.use(logfmt.requestLogger());

app.get('/', function(req, res) {
  res.send('Hello World! Manigga ');
});

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});

//app.use(express, static(__dirname + '/public'));

//JIRA request
var Client = require('node-rest-client').Client;

// configure basic http auth for every request


client = new Client(options_auth);

client.get("https://blanc-noir.atlassian.net/rest/api/latest/project?jql=project%20%3D%20MAN%20AND%20resolution%20%3D%20Unresolved%20AND%20priority%20%3D%20Blocker%20ORDER%20BY%20key%20DESC", 
            function(data, response){

           	//Data contains parsed response
			    
});
