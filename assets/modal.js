const sendButton = document.querySelector('.button')
const modal = document.querySelector('.modal')

sendButton.addEventListener('click', modalOpen)
function modalOpen() {
  modal.setAttribute('id', 'active')
}

document.addEventListener('keydown', modalClose)

function modalClose() {
  const itsActive = modal.getAttribute('id') === 'active'
  if (itsActive) {
    const itsEscKey = event.key === 'Escape'
    if (itsEscKey) {
      modal.removeAttribute('id', 'active')
    }
  }
}
