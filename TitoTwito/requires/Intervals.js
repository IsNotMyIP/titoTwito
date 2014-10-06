var Earn = require('./Earn');
var idAF;
var idAU;

var autoFollowOn = function(time){
	var ms_time = time * 60 * 1000
	if(time>15){
	    idAF = setInterval(function(){
	    	Earn.randFollow(14);
    	},ms_time);
	}	
	else{
		console.log("Time should be greater than 15")
	}
};

var autoUnfollowOn = function(){
	idAU = setInterval(function(){
		Earn.unfollows(100);
	}, 21600000); //6hours ~= 400 unfollows/day
};

var harvest = function(){
	autoUnfollowOn();
	autoFollowOn(36);
	console.log("Harvesting...")
}
var stopAF = function(){
	if(idAF == 'undefined'){
		console.log("Automatic Follow is not running");
	}
	else{
		clearTimeout(idAF);
		idAF = 'undefined';
	}
};

var stopAU = function(){
	if(idAU == 'undefined'){
		console.log("Automatic Unfollow is not running");
	}
	else{
		clearTimeout(idAU);
		idAU = 'undefined';
	}
};

var stopHarvesting = function(){
	stopAU();
	stopAF();
	console.log("Stop Harvesting");
}

exports.harvest = harvest;
exports.stopHarvesting = stopHarvesting;