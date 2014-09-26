
var S = require ('./Stream');
 
process.stdin.resume()
process.stdin.on('data', function(d){
  switch(d.toString().toLowerCase()) {
    case "start\n":
      S.stream.start();
      console.log("Stream started");
      break;
    case "stop\n":
      S.stream.stop();
      console.log("Stream stopped");
      break;
    case "restart\n":
      S.stream.stop();
      S.stream.start();
      console.log("Stream restarted");
      break;
    case "tweet\n":
      
    case "help\n":
      console.log("Start: Empieza a stremear lo configurado en Stream.js y actualiza los copiers\n");
      console.log("Stop: Detiene el streaming en twitter\n");
      console.log("Restart: Reinicia el streaming de twitter, necesario si hemos anadido copiers\n");
      console.log("Tweet: Tweet whatever you want\n");
      console.log("Clean: Unfollow people who doesnt follow you back\n");
      console.log("Follow: Follow X random people 2nd grade of communication (friend of a friend)\n");
      console.log("Add: Add a new copier (name and id needed)\n");
      break;
    default:
      console.log("Comando introducido incorrecto, escribe help si necesitas ayuda.");
  }
})
