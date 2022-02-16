const socket = io();

const welcome = document.querySelector('#welcome');
const form = document.querySelector('form');

function backendDone(msg) {
  console.log(`The backend says: ${msg}`);
}

function handelRoomSubmit(event) {
  event.preventDefault();

  const input = form.querySelector('input');

  socket.emit('enterRoom', { payload: input.value }, backendDone);
  input.value = '';
}

form.addEventListener('submit', handelRoomSubmit);
