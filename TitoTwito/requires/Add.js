var fs = require ("fs");
var writeInfo = function(name,id){
	var json = require('./BBDD.json');
	id = id.slice(0,id.length-1);
    var elemento ={"name": name , "id": id }
    console.log(typeof(elemento));
    console.log(elemento);
    json.copiers.push(elemento);
    console.log(json.copiers);

	//Version antigua de WriteInfo, intentando incluir una nueva, posiblemente menos eficiente.
	//Recordar incluir parametros strng name id
	// id = id.slice(0,id.length-1);
	// var abierto = (string.slice(0, (string.length -3)) + ",\n\t{\n\t\t\"name\": " + '"'+ name +'"'+ ",\n\t\t\"id\": " + '"'+  id + '"' + '\n\t}\n]\n');
	console.log(json);
	fs.writeFile("./requires/BBDD.json", JSON.stringify(json, null, 4) , function(err){
		if (err){
			console.log(err);
		}
		else{
			console.log("Se ha anadido el usuario " + name + " a tu lista de copiers.");
		}
	})
}

var newCopier = function(name, id){
	fs.exists ("./requires/BBDD.json", function(exists){
		if (exists){
			fs.readFile("./requires/BBDD.json", 'utf8', function(err, data){
				if (err){
					console.log("Error al readFile: ");
					console.log(err);
				}
				else {
					writeInfo(name, id);
					// console.log("writeing");
				}
			})
		}
		else{
			console.log("No existe el fichero");
		}
	})
}

exports.newCopier = newCopier;
