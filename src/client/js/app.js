const socket = io();

const enterForm = document.querySelector('#enter');

// variables
let roomName;

// handler
function enterRoomHandler(event) {
  event.preventDefault();

  const enterFormInput = enterForm.querySelector('input');

  roomName = enterFormInput.value;
}

// add event listener
enterForm.addEventListener('submit', enterRoomHandler);
