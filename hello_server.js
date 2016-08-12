'use strict';

var http = require('http'); //导入Http模块
var url = require('url');
var path = require('path');
var fs = require('fs');

var rootDir = path.resolve('.');

console.log("rootDir is:" + rootDir);

var server = http.createServer(
	function(request, response){
		console.log("receive request:" + request.url);
		var filePath = url.parse(request.url).path;
		console.log("filePath: "+filePath);

		if(filePath.length <= 1){
			response.writeHead(200, {'Content-Type' : 'text/html'});
			response.end('<a>file not found!</a>');
		}else{
			filePath = path.join(rootDir, filePath);
			var readStream = fs.createReadStream(filePath);
			readStream.pipe(response);
		}
	}
);

server.listen(8080);
console.log("Node Server hello is Running on Port:8080");