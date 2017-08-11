var moment = require('moment');
var tz = require('moment-timezone');

console.log(`Default constructor: ${moment('2017-01-01T00:00Z').format()}`);
console.log(`UTC constructor: ${moment.utc('2017-01-01T00:00Z').format()}`);
console.log(`TZ Constructor: ${moment.tz('2017-01-01T00:00Z', 'Europe/Berlin').format()}`);


//Default constructor: 2016-12-31T16:00:00-08:00
//UTC constructor: 2017-01-01T00:00:00Z
//TZ Constructor: 2017-01-01T01:00:00+01:00
