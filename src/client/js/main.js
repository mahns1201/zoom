import 'regenerator-runtime';
import '../scss/styles.scss';

const socket = io();

const join = document.querySelector('#join');

// client function'
function joinRoom() {
  const a = document.createElement('a');
  a.href = `/room/${roomName}`;
  a.click();
}

// event handler
function handleJoinRoom(event) {
  event.preventDefault();

  const enterInput = join.querySelector('input');
  roomName = enterInput.value;

  socket.emit('join_room', roomName, joinRoom);
}

// add eventListener
join.addEventListener('submit', handleJoinRoom);

// socket handler
// socket.on('welcome', async () => {
//   const offer = await myPeerConnection.createOffer();

//   myPeerConnection.setLocalDescription(offer);
//   console.log('sent the offer');
//   socket.emit('offer', offer, roomName);
// });
