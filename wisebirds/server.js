var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res) {
	res.sendfile(__dirname + '/views/index.html');
});
app.get('/notice', function(req, res) {
	res.sendfile(__dirname + '/views/notice.html');
});

io.on('connection', function(socket) {
	socket.on('notice message', function(data) {
		if(data.password == "adwitt1!"){
            delete data["password"];
			io.emit('notice message', data);
		}
	});
});

http.listen(58080);