const socket = io();

const enterForm = document.querySelector('#enter');
const nicknameForm = document.querySelector('#nickname');
const messageForm = document.querySelector('#message');

// variables
let roomName;

// client function
function showRoom() {
  enterForm.style.display = 'none';
  nicknameForm.style.display = 'block';
}

function showMessage() {
  messageForm.style.display = 'block';
}

function addMessage(msg) {
  const ul = messageForm.querySelector('ul');
  const li = document.createElement('li');

  li.innerText = `${msg}`;
  ul.appendChild(li);
}

// handler
function handleEnterRoom(event) {
  event.preventDefault();

  const enterFormInput = enterForm.querySelector('input');

  roomName = enterFormInput.value;
  socket.emit('enter-room', roomName, showRoom);
}

function handleSaveNickname(event) {
  event.preventDefault();

  const nicknameFormInput = nicknameForm.querySelector('input');

  socket.emit('save-nickname', nicknameFormInput.value, roomName, showMessage);
}

function handelSendMessage(event) {
  event.preventDefault();

  const messageFormInput = messageForm.querySelector('input');

  socket.emit('send-message', messageFormInput.value, roomName, addMessage);
  messageFormInput.value = '';
}

// socket client api
socket.on('announce-message', (msg) => {
  console.log('some one joined !');
  addMessage(`[Announce] ${msg}`);
});

socket.on('new-message', (msg) => {
  addMessage(msg);
});

// add event listener
enterForm.addEventListener('submit', handleEnterRoom);
nicknameForm.addEventListener('submit', handleSaveNickname);
messageForm.addEventListener('submit', handelSendMessage);
