import http from 'http';
import SocketIO from 'socket.io';
import express from 'express';

const app = express();

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');
app.use('/public', express.static('public'));
app.get('/', (_, res) => res.render('home'));
app.get('/404', (_, res) => res.render('NotFound'));
app.get('/*', (_, res) => res.redirect('/404'));

const server = http.createServer(app);
const io = SocketIO(server);

io.on('connection', (socket) => {
  socket['nickname'] = 'Anonymous';

  socket.onAny((event) => {
    console.log(`Socket Event: ${event}`);
  });

  socket.on('enter-room', (roomName, showRoom) => {
    socket.join(roomName);
    showRoom();
  });

  socket.on('save-nickname', (nickname, roomName, showMessage) => {
    socket.nickname = nickname;
    showMessage();
    socket
      .to(roomName)
      .emit('welcome-message', `${socket.nickname} has joined.`);
  });

  socket.on('send-message', (message, addMessage) => {
    const msg = `${socket.nickname}: ${message}`;

    addMessage(msg);
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
