var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Today is a great day.\n');
}).listen(process.env.PORT, process.env.IP);
