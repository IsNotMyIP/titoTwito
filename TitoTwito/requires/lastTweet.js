var config = require('./Config');
var lastTweet = function(){
	var str;
	config.T.get('statuses/user_timeline', {"user_id": "2516884885", "count": "1"}, function (err, data){
		if(err){
			console.log(err);
		}
		else{
			console.log(data);
			str = data.text;
		}
	})
	return str;
}
var caca = lastTweet();
if (lastTweet().ends
console.log(caca);
exports.lastTweet = lastTweet;