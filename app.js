var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Today is a great day to learn git.\n');
}).listen(process.env.PORT, process.env.IP);
>>>>>>> 117fdee710068804d06f35a1ebb45f0f6cb01901
