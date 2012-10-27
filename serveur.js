var app = require('express')()
  , server = require('http').createServer(app)
  , io = require('socket.io').listen(server);

server.listen(8081);

app.get('/', function handler(req, res) {
  res.sendfile(__dirname + '/c.html');
});

io.sockets.on('connection', function(socket) {
  // Un client se connecte
  console.log('Connexion');

  socket.on('saisie', function(data) {
    // Message reçu du client
    // On le ré-expédie vers le client
    socket.emit('info', { message: '>>ECHO : ' + data });
  });
});
