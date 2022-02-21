// import 'regenerator-runtime';
import '@/scss/styles.scss';

const join = document.querySelector('#join');

function handleJoinRoom(event) {
  event.preventDefault();

  const joinRoomInput = join.querySelector('input');

  const a = document.createElement('a');
  a.href = `/room/${joinRoomInput.value}`;
  a.click();
}

join.addEventListener('submit', handleJoinRoom);
