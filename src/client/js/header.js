const backButton = document.querySelector('.button__back');

function handleBackButton() {
  location.href = '/';
}

backButton.addEventListener('click', handleBackButton);
