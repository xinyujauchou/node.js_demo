var hModel = require('./hello.js');
var mLodash = require('./node_modules/lodash');

/*hModel.learn();

hModel.speak();*/

var output = mLodash.without([1, 2, 3], 1);
console.log(output);