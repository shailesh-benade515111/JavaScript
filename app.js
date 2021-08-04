var fs = require('fs');
fs.readFile('text.txt', function(err, data) {
    if (err) {
        console.log(err);
    }
    setTimeout(() => {
        console.log("Display after 2 second of time");
        console.log("Server responded after 2 min of time");
        console.log(data);
    }, 5000);
});

console.log("Server starts here but waits for 5 miliseconds")