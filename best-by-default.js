var request = require('request');

var options = {
  url: 'https://api.github.com/repos/timrwood/moment',
  headers: {
    'User-Agent': 'request'
  }
};
request(options, (err, resp, body) => {
    console.log(resp.request.uri.href);
    console.log(resp.body)
});