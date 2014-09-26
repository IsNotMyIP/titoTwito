var fs = require("fs");
var refresh = function(){
	var json = require('./BBDD.json');
	var data = {"follow" : []};
	var x = json.copiers.length;
	for (i=0; i<x; i++){
    	data.follow.push(json.copiers[i].id);
	}
	// data = JSON.stringify(data)
	return data;
}
var escribe = function(datos){
	fs.writeFile("BBDD.json", datos, function(err){
		if (err){
			console.log(err);
		}
		else{
			console.log("Se ha anadido el usuario  a tu lista de copiers.");
		}
	})
}

exports.refresh= refresh;