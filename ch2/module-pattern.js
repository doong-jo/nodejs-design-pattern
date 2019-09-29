// looger.js
module.exports = message => {
    console.log(`info: ${message}`);
};

// 또는 생성자를 return 할 수도 있다
/*
function Logger(name) {
    this.name = name;
}

Logger.prototype.log = function(msg) {
    console.log(`${msg}`);
}
*/

module.exports.verbose = message => {
    console.log(`verbose: ${message}`);
};

// main.js
const looger = require("./logger");
logger("this is logger namespace");
logger.verbose("This is verbose of namespace looger.");
