// consider modules to be the same as JavaScript libraries.
// A set of functions you want to include in your application.
// Can use built-in modules without any further installation.

var http = require('http'); // <= require() is a built-in function to include modules
var dt = require('./myfirstmodule'); // <= use require() to include your own module, ./ means that the module is located in the same folder as the Node.js file

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("The date and time are currently: " + dt.myDateTime());
    res.end();
}).listen(8089);