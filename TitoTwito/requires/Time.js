var fs = require("fs");
var difTime = function(min, type){
    var json = require("./BBDD");
    between = (min * 60 * 1000);
    if( type == 0){
        var ms_lastEvent = parseInt(json.Time[0].LastTweet)
    }
    else if (type == 1){
    var ms_lastEvent = parseInt(json.Time[0].LastRT)
    }
    //console.log(typeof(parseInt(json.Time[0].LastTweet)));
    var lastEvent = new Date(ms_lastEvent);
    var dateNow = new Date();
    if(dateNow.getTime() - lastEvent.getTime() > between){
        //Aqui debes escribir la nueva fecha en el bbdd.json, y donde en funcion del type.
        if (type == 0){
            json.Time[0].LastTweet = dateNow.getTime();
            console.log(dateNow.getHours());
            console.log(dateNow.getMinutes());
        }
        else if (type ==1){
            json.Time[0].LastRT = dateNow.getTime();
        }
        fs.writeFile("BBDD.json", JSON.stringify(json, null, 4), function(err){
            if(!err){
                console.log()
            }
        })
    return true;
    }
    else{
        console.log("No han pasado " + min + " minuto");
    return false;
    }
}
exports.difTime = difTime;