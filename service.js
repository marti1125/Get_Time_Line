var express = require('express');
var Twit = require('twit');
var app = express();

var twitter = new Twit({
  consumer_key: 'K55EvPSwvVjBAqF7iyZmQ',
  consumer_secret: 'pIw9eYXMfgAKYwX74qrBU0rcvsKul6fqASTe2FZE',
  access_token: '79004248-hqFbqQ9w3BWHI9aqtGfSN2qnh7RVlkX56dyF30ZG4',
  access_token_secret: 's2R7YOJWMWYkQQk57KbNUkqwoA8VoH8eBfvi4VeNY'
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

app.get('/', function(req, res){
	res.send('<!doctype html>\n<html lang="en">\n' +
 '<head>\n<meta charset="utf-8">\n<title>Twitter Time Line</title>\n' +
 '<style type="text/css">* {font-family:arial, sans-serif;}</style>\n' +
 '</head>\n<body>\n<h1>Get Time Line</h1>\n' +
 '<div id="content"><p>List of users:</p><ul><li>/lineaunope</li><li>/USGSted</li><li>/USGSBigQuakes</li></ul></div>' +
 '\n</body>\n</html>');
});

app.get('/lineaunope', function(req, res){
	twitter.get('statuses/user_timeline', { screen_name : 'Lineaunope', count: 7 }, function(err, reply) {	
 		res.send(JSON.stringify(reply));
	});
});

app.get('/usgsted', function(req, res){
	twitter.get('statuses/user_timeline', { screen_name : 'USGSted', count: 7 }, function(err, reply) {	
 		res.send(JSON.stringify(reply));
	});
});

app.get('/usgsbigquakes', function(req, res){
	twitter.get('statuses/user_timeline', { screen_name : 'USGSBigQuakes', count: 7 }, function(err, reply) {	
 		res.send(JSON.stringify(reply));
	});
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});