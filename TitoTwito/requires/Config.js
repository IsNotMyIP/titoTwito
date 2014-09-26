var Twit = require('../node_modules/twit/lib/twitter')

var T = new Twit({
    consumer_key:         'O1yNhBv9zB2sT9ml7llZgXwiy'
  , consumer_secret:      'wt3gvbussUqLViiaCnud9vRG3MYXMN2pQGrJWEeu1sByxihTm9'
  , access_token:         '2516884885-aBijvtWdhpEezg6TEwHUg2zPdwImGQ8qxgFWFtm'
  , access_token_secret:  'H1UUR9ITCpwGNZapOwd9nX6q4QRjhPMfqUswAFAK8eaNu'
})

var Y = new Twit({
	consumer_key:         'llCkbQsmO78TlBbGvxisQrhWC'
  , consumer_secret:      'lJFlZDeTNnBlnQj310eovME7WvZdjZrNGCbT8YVuZu25kOFiYN'
  , access_token:         '185229570-fB9ztERtTH2LSVe9glIIG3s4bjBLAKM21Apt3jNZ'
  , access_token_secret:  'nqVmn0kgwJcuFrwI1CdPs9iqdiNzEFBIUCitlNQVHrPhR'
})
exports.T = T;
exports.Y = Y;
