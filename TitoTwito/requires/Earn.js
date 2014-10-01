var config = require ("./Config");
var colors = require("colors");
var randIndex =function (arr) {
  var index = Math.floor(arr.length*Math.random());
  return arr[index];
};

var randFollow = function(x){
	var i = 0;
		config.T.get ('followers/ids', function(err, data, response){
			if (err){
				console.log("Almenos hay que esperar 15min".red);

			}
			else{
			for(i; i<x; i++){
				var followers = data.ids;
				randFollower = randIndex(followers);
				config.T.get('friends/ids', { user_id: randFollower }, function(err, data, response) {
					if(err){
						console.log("Almenos hay que esperar 15min".red);
					
					}
					else{
	        		var friends = data.ids
            		var target  = randIndex(friends);
        			config.T.post('friendships/create', { id: target },function(err, data, response) {
        				if (err){
        					console.log("Almenos hay que esperar 15min".red);
        				}
        				else{
        					console.log(("Hemos seguido a" + data.name).green)	
        				}
        			});
        			} 
       			})
			};
		}
    })
}

var unfollows = function(x){
	config.T.get('followers/ids', function(err, data, response) {
		if (err || data.ids == 'undefined'){
			console.log("error" + err);
		}
		else{
      		var followers = data.ids;
      		config.T.get('friends/ids', function(err, data, response) {
      			if (err || data.ids == 'undefined'){
      				console.log("error" + err);
      			}
      			else{
        			var friends = data.ids
        			var total = 0;
          			for (var i=0; i<x; i++){
            			var target = randIndex(friends);
            			if(!~followers.indexOf(target)) {
              				config.T.post('friendships/destroy', { id: target }, function(err, data, response){
              					if(!err){
              						total++;
             					}
              				});   
            			}
          			}
      			console.log(("Hemos dejado de seguir a " + total + " desertores").green);
      			}
			})
      	};
	});
}

exports.randFollow = randFollow;
exports.unfollows = unfollows