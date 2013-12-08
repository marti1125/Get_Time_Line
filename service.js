var Twit = require('twit')
var http = require('http');
var router = require('router');
var route = router();

var twitter = new Twit({
  consumer_key: 'K55EvPSwvVjBAqF7iyZmQ',
  consumer_secret: 'pIw9eYXMfgAKYwX74qrBU0rcvsKul6fqASTe2FZE',
  access_token: '79004248-hqFbqQ9w3BWHI9aqtGfSN2qnh7RVlkX56dyF30ZG4',
  access_token_secret: 's2R7YOJWMWYkQQk57KbNUkqwoA8VoH8eBfvi4VeNY'
});

route.get('/', function(request, response) {
	response.writeHead(200, {"Content-Type": "text/html"});
	response.write('<!doctype html>\n<html lang="en">\n' +
 '<head>\n<meta charset="utf-8">\n<title>Test web page on node.js</title>\n' +
 '<style type="text/css">* {font-family:arial, sans-serif;}</style>\n' +
 '</head>\n<body>\n<h1>Get Time Line</h1>\n' +
 '<div id="content"><p>List of users:</p><ul><li>/lineaunope</li><li>/USGSted</li><li>/USGSBigQuakes</li></ul></div>' +
 '\n</body>\n</html>');  
  response.end();  
});

route.get('/lineaunope', function(request, response) {
	response.writeHead(200, {"Content-Type": "application/json"});
	twitter.get('statuses/user_timeline', { screen_name : 'Lineaunope', count: 7 }, function(err, reply) {	
 		response.end(JSON.stringify(reply));
	});	
});

route.get('/USGSted', function(request, response) {
	response.writeHead(200, {"Content-Type": "application/json"});
	twitter.get('statuses/user_timeline', { screen_name : 'USGSted', count: 7 }, function(err, reply) {	
 		response.end(JSON.stringify(reply));
	});	
});

route.get('/USGSBigQuakes', function(request, response) {
	response.writeHead(200, {"Content-Type": "application/json"});
	twitter.get('statuses/user_timeline', { screen_name : 'USGSBigQuakes', count: 7 }, function(err, reply) {	
 		response.end(JSON.stringify(reply));
	});	
});

http.createServer(route).listen(8080);