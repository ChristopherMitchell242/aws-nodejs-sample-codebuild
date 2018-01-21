/*************Test******************/
var test = require('unit.js');
var str = 'Hello, world!';

test.string(str).startsWith('Hel');

if (test.string(str).startsWith('Hello')) {
  console.log('Passed');
}
/***********************************/
