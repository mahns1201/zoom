const socket = io();

const welcome = document.querySelector('#welcome');
const form = welcome.querySelector('form');
const room = document.querySelector('#room');

room.hidden = true;

let roomName;

// functions
function addMessage(msg) {
  const ul = room.querySelector('#ul');
  const li = document.createElement('li');
  li.innerText = `${msg}`;
  ul.appendChild(li);
}

function showRoom() {
  welcome.hidden = true;
  room.hidden = false;

  console.log(room);
  const h3 = room.querySelector('h3');
  console.log(h3, roomName);
  h3.innerText = `Room ${roomName}`;
}

function backendDone(msg) {
  console.log(`The backend says: ${msg}`);
}

function handelRoomSubmit(event) {
  event.preventDefault();

  const input = form.querySelector('input');

  socket.emit('enterRoom', input.value, showRoom);
  console.log('input.value ::::', input.value);
  roomName = input.value;
  input.value = '';
}

// sockets
socket.on('welcome', () => {
  addMessage('someone joined !');
});

// events
form.addEventListener('submit', handelRoomSubmit);
