var config = require('./Config');
var refresh = require('./Refresh');
var time = require('./Time')
var Copiers = refresh.refresh();
var lastTweet;
stream = config.T.stream('statuses/filter', (Copiers) );
stream.on('tweet', function (tweet) {
  //It checks if tweet it is not a RT, or mention.
  if (typeof(tweet.retweeted_status) != 'undefined' || tweet.in_reply_to_status_id != null || tweet.in_reply_to_user_id != null){
      //console.log("Im not gonna RT it cus' its not what im looking for.".red);
      //  console.log("_________________________________________________\n".bold)
  }
  else {
    if (tweet.text == lastTweet){
      console.log("Double Tweet".red + lastTweet);
    }
    else{
      if (time.difTime(40, 0)){
        time.timeLog();
        console.log("Nuevo tweet".bold.blue)
        console.log("\nUserName: ".magenta + tweet.user.name.white);
        console.log("Tweet: ".magenta + tweet.text.white);
        lastTweet = tweet.text;

        //Lets copy tweet text and tweet it in our account
        var idTweet;
        config.T.post('statuses/update' ,{status: tweet.text },  function (err, data, response) {
          if (err){
            console.log("Didnt tweet error: " + err + "\n")
          }
          else{   
            console.log("Tweeted ".green);
            console.log("_________________________________________________\n".bold)
            idTweet = data.id_str;
          }
        })
        setTimeout(function(){
          console.log(idTweet);
          if (time.difTime(240, 1)){
            config.Y.post('statuses/retweet/:id' , {id: idTweet}, function (err, data, response) {
              if (err){
                console.log("No se puede: " + err);
              }
              else{
                console.log("Retweeted too");
              }
            })
          }
        }, 4000);
      }
      else{
        //Debe de verse el mensaje de error de la funcion diftTIme en Time.js
      }
    }
  }
})
exports.stream = stream;
