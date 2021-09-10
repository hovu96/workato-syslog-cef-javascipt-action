var input = require('minimist')(process.argv.slice(2));
console.log(input);

const action = require("./index.js").main;
function panic(error) {
    console.error(error);
    process.exit(1);
}
action(input).catch(panic).finally(clearInterval.bind(null, setInterval(a => a, 1E9)));