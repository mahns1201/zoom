import http from 'http';
import SocketIO from 'socket.io';
import express from 'express';

const app = express();

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');
app.use('/public', express.static(__dirname + '/public'));
app.get('/', (_, res) => res.render('home'));
app.get('/*', (_, res) => res.redirect('/'));

const server = http.createServer(app);
const io = SocketIO(server);

io.on('connection', socket => {
  socket.on('enterRoom', (msg, done) => {
    console.log(msg);
    done('test');
  });
});

// ws code
// import WebSocket from 'ws';

// const wss = new WebSocket.Server({ server });

// const sockets = [];

// wss.on('connection', socket => {
//   sockets.push(socket);
//   socket['nickname'] = 'Anon';

//   console.log('Connected to Browser ✅');

//   socket.on('close', () => console.log('Disconnected from the Browser ❌'));

//   socket.on('message', msg => {
//     const message = JSON.parse(msg);

//     switch (message.type) {
//       case 'new_message':
//         sockets.forEach(aSocket =>
//           aSocket.send(`${socket.nickname}: ${message.payload}`),
//         );
//       case 'nickname':
//         socket['nickname'] = message.payload;
//     }
//   });
// });

// socket.io code

const handleListen = () => console.log(`Listening on http://localhost:3000`);

server.listen(3000, handleListen);
