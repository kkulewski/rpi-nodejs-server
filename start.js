var http = require('http');
var server - http.createServer(function (request, response)
{
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.end("Node.js server is running!\n");
}
server.listen(3333, "0.0.0.0");
console.log("Node.js server is running...")