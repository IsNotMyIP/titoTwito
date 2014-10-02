var Twit = require("../../node_modules/twit/lib/twitter")

var T = new Twit({
    consumer_key:         'xxxxxxxxxxxxx'
  , consumer_secret:      'xxxxxxxxxxxxxxxxxxxxxxx'
  , access_token:         'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
  , access_token_secret:  'xxxxxxxxxxxxxxxxxxxxxxx'
})

var Y = new Twit({
    consumer_key:         'xxxxxxxxxxxxx'
  , consumer_secret:      'xxxxxxxxxxxxxxxxxx'
  , access_token:         'x-xxxxxxxxxx'
  , access_token_secret:  'xxxxxxxxxxxxxxxxxxxx'
})
exports.T = T;
exports.Y = Y;
