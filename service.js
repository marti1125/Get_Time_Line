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

route.get('/lineaunope', function(request, response) {
	response.writeHead(200, {"Content-Type": "application/json"});
	twitter.get('statuses/user_timeline', { screen_name : 'Lineaunope', count: 7 }, function(err, reply) {	
 		response.end(JSON.stringify(reply));
	});	
});

http.createServer(route).listen(8080);