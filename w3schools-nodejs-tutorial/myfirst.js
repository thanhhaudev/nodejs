// consider modules to be the same as JavaScript libraries.
// A set of functions you want to include in your application.
// Can use built-in modules without any further installation.

var http = require('http'); // <= require() is a built-in function to include modules
var dt = require('./myfirstmodule'); // <= use require() to include your own module, ./ means that the module is located in the same folder as the Node.js file

http.createServer(function (req, res) { // <= create server object
    res.writeHead(200, {'Content-Type': 'text/html'}); // <= write head of response
    res.write("The date and time are currently: " + dt.myDateTime()); // <= write body of response
    res.write("<br>");
    res.write("req.url: " + req.url); // <= read the query string
    res.end(); // <= end response
}).listen(8089);
