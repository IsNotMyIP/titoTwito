    setInterval(function(){
        console.log("adios");
    },2)
    for(var i=0;i<10000; i++){
        console.log("Hola!");
    }









    // var json = require('./BBDD.json');
    // var data = {"follow" : []};
    // var x = json.copiers.length;
    // for (i=0; i<x; i++){
    //     data.follow.push(json.copiers[i].id);
    // }
    // console.log(data)


    // var json = require("./BBDD.json");
    // var name = "sean";
    // var id = "1231231";
    // var elemento ='{"name": "'+ name +'" , "id": "'+ id +'"}'
    // json.copiers.push(JSON.parse(elemento));
    // console.log(json);





    // var date1 = new Date(2000, 0, 1,  9, 0); // 9:00 AM
    // var date2 = new Date(); // 5:00 PM
    // date2 = date1;
    // console.log(date2);
    // console.log(date1);
    // console.log(date1.getHours()+":"+date1.getMinutes);

    // if (date2 < date1) {
    //     date2.setDate(date2.getDate() + 1);
    // }
    // var diff = date2 - date1;
    // // 28800000 milliseconds (8 hours)
    // var msec = diff;
    // var hh = Math.floor(msec / 1000 / 60 / 60);
    // msec -= hh * 1000 * 60 * 60;
    // var mm = Math.floor(msec / 1000 / 60);
    // msec -= mm * 1000 * 60;
    // var ss = Math.floor(msec / 1000);
    // msec -= ss * 1000;
    // console.log(diff);
    // // diff = 28800000 => hh = 8, mm = 0, ss = 0, msec = 