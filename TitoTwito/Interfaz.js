var S = require ('./requires/Stream');
var Say = require ('./requires/Say');
var Add = require ('./requires/Add');
var Show = require ('./requires/Show');
var Time = require('./requires/Time');
var colors = require('colors');
process.stdin.resume()
process.stdin.on('data', function(d){
  switch(d.toString().toLowerCase()) {
    case "start\n":
      S.stream.start();
      Time.timeLog();
      console.log("   Streaming started".green);
      break;
    case "stop\n":
      S.stream.stop();
      Time.timeLog();
      console.log("Stream stopped".green);
      break;
    case "restart\n":
      S.stream.stop();
      S.stream.start();
      Time.timeLog();
      console.log("Stream restarted and copiers refreshed".green);
      break;
    case "show\n":
      Time.timeLog();
      Show.readme();
      break;
    case "help\n":
      Time.timeLog();
      console.log("Start:".cyan + " Empieza a stremear lo configurado en Stream.js y actualiza los copiers\n".white);
      console.log("Stop:".cyan + " Detiene el streaming en twitter\n".white);
      console.log("Restart:".cyan + " Reinicia el streaming de twitter, necesario si hemos anadido copiers\n".white);
      console.log("Tweet <whatever you want to tweet>:".cyan + " Tweet whatever you want\n".white);
      console.log("Follow:".cyan + " Follow X random people 2nd grade of communication (friend of a friend)\n".white);
      console.log("Clean:".cyan +" Unfollow people who doesnt follow you back\n".white);
      console.log("Add: ".cyan + "Add a new copier (name and id needed)\n".white);
      console.log("Show:".cyan + " Show copiers \n".white);
      break;
    default:
      if (d.toString().slice(0,5).toLowerCase() == "tweet"){
        Time.timeLog();
        Say.probando(d.toString().slice(6));
      }
      else if(d.toString().slice(0,3) == "add"){
        var input = d.toString().slice(4);
        var name = input.substr(0,input.indexOf(' '));
        var id = input.substr(input.indexOf(' ')+1);
        Time.timeLog();
        Add.newCopier(name, id);
      }
      else{
        Time.timeLog();
        console.log("Comando introducido incorrecto, escribe help si necesitas ayuda.".red);
        console.log(d.toString().slice(0,4).toLowerCase());
      }
  }
})
