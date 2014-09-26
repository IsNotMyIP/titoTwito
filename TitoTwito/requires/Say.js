var config = require('./Config');
var probando = function(loquesea){
	 if (loquesea.length >140){
	 	console.log("Tweet longer than 140 char");
	 }
	 else{
	 	config.T.post('statuses/update' ,{status: loquesea },  function (err, data, response) {
      if (err){
       	console.log("Didnt tweet error: " + err + "\n")
    	}     
      else{
      	console.log("Tweeted \n \n \n")
    	}    
    })
  }
 }
exports.probando = probando;