var fs = require('fs'); // <= fs is a built-in module for file system related operations
var http = require('http');

http.createServer(function (req, res) {
    fs.readFile('./html/demofile1.html', function (err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write(data)
        return res.end(); // <= return is used to end the function execution and return the result to the caller
    })
}).listen(8089);
