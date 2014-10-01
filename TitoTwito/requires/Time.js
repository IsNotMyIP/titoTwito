var fs = require("fs");
var colors = require("colors")
var timeLog = function(){
    var log = new Date();
    process.stdout.write(("[" + log.getHours() + ":" + log.getMinutes() + "]").blue.bold);
}

var difTime = function(min, type){
    var json = require("./BBDD");
    var between = (min * 60 * 1000);
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
        else if (type == 1){
            console.log(1)
            json.Time[0].LastRT = dateNow.getTime();
        }
        fs.writeFile("./requires/BBDD.json", JSON.stringify(json, null, 4), function(err){
            if(!err){
                console.log()
            }
            else{
                console.log("EL Ehcribir no va");
            }
        })
    return true;
    }
    else{
        var tempo = (min*60*1000 - (dateNow.getTime() - lastEvent.getTime())) / 1000*60
        console.log("No han pasado " + tempo + " minuto");
    return false;
    }
}
exports.timeLog = timeLog;
exports.difTime = difTime;