const openCardButton = document.querySelector('._open-card');
const closeCardButton = document.querySelector('._close-card');
const card = document.querySelector('.card');

openCardButton.addEventListener('click', () => {
  card.classList.add('showCard')

  closeCardButton.addEventListener('click', () => {
    card.classList.remove('showCard')

    openCardButton.removeEventListener('click', () => {
      card.classList.add('showCard')
    })
  })
})


