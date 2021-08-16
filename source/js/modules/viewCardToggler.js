function viewCardToggler() {
  const openCardButton = document.querySelector('._open-card');
  const closeCardButton = document.querySelector('._close-card');
  const card = document.querySelector('.card');
  const overlay = document.querySelector('.overlay');

  function showCard() {
    card.classList.add('showCard')
    overlay.classList.add('showOverlay')
  }

  function hiddenCard() {
    card.classList.remove('showCard')
    overlay.classList.remove('showOverlay')
  }

  openCardButton.addEventListener('click', showCard)
  closeCardButton.addEventListener('click', hiddenCard)
}

export { viewCardToggler }
