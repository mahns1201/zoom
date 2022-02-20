import server from './server';

import SocketIO from 'socket.io';

const io = SocketIO(server);

const DEFAULT_NICKNAME = 'Anonymous';

io.on('connection', (socket) => {
  socket.nickname = DEFAULT_NICKNAME;

  socket.on('join_room', (roomName, joinRoom) => {
    socket.join(roomName);
    socket.to(roomName).emit('welcome');
    joinRoom();
  });

  // socket.on('offer', (offer, roomName) => {
  //   socket.to(roomName).emit('offer', offer);
  // });

  // socket.on('answer', (answer, roomName) => {
  //   socket.to(roomName).emit('answer', answer);
  // });

  // socket.on('ice', (ice, roomName) => {
  //   socket.to(roomName).emit('ice', ice);
  // });
});

export default io;
