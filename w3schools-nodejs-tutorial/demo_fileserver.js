var url = require('url');
var fs = require('fs');
var http = require('http');
var adr = 'http://localhost:8089/default.htm?year=2017&month=february';
var q = url.parse(adr, true);
var qdata = q.query; // returns an object: { year: 2017, month: 'february' }

console.log(q.host); // returns 'localhost:8089'
console.log(q.pathname); // returns '/default.htm'
console.log(q.search); // returns '?year=2017&month=february'
console.log(qdata.month); // returns 'february'

http.createServer(function (req, res) {
    var q = url.parse(req.url, true);
    var filename = "./html/" + q.pathname;
    fs.readFile(filename, function (err, data) {
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end('404 Not Found');
        }

        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(8089);
