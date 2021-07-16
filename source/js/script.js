const openCardButton = document.querySelector('._open-card');
const closeCardButton = document.querySelector('._close-card');
const card = document.querySelector('.card');
const overlay = document.querySelector('.overlay');

openCardButton.addEventListener('click', () => {
  card.classList.add('showCard')
  overlay.classList.add('showOverlay')


  closeCardButton.addEventListener('click', () => {
    card.classList.remove('showCard')
    overlay.classList.remove('showOverlay')


    openCardButton.removeEventListener('click', () => {
      card.classList.add('showCard')
    })
  })
})


