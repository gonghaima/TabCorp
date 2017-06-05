var readline = require('readline');
var settings = require('./settings');
var Tabcorp = require('./library/tabcorp');
var tabEvent = require('./library/event')();

var tc = new Tabcorp(settings.testData); //pass the sample input list;
tc._winList = [2, 3, 1];               //Convenient test
var arr = [];

// add listen event
tabEvent.listen('win', function (data) {
    console.log(data);
});
tabEvent.listen('place', function (data) {
    console.log(data);
});
tabEvent.listen('exacta', function (data) {
    console.log(data);
});
tabEvent.one('result', function (result) {
    console.log(result);
});

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});
rl.prompt();
rl.on('line', function (line) {
    arr.push(line);
    rl.prompt();
});
setTimeout(function () {
    rl.pause();    
   
    tabEvent.trigger('win',tc.generateWin());
    tabEvent.trigger('place',tc.generatePlace().join('\n'));  
    tabEvent.trigger('exacta',tc.generateExacta()); 
}, settings.timeout);