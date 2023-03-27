const {readFileSync, writeFileSync} = require('fs')
// equals const fs = require('fs')
// fs.readFileSync

const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

console.log(first);
console.log(second);

writeFileSync('./content/result-sync.txt', `Here is the result: ${first}, ${second}`, {flag: 'a'})
// if file doesn't exist node will create
// if file exists, node will overwrite everything
// third arg: {flag: 'a'} will append second arg to the existing file