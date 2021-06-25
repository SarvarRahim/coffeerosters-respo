var elModal = document.querySelector('.modal');
var elOpenModal = document.querySelector('.js-open-modal');
var elCloseModal = document.querySelector('.js-close-modal');

elOpenModal.addEventListener('click', function () {
  elModal.classList.add('modal--active')
})

elCloseModal.addEventListener('click', function () {
  elModal.classList.remove('modal--active')
})