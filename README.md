#TitoTwito
It is a bot for twitter coded on **Javascript** that earn followers following different strategies.

At first you will need an account for earning followers and other account that will RT some tweet.

For coding it I have used [twit](https://github.com/ttezel/twit) library, which I recommend for making projects on twitter.

#Installing:
```
npm install 
```

Set your tokens on **requires/Config.js** where **T** is the bot for earning followers and **Y** is the account which is going to RT your bot's tweets.

```javascript
var Twit = require("../../node_modules/twit/lib/twitter")]

//Accrount of your bot
var T = new Twit({
    consumer_key:         'x'
  , consumer_secret:      'x'
  , access_token:         'x'
  , access_token_secret:  'x'
})

// Account that is going to RT your bot's tweets.
var Y = new Twit({
    consumer_key:         'x'
  , consumer_secret:      'x'
  , access_token:         'x'
  , access_token_secret:  'x'
})
exports.T = T;
exports.Y = Y;

```

#Usage:
Just 
```
nodejs Interfaz.js
```
Then your bot is running but now it's just tracking my account :P
If you type `help` you will have a list of commands you could use and what they do:

* `Start:` It makes your bot start tracking and tweeting.
* `Stop:` Stop tracking tweets and tweeting.
* `Restart:` Restarts bot.
* `Tweet <add tweet>:` Tweets something you want to tweet, max 140 char.
* `Follow <X>:` Follow X random people of 2nd grade, friends of your friends, max 15 per 15 minutes.
* `Clean <X>:` Unfollow X random people that are not following you back.
* `add <name> <id>:` Add new twitter account that you want to track, you have to include name and id, separated by comma, here you can find the account id. [getTwitterID](http://gettwitterid.com/)
* `Show:` Show the json of accounts you are tracking.

## License

(The MIT License)

Copyright (c) by Sean Hardcastle <SirSeanHD@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

